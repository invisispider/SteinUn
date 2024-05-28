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
            newDiv.style.height = "1em";
            newDiv.style.zIndex = "1";
            newDiv.style.fontSize = "1em";
            newDiv.style.position = "absolute";
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
    "Instructs:\nClick couch to jump to square, then click or use arrow keys to move.\n";
  instructions +=
    "Clue Button will briefly display answers and reset board.\nGet good.\n";
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
  } 
	// else if (keyPress === "right") {
  //   let el = getElement([row, col]) as Element;
  //   let child = el?.lastChild as HTMLInputElement;
	// 	el.lastChild.focus();
	// child.focus();
  // } else if (keyPress === "down") {
  //   let el = getElement([row, col]) as Element;
  //   let child = el?.lastChild as HTMLInputElement;
	// 	el.lastChild.focus();
	// child.focus();
  // } else if (keyPress === "up") {
  //   let el = getElement([row, col]) as Element;
  //   let child = el?.lastChild as HTMLInputElement;
	// 	el.lastChild.focus();
	// child.focus();
  // }
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
					console.info(testCell.value, ans, i, ans[i])
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
					console.info(testCell.value, ans, i, ans[i])
					tentativeSuccess = false
					break
				}
			}
		})
		return tentativeSuccess
	}
	let test = checkAcross();
	if (test) {
		alert('my god you made all the ppporgus!');
	} else {
		alert('Hmm. Not quite.')
	}
}
// so, in the render, check if querySelectorAll("input[value='']"), setTimeout, change values,
// then instead of refresh all function, use those stored input refs to clear.
</script>
<template>
  <div id="puzzle-body">
    <div class="main-title">
      <h1>Integral Crossword</h1>
    </div>
		<div class="crossword-body">
			<div id="puzzle-wrapper">
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
					<transition-group name="grow" tag="ul" id="across">
						<li class="couch"
							v-for="ac in across"
							v-show="!collapseAcross"
							tabindex="1"
							:key="ac.answer"
						>
							<span class="material-icons" @click="selectMe(ac.pos as pRef)">chair</span>
							{{ enumerateCells(ac.pos as pRef) }}. {{ ac.question }}
						</li>
					</transition-group>
				</div>
				<div id="downDiv">
					<h2 @click="toggle('down')">Down</h2>
					<transition-group name="grow" tag="ul" id="down">
						<li class="couch"
							v-for="dow in down"
							v-show="!collapseDown"
							tabindex="1"
							:key="dow.answer"
						>
							<span class="material-icons" @click="selectMe(dow.pos as pRef)">chair</span>
							{{ enumerateCells(dow.pos as pRef) }}: {{ dow.question }}
						</li>
					</transition-group>
				</div>
				<div class="buttons">
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
						</span
					>
				</div>
			</div>
		</div>
  </div>
</template>
<style scoped lang="sass">
$thalmon: rgb(249, 194, 159)
$orange-hover: #666
$span-box-shadow: 0 0 5px 1px #53e6cb
$button-text: lighten(orange, 20%)
$button-color: #333
$icon-color: #333

#puzzle-body
	margin-block: 2.4em
.main-title
	text-align: center
	font-size: 0.8rem
	padding: 0.3rem
	margin: 2px auto
	width: 100vw
.crossword-body
	font: 62.5%/1.3em Helvetica, sans-serif
	.buttons
		position: fixed
		bottom: 0
		min-width: 300px
		max-width: 100vw
		display: flex
		flex-direction: row
		justify-content: center
		// margin: auto
	.buttons span
		display: flex
		background-color: $button-color
		justify-content: center
		align-items: center
		padding-right: 10px
		border-radius: 5px
		color: $button-text
		i
			margin: 2px
	span
		// font-size: 0.8rem
		// text-align: center
		// right: 0.3em
		// margin: 12px
		// font-size: 2.6rem
		// right: 0.3em
		// margin: 12px
		box-shadow: $span-box-shadow
	#puzzle-clues
		max-width: max-content
		span
			font-size: 1.1em
			margin: auto
		span:hover
			background-color: $orange-hover
		h2
			margin: auto
			text-align: center
			color: $button-text
			max-width: min-content
			background-color: $button-color
			font-size: 1.5rem
			cursor: pointer
		h2:hover
			background-color: $orange-hover
		ul
			display: flex
			flex-direction: column
			// align-items: flex-start
		li
			justify-content: center
			align-items: center
			font-size: 1.5em
			// color: lightBlue
			margin: 0 0 0.1em 0
			line-height: 1.6em
			list-style-type: none
			text-align: left
		span
			cursor: pointer
#puzzle-wrapper
	margin: auto
	min-width: 54%
	padding: 1px
	justify-content: center
	max-width: 400px
.head-label
	z-index: 1
table#puzzle
	border-collapse: collapse
	border-spacing: 0
	tr
		width: 100%
	td
		// color: black
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
		// color: #666
		// background-color: #f4f4f4
		text-transform: uppercase
	// input.done
	// 	font-weight: bold
	// 	color: green
	// input:focus
	// 	background-color: #fff
	span
		// color: #444
		font-size: 0.8em
		// position: absolute
		top: -1px
		left: 1px
		display: block

#acrossDiv, #downDiv
	margin-top: 10px
	h2
		box-shadow: $span-box-shadow
		padding: 0.4em
		border-radius: 5px
.couch
	padding-inline: 4px
	color: $thalmon
	background-color: $icon-color
</style>
