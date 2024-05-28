<script setup lang="ts">
import { useTime } from "@/stores/time";
import { computed } from "vue";
import { useMonitorSize } from '@/composables/monitor-size';
const sizes = useMonitorSize();
const store = useTime();
const emit = defineEmits(["clock", "moment", "instant"]);

const svgWidth = 240
const svgHeight = svgWidth*400/svgWidth;
// const svgWidth = computed(()=> { 
//   return sizes.browserWidth.value<400?sizes.browserWidth.value:400;
// });
const gregWidth = svgWidth / 8;
const halfWidth = svgWidth - gregWidth;
const rSpread = svgHeight / 24;
const zSpread = svgHeight / 10.8;
const zenSpread = svgHeight / 13.5;
const hou_height = computed(() =>
  Math.floor(svgHeight - (svgHeight / 24) * store.zhour)
);
// const rotateOrigin = (h_h: number) =>
  // "transform-origin: " + gregWidth + "px " + h_h + "px";
const svgH = 22;
</script>
<template>
  <div 
    class="day-container">
    <!-- <div class="zenclock-container"> -->
      <!-- <div class="clock"> -->
      <!-- <div @click="emit('clock')"> -->
        <!-- <h2>Clock</h2> -->
        <!-- <p>Not going round a circle. Making progress towards outcomes.</p> -->
      <!-- </div> -->
    <!-- </div> -->
    <svg :width="svgWidth" :height="74" class="zen-borders">
      <g @click="emit('clock')" style="cursor: pointer;">
        <rect :width="svgWidth"
              :height="30" class="daytop-bg">
            </rect>
        <text :height="30" x="50%" y="20" 
          text-anchor="middle" :textLength="svgWidth-100"
          v-text="'Sessions Clock'" class="greg-text" 
        />
      </g>
      <g @click="emit('moment')">
        <rect :y="30" :width="svgWidth" :height="svgH" class="daytop-bg" />
        <rect :width="(svgWidth / 100) * store.zmoment"
          :height="svgH" :y="30"
          class="alt-fill"
        />
        <rect :width="(svgWidth / 10) * store.zwhile"
          :height="svgH" :y="30" class="inner-rect"
        />
        <text x="4" :y="16+30" class="daytop-tx">
          Moment: {{ store.zmoment }}
        </text>
      </g>
      <g @click="emit('instant')">
        <rect :y="52" :width="svgWidth" :height="svgH" class="daytop-bg" />
        <rect :y="52" class="inner-rect"
          :width="(svgWidth / store.ins_in_mom) * store.instant" 
          :height="svgH"
          />
        <text x="4" :y="30+22+16" class="daytop-tx">Instant: {{ store.instant }}</text>
      </g>
    </svg>

    <svg :width="svgWidth" :height="svgHeight" @click="emit('clock')" style="cursor: pointer;">
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
            :class="(10-j)<=store.zsess?'session-before':'session-after'"
            />
          <text
            :x="svgWidth / 4"
            :y="j * zSpread + zSpread / 2"
            class="zen-mint"
            :class="{ sessionActive: (10-j)==store.zsess} "
          >
          {{ j!=0?11 - j:'' }} {{ store.zsessionNames[10 - j] }}
          </text>
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
        <!--<circle
          :cx="gregWidth"
          :cy="hou_height"
          r="20"
          class="center-circle tick-pulse"
          :style="rotateOrigin(hou_height)"
        />-->
      </g>

    </svg>
  </div>
</template>
