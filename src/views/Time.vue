<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useTime } from "@/stores/time";
import { DateTime } from "luxon";
import YearWheel from "@/components/Time/YearWheel.vue";
import ZenDay from "@/components/Time/ZenDay.vue";
import ZenHabit from "@/components/Time/ZenHabit.vue";
import InfoView from "@/components/Time/InfoView.vue";
import TimeConversions from "@/components/Time/TimeConversions.vue";
document.title = "unLimited Time";
const store = useTime();
const activePanel = ref('');
const panelList = ["namaste", "unlimited",
  "year", "clock", "moment", "instant",
  "calendar"];

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
// const infoTemplate = ref(``);
const showInfo = ref(false);
const toggle = () => {
  showInfo.value = !showInfo.value;
  document.documentElement.style.overflowY = "scroll";
  document.body.focus();
};
const toggleShow = async (a: string) => {
  activePanel.value = a;
  showInfo.value = true;
  document.documentElement.style.overflowY = "hidden";
  await nextTick()
  let it = document.getElementById('info-panel')
  if (it) {
    it.scrollTo(0, 0);
  }
  // infoTemplate.value = toggleInfoView(a);
};
const showChart = ref("year");

</script>
<template>
  <div class="zen-wrapper" id="zen-wrapper" data-test-id="zen-wrapper">
    <Transition name="phase">
      <div class="info-panel" id="info-panel" v-show="showInfo" key="apple">
        <div class="btn-grp">
          <a @click="toggleShow(panel)" v-for="panel of panelList" :class="{ active: panel === activePanel }">{{ panel
            }}</a>
        </div>
        <InfoView @click="toggle" :infoview="activePanel" />
        <!-- <div v-html="infoTemplate"></div> -->
      </div>
    </Transition>
    <div class="title-logo">
      <h1 @click="toggleShow('namaste')" style="cursor: pointer;">unLimited<img
          src="@/assets/icons/favicon-32x32.png" />Time</h1>
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
          <i @click="showChart = 'year'" class="material-icons" :class="showChart == 'year' ? 'active' : ''"
            v-html="'face'"></i>
          <!-- coffee sports_martial_arts -->
          <i class="material-icons" :class="showChart == 'habit' ? 'active' : ''"
            @click="showChart = 'habit'">insert_invitation</i>
          <TimeConversions @calendar="toggleShow('calendar')" @clock="toggleShow('clock')" v-if="showChart != 'year'"
            :showChart="showChart" />
          <!-- </div> -->
          <YearWheel v-else-if="showChart == 'year'" @year="toggleShow('year')" />
        </div>
      </transition>
    </div>
    <ZenDay @clock="toggleShow('clock')" @moment="toggleShow('moment')" @instant="toggleShow('instant')" />
    <ZenHabit @calendar="toggleShow('calendar')" />
  </div>
</template>
