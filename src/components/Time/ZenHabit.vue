<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const daysInHabit = ref(45);
watchEffect(() => {
  let startOfYear = Number(new Date(new Date().getFullYear(), 0, 1));
  let dayOfYear = Math.floor(Number(new Date(Number(new Date()) - startOfYear)) / 86400000);
  // add 1?? On Jan 17, it said 18 Struggles, so I took away the +1
  store.setDayOfYear(dayOfYear);
  store.setDayNum(store.dayOfHabit);
  store.setHabitNum(Math.floor(store.dayOfYear / daysInHabit.value));
});
const emit = defineEmits(["calendar"]);
</script>
<template>
  <section @click="emit('calendar')" id="habits">
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
