<script setup lang="ts">
import { RouterLink } from "vue-router";
import UnJamMeComponent from "@/components/UnJamMeComponent.vue";
import { ref, computed } from "vue";
import { useStore } from "@/stores/index.ts";
const store = useStore();
const userN = computed(() => {
  return store.username;
});
const showJams = ref(false);
const showDrop = ref(true);
const doShowJams = () => {
  setTimeout(()=> {
    showJams.value = false
  }, 2000)
  showJams.value = true
};
const toggleDrop = () => {
  showDrop.value = !showDrop.value;
};
</script>
<template>
  <nav class="topnav">
    <ul>
      <li @click="toggleDrop" v-if="userN" class="glow center">
        <i class='material-icons spinMe'>accessible_forward</i>
        <span class="green christmas-icons">{{userN}}</span>
      </li>
      <li @click="toggleDrop" v-else class="red glow bcn christmas-icon">
        <i class='material-icons'>vpn_key</i>
      </li>
    </ul>
    <TransitionGroup name="fadeDown" tag="ul">
      <ul v-show="showDrop" class="glow" key="banana">
        <li key="2a" class="navItem">
          <RouterLink to="/">Account</RouterLink>
        </li>
        <li key="3a" class="navItem">
          <RouterLink to="/Crossword">Puzzle</RouterLink>
        </li>
        <!-- <li key="4a" class="navItem">
          <RouterLink to="/Next">TEMP</RouterLink>
        </li> -->
        <!-- <li key="5a" class="navItem">
          <RouterLink to="/Teacher">Learn to Sing</RouterLink>
        </li> -->
        <li key="6a" class="navItem">
          <RouterLink to="/UnTimeMe">zenTime</RouterLink>
        </li>
        <li key="7a" class="navItem" id="music-player">
          <component :is="UnJamMeComponent" v-if="showJams" />
          <a id="songToggle" v-else @click="doShowJams">UnJamMe</a>
        </li>
        <li key="9a" class="navItem">
          <RouterLink to="/UnThinkMe">unThinkMe</RouterLink>
        </li>
        <li key="8a" class="navItem">
          <RouterLink to="/UnReadMe">unReadMe</RouterLink>
        </li>
        <li key="1a" class="navItem">
          <a href="#" @click="this.$router.go(-1)">Back</a>
        </li>
      </ul>
    </TransitionGroup>
  </nav>
</template>
