<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";
const showCollapsible = ref(false);
const collapseMe = () => {
  showCollapsible.value = !showCollapsible.value;
};
</script>
<template>
  <footer class="footer">
    <a class="collapseButton bounceMe" @click.prevent="collapseMe">
      <i class="material-icons christmas-icon">rocket_launch</i>
    </a>
    <transition name="grow">
      <div class="footer-collapsible" v-if="showCollapsible">
        <span>2022 Stein Unlimited<br />~open source by donation~</span>
        <img
          alt="Vue logo"
          class="warped-logo"
          src="@/assets/logo.svg"
          width="110"
          height="110"
        />
        <component :is="HelloWorld" msg="чат апь" />
      </div>
    </transition>
  </footer>
</template>
