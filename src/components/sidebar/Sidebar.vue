<script setup lang="ts">
import { ref, onMounted, watchEffect, onUnmounted } from "vue";
// import { RouterLink } from "vue-router";
// import UnJamMeComponent from "@/components/UnJamMeComponent.vue";
import { useStore } from "@/stores/index.ts";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
// import FooterComponent from "@/components/FooterComponent.vue";
const store = useStore();
const randGuy = Math.floor(Math.random() * 50 + 1);
// 5 E + 13 M = 18 EM
const showJams = ref(false);
const oneInTwoHundred = randGuy == 18 ? true : false;
const doShowJams = () => {
  setTimeout(() => {
    showJams.value = false;
  }, 2000);
  showJams.value = true;
};
const carlBatman = watchEffect(() => {
  if (store.uid) localStorage.setItem("uid", JSON.stringify(store.uid));
  if (store.username)
    localStorage.setItem("username", JSON.stringify(store.username));
});
onMounted(() => {
  if (localStorage) {
    if (localStorage.getItem("uid")) {
      store.setUid(JSON.parse(localStorage.getItem("uid")));
    }
    if (localStorage.getItem("username")) {
      store.setUsername(JSON.parse(localStorage.getItem("username")));
    }
  }
});
onUnmounted(() => {
  carlBatman();
});
</script>
<template>
  <div class="sidebar topnav" :style="{ width: sidebarWidth }">
    <template v-if="!collapsed">
      <transition-group
        name="fadeDown"
        key="banana"
        tag="div"
        class="glow"
        mode="in-out"
      >
        <SidebarLink to="/" v-if="!store.uid" key="2a" class="navItem"
          >Login</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="0a" class="navItem" to="/Chat"
          >Talk</SidebarLink
        >
        <!-- <SidebarLink to="/Crossword" key="3a" class="navItem" icon="keyboard_double_arrow_left"
				>Puzzle</SidebarLink> -->
        <SidebarLink
          to="/Next"
          v-if="oneInTwoHundred"
          key="em"
          class="navItem nav-item-dark"
          icon="keyboard_double_arrow_left"
          >TEMP</SidebarLink
        >
        <SidebarLink to="/UnThinkMe" key="9a" class="navItem"
          >unThinkMe</SidebarLink
        >
        <SidebarLink to="/Teacher" key="5a" class="navItem">Music</SidebarLink>
        <SidebarLink to="/UnTimeMe" key="6a" class="navItem"
          >zenTime</SidebarLink
        >
        <SidebarLink to="/yogacalendar" key="12a" class="navItem"
          >Classes</SidebarLink
        >
        <!-- <component :is="UnJamMeComponent" v-if="showJams" key="7a" class="navItem"
					id="music-player" /> -->
        <!-- <a v-else id="songToggle" @click="doShowJams" -->
        <!-- >UnJamMe</a> -->
        <!-- <SidebarLink to="/UnReadMe" key="8a" class="navItem"
				>unReadMe</SidebarLink> -->
        <SidebarLink v-if="store.admin" key="11a" class="navItem" to="/Admin"
          >Admin</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="1a" class="navItem" to="/Logout"
          >Logout</SidebarLink
        >
      </transition-group>
      <!-- <transition name="shrink" appear>
				<component :is="FooterComponent" />
			</transition> -->
      <div class="glow" v-if="!collapsed" key="banano">
        <span v-if="store.username" class="christmas-icon center">
          <span class="green">{{ store.username }}</span>
        </span>
        <span v-else class="red christmas-icon">
          <i class="material-icons">vpn_key</i>
        </span>
      </div>
    </template>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="material-icons three-hundred-up">keyboard_double_arrow_left</i>
    </span>
    <h1>
      <!-- <span v-if="collapsed">
        <div>S</div>
        <div>U</div>
      </span> -->
      <!-- <span v-else>Stein Unlimited</span> -->
      <span v-if="!collapsed">Stein Unlimited</span>
    </h1>
  </div>
</template>
