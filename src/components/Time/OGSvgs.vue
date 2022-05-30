<script setup>
import { useTime } from "@/stores/time.ts"
const store = useTime()
const svgW = 400
const svgH = 22
</script>
<template>
  <div class="zentime-container">
    <div>
      <svg :width="svgW" :height="svgH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" class="stroke-me" />
          <rect
          :width="(svgW / 10.8) * store.zsess"
          :height="svgH"
          fill="MediumPurple"
          />
        </g>
        <text x="4" y="16" fill="white">
          Session: {{ Number(1 + store.zsess) % 11 }}
        </text>
      </svg>
    </div>
    <div>
      <svg :width="svgW" :height="svgH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" class="stroke-me" />
          <rect
            :width="(svgW / 100) * store.zmoment"
            :height="svgH"
            fill="MediumSeaGreen"
          />
          <rect
            :width="(svgW / 10) * store.zwhile"
            :height="svgH"
            fill="MediumPurple"
          />
        </g>
        <text x="4" y="16" fill="white">While & Moment: {{ store.zmoment }}</text>
      </svg>
    </div>
    <div>
      <svg :width="svgW" :height="svgH">
        <g>
          <rect :width="svgW" :height="svgH" fill="black" class="stroke-me" />
          <rect
          :width="(svgW / store.ins_in_mom) * store.instant"
          :height="svgH"
          fill="MediumPurple"
          />
        </g>
        <text x="4" y="16" fill="white">Instant: {{ store.instant }}</text>
      </svg>
    </div>
  </div>
</template>
