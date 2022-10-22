<script setup lang="ts">

import YogaAdminPanel from "@/components/YogaAdminPanel.vue"
import { ref, reactive, computed, watchEffect, onMounted } from "vue";
import { useStore } from "@/stores/index";
import { firestoreDb } from "@/services/firebaseconfig";
import { doc,	collection,	getDocs } from "firebase/firestore";

document.title = "Community Yoga Schedule";

// @TODO Plan is to show this and next full month always
// @TODO Display exactly four weeks, not switchable yet.
// @TODO Check admin roles
// @TODO Validate Form
// @TODO One-Offs still need actual dates in the data.
// @TODO In firebase functions, delete any items that are passed.

const store = useStore();
const coreDate = ref(new Date())
const dayNames = ref(["Sunday", "Monday",	"Tuesday", "Wednesday", "Thursday",
	"Friday",	"Saturday"]);
const cellElements = ref([]);
const state = reactive({
	yearNum: 0,
	monthNum: 0,
	dayNum: 0,
	monthName: "",
	nextMonthName: "",
	firstDayOfCurrentMonth: null,
	startingDateName: "",
	lastDayOfMonth: 0,
	dayStartOffset: 0,
	endcapDays: 0,
	firstDisplayDate: 0,
	recurs: false,
});
const yogaData = ref([]);
const getCalendar = async () => {
	const tempData = [];
	const querySnapshot = await getDocs(collection(firestoreDb, "yogaCalendar"));
	querySnapshot.forEach((doc) => {
		// console.log(doc.id, " => ", doc.data());
		tempData.push({ ...doc.data(), id: doc.id });
	});
	yogaData.value = tempData;
	// populateData()
};

watchEffect(() => {
	state.yearNum = coreDate.value.getFullYear();
	state.monthNum = coreDate.value.getMonth();
	state.dayNum = coreDate.value.getDate();
	state.monthName = coreDate.value.toLocaleString("en-US", { month: "long" });
	state.firstDayOfCurrentMonth = new Date(state.yearNum, state.monthNum, 1);
	state.startingDateName = state.firstDayOfCurrentMonth.toLocaleString(
		"en-US",
		{ weekday: "long" }
	);
	state.lastDayOfMonth = new Date(
		state.yearNum,
		state.monthNum + 1,
		0
	).getDate();
	state.lastDayOfNextMonth = new Date(state.yearNum, state.monthNum+1, 0).getDate()
	state.dayStartOffset = dayNames.value.indexOf(state.startingDateName);
	state.endcapDays = 7 - ((state.dayStartOffset + state.lastDayOfMonth) % 7);
	state.firstDisplayDate = 1
	state.nextMonthName = new Date(state.yearNum, state.monthNum+1, 1).toLocaleString("en-us", { month: "long" })
	// state.dayNum > 7 ?
	// 	state.dayNum - ((state.dayStartOffset + state.dayNum) % 7) :
	// 	;
	// state.lastDisplayDate = new Date(state.yearNum, state.monthstate.firstDisplayDate + 28 + state.endcapDays).getDate()
});

const formatTime = (timeVal) => {
	let hour: string | number = Number(timeVal.slice(0, 2));
	let twelveSection = "";
	if (hour > 12) {
		hour = String(hour - 12);
		twelveSection = "pm";
	} else {
		twelveSection = "am";
		if (hour == 0) {
			hour = "12";
		} else {
			hour = String(hour);
		}
	}
	let formattedTime = `${hour}${timeVal.slice(2)}${twelveSection}`;
	return formattedTime;
};
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
// 			selectedEls.forEach((curEl)=>{
// 				let newEl = document.createElement('p')
// 				newEl.innerText = `${formatTime(data.time)} ${data.title}`
// 				curEl.appendChild(newEl)
// 			})
// 		}
// 	})
// }

onMounted(() => {
	// GET RID OF SIDEBAR
	// const sidebarNav = document.getElementsByClassName("sidebar")[0]
	// const contentBody = document.getElementById("body")
	// contentBody.style.marginLeft = 0
	// sidebarNav.classList.add("hidden")

	// RETRIEVE ALL YOGA DATA FROM DB
	getCalendar();
});

// FUNCTIONS
const thisDayName = (queryDate) =>
	dayNames.value[Math.floor((queryDate + state.dayStartOffset - 1) % 7)];
const thisDayNextMonth = (queryDate) =>
	dayNames.value[
		Math.floor(
			(queryDate + state.dayStartOffset - 1 + state.lastDayOfMonth) % 7
		)
	];
// BUTTON AND FORM HANDLING

// const enableAdmin = () => state.adminEnabled = !state.adminEnabled

const thisDaysData = (monthIndex, dayname) => {
	// NOTE: This does not logically work yet. We need to delete one offs when they are past.
	let oneOffs = yogaData.value.filter(
		(datum) => datum.date.slice(0, 2) == monthIndex
	);
	let recurs = yogaData.value.filter((datum) => datum.day == dayname);
	let combined = [...oneOffs, ...recurs].sort(
		(a, b) => Number(a.time.slice(0, 2)) - Number(b.time.slice(0, 2))
	);
	let dataTemplate = ``;
	combined.forEach(
		(datum) =>
			(dataTemplate += `<p>${formatTime(datum.time)} ${datum.title}</p>`)
	);
	return dataTemplate;
};
const thisDaysDataNextMonth = (monthIndex, dayname) => {
	// NOTE: This does not logically work yet. We need to delete one offs when they are past.
	let oneOffs = yogaData.value.filter(
		(datum) => datum.date.slice(0, 2) == monthIndex
	);
	let recurs = yogaData.value.filter((datum) => datum.day == dayname);
	let combined = [...oneOffs, ...recurs].sort(
		(a, b) => Number(a.time.slice(0, 2)) - Number(b.time.slice(0, 2))
	);
	let dataTemplate = ``;
	combined.forEach(
		(datum) =>
			(dataTemplate += `<p>${formatTime(datum.time)} ${datum.title}</p>`)
	);
	return dataTemplate;
};
const endDate = computed(() => state.endcapDays + 7);

// const calendarLengthWeeks = ref(4)
</script>
<template>
	<section id="months">
		<YogaAdminPanel v-if="store.username == 'Adam' || store.username == 'Lindsay'"
		:recurs="state.recurs"
		:dayNames="dayNames"
		:yogaData="yogaData"
		/>
		<h1>{{ "Community Yoga Space" }}</h1>
		<img
			class="invert"
			src="https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/yoga%2Fyoga%20main_1653153367.jpg?alt=media&token=bc1a3f0d-6499-4b28-84b6-c522401599b6"
			alt="yoga main"
			style="margin: auto"
		/>
		<h1>{{ state.monthName }} {{ state.yearNum }}</h1>

		<div class="calendars-container">

			<div class="weeks">
				<!-- v-show="state.firstDisplayDate <= 7" -->
				<div
					v-for="preIndex of state.dayStartOffset"
					class="uncell"
					:key="preIndex"
				>
					<!-- {{ dayNames[preIndex - 1] }} -->
				</div>
				<!-- v-show="monthIndex > state.firstDisplayDate" -->
				<div
					v-for="monthIndex of state.lastDayOfMonth"
					ref="cellElements"
					class="cell"
					:class="monthIndex == state.dayNum ? 'selected-date' : ''"
					:key="state.monthName + monthIndex"
				>
					{{monthIndex}} {{thisDayName(monthIndex)}}
					<hr><div class="cell-content" v-html="thisDaysData(monthIndex, thisDayName(monthIndex))"></div>
				</div>
				<!-- <div
					v-for="monthIndex of endDate"
					ref="cellElements"
					class="cell"
					:class="monthIndex == state.dayNum ? 'selected-date' : ''"
					:key="state.monthName + monthIndex"
				>
					{{monthIndex}} {{thisDayNextMonth(monthIndex)}}
					{{thisDaysDataNextMonth(monthIndex, thisDayNextMonth(monthIndex))}}
				</div> -->
				<div
					v-for="postIndex of state.endcapDays"
					class="uncell"
					:key="postIndex"
				>
				</div>
			</div>
		</div>
		<!-- <div class="weeks">
			<h1>{{ state.nextMonthName }} </h1>
			<div
				v-for="postIndex of state.lastDayOfNextMonth"
				class="cell"
				:key="state.nextMonthName + postIndex"
			>
			</div>
		</div> -->
	</section>
</template>
<style lang="sass" scoped>
@import "@/assets/css/vars.sass"
body
	background-color: black
.invert
	// filter: invert(1)
	// filter: sepia(1)
	filter: hue-rotate(230deg)
	border-radius: 20px
#months
	h1
		color: $midnight-light
.calendars-container
	display: flex
	justify-content: center
	text-align: center
	color: $safe-light
	// 	.selected
	// 		background-color: $purple
	// 		color: white
	// 	#months
	// 		display: grid
	// 		grid-gap: 30px
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
.uncell
	justify-content: flex-start
	align-content: flex-start
	// border: none
	border-radius: 3px
	padding: 6px 0
	// background-image: linear-gradient(0deg, $midnight-deluxe, $dark-purple)
	height: 200px
.cell
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
.cell-content
	color: $contrast
	font-size: 0.8em
.cell:hover
	border: 1px solid $secondary
	background-color: $midnight-cream
.selected-date
	background-image: linear-gradient(0deg, $midnight, $midnight-cream)
	border: 1px solid $contrast-light
@media screen and (max-width: 750px)
	.calendars-container
		font-size: 0.70em
		width: 100vw
		margin: 0
		p
			font-size: 0.65em
	.weeks
		// justify-content: flex-start
		// margin: 0
		// padding: 0
		grid-template-columns: repeat(7, 14%)
		grid-template-rows: repeat(6, 200px)
</style>
