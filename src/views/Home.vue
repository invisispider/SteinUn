<script setup lang="ts">
import { ref } from "vue";
import Greeting from '@/components/Landing/Greeting.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import SteinTime from '@/components/Landing/SteinTime.vue';
import Website from '@/components/Landing/Website.vue';
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
  'Greeting', 
  'Website', 
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
  Greeting,
  Website,
  SteinunLimited,
  IntegralTheory,
  UnThinkMe,
  SteinTime,
  Beacon,
  Technomancy,
  Developer,
  Artist,
};
const selected = ref('Greeting')
const toggleNextPage = () => {
  let sel = selected.value;
  let idx = pageSelections.indexOf(sel);
  if (idx<pageSelections.length-1) {
    selected.value = pageSelections[idx+1];
  } else {
    selected.value = pageSelections[0];
  }
  router.push('/landing/'+selected.value);
}
const routeChange = () => {
  router.push(selected.value);
}
</script>
<template>
  <div class="flex-column">
    <!-- <i @click="changeWindow" class="material-icons right">start</i> -->
    <div class="flex margin-1">
      <select @change="routeChange" class="flex-grow" v-model="selected" name="page-selector">
        <option v-for="selection in pageSelections" :key="selection">{{ selection }}</option>
      </select>
      <button @click="toggleNextPage">Next</button>
    </div>
    <!-- <component :is="greeting" /> -->
    <div class="home-content">
      <component :is="components[selected]" />
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
