<script setup lang="ts">
import { useStore } from "@/stores/index";
import { onMounted, watch } from "vue";
type styleName = "light"|"peace"|"thalmon"|"dark"|"green"
const store = useStore();
const switchStyle = (sty: styleName) => {
    store.setStyleMode(sty);
}
const storeStyle = (sty: styleName) => {
    // console.log(sty)
    localStorage.setItem('stylemode', JSON.stringify(sty));
}
watch(()=>store.styleMode, (sty) => {
    if (sty==="light"||sty==="peace"||sty==="thalmon"||sty==="dark"||sty==="green") {
        // console.log('watchStore', sty, sty.length)
        storeStyle(sty);
    }
});

onMounted(()=>{
    if (localStorage.getItem('stylemode')) {
        let sty = localStorage.getItem('stylemode')?.replaceAll('"','');
        // console.log('storageGet', sty, sty.length, sty?.charAt(0));
        if (sty==="light"||sty=="peace"||sty==="thalmon"||sty==="dark"||sty==="green") {
            // console.log('mounted in mem style:', sty);
            switchStyle(sty);
        }
    } else {
        switchStyle('light');
    }
})
</script>
<template>
    <div id="style-selector" data-testid="style-selector">
        <div class="btn-grp">
            <!-- <span class="tinytext">{{ store.styleMode }}</span> -->
            <i @click="switchStyle('green')"
                id="dark-green" class="material-icons" title="Green Dark Theme">bolt</i>
            <i @click="switchStyle('dark')" data-testid="dark-purple"
                id="dark-purple" class="material-icons" title="Purple Dark Theme">nightlight</i>
            <i @click="switchStyle('thalmon')"
                id="medium-thalmon" class="material-icons" title="Thalmon Theme">set_meal</i>
            <i @click="switchStyle('peace')"
                id="peace-peace" class="material-icons" title="Peace Light Theme">phishing</i>
            <i @click="switchStyle('light')"
                id="light-black" class="material-icons" title="Light Theme">view_timeline</i>
        </div>
    </div>
</template>
