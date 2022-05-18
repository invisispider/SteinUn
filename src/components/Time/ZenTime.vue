<script setup>
import { ref, computed } from "vue";
import { useTime } from "@/stores/time.ts";
import SessionsChart from "@/components/Time/SessionsChart.vue"
const store = useTime();
const displayZenTime = computed(() => [
	store.zsessionNames.filter((all, id) => id == 1 + store.zsess).pop(),
	" ", store.zsess + 1,
	".", store.zmoment,
	"`", store.instant,
	" ",
	,"  || H ",
	Number(String(store.forma).slice(-4)) + 10000,
])
</script>
<template>
	<div class="zentime-container">
		<div class="zen-meters">
			<h2>Gregorian Time</h2>
			<h3>{{ store.forma }}</h3>
			<label for="Hour">Hour: {{store.hour}}</label>
			<meter id="Hour" :value="store.hour" min="0" max="60"></meter>
			<label for="Minute">Minute: {{store.minute}}</label>
			<meter id="Minute" :value="store.minute" min="0" max="60"></meter>
			<label for="Second">Second: {{store.second}}</label>
			<meter id="Second" :value="store.second" min="0" max="60"></meter>
			<h2>zenTime</h2>
			<h3>
				<template v-for="t of displayZenTime">{{ t }}</template>
			</h3>
			<label for="Session">Session: {{store.zsess}}</label>
			<progress id="Session" :value="store.zsess" max="100"></progress>
			<label for="While">{{`While&Moment: ${store.zmoment+store.zwhile}`}}</label>
			<progress id="While" :value="store.zmoment+store.zwhile" max="100"></progress>
			<label for="Instant">Instant: {{store.instant}}</label>
			<progress id="Instant" :value="store.instant" max="80"></progress>
		</div>
		<component :is="SessionsChart"></component>
	</div>
</template>

<!--
Kaimen through the window... last night
// <script setup>
// import { ref, computed } from "vue";
// import { useTime } from "@/stores/time.ts";
// const store = useTime();
// const svgW = ref(300);
// const svgH = ref(20);
// const displayZenTime = computed(() => [
//   store.zsessionNames.filter((all, id) => id == 1 + store.zsess).pop(),
//   " ", store.zsess + 1,
//   ".", store.zmoment,
//   "`", store.instant,
//   " ",
//   ,"  || H ",
//   Number(String(store.forma).slice(-4)) + 10000,
// ])
// </script>
// <template>
//   <div class="zentime-container">
//     <div>
//       <h2>Gregorian Time</h2>
//       <h3>{{ store.forma }}</h3>
//       <div>
//         <svg :width="svgW" :height="svgH">
//           <g>
//             <rect :width="svgW" :height="svgH" fill="black" />
//             <rect :width="store.second * 8" :height="svgH" fill="rgb(100, 189, 205)" />
//           </g>
//           <text y="16" fill="white">Second: {{ store.second }}</text>
//         </svg>
//       </div>
//       <div>
//         <svg :width="svgW" :height="svgH">
//           <g>
//             <rect :width="svgW" :height="svgH" fill="black" />
//             <rect :width="store.minute * 8" :height="svgH" fill="rgb(100, 189, 205)" />
//           </g>
//           <text y="16" fill="white">Minute: {{ store.minute }}</text>
//         </svg>
//       </div>
//       <div>
//         <svg :width="svgW" :height="svgH">
//           <g>
//             <rect :width="svgW" :height="svgH" fill="black" />
//             <rect :width="store.hour * 20" :height="svgH" fill="rgb(100, 189, 205)" />
//           </g>
//           <text y="16" fill="white">Hour: {{ store.hour }}</text>
//         </svg>
//       </div>
//     </div>
//     <div class="zentime-container">
//       <h2>zenTime</h2>
//       <h3>
//         <template v-for="t of displayZenTime">{{ t }}</template>
//       </h3>
//       <div>
//         <svg :width="svgW" :height="svgH">
//           <g>
//             <rect :width="svgW" :height="svgH" fill="black" />
//             <rect
//               :width="(svgW / store.ins_in_mom) * store.instant"
//               :height="svgH"
//               fill="MediumPurple"
//             />
//           </g>
//           <text y="16" fill="white">Instant: {{ store.instant }}</text>
//         </svg>
//       </div>
//       <div>
//         <div>
//           <svg :width="svgW" :height="svgH">
//             <g>
//               <rect :width="svgW" :height="svgH" fill="black" />
//               <rect
//                 :width="(svgW / 100) * store.zmoment"
//                 :height="svgH"
//                 fill="MediumSeaGreen"
//               />
//               <rect
//                 :width="(svgW / 10) * store.zwhile"
//                 :height="svgH"
//                 fill="MediumPurple"
//               />
//             </g>
//             <text y="16" fill="white">While & Moment: {{ store.zmoment }}</text>
//           </svg>
//         </div>
//         <div>
//           <svg :width="svgW" :height="svgH">
//             <g>
//               <rect :width="svgW" :height="svgH" fill="black" />
//               <rect
//                 :width="(svgW / 10.8) * store.zsess"
//                 :height="svgH"
//                 fill="MediumPurple"
//               />
//             </g>
//             <text y="16" fill="white">
//               Session: {{ Number(1 + store.zsess) % 11 }}
//             </text>
//           </svg>
//         </div>
//       </div>
//     </div>
//   </div>
// </template>
//
-->
