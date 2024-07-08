<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const daysInHabit = ref(45);
watchEffect(() => {
  let curYear = new Date().getFullYear()
  let startOfYear = Number(new Date(curYear, 0, 1));
  let dayOfYearR = Math.floor(Number(new Date(Number(new Date()) - startOfYear)) / 86400000);
  let dayOfYear: number;
  if (dayOfYearR==366) {
    dayOfYear=0
  }
  if (dayOfYearR > 358) {
    // AS I UNDERSTAND, THE FIRST DAY OF THE ROMAN YEAR WILL BE REPEATED ON LEAP YEARS WITH CURRENT IMPLEMENTATION
    // zenCycle should start on Dec 19th except on leap year.
    // 21st is the solstice
    // 24th is the unLimited New Year
    // leaving Jan 1st as the 9th day of our year.
    // December 24 is the 358th. Year Ends Dec 19, solstice in middle of zenCycle
    // add 1 to Year
    curYear++
    // reset
    dayOfYear = dayOfYearR%358
  } else if (dayOfYearR < 358) {
    // just subtract 8 to align with solstice and zenCycle 2 day buffer.
    dayOfYear = dayOfYearR+8
  } else {
    // in zenCycle, dayOfYear = 258-362
    dayOfYear = dayOfYearR+3
  }

  // add 1?? On Jan 17, it said 18 Struggles, so I took away the +1
  store.setDayOfYear(dayOfYear);
  store.setDayNum(store.dayOfHabit);
  store.setHabitNum(Math.floor(store.dayOfYear / daysInHabit.value));
});
const emit = defineEmits(["calendar"]);
</script>
<template>
  <section @click="emit('calendar')" id="habits">
    <!-- <h1>{{ store.dayOfYear }}</h1> -->
    <div class="zen-calendar">
      <!-- <div class="baheader"> -->
        <h2>{{store.habitName}} Habit</h2>
      <!-- </div> -->
      <div class="unchunk" v-if="store.habitName !== '~newZen~'">
        <div
          class="baheader baheader-zen"
          v-for="day of store.dayNames"
          :key="day"
        >
          {{ day }}
        </div>
        <div
          class="uncell uncell-zen"
          v-for="d of 45"
          :class="d == store.dayOfHabit+1 ? 'selected-date' : ''"
          :key="d"
        >
          <i v-if="d === 1" class="material-icons holiday">self_improvement</i>
          <template v-else>{{ d }}</template>
        </div>
      </div>
      <div class="unchunk" v-else>
        <div
          class="baheader baheader-zen"
          v-for="day of store.dayNames"
          :key="day"
        >
          {{ day }}
        </div>
        <div
          class="uncell uncell-zen"
          v-for="(d, ind) of store.dayNames"
          :class="ind + 1 == store.dayOfHabit+1 ? 'selected-date' : ''"
          :key="ind"
        >
          <i class="material-icons holiday">self_improvement</i>
        </div>
      </div>
    </div>
  </section>
</template>
