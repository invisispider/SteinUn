<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue"
import { useTime } from "@/stores/time"
const store = useTime()
const coreDate = ref(new Date())
const habitName = ref("")
const gYear = ref(2022)
const daysInHabit = ref(45)
const state = reactive({
	monthNum: 0,
	gregDate: 0,
	startOfYear: 0,
	dayOfYear: 0,
	firstDayOfCurrentMonth: 0,
	startingDateName: "",
	daysInCurrentMonth: 0,
	romanFancy: "",
	monthName: "",
	habitNum: 0,
	dayOfHabit: 0,
	dayStartOffset: 0,
})
const getHabitFromName = (hName: string) => store.habitNames.indexOf(hName)
const getNameFromHabit = (habit: number) => store.habitNames[habit]
const getHabitFromDay = (doy: number) => Math.floor(doy/daysInHabit.value)
const firstDayOfHabit = (hab: number) => new Date(gYear.value, 0, 1+(daysInHabit.value*(state.habitNum)))
const monthName = ref('')
onMounted(()=>{
	monthName.value = ref(coreDate.value.toLocaleString("en-US", { month: "long"}))
	state.dayOfHabit = state.dayOfYear-((state.habitNum)*daysInHabit.value)
})
watchEffect(()=> {
	state.monthNum = coreDate.value.getMonth()
	state.gregDate = coreDate.value.getDate()
	state.startOfYear = new Date(gYear.value, 0, 1)
	state.dayOfYear = 1+Math.floor(new Date(coreDate.value-state.startOfYear)/(86400000))
	state.firstDayOfCurrentMonth = new Date(gYear.value, state.monthNum, 1)
	state.startingDateName = state.firstDayOfCurrentMonth.toLocaleString("en-US", { weekday: "long"})
	state.daysInCurrentMonth =  new Date(gYear.value, state.monthNum+1, 0).getDate()
	state.romanFancy = coreDate.value?coreDate.value.toDateString():null
	state.monthName = coreDate.value.toLocaleString("en-US", { month: "long"})
	state.habitNum = Math.floor((state.dayOfYear/daysInHabit.value))
	state.dayStartOffset = store.gregDayNames.indexOf(state.startingDateName)
	habitName.value = getNameFromHabit(state.habitNum)
})
const selectHabit = (newHabit) => {
	// habitName.value = newHabit
	console.log(newHabit)
	state.habitNum = getHabitFromName(newHabit)
	coreDate.value = new Date(gYear.value, 0, ((state.habitNum)*daysInHabit.value)+1)
	state.dayStartOffset = store.gregDayNames.indexOf(state.startingDateName)
	// coreDate.value = new Date(firstDayOfHabit())
	// state.dayOfHabit = 1
	console.log(coreDate.value)
	// state.dayOfYear = 1+Math.floor(new Date(coreDate.value-state.startOfYear)/(86400000))
	// state.habitNum = Math.floor((state.dayOfYear/daysInHabit.value))
// watch(state, (newValue, oldValue) => {
// })
}
const changeDate = (d: number) => {
	coreDate.value = new Date(gYear.value, 0, ((state.habitNum)*daysInHabit.value)+d)
	state.dayOfHabit = d
// const updateHabit = (newHabit) => {
// 	coreDate.value = firstDayOfHabit(getHabitFromName(newHabit))
// 	state.dayOfHabit = 1
// }
}
const dayOfWeekZen = computed(()=>store.dayNames[(state.dayOfHabit-1)%5])
// watch(()=>habitName.value, (newval, oldval) => {
// 	coreDate.value = firstDayOfHabit(getHabitFromName(newval))
// 	state.dayOfHabit = 1
// })
// const endCap = computed(()=>((state.dayStartOffset+state.daysInCurrentMonth)%7))
</script>
<template>
	<div class="untable">
		<div class="calendars-container">
			<section id="habits">
				<h2>{{dayOfWeekZen}} {{state.dayOfHabit}} {{habitName}} {{10000+gYear}}</h2>
				<ol>
					<li v-for="hab in store.habitNames" @click="selectHabit(hab)"
						:class="hab==habitName?'selected':''">{{hab}}</li>
				</ol>
				<div class="unchunk" v-if="habitName!=='~newZen~'">
					<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
					<div class="uncell uncell-zen" v-for="d of daysInHabit"
						@click="changeDate(d)"
						:class="d==state.dayOfHabit?'selected-date':''"
						:key="d">
						{{ d }}
					</div>
				</div>
				<div class="unchunk" v-else>
					<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
					<div class="uncell uncell-zen" v-for="(d, ind) of store.dayNames"
						@click="changeDate(ind+1)"
						:class="ind+1==state.dayOfHabit?'selected-date':''"
						:key="ind">
						{{ ind+1 }}
					</div>
				</div>
			</section>
			<section id="months">
				<h2>{{state.romanFancy}}</h2>
				<div class="unchunk-greg">
					<div class="baheader baheader-greg" v-for="gregDayName of store.gregDayNames"
						:key="gregDayName"
					>{{gregDayName}}</div>
					<div v-for="index of state.dayStartOffset" class="uncell uncell-greg" :key="index"></div>
					<div class="uncell uncell-greg" v-for="index of state.daysInCurrentMonth"
						:class="index==state.gregDate?'selected-date':''" :key="index"
					>{{index}}
					</div>
					<!-- <div v-for="index of endCap" class="uncell uncell-greg" :key="index"></div> -->
				</div>
			</section>
		</div>
		<div class="unheader">
			<h2>Day Of Year: {{state.dayOfYear+1}}</h2>
		</div>
	</div>
</template>
<style lang="sass">
$midnight: #101
$midnight-cream: #313
$midnight-deluxe: #323
$midnight-light: #FDC
$safe-light: #DFD
$safe-dark: #101
$primary-light: #7FA
$primary: #4F7
$primary-dark: #194
$secondary-light: #D9F
$secondary: #A5D
$secondary-dark: #204
$contrast-light: #F84
$contrast: #C40
$contrast-dark: #810
$purple: rgb(49, 14, 122)
$dark-purple: rgb(52, 4, 89)
$darker-purple: rgb(35, 6, 51)
$box-midnight-cream: 0 0 0 1px $midnight-cream
.content
	margin: 0
	padding: 0
	// margin-top: 0
.untable
	display: grid
	grid-template-rows: auto auto
	// padding: 0.2em
	padding: 0
	margin: 0
	background-color: #222
	min-height: 100vh
	.calendars-container
		display: grid
		grid-template-columns: 1fr 1fr
		align-content: flex-start
		text-align: center
		justify-content: center
		margin: 0
		padding: 0
		display: grid
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
		text-align: center
		color: orange
		list-style: none
		font-size: 1.3em
		color: $safe-light
		li
			text-transform: capitalize
			border: 1px solid $secondary-light
			padding: 5px
			cursor: pointer
			border-radius: 5px
			background-color: $dark-purple
			color: $secondary-light
		.selected
			background-color: $purple
			color: white
.greg-date-td
	margin: 0
	box-shadow: $box-midnight-cream
#habits
	display: grid
	grid-gap: 30px
#months
	display: grid
	grid-gap: 30px
.unheader
	border-radius: 5px
	// padding: 1em
	display: flex
	// flex-direction: row
	// align-items: center
	text-transform: uppercase
	text-align: center
	background-color: #316
	margin: auto
	// margin: 20px auto
	// writing-mode: vertical-rl
	// text-orientation: upright
.baheader
	text-align: center
	font-weight: 500
	height: 20px
	align-self: flex-end
.baheader-zen
	background-color: $secondary
	color: black
	// color: $secondary-dark
.baheader-greg
	background-color: $primary
	color: black
	// color: $primary-dark
.unchunk
	color: $safe-light
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr
	grid-gap: 2px
.unchunk-greg
	color: $safe-light
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
	grid-gap: 2px
.uncell
	background-color: $midnight
	margin: 0
	padding: 1em
.uncell-greg
	border: 1px solid $primary-light
.uncell-zen
	border: 1px solid $secondary-light
	cursor: pointer
.uncell-zen:hover
	border: 1px solid $secondary
	background-color: $midnight-cream
.selected-date
	color: $contrast-dark
	background-color: $midnight-deluxe
	font-weight: bolder
// @media screen and (min-width: 1024px)
	// .untable
	// 	grid-template-columns: 50vw 50vw
	// #habits
	// 	display: grid
		// grid-template-rows: 5vh 5vh auto 70vh
		// grid-gap: 30px
	// #months
		// display: grid
		// grid-template-rows: 5vh 5vh auto 70vh
		// grid-gap: 30px
</style>
