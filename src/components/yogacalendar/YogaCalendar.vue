<script setup lang="ts">
// @TODO Display exactly four weeks, not switchable yet.
// @TODO Check admin roles
// @TODO Validate Form

import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue"
import { useStore } from "@/stores/index"
import { firestoreDb } from "@/services/firebaseconfig";
import { doc, collection, getDocs, addDoc, deleteDoc, query, where } from "firebase/firestore"
document.title = "Community Yoga Schedule"

const store = useStore()

interface scheduleItem {
 	day: string;
	date: string;
	time: string;
	title: string;
	id: string;
}
const courseInfoInitial = {
	day: '',
	date: '',
	time: '',
	title: '',
	id: ''
}

const courseInfo: scheduleItem = reactive({ ...courseInfoInitial })

const resetForm = () => {
	Object.assign(courseInfo, courseInfoInitial)
}
const coreDate = ref(new Date())
const dayNames = ref(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
const cellElements = ref([])
const adminEnabled = ref(false)
const removeCourses = ref(false)
const state = reactive({
	yearNum: 0,
	monthNum: 0,
	dayNum: 0,
	monthName: "",
	firstDayOfCurrentMonth: null,
	startingDateName: "",
	lastDayOfMonth: 0,
	dayStartOffset: 0,
	endcapDays: 0,
	firstDisplayDate: 0,
	recurs: false
})
const yogaData = ref([])
const getCalendar = async () => {
  const tempData = []
  const querySnapshot = await getDocs(collection(firestoreDb, "yogaCalendar"))
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    tempData.push({...doc.data(), id: doc.id});
  });
  yogaData.value = tempData
	console.info(yogaData.value)
	// populateData()
}

watchEffect(()=> {
	state.yearNum = coreDate.value.getFullYear()
	state.monthNum = coreDate.value.getMonth()
	state.dayNum = coreDate.value.getDate()
	state.monthName = coreDate.value.toLocaleString("en-US", { month: "long"})
	state.firstDayOfCurrentMonth = new Date(state.yearNum, state.monthNum, 1)
	state.startingDateName = state.firstDayOfCurrentMonth.toLocaleString("en-US", { weekday: "long"})
	state.lastDayOfMonth =  new Date(state.yearNum, state.monthNum+1, 0).getDate()
	// state.lastDayOfNextMonth = new Date(state.yearNum, state.monthNum+1, 0).getDate()
	state.dayStartOffset = dayNames.value.indexOf(state.startingDateName)
	state.endcapDays = 7-((state.dayStartOffset+state.lastDayOfMonth)%7)
	state.firstDisplayDate = state.dayNum-((state.dayStartOffset+state.dayNum)%7)
	// state.lastDisplayDate = new Date(state.yearNum, state.monthstate.firstDisplayDate + 28 + state.endcapDays).getDate()
})

const formatTime = (timeVal) => {
	let hour: string|number = Number(timeVal.slice(0, 2))
	// console.info(hour)
	let twelveSection = ''
	if (hour > 12) {
		hour = String(hour-12)
		twelveSection = 'pm'
	} else {
		twelveSection = 'am'
		if (hour==0) {
			hour = '12'
		} else {
			hour = String(hour)
		}
	}
	let formattedTime = `${hour}${timeVal.slice(2)}${twelveSection}`
	return formattedTime
}
// const clearCalendarVisual = () => {
// 	cellElements.value.forEach((el) => {
// 		while (el.firstElementChild) {
// 			el.removeChild(el.firstElementChild);
// 		}
// 	})
// }
// const populateData = () => {
// 	clearCalendarVisual()
// 	yogaData.value.forEach((data)=> {
// 		if (data.date !== '') {
// 			// ONE OFF
// 			let newEl = document.createElement('p')
// 			newEl.innerText = `${formatTime(data.time)} ${data.title}`
// 			const selectedEl = cellElements.value.filter(el=>el.innerText.slice(0, 2) == data.date.slice(-2))[0]
// 			selectedEl.appendChild(newEl)
// 		} else if (data.day !== '') {
// 			// RECURRING
// 			const selectedEls = cellElements.value.filter(el=>el.innerText.split(' ')[1] == data.day)
// 			console.info(selectedEls)
// 			selectedEls.forEach((curEl)=>{
// 				let newEl = document.createElement('p')
// 				newEl.innerText = `${formatTime(data.time)} ${data.title}`
// 				curEl.appendChild(newEl)
// 			})
// 		}
// 	})
// }

onMounted(()=>{
		// GET RID OF SIDEBAR
	// const sidebarNav = document.getElementsByClassName("sidebar")[0]
	// const contentBody = document.getElementById("body")
	// console.info(contentBody)
	// contentBody.style.marginLeft = 0
	// sidebarNav.classList.add("hidden")

		// RETRIEVE ALL YOGA DATA FROM DB
	getCalendar()
})

// FUNCTIONS
const thisDayName = (queryDate) => dayNames.value[Math.floor((queryDate+state.dayStartOffset-1)%7)]
const thisDayNextMonth = (queryDate) => dayNames.value[Math.floor((queryDate+state.dayStartOffset-1+state.lastDayOfMonth)%7)]
// BUTTON AND FORM HANDLING
const processForm = () => {
	addDoc(collection(firestoreDb, "yogaCalendar"), courseInfo)
	getCalendar()
	resetForm()
}
const enableAdmin = () => {
	adminEnabled.value=!adminEnabled.value
}
const removeItem = (id: string) => {
	deleteDoc(doc(firestoreDb, "yogaCalendar", id))
	getCalendar()
}
const thisDaysData = (monthIndex, dayname) => {
	// NOTE: This does not logically work yet. We need to delete one offs when they are past.
	let oneOffs = yogaData.value.filter(datum=>datum.date.slice(0, 2)==monthIndex)
	let recurs = yogaData.value.filter(datum=>datum.day==dayname)
	let combined = [...oneOffs, ...recurs].sort((a, b) => Number(a.time.slice(0,2)) - Number(b.time.slice(0,2)))
	let dataTemplate = ``
	combined.forEach(datum=>dataTemplate += `<p>${formatTime(datum.time)} ${datum.title}</p>`)
	return dataTemplate
}
const thisDaysDataNextMonth = (monthIndex, dayname) => {
	// NOTE: This does not logically work yet. We need to delete one offs when they are past.
	let oneOffs = yogaData.value.filter(datum=>datum.date.slice(0, 2)==monthIndex)
	let recurs = yogaData.value.filter(datum=>datum.day==dayname)
	let combined = [...oneOffs, ...recurs].sort((a, b) => Number(a.time.slice(0,2)) - Number(b.time.slice(0,2)))
	let dataTemplate = ``
	combined.forEach(datum=>dataTemplate += `<p>${formatTime(datum.time)} ${datum.title}</p>`)
	return dataTemplate
}
const endDate = computed(()=>state.endcapDays+7)
</script>
<template>
	<div class="untable">
		<div class="calendars-container">
			<section id="months">
				<h1>{{"Community Yoga Space"}}</h1>
				<img class="invert" src="https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/yoga%2Fyoga%20main_1653153367.jpg?alt=media&token=bc1a3f0d-6499-4b28-84b6-c522401599b6" alt="yoga main" style="margin: auto">
				<h1>{{state.monthName}} {{state.yearNum}}</h1>
				<div id="top-header">
					<button class="red" v-if="store.username=='Adam'||store.username=='Lindsay'" @click="enableAdmin">Edit (Admin)</button>
					<div id="admin-menu" class="admin-menu" v-if="adminEnabled">
						<h3>Add New Course</h3>
						<form>
							{{"Recurring?"}}
							<input type="checkbox" v-model="state.recurs" />
							<template v-if="state.recurs===true">
								{{"Day"}}
								<input list="daynamesHtml" v-model="courseInfo.day" />
								<datalist id="daynamesHtml">
									<option value="Sunday" />
									<option value="Monday" />
									<option value="Tuesday" />
									<option value="Wednesday" />
									<option value="Thursday" />
									<option value="Friday" />
									<option value="Saturday" />
								</datalist>
							</template>
							<template v-else>
								{{"Date"}}
								<input type="date" v-model="courseInfo.date" />
								{{"Time"}}
							</template>
								<input type="time" v-model="courseInfo.time" />
								{{"Event"}}
							<input list="courseTitles" v-model="courseInfo.title" />
							<datalist id="courseTitles">
								<option value="Chair Yoga" />
								<option value="Guided Meditation (Free!)" />
								<option value="Kid's Mindful Movement" />
								<option value="Vinyasa Flow" />
								<option value="Yin Yoga" />
							</datalist>
							<button class="green" @click.prevent="processForm">Add Course</button>
						</form>
						<button class="red" @click="removeCourses=!removeCourses">Remove Courses</button>
						<div v-if="removeCourses && adminEnabled">
							<!-- <div > -->
							<button class="orange" @click="removeItem(datum.id)" v-for="datum in yogaData" key="datum.id">
								remove {{datum.title}}  {{datum.date}}  {{datum.day}}  {{datum.time}}
							</button>
							<!-- </div> -->
						</div>
					</div>
				</div>

				<div class="weeks">
					<div
						v-for="preIndex of state.dayStartOffset"
						v-show="state.firstDisplayDate<=7"
						class="uncell"
						:key="preIndex"
					>
						{{dayNames[preIndex-1]}}
					</div>
					<div
						v-for="monthIndex of state.lastDayOfMonth"
						v-show="monthIndex>state.firstDisplayDate"
						ref="cellElements"
						class="cell"
						:class="monthIndex==state.dayNum?'selected-date':''"
						:key="state.monthName+monthIndex"
						v-html="monthIndex+' '+thisDayName(monthIndex)+thisDaysData(monthIndex, thisDayName(monthIndex))"
					>
					</div>
					<div
						v-for="monthIndex of endDate"
						ref="cellElements"
						class="cell"
						:class="monthIndex==state.dayNum?'selected-date':''"
						:key="state.monthName+monthIndex"
						v-html="monthIndex+' '+thisDayNextMonth(monthIndex)+thisDaysDataNextMonth(monthIndex, thisDayNextMonth(monthIndex))"
					>
					</div>
					<!-- {{monthIndex}}
					{{thisDayName(monthIndex)}}
					{{thisDaysData(monthIndex, thisDayName(monthIndex))}} -->
					<!-- <p v-for="datac of thisDaysData(monthIndex, thisDayName(monthIndex))" key="datac.id">
					{{datac.title}} {{datac.time}}
				</p> -->
					<!-- <div
						v-for="postIndex of state.endcapDays"
						class="uncell"
						:key="postIndex"
					>
					</div> -->
				</div>
			</section>
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

.invert
	// filter: invert(1)
	// filter: sepia(1)
	filter: hue-rotate(230deg)
	border-radius: 20px
#top-header
	display: inline-flex
	margin: auto
	align-items: center
	h1
		margin: 0 10px
		padding: 0
	button
		height: 25px
		margin: 0 10px
		color: $safe-light
.green
	background-color: $primary-dark
.orange
	background-color: $contrast
.red
	background-color: $contrast-dark
.untable
	display: grid
	grid-template-rows: auto auto
	.calendars-container
		display: flex
		justify-content: center
		text-align: center
		color: $safe-light
		.selected
			background-color: $purple
			color: white
		#months
			display: grid
			grid-gap: 30px
// .scheduleItem
// 	text-transform: capitalize
// 	border: 1px solid $secondary-light
// 	padding: 5px
// 	cursor: pointer
// 	border-radius: 5px
// 	background-color: $dark-purple
// 	color: $secondary-light
// .unheader
// 	border-radius: 5px
// 	display: flex
// 	text-transform: uppercase
// 	text-align: center
// 	background-color: #316
// 	margin: auto
.weeks
	display: grid
	grid-template-columns: repeat(7, 200px)
	// grid-template-rows: repeat(6, 200px)
	// grid-gap: 0.05em
.uncell, .cell
	// background-color: $midnight
	justify-content: flex-start
	align-content: flex-start
	cursor: pointer
	// border: none
	border: 1px solid $midnight-light
	border-radius: 3px
	padding: 6px 0
	background-image: linear-gradient(0deg, $midnight-deluxe, $dark-purple)
	height: 200px
	p
		font-size: 0.8em
.cell:hover
	border: 1px solid $secondary
	background-color: $midnight-cream
.selected-date
	background-image: linear-gradient(0deg, $midnight-deluxe, $midnight-cream)
@media screen and (max-width: 750px)
	.weeks
		// justify-content: flex-start
		// margin: 0
		// padding: 0
		grid-template-columns: repeat(7, 14%)
		grid-template-rows: repeat(6, 200px)
	.calendars-container
		font-size: 0.70em
		width: 100vw
		// margin: 0
		p
			font-size: 0.65em
	#admin-menu form
		display: flex
		flex-direction: column
</style>
