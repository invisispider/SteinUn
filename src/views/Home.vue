<script setup lang="ts">
import { ref, watch, onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import Namaste from '@/components/Landing/Namaste.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import UnThinkMe from '@/components/Landing/UnThinkMe.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import Calendar from '@/components/Landing/Calendar.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import Technomancy from '@/components/Landing/Technomancy.vue';
import { useSocials } from "@/composables/socials";
import { useRouter, useRoute } from 'vue-router';
import { pageSelections } from '@/composables/landing-pages';
document.title = "Stein unLimited";
const { socials } = useSocials();
// Asynchronously fetch image URLs
const router = useRouter();
const route = useRoute();

// interface PageSelection {
//   name: string, icon: string
// }
// const pageSelections: PageSelection[] = [
//   {
//     name: 'Namaste',
//     icon: 'flood',
//   },
//   {
//     name: 'UnThinkMe',
//     icon: 'transcribe',
//   },
//   {
//     name: 'Calendar',
//     icon: 'query_builder',
//   },
//   {
//     name: 'IntegralTheory',
//     icon: 'change_history',
//   },
//   {
//     name: 'Beacon',
//     icon: 'settings_input_antenna',
//   },
//   {
//     name: 'SteinunLimited',
//     icon: 'work_outline',
//   },
//   {
//     name: 'Technomancy',
//     icon: 'terminal',
//   },
// ];

const components: Record<string, any> = {
  Namaste,
  UnThinkMe,
  Calendar,
  IntegralTheory,
  Beacon,
  SteinunLimited,
  Technomancy,
};
const selected = ref('Namaste')
const togglePage = (which: string) => {
  let idx = pageSelections.map((e) => e.name).indexOf(selected.value);
  if (which === 'next') {
    if (idx < pageSelections.length - 1) {
      selected.value = pageSelections[idx + 1].name;
    } else {
      selected.value = pageSelections[0].name;
    }
  } else if (which === 'prev') {
    if (idx > 0) {
      selected.value = pageSelections[idx - 1].name;
    } else {
      selected.value = pageSelections[pageSelections.length - 1].name;
    }
  } else {
    selected.value = which
  }
  router.push('/landing/' + selected.value);
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
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
})
</script>
<template>
  <div class="flex-column" data-test-id="flex-column">

    <div class="home-changer" name="page-selector">
      <i class="material-icons" style="transform: rotate(180deg);" @click="togglePage('prev')"
        aria-label="prev">arrow_right_alt</i>
      <div class="tinytext">
        <div v-for="selection in pageSelections" @click="togglePage(selection.name)"
          :class="selection.name == selected && 'active-link'" :key="'icon' + selection.name"><i
            class="material-icons landing-icons">{{ selection.icon }}</i></div>
      </div>
      <i class="material-icons" @click="togglePage('next')" aria-label="next">arrow_right_alt</i>
    </div>
    <h1 v-if="selected!='Namaste'&&selected!='SteinunLimited'" id="landing-title">{{ selected }}</h1>
    <div v-else>
      <h1></h1>
      <img class="stu-banner home-logo" src="@/assets/img/steinunlimited.png" alt="stein unlimited logo">
    </div>
    <div class="home-content">
      <transition name="route" appear mode="out-in">
        <component :is="components[selected]" />
      </transition>
    </div>
    <div class="social-grp">
      <router-link to="TermsOfService">Terms</router-link>
      <router-link to="PrivacyPolicy">Privacy</router-link>

      <template v-for="social in socials" :key="social.name">
        <a :href="social.url" target="_blank">
          <img :src="social.link" class="social">
        </a>
      </template>
    </div>
  </div>
</template>
<style lang="sass">
.social
  margin-inline: 0
  margin-block: 1em
// @media screen and (min-width: 425px)
  // a, router-link
    // font-size: 1em
  // .social
    // font-size: 1em

</style>