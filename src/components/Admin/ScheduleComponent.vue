<script setup>
import { ref } from "vue";

let arr = [];
for (var i = 1; i < 46; i++) {
  arr.push(i);
}

const mockData = ref(arr);
const daynames = ref(["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"]);
</script>

<template>
  <div class="untable">
    <h2 class="unheader">Flowers</h2>
    <div class="unchunk">
      <div class="baheader" v-for="day of daynames" :key="day">{{ day }}</div>
      <div class="uncell" v-for="d of mockData" :key="d">{{ d }}</div>
    </div>
    <h2 class="unheader">Vivid</h2>
    <div class="unchunk">
      <div class="baheader" v-for="day of daynames" :key="day">{{ day }}</div>
      <div class="uncell" v-for="d of mockData" :key="d">{{ d }}</div>
    </div>
  </div>
</template>

<style scoped>
.untable {
  display: grid;
  padding: 0.2em;
  background-color: #222;
}
.unheader {
  /* writing-mode: vertical-rl; */
  /* text-orientation: upright; */
  text-transform: uppercase;
  text-align: center;
  background-color: #316;
  margin: 0;
}
.baheader {
  background-color: red;
  color: black;
}
.unchunk {
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
}
.uncell {
  border: 1px solid rgba(0, 0, 255, 0.2);
  background-color: black;
  margin: 0;
  padding: 1em;
}
</style>
