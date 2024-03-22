<script setup lang="ts">
import { ref } from "vue";
import Namaste from '@/components/Landing/Namaste.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import SteinTime from '@/components/Landing/SteinTime.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import Developer from '@/components/Landing/Developer.vue';
import Artist from '@/components/Landing/Artist.vue';
import Technomancy from '@/components/Landing/Technomancy.vue';
import { socials } from "@/composables/socials";
import { useRouter } from 'vue-router';
document.title = "Stein Unlimited";
const soc = socials.value;
const router = useRouter();
const pageSelections = [
  'Namaste', 
  'SteinunLimited', 
  'IntegralTheory', 
  'UnThinkMe',
  'SteinTime', 
  'Beacon', 
  'Technomancy',
  'Developer', 
  'Artist', 
];
const components: Record<string, any> = {
  Namaste,
  SteinunLimited,
  IntegralTheory,
  UnThinkMe,
  SteinTime,
  Beacon,
  Technomancy,
  Developer,
  Artist,
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
  } else {
    if (idx>0) {
      selected.value = pageSelections[idx-1];
    } else {
      selected.value = pageSelections[pageSelections.length-1];
    }
  }
  router.push('/landing/'+selected.value);
}

const routeChange = () => {
  router.push(selected.value);
}
</script>
<template>
  <div class="flex-column" data-test-id="flex-column">
    <div class="home-changer">
      <i class="material-icons" @click="togglePage('prev')" aria-label="prev">arrow_left</i>
      <div @change="routeChange" class="flex-grow" name="page-selector">
        <div v-for="selection in pageSelections" v-show="selection==selected" :key="selection">{{ selection }}</div>
      </div>
      <i class="material-icons" @click="togglePage('next')" aria-label="next">arrow_right</i>
    </div>
    <div class="home-content">
      <transition name="shrink2" appear mode="out-in">
        <component :is="components[selected]" />
      </transition>
    </div>
    <div class="social-grp">
      <template v-for="social in soc" :key="social.name">
        <a :href="social.url" target="_blank">
          <img :src="social.link" class="social">
        </a>
      </template>
    </div>
  </div>
</template>
