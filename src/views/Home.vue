<script setup lang="ts">
import { ref, watch, onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import Namaste from '@/components/Landing/Namaste.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import Calendar from '@/components/Landing/Calendar.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import Technomancy from '@/components/Landing/Technomancy.vue';
import { socials } from "@/composables/socials";
import { useRouter, useRoute } from 'vue-router';
document.title = "Stein Unlimited";
// const soc = socials.value;
const router = useRouter();
const route = useRoute();
const pageSelections = [
  'Namaste', 
  'SteinunLimited', 
  'UnThinkMe',
  'Calendar',
  'IntegralTheory', 
  'Beacon', 
  'Technomancy',
];
const components: Record<string, any> = {
  Namaste,
  SteinunLimited,
  UnThinkMe,
  Calendar,
  IntegralTheory,
  Beacon,
  Technomancy,
};
const selected = ref('Namaste')
const togglePage = (which: string) => {
  let idx = pageSelections.indexOf(selected.value);
  if (which==='next') {
    if (idx<pageSelections.length-1) {
      selected.value = pageSelections[idx+1];
    } else {
      selected.value = pageSelections[0];
    }
  } else if (which==='prev') {
    if (idx>0) {
      selected.value = pageSelections[idx-1];
    } else {
      selected.value = pageSelections[pageSelections.length-1];
    } 
  } else {
    selected.value = which
  }
  router.push('/landing/'+selected.value);
}

// const changeRoute = () => {
//   router.push(selected.value);
// }
watch(() => route.path, (newPath) => {
  // console.log(selected.value, newPath)
  selected.value = newPath.slice(9);
  // router.push(selected.value);
})
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.code) {
    case "ArrowLeft":
      togglePage('prev');
      break;
    case "ArrowRight":
      togglePage('next');
      break;
  }
}
onBeforeMount(() => {
  window.addEventListener('keydown', handleKeydown);
})
// onMounted(() => {
//   if(route.path) {
//     togglePage(route.path.slice(9))
//   // console.log(route.path) 
//   }
// })
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
})
</script>
<template>
  <div class="flex-column" data-test-id="flex-column">
    <div class="home-changer">
      <i class="material-icons" style="transform: rotate(180deg);" 
        @click="togglePage('prev')" aria-label="prev">arrow_right_alt</i>
      <div class="tinytext">
        <div v-for="selection in pageSelections" @click="togglePage(selection)" 
          :class="selection==selected&&'active-link'" 
          :key="'icon'+selection">{{selection.slice(0,1)}}</div>
      </div>
      <i class="material-icons" @click="togglePage('next')" 
        aria-label="next">arrow_right_alt</i>
    </div>
    <h1 id="landing-title">{{ selected }}</h1>
    <div class="home-content">
      <transition name="route" appear mode="out-in">
        <component :is="components[selected]" />
      </transition>
    </div>
    <div class="social-grp">
      <template v-for="social in socials" :key="social.name">
        <a :href="social.url" target="_blank">
          <img :src="social.link" class="social">
        </a>
      </template>
    </div>
  </div>
</template>
