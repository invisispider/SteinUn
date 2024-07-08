<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import useCrossword from "@/composables/Crosswords/integralcrossword";
document.title = "Integral Crossword Puzzle";
const across = ref(useCrossword.across)
const down = ref(useCrossword.down)
const collapseAcross = ref(false);
const collapseDown = ref(true);
const rowNum = 11;
const colNum = 11;
const cheating = ref(false);
const toggle = (direc: string) => {
  if (direc == "across") {
    collapseAcross.value = !collapseAcross.value;
  } else {
    collapseDown.value = !collapseDown.value;
  }
};
type pRef = [number, number]
const enumerateCells = (pRef: pRef) => 11 * (pRef[0] - 1) + pRef[1];
const getElement = (pRef: pRef) => {
  var refCell = document.querySelector(
    `tr[row='${pRef[0]}']>td[col='${pRef[1]}']`
	) as HTMLElement | null;

	return refCell;
};
const drawWord = (pRef: pRef, chars: string, direc: string) => {
  let i = 0;
	while (i < chars.length) {
		const selectedEl = (direc==="across")
			? getElement([pRef[0], pRef[1]+i])
			: getElement([pRef[0] + i, pRef[1]]);
		if (selectedEl) {
			const input = selectedEl.lastElementChild as HTMLInputElement | null;	
			if (input) {
				input.value = chars.charAt(i)
			}
		}
		i++;
	}
};
const renderChars = () => {
  across.value.forEach((datum) => drawWord(datum.pos as pRef, datum.answer, "across"));
  down.value.forEach((datum) => drawWord(datum.pos as pRef, datum.answer, "down"));
};
const answerCode = ref('');
onMounted(() => {
	// prepare for answer check
	across.value.forEach((ans)=> {
		answerCode.value += ans.answer;
	})
	down.value.forEach((ans)=> {
		answerCode.value += ans.answer;
	})

  const renderMatrix = () => {
    const m: [string[]] = [['','']];
    for (let i = 0; i < 11; i++) {
      m[i] = [];
      for (let j = 0; j < 11; j++) {
        m[i][j] = '';
      }
    }
    return m;
  };
  const assignMatrix = (mat: [string[]]) => {
    across.value.forEach((acr) => {
      let ans = acr.answer;
      let pos = acr.pos as pRef;
      for (let k = 0; k < ans.length; k++) {
        mat[pos[0] - 1][pos[1] + k - 1] = ans[k];
      }
    });
    down.value.forEach((dow) => {
      let ans = dow.answer;
      let pos = dow.pos;
      for (let k = 0; k < ans.length; k++) {
        mat[pos[0] - 1 + k][pos[1] - 1] = ans[k];
      }
    });
    return mat;
  };
  let matrix = renderMatrix();
  matrix = assignMatrix(matrix);
	// console.log(matrix)
  let startMap = across.value
    .map((index) => index.pos)
    .concat(down.value.map((index) => index.pos));
  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      let pair: pRef = [i + 1, j + 1];
      if (!cell) {
        let el = getElement(pair);
        if (el) {
          while (el.lastChild) {
            el.removeChild(el.lastChild);
          }
        }
      } else {
        startMap.forEach((val) => {
          if (val[0] == i + 1 && val[1] == j + 1) {
            let el = getElement(pair);
            let newDiv = document.createElement("div");
            newDiv.className = "head-label";
            newDiv.innerHTML = enumerateCells(pair).toString();
            el?.prepend(newDiv);
          }
        });
      }
    });
  });
});
const selectMe = async (pRef: pRef) => {
  if (typeof pRef==='object') {
    let el = getElement(pRef) as Element;
		let child = el?.lastChild as HTMLInputElement;
		await nextTick(() => child?.focus());
  }
};
const resetInputs = (warn: boolean) => {
  if (warn) {
    if (confirm("Really want to CLEAR all your progresst?")) {
      let inputs = document.getElementsByClassName("clearme") as HTMLCollectionOf<HTMLInputElement>;
			Array.from(inputs).forEach((input) => (input.value = ""))
    }
  } else {
    let inputs = document.getElementsByClassName("clearme") as HTMLCollectionOf<HTMLInputElement>;
		Array.from(inputs).forEach((input) => (input.value = ""))
  }
};
const clueMe = () => {
  if (
    confirm(
      "This will erase your porgoresst! Are you REALLY sure? If you are, you can keep mashing it btw."
    )
  ) {
	cheating.value=true
    setTimeout(() => {
      resetInputs(false);
	  cheating.value=false
    }, 3000);
    renderChars();
  }
};
const infoMe = () => {
  var instructions = "";
  instructions +=
    "THE RULES:\n";
  instructions +=
    "- Couch Icons jump to answer squares.\n- Click or use arrow keys to move.\n";
  instructions +=
    "- Clue Button displays answers and resets.\n";
  instructions +=
	"- Solve Button checks your answers.\n- Reset Button clears the board.\n";
  instructions +=
	"- New games may become available as you progresst."
  alert(instructions);
};
// function isFocusable(element: HTMLElement): element is HTMLInputElement {
//     return element instanceof HTMLInputElement && typeof (element as HTMLInputElement).focus === 'function';
// }
const moveMe = (keyPress: string, row: number, col: number) => {
	let el = getElement([row, col]) as Element;
	let child = el?.lastChild as HTMLInputElement;
	if (child instanceof HTMLInputElement && typeof (child as HTMLInputElement).focus === 'function') {
		child.focus();
	} else if (keyPress === "left") {
		if (col>1) moveMe('left', row, col-1);
	} else if (keyPress === "right") {
		if (col<11) moveMe('right', row, col+1);
	} else if (keyPress === "down") {
		if (row<11) moveMe('down', row+1, col);
	} else if (keyPress === "up") {
		if (row>1) moveMe('up', row-1, col);	
	}
};

const checkAnswer = () => {
	if (cheating.value) {
		return false
	}
	const checkAcross = () => {
		let tentativeSuccess = true
		across.value.forEach((entry)=>{
			let ans = entry.answer
			let pos = entry.pos
			for (let i=0; i<ans.length; i++) {
				let testCell = document.querySelector(`#puzzle input[name='${pos[0]}x${pos[1]+i}']`)
				if (testCell.value.toUpperCase()!=ans[i]) {
					tentativeSuccess = false
					break
				}
			}
		})
		down.value.forEach((entry)=>{
			let ans = entry.answer
			let pos = entry.pos
			for (let i=0; i<ans.length; i++) {
				let testCell = document.querySelector(`#puzzle input[name='${pos[0]+i}x${pos[1]}']`)
				if (testCell.value.toUpperCase()!=ans[i]) {
					tentativeSuccess = false
					break
				}
			}
		})
		return tentativeSuccess
	}
	let test = checkAcross();
	if (test) {
		alert('My goodness you have completed all ppporgus! Congratulation. Password: "LAVENDAR"');
	} else {
		alert('Hmm. Not quite.')
	}
}
</script>
<template>
    <div id="puzzle-body">
	  	<div class="buttons">
			<h1 class="main-title">Integral Crossword</h1>
			<span id="solve" @click="infoMe">
				<i class="material-icons">quiz</i>
				info
			</span>
			<span id="other" @click="clueMe"> 
				<i class="material-icons">visibility</i>
				clue
			</span>
			<span id="check" @click="checkAnswer">
				<i class="material-icons">mood</i>
				solve
			</span>
			<span id="clear" @click="resetInputs(true)">
				<i
				class="material-icons"
				>delete_outline</i
				>
				reset
			</span>
		</div>
		<div class="crossword-body">
			<div id="puzzle-container">
				<table id="puzzle">
				<!-- <tbody :ref="(el) => (tbodyRows = el)"> -->
				<tbody>
					<tr v-for="(row, row_ind) in rowNum" :row="row" :key="row_ind">
						<td v-for="(col, col_ind) in colNum" :col="col" :key="col_ind">
							<input
								class="clearme"
								@keyup.left="moveMe('left', row, col - 1)"
								@keyup.right="moveMe('right', row, col + 1)"
								@keyup.down="moveMe('down', row + 1, col)"
								@keyup.up="moveMe('up', row - 1, col)"
								maxlength="1"
								type="text"
								tabindex="-1"
								:name="`${row}x${col}`"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="puzzle-clues">
			<div id="acrossDiv">
				<h2 @click="toggle('across')">Across</h2>
				<transition-group name="grow" tag="div" id="across">
					<div class="couch li-div"
						v-for="ac in across"
						v-show="!collapseAcross"
						tabindex="1"
						:key="ac.answer"
					>
						<span class="material-icons" @click="selectMe(ac.pos as pRef)">chair</span>
						{{ enumerateCells(ac.pos as pRef) }}. {{ ac.question }}
				</div>
				</transition-group>
			</div>
			<div id="downDiv">
				<h2 @click="toggle('down')">Down</h2>
				<transition-group name="grow" tag="div" id="down">
					<div class="couch li-div"
						v-for="dow in down"
						v-show="!collapseDown"
						tabindex="1"
						:key="dow.answer"
					>
						<span class="material-icons" @click="selectMe(dow.pos as pRef)">chair</span>
						{{ enumerateCells(dow.pos as pRef) }}: {{ dow.question }}
					</div>
				</transition-group>
			</div>
		</div>
	</div>
  </div>
</template>
<style lang="sass">
#puzzle-body
	margin-block: 2em
		// font-size: 1rem
		// padding: 0.3rem
		// margin: 2px
		// width: 100vw
		// margin-block: 0.4em
	.buttons
		// position: fixed
		margin-block: 0.6em
		bottom: 0
		min-width: 300px
		max-width: 100vw
		display: flex
		flex-direction: row
		justify-content: space-around
		flex-wrap: wrap
		span
			cursor: pointer
			display: flex
			justify-content: center
			align-items: center
			padding: 0.3em 1em
			border-radius: 5px
			height: min-content
			align-self: center
			i
				margin-right: 3px	
	.main-title
		text-align: center
		margin-block: 0.2em
		@media screen and (max-width: 650px)
			display: block
			width: 100vw
	.crossword-body
		font: 62.5%/1.3em Helvetica, sans-serif
	#puzzle-clues
		max-width: max-content
		// margin: auto
		display: inline-block
		#acrossDiv, #downDiv
			margin: 5px
		h2
			padding: 0.4em 1em
			border-radius: 5px	
			margin: auto
			align-self: center
			text-align: center
			max-width: max-content
			font-size: 1.5rem
			cursor: pointer
		#across, #down
			height: max-content
			padding: 4px
			display: flex
			flex-direction: column
			// align-content: flex-start
			// justify-content: start
		.li-div
			border-radius: 4px
			justify-content: start
			align-items: center
			font-size: 1.5em
			// margin: 0 0 0.1em 0
			line-height: 1.6em
			list-style-type: none
			text-align: left
		span
			cursor: pointer
			margin-right: 0.2em
	#puzzle-container
		// margin: auto
		min-width: 54%
		padding: 1px
		margin-inline: auto
		max-width: 400px
	table#puzzle
		border-collapse: collapse
		border-spacing: 0
		tr
			width: 100%
		td
			width: 5em
			height: 3em
			border: 1px solid #999
			padding: 0
			margin: 0
			position: relative
		input
			width: 100%
			height: 100%
			padding: 0em
			border: none
			text-align: center
			font-size: 3em
			text-transform: uppercase
		span
			font-size: 0.8em
			top: -1px
			left: 1px
			display: block
	.couch
		display: flex
		justify-content: center
		// padding-inline: 4px

	
	.head-label
		height: 1em
		z-index: 1
		font-size: 1em
		position: absolute
	@media screen and (min-width: 700px)
		.crossword-body
			display: grid
			grid-template-columns: max-content max-content
			#puzzle-clues, #puzzle-container
				justify-self: center
	@media screen and (min-width: 1000px)
		.crossword-body
			#puzzle-clues
				display: flex

</style>
