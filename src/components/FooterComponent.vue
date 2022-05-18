<script setup lang="ts">
import { ref } from "vue";
const showCollapsible = ref(false)
const collapseMe = () => showCollapsible.value = !showCollapsible.value
// defineProps<{
//   msg: string;
// }>();   this was how they originally did that
</script>
<template>
	<footer class="footer">
		<a class="collapseButton bounceMe" @click.prevent="collapseMe">
			<i class="material-icons christmas-icon">rocket_launch</i>
		</a>
		<transition name="grow">
			<div class="footer-collapsible" v-if="showCollapsible">
				<span>2022 Stein Unlimited<br />~open source by donation~</span>
				<img
					alt="Vue logo"
					class="warped-logo"
					src="@/assets/logo.svg"
					width="110"
					height="110"
				/>
			  <div class="greetings">
			    <div class="h1">
			      "
			      <div class="h3">Prepare to Engage May 1</div>
			    </div>
			  </div>
			</div>
		</transition>
	</footer>
</template>
<style lang="sass">
.greetings
	color: white
	display: inline-grid
	.h1
		font-weight: 500
		font-size: 2.6rem
	.h3
		font-size: 1.2rem
	.h1, .h3
		text-align: center
</style>
