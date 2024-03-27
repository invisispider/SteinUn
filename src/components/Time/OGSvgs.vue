<script setup lang="ts">
import { computed } from 'vue';
import { useTime } from "@/stores/time.ts";
import { useMonitorSize } from '@/composables/monitor-size';
const sizes = useMonitorSize();
const store = useTime();
const svgW = computed(()=> { 
  // console.log(sizes.browserWidth.value)
  return sizes.browserWidth.value<400?sizes.browserWidth.value:400;
});
// watchEffect(() => {
//   if (sizes.browserWidth<400) {
//     svgW.value = sizes.browserWidth
//   } else {
//     svgW.value = 400
//   }
// });
// onUnmounted(() => {
//   unSet();
// })
const svgH = 22;
const emit = defineEmits(["zentime"]);
</script>
<template>
  <div class="zenclock-container time-border" @click="emit('zentime')">
    <div class="clock">
      <h2>Clock</h2>
      <p>Not going round a circle. Making progress towards outcomes.</p>
      <svg :width="svgW" :height="svgH"
        :viewBox="`0 0 ${svgW+3} ${svgH+3}`"
      >
        <g>
          <rect :width="svgW" :height="svgH" fill="black" class="stroke-me" />
          <rect
            :width="(svgW / 10.8) * store.zsess"
            :height="svgH"
            fill="rgba(106, 73, 155, 1)"
          />
        </g>
        <text x="4" y="16" fill="white">
          Session: {{ Number(1 + store.zsess) % 11 }} {{ store.zhabitNames }}
        </text>
      </svg>
      <svg :width="svgW" :height="svgH"
      :viewBox="`0 0 ${svgW+3} ${svgH+3}`"
      >
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
            fill="rgba(106, 73, 155, 1)"
          />
        </g>
        <text x="4" y="16" fill="white">
          While & Moment: {{ store.zmoment }}
        </text>
      </svg>
      <svg :width="svgW" :height="svgH"
      :viewBox="`0 0 ${svgW+3} ${svgH+3}`"
      >
        <g>
          <rect :width="svgW" :height="svgH" fill="black" class="stroke-me" />
          <rect
            :width="(svgW / store.ins_in_mom) * store.instant"
            :height="svgH"
            fill="rgba(106, 73, 155, 1)"
            />
        </g>
        <text x="4" y="16" fill="white">Instant: {{ store.instant }}</text>
      </svg>
    </div>
  </div>
</template>
