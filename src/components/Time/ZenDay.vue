<script setup lang="ts">
import { useTime } from "@/stores/time";
import { computed } from "vue";
// import { useMonitorSize } from '@/composables/monitor-size';
// const sizes = useMonitorSize();
const store = useTime();
const svgWidth = 220

// computed(() => sizes.browserWidth.value<600 ? sizes.browserWidth.value : 600);
const svgHeight = 500;

const gregWidth = svgWidth / 5;
const halfWidth = svgWidth - gregWidth;
const rSpread = svgHeight / 24;
const zSpread = svgHeight / 10.8;
const zenSpread = svgHeight / 13.5;
const hou_height = computed(() =>
  Math.floor(svgHeight - (svgHeight / 24) * store.zhour)
);
const rotateOrigin = (h_h: number) =>
  "transform-origin: " + gregWidth + "px " + h_h + "px";
</script>
<template>
  <div class="day-container time-border">
    <h2>Day</h2>
    <svg :width="svgWidth" :height="svgHeight">
      <g id="gregMeter" fill="none">
        <template v-for="(num, i) in 25" :key="num + 100">
          <rect
            v-if="i < 6 || i > 17"
            :y="rSpread * i"
            class="greg-dark"
            :width="gregWidth"
            :height="svgHeight / 24"
          />
          <rect
            v-else
            :y="rSpread * i"
            class="greg-light"
            :width="gregWidth"
            :height="svgHeight / 24"
          />
          <text
            :x="svgWidth / 100"
            :y="i * rSpread - 0.15 * rSpread"
            class="greg-text"
            v-text="(48 - i + 6) % 24"
          />
        </template>
      </g>
      <g id="zenMeter" fill="none">
        <rect
          :x="gregWidth"
          :y="0"
          :width="halfWidth"
          :height="10 * zSpread + zenSpread"
        />
        <text :x="svgWidth / 1.6" :y="0.6 * zenSpread" v-text="`~zen~`" />
        <template v-for="(zses, j) in store.zsessionNames" :key="j + 200">
          <rect
            :x="gregWidth"
            :y="zenSpread + zSpread * j - zSpread"
            :width="halfWidth"
            :height="zSpread"
            class="zen-borders"
          />
          <text
            :x="svgWidth / 4"
            :y="j * zSpread + zSpread / 2"
            class="zen-mint"
          >
            {{ store.zsessionNames[10 - j] }}{{ " | " }}{{ 11 - j }}
          </text>
          <!-- </template> -->
        </template>
      </g>
      <g id="clockHand" fill="none">
        <line
          x1="0"
          :y1="hou_height"
          :x2="halfWidth + gregWidth"
          :y2="hou_height"
          class="clock-hand"
        />
        <circle
          :cx="gregWidth"
          :cy="hou_height"
          r="20"
          class="center-circle tick-pulse"
          :style="rotateOrigin(hou_height)"
        />
      </g>
    </svg>
  </div>
</template>
