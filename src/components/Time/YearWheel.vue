<script setup lang="ts">
import { ref, computed } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const emit = defineEmits(["holiday", "solstice", "equinox", "habits", "newzen"]);
const BoxWidth = ref(350);
const BoxHeight = ref(300);
const resizeRef = (num: number) => num; 
</script>
<template>
  <div class="zenwheel time-border">
    <h2>The Year</h2>
    <svg 
      :viewBox="`-55 55 ${BoxWidth+180} ${BoxHeight+140}`"
      :width="BoxWidth" :height="BoxHeight"
    >
      <title>The Zen Year</title>
      <circle :r="resizeRef(150)" :cx="resizeRef(200)" :cy="resizeRef(300)" class="pie-chart" />
      <circle
        :r="resizeRef(75)"
        :cx="resizeRef(200)"
        :cy="resizeRef(300)"
        fill="black"
        stroke="darkGreen"
        stroke-width="150"
        stroke-dasharray="2 57"
        />
      <g @click="emit('habits')">
        <text
          :class="store.habitNum === 0 ? 'glow active' : ''"
          :x="resizeRef(214)"
          :y="resizeRef(195)"
          fill="black"
        >
          {{ store.habitNames[0] }}
        </text>
        <text
          :class="store.habitNum === 1 ? 'glow active' : ''"
          :x="resizeRef(274)"
          :y="resizeRef(260)"
          fill="black"
        >
          {{ store.habitNames[1] }}
        </text>
        <text
          :class="store.habitNum === 2 ? 'glow active' : ''"
          :x="resizeRef(274)"
          :y="resizeRef(350)"
          fill="black"
        >
          {{ store.habitNames[2] }}
        </text>
        <text
          :class="store.habitNum === 3 ? 'glow active' : ''"
          :x="resizeRef(214)"
          :y="resizeRef(410)"
          fill="black"
        >
          {{ store.habitNames[3] }}
        </text>
        <text
          :class="store.habitNum === 4 ? 'glow active' : ''"
          :x="resizeRef(134)"
          :y="resizeRef(410)"
          fill="black"
        >
          {{ store.habitNames[4] }}
        </text>
        <text
          :class="store.habitNum === 5 ? 'glow active' : ''"
          :x="resizeRef(64)"
          :y="resizeRef(350)"
          fill="black"
        >
          {{ store.habitNames[5] }}
        </text>
        <text
          :class="store.habitNum === 6 ? 'glow active' : ''"
          :x="resizeRef(64)"
          :y="resizeRef(260)"
          fill="black"
        >
          {{ store.habitNames[6] }}
        </text>
        <text
          :class="store.habitNum === 7 ? 'glow active' : ''"
          :x="resizeRef(134)"
          :y="resizeRef(195)"
          fill="black"
        >
          {{ store.habitNames[7] }}
        </text>
      </g>
      <circle :r="resizeRef(54)" :cx="resizeRef(205)" :cy="resizeRef(120)" fill="white" />
      <circle
        :r="resizeRef(18)"
        :cx="resizeRef(205)"
        :cy="resizeRef(120)"
        fill="bisque"
        stroke="tomato"
        stroke-width="15"
        stroke-dasharray="1 1"
      />
      <text :x="resizeRef(165)" :y="resizeRef(125)" fill="black" @click="emit('newzen')">~NewZen~</text>
      <text :x="resizeRef(266)" :y="resizeRef(126)" fill="red" @click="emit('holiday')">Holidays</text>
      <path :d="`M${resizeRef(196)} ${resizeRef(480)} l${resizeRef(8)} ${resizeRef(-323)} z`" stroke="white" stroke-width="2" />
      <text :x="resizeRef(205)" :y="resizeRef(478)" fill="white" @click="emit('solstice')">
        Solstice
      </text>
      <path :d="`M${resizeRef(24)} ${resizeRef(296)} l${resizeRef(350)} ${resizeRef(6)} z`" stroke="white" stroke-width="2" />
      <text :x="resizeRef(375)" :y="resizeRef(307)" fill="white" @click="emit('equinox')">Equinox</text>
      <text :x="resizeRef(173)" :y="resizeRef(162)" fill="indigo">WINTER</text>
      <text :x="resizeRef(284)" :y="resizeRef(298)" fill="indigo">SPRING</text>
      <text :x="resizeRef(164)" :y="resizeRef(440)" fill="indigo">SUMMER</text>
      <text :x="resizeRef(70)" :y="resizeRef(295)" fill="indigo">FALL</text>
    </svg>
  </div>
</template>
