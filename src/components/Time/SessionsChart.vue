<script setup>
import { ref, computed } from "vue";
import { useTime } from "@/stores/time.ts";
const store = useTime();
const zView = ref(false);
const svgHeight = 680;
const svgWidth = 250;
const rSpread = svgHeight / 24;
const zSpread = svgHeight / 10.8;
const zenSpread = svgHeight / 13.5;
const changeView = () => {
  zView.value = !zView.value;
  alert(zView.value);
};
const hou_height = computed(() => svgHeight - (svgHeight / 24) * store.zhour);
// const sess = computed(() => Math.floor(100*(1+(store.zhour/store.hou_in_sess)))/100)
</script>
<template>
  <div style="textAlign: center, float: right, padding: 0.9em">
    <svg :width="svgWidth" :height="svgHeight">
      <g fill="none">
        <template v-for="i in 25" :key="i">
          <rect
            v-if="i < 6 || i > 17"
            :y="rSpread * i"
            stroke="#D0FFF1"
            fill="darkBlue"
            :width="svgWidth / 2"
            :height="svgHeight / 24"
          />
          <rect
            v-else
            :y="rSpread * i"
            stroke="#D0FFF1"
            fill="blue"
            :width="svgWidth / 2"
            :height="svgHeight / 24"
          />
          <text
            :x="svgWidth / 100"
            :y="i * rSpread - -0.15 * rSpread"
            fill="white"
          >
            {{ (48 - i + 6) % 24 }}
          </text>
        </template>
      </g>
      <g fill="none">
        <template v-for="j in 12" :key="j">
          <template v-for="k in 12" :key="k">
            <rect
              :x="svgWidth / 2"
              :y="(svgHeight / 10.8) * i + (svgHeight / 108) * j"
              stroke="#715"
              fill="DarkViolet"
              :width="svgWidth / 2"
              :height="svgHeight / 108"
            />
            <template v-if="i == 0">
              <rect
                :x="svgWidth / 2"
                :y="zSpread * i"
                stroke="#D0FFF1"
                fill="rgb(10, 30, 10, 50%)"
                :width="svgWidth / 2"
                :height="zenSpread"
              />
              <text :x="svgWidth / 1.6" :y="0.8 * zenSpread" fill="#4FA">
                {{ store.zsessionNames.filter((name, idx) => idx == 0).pop() }}
              </text>
            </template>
            <template v-else>
              <rect
                :x="svgWidth / 2"
                :y="zenSpread + zSpread * i - zSpread"
                stroke="#D0FFF1"
                fill="none"
                :width="svgWidth / 2"
                :height="zSpread"
              />
              <text
                :x="svgWidth / 1.6"
                :y="i * zSpread + zSpread / 1.5"
                fill="#4FA"
              >
                {{
                  store.zsessionNames
                    .filter((name, idx) => idx == 11 - i)
                    .pop()
                }}{{ " | " }}{{ 11 - i }}
              </text>
            </template>
          </template>
        </template>
      </g>
      <g fill="none">
        <line
          x1="0"
          :y1="hou_height"
          :x2="svgWidth"
          :y2="hou_height"
          style="stroke: OrangeRed, strokeWidth: 0.2rem"
        />
        <circle
          @click.prevent="changeView"
          :cx="svgWidth / 2"
          :cy="hou_height"
          r="25"
          stroke="MintCream"
          strokeWidth="2"
          fill="DarkOrchid"
        />
        <text
          fontSize="x-large"
          :x="0.8 * svgWidth"
          :y="hou_height"
          fill="white"
        >
          {{ store.zsess }}
        </text>
        <text fontSize="x-large" :x="rSpread" :y="hou_height" fill="white">
          {{ Math.floor(Number(store.true_h)) }}
        </text>
      </g>
    </svg>
  </div>
</template>
