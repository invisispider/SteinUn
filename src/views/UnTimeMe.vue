<script setup lang="ts">
import "@/assets/css/time.sass";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTime } from "@/stores/time.ts";
import { DateTime } from "luxon";
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
  store.dayNames[(store.dayNum) % 5].slice(0,3),
  ", ",
  store.dayNum+1,
  " ",
  store.habitName,
  " ",
  Number(String(store.forma).slice(-4)) + 10000 
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
let timerID;
onMounted(() => {
  timerID = setInterval(timePulse, 1000);
});
onUnmounted(() => {
  timePulse();
});
const infoTemplate = ref(`<h1>zenCalendar System</h1>`);
// const todayName = ref(null);
const showInfo = ref(false);
const toggle = () => (showInfo.value = !showInfo.value);
const toggleShow = (a) => {
  showInfo.value = true;
  infoTemplate.value = toggleInfoView(a);
};
const smiley = ref(false);
const showChart = ref("date");
</script>
<template>
  <div class="zen-wrapper">
    <Transition name="phase">
      <div
        class="info-panel"
        v-if="showInfo"
        v-html="infoTemplate"
        @click="toggle()"
      ></div>
    </Transition>
    <div class="flex-me-center">
      <div class="zen-meters">
        <transition name="wiggle" appear>
          <div class="title-logo">
            <h1>zenCalendar</h1>
            <button>
              <div class="table-modal" v-if="smiley">
                <i
                  class="material-icons"
                  :class="showChart == 'time' ? 'active' : ''"
                  @click="showChart = 'time'"
                  >coffee</i
                >
                <i
                  class="material-icons"
                  :class="showChart == 'date' ? 'active' : ''"
                  @click="showChart = 'date'"
                  >sports_martial_arts</i
                >
                <TimeConversions :showChart="showChart" />
              </div>
              <i
                @click.prevent="smiley = !smiley"
                class="material-icons"
                v-html="smiley ? 'mood_bad' : 'mood'"
              ></i>
            </button>
            <!-- <h2>by SteinUnlimited</h2> -->
            <!-- <h3>{{store.zenDate}}</h3> -->
          </div>
        </transition>
        <h3>ROMAN: {{ store.forma }}</h3>
        <h3>ZEN:
          <span v-for="t of displayZenTime" :key="t">{{ t }}</span>
        </h3>
        <!-- <label for="Session">Session {{store.zsess+1}}</label>
				<meter id="Session" :value="store.zsess" max="11"></meter>
				<label for="While">{{`While/Moment ${store.zmoment}`}}</label>
				<meter id="While" :value="store.zmoment" max="100"></meter>
				<label for="Instant">Instant {{store.instant}}</label>
				<meter id="Instant" :value="store.instant" max="80"></meter> -->
        <component :is="OGSvgs" @zentime="toggleShow('zentime')" />
        <div class="flex-me">
          <component :is="ZenDay" />
          <component
            :is="YearWheel"
            @zendate="toggleShow('zendate')"
            @holiday="toggleShow('holiday')"
            @solstice="toggleShow('solstice')"
            @equinox="toggleShow('equinox')"
            @habits="toggleShow('habits')"
            @newzen="toggleShow('newzen')"
          />
        </div>
      </div>
    </div>
    <component :is="ZenHabit" />
    <!-- <component :is="TimeConversions" v-if="whichView==='time'" /> -->
    <!-- <aside class="time-nav">
			<button class="time-nav-item" @click.prevent="setView('united')">
				Overview
				<i class="material-icons">alarm_off</i>
			</button>
			<button class="time-nav-item" @click.prevent="setView('time')">
				Clock
				<i class="material-icons">alarm_off</i>
			</button>
			<button class="time-nav-item" @click.prevent="setView('date')">
				Calendar
				<i class="material-icons">calendar_month</i>
			</button>
		</aside> -->
  </div>
</template>
