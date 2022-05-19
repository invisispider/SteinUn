<script setup>
import { computed } from "vue"
import { useTime } from "@/stores/time.ts"
const store = useTime()
const svgHeight = 600
const svgWidth = 300
const halfWidth = svgWidth/2
const rSpread = svgHeight / 24
const zSpread = svgHeight / 10.8
const zenSpread = svgHeight / 13.5
const hou_height = computed(() => svgHeight - (svgHeight / 24) * store.zhour)
</script>
<template>
  <div class="time-container">
    <svg :width="svgWidth" :height="svgHeight">
      <g id="gregMeter" fill="none">
        <template v-for="(num, i) in 25">
          <rect v-if="i < 6 || i > 17" :y="rSpread * i"
            class="greg-dark" :width="halfWidth" :height="svgHeight / 24"
          />
          <rect v-else :y="rSpread * i" class="greg-light"
            :width="halfWidth" :height="svgHeight / 24"
          />
          <text
            :x="svgWidth / 100"
            :y="i * rSpread - 0.15 * rSpread"
            class="greg-text"
            v-text="(48-i+6)%24"
          />
        </template>
      </g>
      <g id="zenMeter" fill="none">
        <rect :x="halfWidth" :y="0" :width="halfWidth" :height="zenSpread*8" class="zen-borders" />
        <text :x="svgWidth/1.6" :y="0.6*zenSpread" v-text="`~zen~`" />
        <template v-for="(zses, j) in store.zsessionNames" :key="j">
          <template v-for="k in 10" :key="k">
            <rect :x="halfWidth" :y="(svgHeight/10.8)*(j)+(svgHeight/108)*(7+k)"
              :width="halfWidth" :height="svgHeight/108" class="zen-dark"
            />
            <rect :x="halfWidth" :y="zenSpread+zSpread*j-zSpread"
            :width="halfWidth" :height="zSpread" class="zen-borders"
            />
            <text :x="svgWidth/1.6" :y="j*zSpread+zSpread/2" class="zen-mint">
              {{ store.zsessionNames[10-j] }}{{ " | " }}{{ 11 - j }}
            </text>
          </template>
        </template>
      </g>
      <g id="clockHand" fill="none" >
        <line x1="0" :y1="hou_height" :x2="svgWidth"
          :y2="hou_height" class="clock-hand"
        />
        <circle :cx="halfWidth" :cy="hou_height" r="30" class="center-circle tick-pulse" />
      </g>
    </svg>
  </div>
</template>
