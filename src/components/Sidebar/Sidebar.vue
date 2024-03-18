<script setup lang="ts">
import { onMounted, watchEffect, onUnmounted } from "vue";
// import { RouterLink } from "vue-router";
// import UnJamMeComponent from "@/components/UnJamMeComponent.vue";
import { useStore } from "@/stores/index";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
const store = useStore();
const randGuy = Math.floor(Math.random() * 50 + 1);
// 5 E + 13 M = 18 EM
// const showJams = ref(false);
const oneInTwoHundred = randGuy == 18 ? true : false;
// const doShowJams = () => {
//   setTimeout(() => {
//     showJams.value = false;
//   }, 2000);
//   showJams.value = true;
// };
const carlBatman = watchEffect(() => {
  if (store.uid) localStorage.setItem("uid", JSON.stringify(store.uid));
  if (store.username)
    localStorage.setItem("username", JSON.stringify(store.username));
});
onMounted(() => {
  if (localStorage) {
    if (localStorage.getItem("uid")) {
      store.setUid(JSON.stringify(localStorage.getItem("uid")));
    }
    if (localStorage.getItem("username")) {
      store.setUsername(JSON.stringify(localStorage.getItem("username")));
    }
  }
});
onUnmounted(() => {
  carlBatman();
});
</script>
<template>
  <div class="sidebar topnav" :style="{ width: sidebarWidth }">
  <span
      class="collapse-icon"
      @click="toggleSidebar"
    >
    <i class="material-icons" :class="{ 'rotate-180': collapsed}">keyboard_double_arrow_left</i>
  </span>
  <template v-if="!collapsed">
      <transition-group
        name="fadeDown"
        key="banana"
        tag="div"
        class="glow"
        mode="in-out"
      >
        <SidebarLink to="/" key="aa" class="navItem" @click="toggleSidebar">Home</SidebarLink>
        <!-- <SidebarLink to="/Login" v-if="!store.uid" key="2a" class="navItem"
          >Login</SidebarLink
        > -->

        <!-- <SidebarLink to="/Crossword" key="3a" class="navItem" icon="keyboard_double_arrow_left"
				>Puzzle</SidebarLink> -->
        <SidebarLink
          to="/Next"
          v-if="oneInTwoHundred"
          key="em"
          class="navItem nav-item-dark"
          icon="keyboard_double_arrow_left" @click="toggleSidebar"
          >TEMP</SidebarLink
        >
        <SidebarLink to="/UnThinkMe" key="9a" class="navItem" @click="toggleSidebar"
          >unThinkMe</SidebarLink
        >
        <SidebarLink to="/Teacher" key="5a" class="navItem" @click="toggleSidebar">Music</SidebarLink>
        <SidebarLink to="/UnTimeMe" key="6a" class="navItem" @click="toggleSidebar"
          >zenTime</SidebarLink
        >
        <!-- <SidebarLink to="/YogaCalendar" key="12a" class="navItem"
          >Classes</SidebarLink
        > -->
        <!-- <component :is="UnJamMeComponent" v-if="showJams" key="7a" class="navItem"
					id="music-player" /> -->
        <!-- <a v-else id="songToggle" @click="doShowJams" -->
        <!-- >UnJamMe</a> -->
        <!-- <SidebarLink to="/UnReadMe" key="8a" class="navItem"
				>unReadMe</SidebarLink> -->
        <SidebarLink to="/Unwolfme" key="16a" class="navItem" @click="toggleSidebar"
          >Videos</SidebarLink
        >
        <SidebarLink v-if="store.admin" key="11a" class="navItem" to="/Admin" @click="toggleSidebar"
          >Admin</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="0a" class="navItem" to="/Chat" @click="toggleSidebar"
          >PartyChat</SidebarLink
        >
        <SidebarLink v-if="!store.uid" key="21z" class="navItem" to="/Login" @click="toggleSidebar"
          >Login</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="1a" class="navItem" to="/Logout" @click="toggleSidebar"
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
  </div>
</template>
