<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useTime } from "@/stores/time.ts";
import ZenTime from "@/components/ZenTime.vue";
import GregTime from "@/components/GregTime.vue";
import DateConversions from "@/components/DateConversions.vue";
import TimeConversions from "@/components/TimeConversions.vue";
// import SessionsChart from "@/components/SessionsChart.vue";
import ZenDocs from "@/components/ZenDocs.vue";
import { DateTime } from "luxon";
document.title = "Stein Unlimited Calendar System";
const store = useTime();
const timePulse = () => {
  let luxDate = DateTime.now().toLocal();
  let luxString =
    "" + luxDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET);
  let luxCalendar =
    " ||  " + luxDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  let sec = luxDate.second;
  let min = luxDate.minute;
  let hou = luxDate.hour;
  let secs = luxDate.diff(luxDate.startOf("day"), "seconds").as("seconds");
  let adjsecs = secs < 6 * 3600 ? secs + 18 * 3600 : secs - 6 * 3600;
  let trueh = (secs / 3600) % 24;
  let adjh = (adjsecs / 3600) % 24;
  let whiles = Math.floor((adjsecs / store.ins_in_whi) % store.mom_in_whi);
  let sess = Math.floor(adjh / store.hou_in_sess);
  store.forma = luxString + "" + luxCalendar;
  store.second = sec;
  store.minute = min;
  store.hour = hou;
  store.instant = Math.floor(secs % store.ins_in_mom);
  store.true_h = trueh;
  store.zhour = adjh;
  store.zmoment = Math.floor(adjsecs / store.ins_in_mom) % store.mom_in_sess;
  store.zwhile = whiles;
  store.zsess = sess;
  return () => clearInterval(timerID);
};
let timerID;
onMounted(() => {
  timerID = setInterval(timePulse, 1000);
});
onUnmounted(() => {
  clearInterval(timerID)
});
const home = ref(false);
const ztime = ref(true);
const zdate = ref(false);
const docs = ref(false);
const sHome = () => {
  home.value = true;
  ztime.value = false;
  zdate.value = false;
  docs.value = false;
};
const sZTime = () => {
  home.value = false;
  ztime.value = true;
  zdate.value = false;
  docs.value = false;
};
const sZDate = () => {
  home.value = false;
  ztime.value = false;
  zdate.value = true;
  docs.value = false;
};
const sDocs = () => {
  home.value = false;
  ztime.value = false;
  zdate.value = false;
  docs.value = true;
};
const sTitleLogo = ref(true);
const trigger = () => (sTitleLogo.value = !sTitleLogo.value);
</script>
<template>
  <div class="zen-wrapper">
    <a class="title-drop-image" @click.prevent="trigger">
      <span
        class="material-icons"
        v-text="sTitleLogo ? `mood` : `sentiment_very_dissatisfied`"
      ></span>
    </a>
    <transition name="wiggle" appear>
      <div class="title-logo" v-if="sTitleLogo">
        <h1>zenCalendar</h1>
        <h2>by SteinUnlimited</h2>
      </div>
    </transition>
    <div class="selectables">
      <component :is="ZenDocs" v-if="home" />
      <div>
        <component :is="GregTime" v-if="ztime" />
        <component :is="ZenTime" v-if="ztime" />
      </div>
      <!-- <component :is="SessionsChart" v-if="zdate" /> -->
      <component :is="TimeConversions" v-if="docs" />
      <component :is="DateConversions" v-if="docs" />
    </div>
    <aside class="time-nav">
      <button class="time-nav-item" @click.prevent="sHome">
        <i class="material-icons">favorite</i>
      </button>
      <button class="time-nav-item" @click.prevent="sZTime">
        <i class="material-icons">attachment</i>
      </button>
      <!-- <button class="time-nav-item" @click.prevent="sZDate">
        <i class="material-icons">computer</i>
      </button> -->
      <button class="time-nav-item" @click.prevent="sDocs">
        <i class="material-icons">traffic</i>
      </button>
    </aside>
  </div>
</template>
<style>
:root {
  --color-bg: #001215;
  --color-stein-void: #001215;
  --color-wavelength-gray: #e0e0e0;
  --color-stein-green: #44ffaa;
  --color-stein-lightgreen: #00ffaa;
  --color-stein-magenta: MediumPurple;
  --color-stein-darkmagenta: darkmagenta;
  --color-stein-lumenwhite: #d0fff1;
  --color-stein-blue: #2800ff;
}
@keyframes woggle {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.7);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}
.wiggle-enter-active {
  animation: woggle 0.5s ease;
}
.wiggle-leave-active {
  animation: woggle 0.5s ease;
}
.title-logo {
  margin-top: 2em;
  display: grid;
  gridtemplatecolumns: 55% 50%;
}
.title-drop-image {
  display: grid;
  /* flex-direction: column; */
  /* margin: 0; */
  /* padding: 0; */
  /* width: 100%; */
  /* box-shadow: 0; */
  align-items: center;
  justify-content: center;
  /* float: right; */
}
@font-face {
  font-family: HK Grotesk;
  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")
    format("opentype");
}
@font-face {
  font-family: HK Grotesk;
  font-weight: bold;
  src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")
    format("opentype");
}
/* Page titles */
.zen-wrapper h1 {
  color: var(--color-stein-lumenwhite);
  font-size: 3rem;
  line-height: 105%;
  margin: 0.1em 0em;
}
.zen-wrapper h2 {
  margin: 0em 0em 0.4em 0em;
  color: var(--color-stein-magenta);
  font-size: 2rem;
}
.zen-wrapper h3 {
  font-size: 1.31em;
  margin: 0em 0em 0.1em 0em;
  color: var(--color-stein-green);
}
zen-wrapper h4 {
  color: var(--color-stein-lumenwhite);
}
.zen-wrapper h1 {
  font-size: 46px;
}
.selectables {
  display: grid;
  grid: auto / auto auto;
}
.zen-wrapper div.col {
  display: grid;
  grid: auto auto auto / auto;
  justify-content: center;
  align-content: center;
}
.zen-wrapper span {
  /*   font-family: 'Tahoma';  */
  line-height: 1.4;
  font-weight: bold;
  color: mediumOrchid;
  font-size: 1.4em;
  margin: 0.1rem 2%;
  padding: 0.3rem;
  /*   border: 1px solid DarkMagenta; */
  /*   border-radius: 10px; */
  width: 45vw;
}
.zen-wrapper ul {
  font-weight: medium;
  font-family: "Tahoma";
  line-height: 1.4;
  color: mediumOrchid;
  font-size: 1.4em;
  list-style-type: none;
}
.zen-wrapper button {
  color: var(--color-stein-magenta);
}
.zen-wrapper a:hover {
  text-decoration: none;
}
.time-nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0;
  position: fixed;
  bottom: 1em;
  right: 1em;
}
.zen-wrapper {
  color: var(--color-wavelength-gray);
  font-family: "Trebuchet MS", sans-serif;
  background-color: var(--color-bg);
  margin: 0 2vw;
  /* margin: 0; */
  overflow: auto;
  height: 100%;
  /* padding: 0; */
  /* overflow: hidden; */
}
@media screen and (min-width: 430px) {
  .wrapper {
    /* display: grid;
    place-items: center;
    min-height: 50vh;
    margin: 0 0em; */
  }
  .content {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }
}
</style>
