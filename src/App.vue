<script setup lang="ts">
// import "@/assets/css/base.sass";
import { computed } from 'vue';
import "@/assets/css/mobile.sass";
import "@/assets/css/sidebar.sass";
import { RouterView } from "vue-router";
// import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/sidebar/Sidebar.vue";
// import { sidebarWidth } from "@/components/sidebar/state";
// import DevPane from "@/components/Admin/DevPane.vue";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from '@/stores/index';
import { useMonitorSize } from '@/composables/monitor-size';
const sizes = useMonitorSize();
const store = useStore();
const isVertical = computed(()=>sizes.isVertical.value?'vertical':'')
</script>
<template>
    <div id="appWrapper" :class="[store.styleMode.split(' ').join('-'), isVertical]">
        <!-- <DevPane /> -->
        <Sidebar />
        <StyleSelector />
        <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
