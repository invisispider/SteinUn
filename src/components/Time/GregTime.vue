<script setup>
import { ref } from "vue";
import { useTime } from "@/stores/time.ts";
const store = useTime();
const svgH = ref(1100);
const svgW = ref(480);
const svgGuageH = ref(20);
</script>
<template>
  <div style="float: left, margin: 15px">
    <h2>GregTime</h2>
    <h3>{{ store.forma }}</h3>
    <div>
      <svg :width="svgW" :height="svgGuageH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" />
          <rect :width="store.second * 8" :height="svgH" fill="blue" />
        </g>
        <text y="16" fill="white">Second: {{ store.second }}</text>
      </svg>
    </div>
    <div>
      <svg :width="svgW" :height="svgGuageH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" />
          <rect :width="store.minute * 8" :height="svgH" fill="blue" />
        </g>
        <text y="16" fill="white">Minute: {{ store.minute }}</text>
      </svg>
    </div>
    <div>
      <svg :width="svgW" :height="svgGuageH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" />
          <rect :width="store.hour * 20" :height="svgH" fill="blue" />
        </g>
        <text y="16" fill="white">Hour: {{ store.hour }}</text>
      </svg>
    </div>
  </div>
</template>
