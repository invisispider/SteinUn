<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue"
import { useTime } from "@/stores/time"
const store = useTime()
const coreDate = ref(new Date())
const habitName = ref("")
const gYear = ref(new Date().getFullYear())
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
	dayOfHabit: 0,
	dayStartOffset: 0,
})
const getHabitFromName = (hName: string) => store.habitNames.indexOf(hName)
const getNameFromHabit = (habit: number) => store.habitNames[habit]
const getHabitFromDay = (doy: number) => Math.floor(doy/daysInHabit.value)
const firstDayOfHabit = (hab: number) => new Date(gYear.value, 0, 1+(daysInHabit.value*(state.habitNum)))
onMounted(()=>{
	state.dayOfHabit = state.dayOfYear-((state.habitNum)*daysInHabit.value)
	store.setHabitNum(state.habitNum)
	store.setDayNum(state.dayOfHabit)
})
watchEffect(()=> {
	state.startOfYear = new Date(gYear.value, 0, 1)
	state.dayOfYear = 1+Math.floor(new Date(coreDate.value-state.startOfYear)/(86400000))
	state.habitNum = Math.floor((state.dayOfYear/daysInHabit.value))
	habitName.value = getNameFromHabit(state.habitNum)
})
</script>
<template>
	<section id="habits">
		<div class="above-cal">
			<h1>
				{{store.dayNames[(state.dayOfHabit-1)%5]}} {{state.dayOfHabit}}
				{{habitName}} {{Number(String(store.forma).slice(-4)) + 10000}}
			</h1>
		</div>
		<div class="zen-calendar">
			<div class="unchunk" v-if="habitName!=='~newZen~'">
				<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
				<div class="uncell uncell-zen" v-for="d of daysInHabit"
					:class="d==state.dayOfHabit?'selected-date':''"
					:key="d">
					{{ d }}
				</div>
			</div>
			<div class="unchunk" v-else>
				<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
				<div class="uncell uncell-zen" v-for="(d, ind) of store.dayNames"
					:class="ind+1==state.dayOfHabit?'selected-date':''"
					:key="ind">
					{{ ind+1 }}
				</div>
			</div>
		</div>
		<h2>Day Of Year: {{state.dayOfYear+1}}</h2>
	</section>
</template>
