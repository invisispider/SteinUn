<script setup lang="ts">
import { ref, watch } from "vue";
import { useTime } from "@/stores/time";
const store = useTime();
const emit = defineEmits(["year"]);
const boxWidth = 315;
const boxHeight = 315;
// const resizeRef = (num: number) => num;
const angle = ref(store.dayOfYear);
watch(()=>store.dayOfYear, (day)=>{
  angle.value=(day)
})
</script>
<template>
  <div class="zenwheel pointer" @click="emit('year')" style="cursor: pointer">
    <!-- <svg class="season-icon summer" width="60px" height="60px" viewBox="0 0 500 500" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="sun">
      <circle class="st8" cx="249.83" cy="255.63" r="142.54"/>
      <g>
      <path class="st8" d="M252.32,29.09l32.12,55.63c1.11,1.92-0.28,4.31-2.49,4.31l-64.23,0c-2.21,0-3.6-2.39-2.49-4.31l32.12-55.63    C248.45,27.17,251.21,27.17,252.32,29.09z"/>
      <path class="st8" d="M399.68,86.23l-13.32,62.83c-0.46,2.16-3.09,3.02-4.73,1.54l-47.76-42.95c-1.64-1.48-1.07-4.18,1.03-4.87    l61.08-19.88C398.08,82.21,400.14,84.06,399.68,86.23z"/>
      <path class="st8" d="M474.27,222.89l-50.62,39.54c-1.74,1.36-4.31,0.33-4.62-1.87l-8.93-63.61c-0.31-2.19,1.87-3.89,3.92-3.06    l59.55,24.07C475.62,218.79,476.01,221.52,474.27,222.89z"/>
      <path class="st8" d="M439.63,378.98l-64.12-3.7c-2.21-0.13-3.45-2.6-2.24-4.45l35.27-53.68c1.21-1.85,3.98-1.69,4.97,0.29    l28.86,57.38C443.36,376.79,441.84,379.11,439.63,378.98z"/>
      <path class="st8" d="M330.43,466.26l-50.03-40.29c-1.72-1.39-1.3-4.12,0.77-4.92l59.9-23.18c2.06-0.8,4.22,0.94,3.88,3.12    l-9.87,63.47C334.73,466.65,332.15,467.65,330.43,466.26z"/>
      <path class="st8" d="M98.13,87.32l13.32,62.83c0.46,2.16,3.09,3.02,4.73,1.54l47.76-42.95c1.64-1.48,1.07-4.18-1.03-4.87    l-61.08-19.88C99.73,83.31,97.67,85.16,98.13,87.32z"/>
      <path class="st8" d="M25.7,223.42l50.03,40.29c1.72,1.39,4.3,0.39,4.64-1.8l9.87-63.47c0.34-2.19-1.81-3.92-3.88-3.12l-59.9,23.18    C24.41,219.3,23.98,222.03,25.7,223.42z"/>
      <path class="st8" d="M58.45,375.79l64.17-2.81c2.21-0.1,3.49-2.55,2.3-4.42L90.4,314.39c-1.19-1.87-3.95-1.74-4.97,0.22    l-29.65,56.98C54.75,373.55,56.23,375.88,58.45,375.79z"/>
      <path class="st8" d="M179.88,469.99l-13.32-62.83c-0.46-2.16,1.6-4.01,3.7-3.33l61.08,19.88c2.1,0.68,2.68,3.39,1.03,4.87    l-47.76,42.95C182.97,473.01,180.34,472.16,179.88,469.99z"/>
      </g>
      </g>
    </svg>

    <svg class="season-icon fall" width="60px" height="60px" viewBox="0 0 14 14"
      role="img"
      focusable="false"
      aria-hidden="true"
      version="1.1"
      id="svg1">
      <path
        d="M6.7552516 12.9749c0-.014.026-.6078.057-1.3203.07-1.5937.069-1.5091.014-1.5845-.05-.069-.1077-.1023-.1772-.1023-.083 0-.6683.078-1.4387.1904-.7811.1145-1.2022.1714-1.2088.1634 0 0 .049-.178.114-.3894.1362-.4432.1431-.4966.081-.6202-.037-.072-.1235-.1458-1.3903-1.174-.7431-.6032-1.3498-1.1029-1.3482-1.1104 0-.01.1399-.078.3074-.1559.1674-.078.3208-.1578.3409-.1767.047-.044.06-.1153.039-.2162-.01-.044-.1191-.4536-.2445-.9098-.1254-.4562-.2262-.831-.224-.8328 0 0 .3498.069.7726.1586.4228.089.7944.1619.8258.1619.071 0 .1472-.039.186-.096.016-.024.073-.1961.1262-.3829.053-.1868.101-.3477.1063-.3576.01-.012.2307.2294.6279.6742.34.3808.6426.7132.6725.7388.063.054.1597.085.2205.072.09-.02.1459-.1186.1458-.2569 0-.039-.1214-.7149-.2696-1.5015-.1483-.7867-.2675-1.4324-.2648-1.4351 0 0 .196.092.4297.2111.4084.2074.4284.2159.5121.2164.1052.0006.1874-.04.2375-.1163.018-.028.2467-.4496.5077-.937.2609-.4873.4788-.8861.4842-.8861.01 0 .2234.3988.4845.8861.261.4874.4894.9087.5074.9363.037.056.099.098.1693.1137.098.022.1873-.011.6018-.223.2219-.1136.4057-.2042.4084-.2014 0 0-.1162.6486-.2645 1.4353-.1502.7968-.2696 1.4661-.2696 1.5111-.0001.1929.1119.2909.2654.2322.036-.014.086-.043.1113-.065.025-.022.3239-.3516.6633-.7316.3964004-.444.6204004-.6845.6266004-.6729.01.01.053.1708.1064.3576.053.1868.1099.3591.1262.3829.039.057.1148.096.1859.096.032 0 .4031-.073.8259-.1619.4228-.089.7704-.1604.7726-.1586 0 0-.1026.3902-.2328.863s-.2401.8987-.2442.9464c-.011.1313.011.1499.3886.3264.1717.08.3122.1507.3122.1566 0 .01-.6085.5047-1.3523 1.1084-1.2679004 1.0292-1.3548004 1.1025-1.3915004 1.175-.063.1236-.056.177.081.6202.065.2114.1163.3866.114.3894-.01.01-.4278-.049-1.2088-.1634-.7893-.1157-1.3563-.1904-1.4447-.1904-.069 0-.1496.065-.1857.1494-.023.054-.022.1261.01 1.3025.018.6851.033 1.3208.034 1.4128l.0008.1673h-.2206c-.2007 0-.2207 0-.2206-.025z"
        id="path1"
        style="fill-opacity:1;stroke-opacity:1;stroke-width:0.7200025;stroke-dasharray:none;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill;" />
      <path
        style="fill:none;fill-opacity:1;stroke-width:0.368608;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"
        d="M 7.016685,9.5944104 7.0298407,3.5128157"
        id="path4" />
      <path
        style="fill:none;fill-opacity:1;stroke-width:0.339385;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"
        d="m 7.1150557,9.5716228 c 0,0 1.8785088,-2.6395429 3.8071823,-3.4044128"
        id="path5"
        sodipodi:nodetypes="cc" />
      <path
        style="fill:none;fill-opacity:1;stroke-width:0.312901;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"
        d="m 6.7889125,9.4491951 c 0,0 -1.6711351,-2.5221005 -3.3868968,-3.2529385"
        id="path6"
        sodipodi:nodetypes="cc" />
    </svg>


    <svg class="season-icon winter" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M3.33978 7.00042L6.80389 9.00042M6.80389 9.00042L17.1962 15.0004M6.80389 9.00042L5.70581 4.90234M6.80389 9.00042L2.70581 10.0985M17.1962 15.0004L20.6603 17.0004M17.1962 15.0004L21.2943 13.9023M17.1962 15.0004L18.2943 19.0985" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M20.66 7.00042L17.1959 9.00042M17.1959 9.00042L6.80364 15.0004M17.1959 9.00042L18.294 4.90234M17.1959 9.00042L21.294 10.0985M6.80364 15.0004L3.33954 17.0004M6.80364 15.0004L2.70557 13.9023M6.80364 15.0004L5.70557 19.0985" stroke-width="1.5" stroke-linecap="round"/>
    </svg>

    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      class="season-icon spring" width="60px" height="60px" viewBox="0 0 512 512"  xml:space="preserve">
    <g>
      <path class="st0" d="M214.2,319.991L214.2,319.991L214.2,319.991C197.34,301.585,232.293,180.319,27.075,97.569
        c-33.75,6.125-71.688,176.672,127.719,228.844c59.609,29.797,50.219,79.469,50.219,107.078h38.344
        c0,0-15.688-87.578,54.375-119.672c47.672-21.828,179.328-28.828,214.265-225.547C445.387,49.757,208.825,124.835,214.2,319.991z
        M165.84,286.804c-4.063,2.813-9.641,1.797-12.453-2.266c-19.516-28.266-73.484-93.484-97.344-117.281
        c-3.5-3.484-3.5-9.156,0-12.641c3.484-3.5,9.156-3.5,12.641,0c25.344,25.391,78.688,89.859,99.422,119.734
        C170.918,278.413,169.903,283.991,165.84,286.804z M415.965,141.663c-65.25,41.234-118.578,109.844-142.625,147.109
        c-2.672,4.141-8.219,5.328-12.359,2.656c-4.141-2.688-5.328-8.219-2.641-12.375c25.141-38.766,79.141-108.766,148.047-152.5
        c4.172-2.656,9.688-1.406,12.344,2.766C421.372,133.491,420.137,139.007,415.965,141.663z"/>
    </g>
    </svg> -->



    <svg 
      :viewBox="`35 180 ${boxWidth+20} ${boxHeight-60}`"
      :width="boxWidth" :height="boxHeight"
    >

    <circle :r="160" :cx="200" :cy="300" class="pie-chart" />

    <circle
      :r="75"
      :cx="200"
      :cy="300"
      stroke="red"
      fill="red"
      stroke-width="170"
      stroke-dasharray="6 360"
      />

    <circle class="habit-divider"
      :r="75"
      :cx="200"
      :cy="300"
      fill="white"
      stroke="white"
      stroke-width="170"
      stroke-dasharray="2 57"
      />
        <g class="year-clock-hand" id="year-anim-clock-hand">
          <title>This is which day it is in the current year.</title>
          <marker id="arrow" 
            viewBox="0 0 10 10" 
            refX="3" 
            refY="3" 
            markerWidth="6" 
            markerHeight="6" 
            orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" />
          </marker>
          <line class="year-hand"
            marker-end="url(#arrow)" 
            :x1="200"
            :y1="300"
            x2="204"
            y2="160"
            stroke-width="4"
            stroke-linecap="round"
            :transform="`rotate(${angle} 200 300)`"
          />
        </g>
        <text x="200" y="100" fill="black" class="year-markers">SOLSTICE</text>
        <text class="year-markers">EQUINOX</text>

        <g @click="emit('year')">
          <title>Like Months, Habits divide the year into 45-day periods.</title>
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
        class="bisque"
        :r="62"
        :cx="200"
        :cy="300"
        stroke-width="32"
        stroke-dasharray="1 1"
      />
      <!-- <g>
        <title>Five-day Holiday festival Cycle considered off the calendar.</title>
        <text class="habit-names" :x="163" :y="160">~newZen~</text>
      </g> -->
      <g>
        <title>We are this many days into the year and degrees around the wheel.</title>
        <text x="200" y="300" class="habit-names"
          text-anchor="middle" dominant-baseline="middle">Day {{store.dayOfYear}}</text>
      </g>
      <g>
        <title>Seasons change on solstice and equinox in both systems.</title>
        <!-- <text class="year-markers" x="175" y="220">Solstice</text>
        <text class="year-markers" x="275" y="300">Equinox</text> -->
        
        <!-- <text class="year-markers" x="210" y="272">WINTER</text>
        <text class="year-markers" x="210" y="340">SPRING</text>
        <text class="year-markers" x="135" y="340">SUMMER</text>
        <text class="year-markers" x="135" y="272">FALL</text> -->
      </g>
    </svg>

  </div>
</template>
<style lang="sass">
.season-icon
  position: absolute
  opacity: 0.5
  fill: #888
  stroke: #888
  width: 90px
  height: 90px
.spring
  left: 57%
  top: 75%
.summer
  left: 30%
  top: 75%
.fall
  transform: rotate(45deg)
  left: 30%
  top: 50%
.winter
  left: 58%
  top: 50%
</style>