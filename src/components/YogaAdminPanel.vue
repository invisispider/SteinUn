<script setup lang="ts">
import { reactive, ref } from "vue"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { firestoreDb } from "@/services/firebaseconfig";
const props = defineProps(['recurs', 'dayNames', 'yogaData'])
const courseTitles = ["Chair Yoga", "Guided Meditation (Free!)", "Kid's Mindful Movement", "Vinyasa Flow", "Yin Yoga"]
const removeCourses = ref(false)
interface scheduleItem {
	day: string;
	date: string;
	time: string;
	title: string;
	id: string;
}
const courseInfoInitial = {
	day: "",
	date: "",
	time: "",
	title: "",
	id: "",
};
const removeItem = (id: string) => {
	deleteDoc(doc(firestoreDb, "yogaCalendar", id));
	getCalendar();
};
const courseInfo: scheduleItem = reactive({ ...courseInfoInitial })
const resetForm = () => Object.assign(courseInfo, courseInfoInitial)
const processForm = () => {
	addDoc(collection(firestoreDb, "yogaCalendar"), courseInfo);
	getCalendar();
	resetForm();
};
const adminEnabled = ref(false)
</script>
<template>
	<div id="admin-menu" class="admin-menu">
		<h2>Lindsay and Adam -- Admin Panel</h2>
		<button
		class="green"
		@click="adminEnabled=!adminEnabled"
		>
		Collapse/Expand
		</button>
		<template v-if="adminEnabled">
			<div id="top-header">
				<button
					class="red"
					@click="removeCourses=false"
				>
					Add Course
				</button>
				<button
					class="red"
					@click="removeCourses=true"
				>
					Remove Course
				</button>
			</div>
			<template v-if="!removeCourses">
				<h3>Add New Course</h3>
				<form>
					{{ "Recurring?" }}
					<input type="checkbox" v-model="props.recurs" />
					<template v-if="props.recurs === true">
						{{ "Day" }}
						<input :list="props.daynames" v-model="courseInfo.day" />
					</template>
					<template v-else>
						{{ "Date" }}
						<input type="date" v-model="courseInfo.date" />
						{{ "Time" }}
					</template>
					<input type="time" v-model="courseInfo.time" />
					{{ "Event" }}
					<input :list="courseTitles" v-model="courseInfo.title" />
					<button class="green" @click.prevent="processForm">
						Add Course
					</button>
				</form>

			<!-- <button class="red" @click="removeCourses = !removeCourses">
				Remove Courses
			</button> -->
			</template>
			<template v-if="removeCourses">
				<h3>Remove Course</h3>
				<div v-for="datum in props.yogaData" :key="datum.id" style="display: flex;">
					<button
						class="orange"
						@click="removeItem(datum.id)"
					>
						remove
					</button>
					{{ datum.title }} {{ datum.date }} {{ datum.day }}
					{{ datum.time }}
				</div>

					<!-- <div id="updated-calendar"
					style="display: grid;"
					>
					<div class="one-week"
					v-for="week of calendarLengthWeeks"
					:key="week"
					:style="`border: 1px solid red; grid-row-start: ${week};
					color: orange; display: grid;`"
					>
					{{week}}
					<div class="one-day"
					v-for="dayOfWeek of 7"
					:key="week*7+dayOfWeek"
					:style="`color: white; grid-column: ${dayOfWeek} / ${dayOfWeek+1};`"
					>
					{{dayOfWeek}}
				</div>
			</div>-->
			</template>
		</template>
	</div>
</template>
<style lang="sass" scoped>
@import "@/assets/css/vars.sass"
.green
	background-color: $primary-dark
	align-items: center
.orange
	background-color: $contrast
.red
	background-color: $contrast-dark
#admin-menu
	background: $admin-blues
	color: $midnight-light
	display: grid
	.selected
		background-color: $purple
		color: white
	#months
		display: grid
		grid-gap: 30px
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
@media screen and (max-width: 750px)
	#admin-menu	form
		display: flex
		flex-direction: column
</style>
