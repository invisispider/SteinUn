<script setup lang="ts">
// import "@/assets/css/base.sass";
import { computed, nextTick } from 'vue';
import "@/assets/css/controller.sass";
import { RouterView } from "vue-router";
// import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import { sidebarWidth } from "@/components/sidebar/state";
// import DevPane from "@/components/Admin/DevPane.vue";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from '@/stores/index';
import { useMonitorSize } from '@/composables/monitor-size';
import { toggleSidebar, collapsed } from "@/components/Sidebar/state";
const sizes = useMonitorSize();
const store = useStore();
const isVertical = computed(()=>sizes.isVertical.value?'vertical':'horizontal')
const toggleSidebarNow = () => {
    nextTick()
    if (collapsed.value===false) {
        toggleSidebar()
    }
}

</script>
<template>
    <div id="appWrapper" :class="[store.styleMode.split(' ').join('-'), isVertical]">
        <!-- <DevPane /> -->
        <Sidebar />
        <StyleSelector />
        <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
                <component @click="toggleSidebarNow" :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
