<script setup lang="ts">
import { computed, nextTick, ref, onMounted } from 'vue';
import "@/assets/css/controller.sass";
import { RouterView } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue";
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
const isLoading = ref(true);
onMounted(()=>{
    toggleLoading();
});
const toggleLoading = ()=> isLoading.value = !isLoading.value
</script>
<template>
    <div id="appWrapper" 
        :class="[store.styleMode.split(' ').join('-'), isVertical]"
        data-testid="app-wrapper"    
    >
        <!-- <DevPane /> -->
        <LoadingComponent v-if="isLoading" />
        <template v-else>
            <Sidebar />
            <StyleSelector />
            <router-view v-slot="{ Component }">
                <transition name="route" mode="out-in">
                    <component @click="toggleSidebarNow" :is="Component" />
                </transition>
            </router-view>
        </template>
    </div>
</template>
