<script setup>
import { ref, computed } from "vue";
import { useTime } from "@/stores/time.ts";
import SessionsChart from "@/components/Time/SessionsChart.vue"
const store = useTime();
const displayZenTime = computed(() => [
	store.zsessionNames.filter((all, id) => id == store.zsess).pop(),
	" ", store.zsess + 1,
	".", store.zmoment+store.zwhile,
	"`", store.instant,
	" ",
	// ,"  || H ",
	// Number(String(store.forma).slice(-4)) + 10000,
])
</script>
<template>
	<div class="zentime-container">
		<div class="zen-meters">
			<h2>GregTime</h2>
			<h3>{{ store.forma }}</h3>
			<label for="Hour">Hour {{store.hour}}</label>
			<meter id="Hour" :value="store.hour" min="0" max="24"></meter>
			<label for="Minute">Min {{store.minute}}</label>
			<meter id="Minute" :value="store.minute" min="0" max="60"></meter>
			<label for="Second">Sec {{store.second}}</label>
			<meter id="Second" :value="store.second" min="0" max="60"></meter>
			<h2>zenTime</h2>
			<h3>
				<template v-for="t of displayZenTime">{{ t }}</template>
			</h3>
			<label for="Session">Session {{store.zsess+1}}</label>
			<progress id="Session" :value="store.zsess" max="11"></progress>
			<label for="While">{{`Whi/Mome ${store.zmoment+store.zwhile}`}}</label>
			<progress id="While" :value="store.zmoment+store.zwhile" max="100"></progress>
			<label for="Instant">Inst {{store.instant}}</label>
			<progress id="Instant" :value="store.instant" max="80"></progress>
		</div>
		<component :is="SessionsChart"></component>
		<!-- Kaimen through the window... last night -->
	</div>
</template>
