<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const daysInHabit = ref(45);
const dayOfHabit = ref(0);
watchEffect(() => {
  let startOfYear = Number(new Date(new Date().getFullYear(), 0, 1));
  let dayOfYear = Math.floor(Number(new Date(Number(new Date()) - startOfYear)) / 86400000);
  // add 1?? On Jan 17, it said 18 Struggles, so I took away the +1
  store.setDayOfYear(dayOfYear);
  dayOfHabit.value = store.dayOfYear - store.habitNum * daysInHabit.value;
  store.setDayNum(dayOfHabit.value);
  store.setHabitNum(Math.floor(store.dayOfYear / daysInHabit.value));
});
const emit = defineEmits(["habit"]);
</script>
<template>
  <section @click="emit('habit')" id="habits">
    <!-- <div style="cursor: pointer;" class="above-cal"> -->
      <!-- <h2> -->
        <!-- {{ store.dayNames[(dayOfHabit) % 5] }}{{", "}} -->
        <!-- {{ dayOfHabit+1 }} -->
        
        <!-- Habit  -->
        <!-- {{ Number(String(store.forma).slice(-4)) + 10000 }} -->
      <!-- </h2> -->
    <!-- </div> -->
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
          v-for="d of daysInHabit"
          :class="d == dayOfHabit+1 ? 'selected-date' : ''"
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
          :class="ind + 1 == dayOfHabit+1 ? 'selected-date' : ''"
          :key="ind"
        >
          <i class="material-icons holiday">self_improvement</i>
        </div>
      </div>
    </div>
  </section>
</template>
