<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
// import ZenTime from "@/components/Time/ZenTime.vue";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import OGSvgs from "@/components/Time/OGSvgs.vue";
import { toggleInfoView } from "@/components/Time/toggleInfoView";
// import ZenCalendar from "@/components/Time/ZenCalendar.vue"
import TimeConversions from "@/components/Time/TimeConversions.vue";
// import ZenDocs from "@/components/Time/ZenDocs.vue"
document.title = "Stein Unlimited Calendar System";
const store = useTime();
const timezone = new Date()
  .toLocaleTimeString("en-us", { timeZoneName: "short" })
  .split(" ")[2];
const displayZenTime = computed(() => [
  store.zsessionNames.filter((all, id) => id == store.zsess).pop(),
  " ",
  store.zsess + 1,
  ".",
  String(store.zmoment).padStart(2, "0"),
  "`",
  store.instant,
  " ",
  timezone,
  " ",
  store.dayNames[(store.dayNum) % 5].slice(0, 3),
  ", ",
  store.dayNum + 1,
  " ",
  store.habitName,
  ", ",
  Number(String(store.forma).slice(-4)) + 10000 - 12000
]);

const timePulse = async () => {
  let luxDate = DateTime.now().toLocal();
  let luxCalendar = luxDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  let sec = luxDate.second;
  let min = luxDate.minute;
  let hou = luxDate.hour;
  let secs = luxDate.diff(luxDate.startOf("day"), "seconds").as("seconds");
  let adjsecs = secs < 6 * 3600 ? secs + 18 * 3600 : secs - 6 * 3600;
  let trueh = (secs / 3600) % 24;
  let adjh = (adjsecs / 3600) % 24;
  let whiles = Math.floor((adjsecs / store.ins_in_whi) % store.mom_in_whi);
  let sess = Math.floor(adjh / store.hou_in_sess);
  store.forma =
    luxDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET) +
    " " +
    luxCalendar;
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
let timerID: NodeJS.Timeout;
onMounted(() => {
  timerID = setInterval(timePulse, 1000);
});
onUnmounted(() => {
  timePulse();
});
const infoTemplate = ref(`<h1>unLimited Time</h1>`);
// const todayName = ref(null);
const showInfo = ref(false);
const toggle = () => (showInfo.value = !showInfo.value);
const toggleShow = (a: string) => {
  showInfo.value = true;
  infoTemplate.value = toggleInfoView(a);
};
const smiley = ref(false);
const showChart = ref("date");
</script>
<template>
  <div class="zen-wrapper">
    <!-- <ZenTime /> -->
    <Transition name="phase">
      <div class="info-panel" 
      v-if="showInfo" v-html="infoTemplate" @click="toggle()" key="apple"
      >
    </div>
    </Transition>
    <div class="title-logo">
      <h1>unLimited Time</h1>
      <h2>{{ displayZenTime.slice(0,9).reduce((acc, cv)=>acc+cv) }}<br>
        {{ displayZenTime.slice(9).reduce((acc, cv)=>acc+cv) }}</h2>
      <h3>ROMAN:<br>{{ store.forma }}</h3>
      <p>click around for information</p>
      <transition name="wiggle" appear>
        <div class="smiley time-border">
          <div class="table-modal" v-if="smiley">
            <i class="material-icons" :class="showChart == 'time' ? 'active' : ''"
              @click="showChart = 'time'">coffee</i>
            <i class="material-icons" :class="showChart == 'date' ? 'active' : ''"
              @click="showChart = 'date'">sports_martial_arts</i>
            <TimeConversions :showChart="showChart" />
          </div>
          <i @click.prevent="smiley = !smiley" class="material-icons" v-html="smiley ? 'mood_bad' : 'mood'"></i>
        </div>
      </transition>
    </div>
    <component :is="OGSvgs" @zentime="toggleShow('zentime')" />
    <component :is="YearWheel" @zendate="toggleShow('zendate')" @holiday="toggleShow('holiday')"
      @solstice="toggleShow('solstice')" @equinox="toggleShow('equinox')" @habits="toggleShow('habits')"
      @newzen="toggleShow('newzen')" />
    <component :is="ZenDay" />
    <component :is="ZenHabit" />
  </div>
</template>
