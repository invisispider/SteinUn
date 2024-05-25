<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, onMounted, onUnmounted } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import { toggleInfoView } from "@/components/Time/toggleInfoView";
import TimeConversions from "@/components/Time/TimeConversions.vue";
document.title = "unLimited Time";
const store = useTime();
const timezone = new Date()
  .toLocaleTimeString("en-us", { timeZoneName: "short" })
  .split(" ")[2];
const displayZenDate = store.displayZenDate;

const displayZenTime = store.displayZenTime+timezone;

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
const infoTemplate = ref(``);
const showInfo = ref(false);
const toggle = () => {
  showInfo.value = !showInfo.value
};
const toggleShow = (a: string) => {
  showInfo.value = true;
  infoTemplate.value = toggleInfoView(a);
};
const showChart = ref("year");

</script>
<template>
  <div class="zen-wrapper">
    <Transition name="phase">
      <div class="info-panel" v-if="showInfo" @click="toggle" key="apple"
        v-html="infoTemplate">
     </div>
    </Transition>
    <div class="title-logo">
      <h1 @click="toggleShow('base')" style="cursor: pointer;">unLimited<img src="@/assets/icons/favicon-32x32.png" />Time</h1>
      <h2 class="readout" @click="toggleShow('unlimited')" style="cursor: pointer;">
        {{ store.displayZenTime }}
        <br>
        {{ store.displayZenDate }}
      </h2>
        <!-- <h3 @click="toggleShow('roman')" style="cursor: pointer;">ROMAN:<br>{{ store.forma }}</h3> -->
      <transition name="wiggle" appear>
        <div class="smiley">
          <!-- <div class="table-modal"> -->
          <i class="material-icons" :class="showChart == 'clock' ? 'active' : ''"
          @click="showChart = 'clock'">watch_later</i>
          <i @click="showChart='year'" class="material-icons" :class="showChart == 'year' ? 'active' : ''" v-html="'face'"></i>
            <!-- coffee sports_martial_arts -->
          <i class="material-icons" :class="showChart == 'habit' ? 'active' : ''"
            @click="showChart = 'habit'">insert_invitation</i>
          <TimeConversions v-if="showChart!='year'" :showChart="showChart" />
          <!-- </div> -->
          <YearWheel v-else-if="showChart=='year'" @zendate="toggleShow('zendate')" @holiday="toggleShow('holiday')"
            @solstice="toggleShow('solstice')" @habits="toggleShow('habits')"
            @newzen="toggleShow('newzen')" />
        </div>
      </transition>
    </div>
    <ZenDay @dayschedule="toggleShow('dayschedule')" @clock="toggleShow('clock')" @session="toggleShow('session')"
      @while="toggleShow('while')" @instant="toggleShow('instant')" />
    <ZenHabit @habit="toggleShow('habit')" />
  </div>
</template>
