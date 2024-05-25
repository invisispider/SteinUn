<script setup lang="ts">
import { ref, watch } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const emit = defineEmits(["zendate", "holiday", "solstice", "habits", "newzen"]);
const boxWidth = 315;
const boxHeight = 315;
// const resizeRef = (num: number) => num; 
const angle = ref(180);
watch(()=>store.dayOfYear, (day)=>{
  angle.value=(day%360)
})
</script>
<template>
  <div class="zenwheel pointer" @click="emit('zendate')" style="cursor: pointer">
    <svg 
      :viewBox="`35 180 ${boxWidth+20} ${boxHeight-60}`"
      :width="boxWidth" :height="boxHeight"
    >
      <title>unLimited Year</title>
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
      <g @click="emit('habits')">
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
        :r="62"
        :cx="200"
        :cy="300"
        fill="bisque"
        stroke="tomato"
        stroke-width="22"
        stroke-dasharray="1 1"
      />
      <text class="habit-names" :x="163" :y="160" @click="emit('newzen')">~newZen~</text>
      <!-- <text :x="266" :y="226" fill="red" @click="emit('holiday')">Holidays</text> -->
      <!-- <path :d="`M${197} ${450} l${7} ${-300} z`" stroke="white" stroke-width="2" /> -->
      <!-- <text :x="205" :y="478" fill="white" @click="emit('solstice')">
        Solstice
      </text> -->
      <!-- <path :d="`M${50} ${296} l${300} ${6} z`" stroke="white" stroke-width="2" /> -->

      <!-- <path :d="`M${50} ${296} l${300} ${6} z`" stroke="white" stroke-width="2" /> -->
      <!-- <text :x="275" :y="317" fill="darkblue" @click="emit('solstice')">Equinox</text> -->
      <!-- <text :x="173" :y="168" fill="indigo">WINTER</text> -->
      <!-- <text :x="284" :y="298" fill="indigo">SPRING</text> -->
      <!-- <text :x="164" :y="440" fill="indigo">SUMMER</text> -->
      <!-- <text :x="60" :y="295" fill="indigo">FALL</text> -->
      <!-- <circle class="year-clock-axis" cx="200" cy="300" r="9" fill="red" /> -->
      <g class="year-clock-hand" id="year-anim-clock-hand">
        <line class="year-hand"
            :x1="200"
            :y1="300"
            x2="204"
            y2="160"
            stroke-width="4"
            stroke-linecap="round"
            opacity="0.7"
            :transform="`rotate(${angle} 200 300)`"
        />
        <!-- <circle class="year-clock-hand-axis" cx="200" cy="300" r="9" /> -->
        <text x="200" y="300" class="habit-names"
          text-anchor="middle" dominant-baseline="middle">Day {{store.dayOfYear}}</text>
      </g>
      <!-- <defs>
        <animateTransform
          type="rotate"
          fill="remove"
          restart="always"
          calcMode="linear"
          accumulate="none"
          additive="sum"
          xlink:href="#year-anim-clock-hand"
          repeatCount="indefinite"
          dur="60s"
          to="360 200 300"
          from="0 200 300"
          attributeName="transform"
          attributeType="xml">
        </animateTransform>
      </defs> -->
    </svg>
  </div>
</template>
