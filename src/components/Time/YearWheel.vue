<script setup lang="ts">
import { ref } from "vue"
import { useTime } from "@/stores/time"
const store = useTime()
const emit = defineEmits(['holiday', 'solstice', 'equinox'])
const BoxWidth = 500
const BoxHeight = 500
const pi = Math.PI
const sTitleLogo = ref(true)
const trigger = () => (sTitleLogo.value = !sTitleLogo.value)
const testHabit = (habit)=>habit==store.habitName?'selected':''
</script>
<template>
  <div>
    <svg class="zenwheel" :width="BoxWidth" :height="BoxHeight"
    >
    <!-- :viewbox="`0 0 ${BoxWidth} ${BoxHeight}`" -->
      <title>The Zen Year</title>
      <!-- <desc>X=Solstice. Y=Equinox. 0deg=ZenDay</desc> -->
      <!-- <path d="M200 200 h-150 a150 150 0 0 1 150 -150 z"
            fill="blue" stroke="white" stroke-width="5" />
      <path d="M200 200 h150 a150 150 0 0 1 -150 150 z"
            fill="orange" stroke="white" stroke-width="5" />
      <path d="M200 200 h-150 a150 150 0 1 0 150 -150 z"
            fill="red" stroke="white" stroke-width="5" /> -->
      <!-- <path d="M200,200 v-150 a150,150 0 0,0 -150,150 z"
            fill="yellow" stroke="white" stroke-width="5" /> -->
    <!-- <circle r="150" cx="200" cy="200" fill="white" /> -->
    <!-- <path d="M600,350 l 50,-25
            a25,25 -30 0,1 50,-25 l 50,-25
            a25,50 -30 0,1 50,-25 l 50,-25
            a25,75 -30 0,1 50,-25 l 50,-25
            a25,100 -30 0,1 50,-25 l 50,-25"
            fill="none" stroke="red" stroke-width="5"  /> -->
    <!-- <path d="M200 200 h150 a150 150 0 0 1 -150 150 z"
          fill="orange" stroke="white" stroke-width="5" /> -->
      <circle r="150" cx="200" cy="300" fill="chartreuse" />
      <circle r="75" cx="200" cy="300" fill="black"
                stroke="black"
                stroke-width="150"
                stroke-dasharray="2 57" />
      <!-- <text x="210" y="290" fill="blueviolet">YEAR</text> -->
      <text :class="store.habitNum===0?'glow active':''"
        x="214" y="195" fill="black">{{store.habitNames[0]}}</text>
      <text :class="store.habitNum===1?'glow active':''"
        x="274" y="260" fill="black">{{store.habitNames[1]}}</text>
      <text :class="store.habitNum===2?'glow active':''"
        x="274" y="350" fill="black">{{store.habitNames[2]}}</text>
      <text :class="store.habitNum===3?'glow active':''"
        x="214" y="410" fill="black">{{store.habitNames[3]}}</text>
      <text :class="store.habitNum===4?'glow active':''"
        x="134" y="410" fill="black">{{store.habitNames[4]}}</text>
      <text :class="store.habitNum===5?'glow active':''"
        x="64" y="350" fill="black">{{store.habitNames[5]}}</text>
      <text :class="store.habitNum===6?'glow active':''"
        x="64" y="260" fill="black">{{store.habitNames[6]}}</text>
      <text :class="store.habitNum===7?'glow active':''"
        x="134" y="195" fill="black">{{store.habitNames[7]}}</text>
      <circle r="54" cx="205" cy="120" fill="white" />
      <circle r="18" cx="205" cy="120" fill="bisque"
                stroke="tomato"
                stroke-width="15"
                stroke-dasharray="1 1" />
      <text x="165" y="125" fill="black" @click="emit('zenday')">~NewZen~</text>
      <text x="266" y="126" fill="red" @click="emit('holiday')">Holidays</text>
      <path d="M196 480 l8 -323 z" stroke="white" stroke-width="2" />
      <text x="205" y="478" fill="white"
        @click="emit('solstice')">Solstice</text>
      <path d="M24 296 l350 6 z" stroke="white" stroke-width="2" />
      <text x="375" y="307" fill="white"
        @click="emit('equinox')">Equinox</text>
      <text x="173" y="162" fill="indigo">WINTER</text>
      <text x="284" y="298" fill="indigo">SPRING</text>
      <text x="164" y="440" fill="indigo">SUMMER</text>
      <text x="70" y="295" fill="indigo">FALL</text>
    </svg>
    <!-- <ol>
      <li v-for="hab in store.habitNames"
        :class="testHabit(hab)"
      >{{hab}}</li>
    </ol> -->
  </div>
</template>
