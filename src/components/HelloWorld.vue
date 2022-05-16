<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <div class="h1">
      {{ msg }}
      <div class="h3">Prepare to Engage May 1</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
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
