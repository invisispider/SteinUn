<script setup lang="ts">
import { useMonitorSize } from '@/composables/monitor-size';
import { onMounted, ref } from "vue";
import Adam from "@/components/Home/Adam.vue";
import Landing from "@/components/Home/Landing.vue";
import SteinunLimited from "@/components/Home/SteinunLimited.vue";
import { socials } from "@/composables/socials";
document.title = "Stein Unlimited | HOME";
// const window = ref('Landing');
// const changeWindow = () => {
//   if (window.value==='Landing') {
//     window.value='Adam'
//   } else if (window.value==='Adam') {
//     window.value='SteinunLimited'
//   } else {
//     window.value='Landing'
//   }
// }
const soc = socials.value;
const sizes = useMonitorSize();
</script>
<template>
  <div class="flex-column">
    <!-- <i @click="changeWindow" class="material-icons right">start</i> -->
    <Landing  />
    <Adam />
    <SteinunLimited />
    <div class="social-grp">
      <template v-for="social in soc" :key="social.name">
        <a :href="social.url" target="_blank">
          <img :src="social.link" class="social">
        </a>
      </template>
    </div>
  </div>
</template>
