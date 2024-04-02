<script setup lang="ts">
</script>
<template>
  <div id="loading">
    <img src="@/assets/img/spinner.gif" />
  </div>
</template>
<style lang="sass">
#loading
  position: absolute
  z-index: 1000
  background-color: white
  height: 100vh
  width: 100vw
  text-align: center
  line-height: 100vh
  img
    border-radius: 6px
    position: relative
    margin: auto
    margin-top: 20%
</style>
