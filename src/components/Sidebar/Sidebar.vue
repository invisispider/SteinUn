<script setup lang="ts">
import { onMounted, watchEffect, onUnmounted } from "vue";
import { useStore } from "@/stores/index";
import SidebarLink from "@/components/Sidebar/SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/components/Sidebar/state";
const store = useStore();
// const randGuy = Math.floor(Math.random() * 50 + 1);
// 5 E + 13 M = 18 EM
// const showJams = ref(false);
// const oneInTwoHundred = randGuy == 18 ? true : false;
// const doShowJams = () => {
//   setTimeout(() => {
//     showJams.value = false;
//   }, 2000);
//   showJams.value = true;
// };
const carlBatman = watchEffect(() => {
  try {
    if (store.uid) localStorage.setItem("uid", JSON.stringify(store.uid).trim());
    if (store.username)
      localStorage.setItem("username", JSON.stringify(store.username).trim());
  } catch (err) {
    console.error(err);
  }
});
onMounted(() => {
  if (localStorage) {
    try {
      if (localStorage.getItem("uid")) {
        store.setUid(JSON.stringify(localStorage.getItem("uid")).trim());
      }
      if (localStorage.getItem("username")) {
        store.setUsername(JSON.stringify(localStorage.getItem("username")).trim());
      }
    } catch(err) {
      console.error(err)
    }
  }
});
onUnmounted(() => {
  carlBatman();
});
</script>
<template>
  <div class="sidebar topnav" :style="{ width: sidebarWidth }"
  >
  <span
      class="collapse-icon"
      @click="toggleSidebar"
    ><i class="material-icons" :class="{ 'rotate-180': collapsed}">keyboard_double_arrow_left</i>
  </span>
  <template v-if="!collapsed">
    <transition-group
        class="glow"
        name="shrink2"
        key="banana"
        tag="div"
        mode="out-in"
        appear
        >
        <SidebarLink to="/landing/Namaste" key="link1" class="navItem" @click="toggleSidebar">Home</SidebarLink>
        
        <SidebarLink to="/UnThinkMe" key="link2" class="navItem" @click="toggleSidebar"
          >unThinkMe</SidebarLink
        >
        <SidebarLink to="/Time" key="link3" class="navItem" @click="toggleSidebar"
          >Time</SidebarLink
        >
        <!-- <SidebarLink
          to="/Next"
          v-if="oneInTwoHundred"
          key="em"
          class="navItem nav-item-dark"
          icon="keyboard_double_arrow_left" @click="toggleSidebar"
          >TEMP</SidebarLink
          > -->
              <!-- <SidebarLink to="/UnReadMe" key="8a" class="navItem"
                >unReadMe</SidebarLink> -->
        <SidebarLink to="/Integral" key="link55" class="navItem" @click="toggleSidebar">Integral</SidebarLink>
        <SidebarLink to="/Beacon" key="link56" class="navItem" @click="toggleSidebar">Beacon</SidebarLink>
        <SidebarLink to="/Music" key="link5" class="navItem" @click="toggleSidebar">Music</SidebarLink>
        <SidebarLink to="/Videos" key="link6" class="navItem" @click="toggleSidebar"
        >Videos</SidebarLink
        >
        <SidebarLink to="/Crossword" key="link4" class="navItem" icon="keyboard_double_arrow_left"
        >Crossword</SidebarLink>
        <!-- <SidebarLink v-if="store.uid" key="link7" class="navItem" to="/Chat" @click="toggleSidebar"
        >WallChat</SidebarLink
        > -->
        <SidebarLink v-if="store.admin" key="link8" class="navItem" to="/Admin" @click="toggleSidebar"
          >Admin</SidebarLink
        >
        <SidebarLink v-if="!store.uid" key="link9" class="navItem" to="/Login" @click="toggleSidebar"
          >Login</SidebarLink
        >
        <SidebarLink v-if="store.uid" key="link10" class="navItem" to="/Logout" @click="toggleSidebar"
        >Logout</SidebarLink
        >
      </transition-group>
      <div class="glow" v-if="!collapsed" key="banano">
        <span v-if="store.username" class="christmas-icon center">
          <span class="green"><SidebarLink to="/Login" key="link97" class="" 
          icon="keyboard_double_arrow_left"
        >{{ store.username }}</SidebarLink></span>
        </span>
        <!-- <span v-else> -->
        <SidebarLink v-else to="/Login" key="link97" class="red christmas-icon" 
        icon="keyboard_double_arrow_left"
      ><i class="material-icons">vpn_key</i></SidebarLink>
        <!-- </span> -->
      </div>
    </template>
  </div>
</template>
