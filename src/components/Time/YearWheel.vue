<script setup lang="ts">
import { ref, watch } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const emit = defineEmits(["year"]);
const boxWidth = 315;
const boxHeight = 315;
// const resizeRef = (num: number) => num;
const angle = ref(store.dayOfYear);
watch(()=>store.dayOfYear, (day)=>{
  angle.value=(day)
})
</script>
<template>
  <div class="zenwheel pointer" @click="emit('year')" style="cursor: pointer">
    <svg 
      :viewBox="`35 180 ${boxWidth+20} ${boxHeight-60}`"
      :width="boxWidth" :height="boxHeight"
    >
      <circle :r="160" :cx="200" :cy="300" class="pie-chart" />
      <circle
        :r="75"
        :cx="200"
        :cy="300"
        fill="white"
        stroke="white"
        stroke-width="170"
        stroke-dasharray="2 57"
        />
        <g class="year-clock-hand" id="year-anim-clock-hand">
          <title>This is which day it is in the current year.</title>
          <marker id="arrow" 
            viewBox="0 0 10 10" 
            refX="3" 
            refY="3" 
            markerWidth="6" 
            markerHeight="6" 
            orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" />
          </marker>
          <line class="year-hand"
            marker-end="url(#arrow)" 
            :x1="200"
            :y1="300"
            x2="204"
            y2="160"
            stroke-width="4"
            stroke-linecap="round"
            :transform="`rotate(${angle} 200 300)`"
          />
        </g>
        <text x="200" y="100" fill="black" class="year-markers">SOLSTICE</text>
        <text class="year-markers">EQUINOX</text>

        <g @click="emit('year')">
          <title>Like Months, Habits divide the year into 45-day periods.</title>
          <text
          class="habit-names"
          :class="store.habitNum === 0 ? 'active' : ''"
          :x="214"
          :y="195"
          >
          {{ store.habitNames[0] }}
          </text>

        <text
          class="habit-names"
          :class="store.habitNum === 1 ? 'active' : ''"
          :x="274"
          :y="260"
        >
          {{ store.habitNames[1] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 2 ? 'active' : ''"
          :x="274"
          :y="350"
        >
          {{ store.habitNames[2] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 3 ? 'active' : ''"
          :x="214"
          :y="410"
        >
          {{ store.habitNames[3] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 4 ? 'active' : ''"
          :x="134"
          :y="410"
        >
          {{ store.habitNames[4] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 5 ? 'active' : ''"
          :x="64"
          :y="350"
        >
          {{ store.habitNames[5] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 6 ? 'active' : ''"
          :x="64"
          :y="260"
        >
          {{ store.habitNames[6] }}
        </text>
        <text
          class="habit-names"
          :class="store.habitNum === 7 ? 'active' : ''"
          :x="134"
          :y="195"
        >
          {{ store.habitNames[7] }}
        </text>
      </g>
      <!-- <circle :r="54" :cx="205" :cy="120" fill="white" /> -->
      <circle
        class="bisque"
        :r="62"
        :cx="200"
        :cy="300"
        stroke-width="32"
        stroke-dasharray="1 1"
      />
      <g>
        <title>Five-day Holiday festival Cycle considered off the calendar.</title>
        <text class="habit-names" :x="163" :y="160">~newZen~</text>
      </g>
      <g>
        <title>We are this many days into the year and degrees around the wheel.</title>
        <text x="200" y="300" class="habit-names"
          text-anchor="middle" dominant-baseline="middle">Day {{store.dayOfYear}}</text>
      </g>
      <g>
        <title>Seasons change on solstice and equinox in both systems.</title>
        <text class="year-markers" x="175" y="220">Solstice</text>
        <text class="year-markers" x="275" y="300">Equinox</text>
        <text class="year-markers" x="210" y="272">WINTER</text>
        <text class="year-markers" x="210" y="340">SPRING</text>
        <text class="year-markers" x="135" y="340">SUMMER</text>
        <text class="year-markers" x="135" y="272">FALL</text>
      </g>
    </svg>
  </div>
</template>
