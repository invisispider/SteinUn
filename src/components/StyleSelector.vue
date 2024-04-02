<script setup lang="ts">
import { useRouter } from "vue-router"
import { useStore } from "@/stores/index";
const router = useRouter();
const store = useStore();
const switchStyle = (btn_txt: string) => {
    let mode_map = btn_txt.split(' ');
    let mode_bg = mode_map[0];
    let mode_tx = mode_map[1];
    store.setStyleMode(mode_bg, mode_tx);
}
const routeBack = () => {
    router.go(-1)
}
</script>
<template>
    <div id="style-selector">
        <div class="btn-grp">
            <i class="material-icons" style="color: #EEE; background-color: #000;" 
                @click="routeBack">fast_rewind</i>
            <i @click="switchStyle('medium thalmon')"
            id="medium-thalmon" class="material-icons">set_meal</i>
            <i @click="switchStyle('light black')"
            id="light-black" class="material-icons">view_timeline</i>
            <i @click="switchStyle('dark purple')"
            id="dark-purple" class="material-icons">nightlight</i>
            <i @click="switchStyle('dark green')"
            id="dark-green" class="material-icons">bolt</i>
            <!-- <span>style:</span> -->
        </div>
    </div>
</template>
