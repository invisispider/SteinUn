<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import useCrossword from "@/composables/Crosswords/crosswordvideogame";
document.title = "Video Game Lore Crossword Puzzle";
const titleRef = ref(document.title.split(/[, ]+/));
const across = ref(useCrossword.across)
const down = ref(useCrossword.down)
const collapseAcross = ref(false);
const collapseDown = ref(true);
const rowNum = 11;
const colNum = 11;
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
  );
  return refCell;
};
const drawWord = (pRef: [number, number], chars: string, direc: string) => {
  let i = 0;
  if (direc === "across") {
    while (i < chars.length) {
      let selectedEl = getElement([pRef[0], pRef[1] + i]);
      selectedEl.lastChild.value = chars.charAt(i);
      i++;
    }
  } else if (direc === "down") {
    while (i < chars.length) {
      let selectedEl = getElement([pRef[0] + i, pRef[1]]);
      selectedEl.lastChild.value = chars.charAt(i);
      i++;
    }
  }
};
const renderChars = () => {
  across.value.forEach((datum) => drawWord(datum.pos, datum.answer, "across"));
  down.value.forEach((datum) => drawWord(datum.pos, datum.answer, "down"));
};
onMounted(() => {
  const renderMatrix = () => {
    let m = [];
    for (let i = 0; i < 11; i++) {
      m[i] = [];
      for (let j = 0; j < 11; j++) {
        m[i][j] = 0;
      }
    }
    return m;
  };
  const assignMatrix = (mat) => {
    across.value.forEach((acr) => {
      let ans = acr.answer;
      let pos = acr.pos;
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
  let startMap = across.value
    .map((index) => index.pos)
    .concat(down.value.map((index) => index.pos));
  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      let pair = [i + 1, j + 1];
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
            newDiv.style.backgroundColor = "#f4f4f4";
            newDiv.style.height = "1em";
            newDiv.style.zIndex = "2";
            newDiv.style.fontSize = "1em";
            newDiv.style.position = "absolute";
            newDiv.innerHTML = enumerateCells(pair);
            el.prepend(newDiv);
          }
        });
      }
    });
  });
});
const selectMe = async (pRef) => {
  if (typeof pRef==='object') {
    let el = getElement(pRef);
    await nextTick(() => el.lastChild.focus());
  }
};
const resetInputs = (warn) => {
  if (warn) {
    if (confirm("Really want to CLEAR all your progresst?")) {
      let inputs = [...document.getElementsByClassName("clearme")];
      inputs.forEach((input) => (input.value = ""));
    }
  } else {
    let inputs = [...document.getElementsByClassName("clearme")];
    inputs.forEach((input) => (input.value = ""));
  }
};
const clueMe = () => {
  if (
    confirm(
      "This will erase your porgoresst! Are you REALLY sure? If you are, you can keep mashing it btw."
    )
  ) {
    setTimeout(() => {
      resetInputs(false);
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
const moveMe = (keyPress, row, col) => {
  if (keyPress === "left") {
    let el = getElement([row, col]);
    if (el.lastChild) {
      el.lastChild.focus();
    }
  } else if (keyPress === "right") {
    let el = getElement([row, col]);
    if (el.lastChild) {
      el.lastChild.focus();
    }
  } else if (keyPress === "down") {
    let el = getElement([row, col]);
    if (el.lastChild) {
      el.lastChild.focus();
    }
  } else if (keyPress === "up") {
    let el = getElement([row, col]);
    if (el.lastChild) {
      el.lastChild.focus();
    }
  }
};
// so, in the render, check if querySelectorAll("input[value='']"), setTimeout, change values,
// then instead of refresh all function, use those stored input refs to clear.
</script>
<template>
  <div id="puzzle-body">
    <div class="main-title">
      <h1>{{ titleRef[0] }} {{ titleRef[1] }} {{ titleRef[2] }}</h1>
    </div>
    <div id="puzzle-wrapper">
      <table id="puzzle">
        <tbody :ref="(el) => (tbodyRows = el)">
          <tr v-for="(row, row_ind) in rowNum" :row="row" :key="row_ind">
            <td v-for="(col, col_ind) in colNum" :col="col" :key="col_ind">
              <input
                class="clearme"
                @keyup.left="moveMe('left', row, col - 1)"
                @keyup.right="moveMe('right', row, col + 1)"
                @keyup.down="moveMe('down', row + 1, col)"
                @keyup.up="moveMe('up', row - 1, col)"
                maxlength="1"
                val=""
                type="text"
                tabindex="-1"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="puzzle-clues">
      <div class="buttons">
        <span
          ><i id="solve" @click="infoMe" class="material-icons">quiz</i>
          info</span
        >
        <span
          ><i id="other" @click="clueMe" class="material-icons">visibility</i>
          clueMe</span
        >
        <span
          ><i
            id="clear"
            @click="resetInputs((warn = true))"
            class="material-icons"
            >delete_outline</i
          >
          resetBoard</span
        >
      </div>
      <div id="acrossDiv">
        <h2 @click="toggle('across')">Across</h2>
        <transition-group name="grow" tag="ul" id="across">
          <li
            v-for="ac in across"
            v-show="!collapseAcross"
            tabindex="1"
            :key="ac.answer"
          >
            <span class="material-icons" @click="selectMe(ac.pos)">chair</span>
            {{ enumerateCells(ac.pos) }}. {{ ac.question }}
          </li>
        </transition-group>
      </div>
      <div id="downDiv">
        <h2 @click="toggle('down')">Down</h2>
        <transition-group name="grow" tag="ul" id="down">
          <li
            v-for="dow in down"
            v-show="!collapseDown"
            tabindex="1"
            :key="dow.answer"
          >
            <span class="material-icons" @click="selectMe(dow.pos)">chair</span>
            {{ enumerateCells(dow.pos) }}. {{ dow.question }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
$thalmon: rgb(249, 194, 159)
.head-label
	// margin-right: 0.4em
	// background-color: #333
	background-color: #f4f4f4
	height: 1em
	// width: 100%
	// display: flex
	// opacity: 0
	z-index: 2
	font-size: 1em
	position: absolute
	// float: left
	color: black
.actionJackson
	background-color: red
	color: white
.blackMe
	background-color: black
	color: white
.active, .clues-active
	background-color: #ddd
.clue-done
	color: #999
	text-decoration: line-through
#puzzle-body
	font: 62.5%/1.3em Helvetica, sans-serif
	// background-color: rgb(16, 9, 54)
	// height: 100%
	overflow-y: scroll
	.main-title
		text-align: center
		font-size: 0.8rem
		padding: 0.3rem
		margin: 2px auto
		color: lightBlue
	.buttons
		display: flex
		flex-direction: row
		span
			font-size: 0.8rem
			text-align: center
			// right: 0.3em
			// margin: 12px
			font-size: 2.6rem
			right: 0.3em
			margin: 12px
			box-shadow: 0 0 12px 1px #53e6cb
	#other
		color: white
	#solve
		transform: rotate(180deg)
		color: $thalmon
	#clear
		// left: 1em
		color: lightBlue
	#puzzle-clues
		font-size: 1rem
		color: white
		span
			float: left
			margin-right: 0.4em
			color: $thalmon
			// z-index: 2
		h2
			text-align: center
			color: orange
			font-size: 2.3rem
			cursor: pointer
		h2:hover
			color: lighten(orange, 20%)
		li
			color: lightBlue
			margin: 0 .2rem
			line-height: 1.6em
			list-style-type: none
			span
				cursor: pointer
	#puzzle-wrapper
		display: grid
		/* float: left; */
		/* width: 54%; */
		padding: 1px
		/* margin-right: 3%; */
		width: 100%
		table#puzzle
			border-collapse: collapse
			border-spacing: 0
			width: 100%
			background-color: #333
			tr
				width: 100%
			td
				width: 5em
				height: 3em
				border: 1px solid #cdcdcd
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
					color: #666
					background-color: #f4f4f4
					text-transform: uppercase
				input.done
					font-weight: bold
					color: green
				input:focus
					background-color: #fff
				span
					color: #444
					font-size: 0.8em
					// position: absolute
					top: -1px
					left: 1px
					display: block
@media screen and (min-width: 430px)
	#puzzle-body
		width: 100vw
		height: 100vh
		margin: 0
		padding: 0
		display: flex
		// grid-template-columns: 1fr 1fr
		#puzzle-wrapper
			/* display: grid; */
			/* float: left; */
			// width: 54%
			padding: 3rem 3rem 0 3rem
			margin: 0
			width: 1000px
			max-width: 95vw
			height: 1000px
			max-height: 90vh
		#puzzle-clues
			/* float: left; */
			// width: 100vw
			margin: 4rem auto
			// display: grid
			// grid-template-rows: 1fr 1fr
</style>
