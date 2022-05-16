<script setup>
import { ref, computed } from "vue";
import { useTime } from "@/stores/time.ts";
const store = useTime();
const svgW = ref(315);
const svgGuageH = ref(20);
const displayZenTime = computed(() => [
  store.zsessionNames.filter((all, id) => id == 1 + store.zsess).pop(),
  " ",
  store.zsess + 1,
  ".",
  store.zmoment,
  "`",
  store.instant,
  " ",
  // '  || H ',
  Number(String(store.forma).slice(-4)) + 10000,
]);
</script>
<template>
  <div style="float: left, margin: 15px">
    <h2>zenTime</h2>
    <h3>
      <template v-for="t of displayZenTime">{{ t }}</template>
    </h3>
    <div>
      <svg :width="svgW" :height="svgGuageH">
        <g>
          <rect :width="svgW" :height="svgGuageH" fill="black" />
          <rect
            :width="(svgW / store.ins_in_mom) * store.instant"
            :height="svgGuageH"
            fill="MediumPurple"
          />
        </g>
        <text y="16" fill="white">Instant: {{ store.instant }}</text>
      </svg>
    </div>
    <div>
      <div>
        <svg :width="svgW" :height="svgGuageH">
          <g>
            <rect :width="svgW" :height="svgGuageH" fill="black" />
            <rect
              :width="(svgW / 100) * store.zmoment"
              :height="svgGuageH"
              fill="MediumSeaGreen"
            />
            <rect
              :width="(svgW / 10) * store.zwhile"
              :height="svgGuageH"
              fill="MediumPurple"
            />
          </g>
          <text y="16" fill="white">While & Moment: {{ store.zmoment }}</text>
        </svg>
      </div>
      <div>
        <svg :width="svgW" :height="svgGuageH">
          <g>
            <rect :width="svgW" :height="svgGuageH" fill="black" />
            <rect
              :width="(svgW / 10.8) * store.zsess"
              :height="svgGuageH"
              fill="MediumPurple"
            />
          </g>
          <text y="16" fill="white">
            Session: {{ Number(1 + store.zsess) % 11 }}
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>
