<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useTime } from "@/stores/time.ts"
import { DateTime } from "luxon"
import YearWheel from "@/components/Time/YearWheel.vue"
import ZenDay from "@/components/Time/ZenDay.vue"
import ZenHabit from "@/components/Time/ZenHabit.vue"
import OGSvgs from "@/components/Time/OGSvgs.vue"
// import ZenCalendar from "@/components/Time/ZenCalendar.vue"
// import TimeConversions from "@/components/Time/TimeConversions.vue"
// import ZenDocs from "@/components/Time/ZenDocs.vue"
document.title = "Stein Unlimited Calendar System"
const store = useTime();
const timezone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
const displayZenTime = computed(() => [
	store.zsessionNames.filter((all, id) => id == store.zsess).pop(),
	" ", store.zsess + 1,
	".", String(store.zmoment).padStart(2, '0'),
	"`", store.instant,
	" ", timezone
])
const timePulse = async () => {
	let luxDate = DateTime.now().toLocal()
	let luxCalendar = luxDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
	let sec = luxDate.second
	let min = luxDate.minute
	let hou = luxDate.hour
	let secs = luxDate.diff(luxDate.startOf("day"), "seconds").as("seconds")
	let adjsecs = secs < 6 * 3600 ? secs + 18 * 3600 : secs - 6 * 3600
	let trueh = (secs / 3600) % 24
	let adjh = (adjsecs / 3600) % 24
	let whiles = Math.floor((adjsecs / store.ins_in_whi) % store.mom_in_whi)
	let sess = Math.floor(adjh / store.hou_in_sess)
	store.forma = luxDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)+" "+luxCalendar
	store.second = sec
	store.minute = min
	store.hour = hou
	store.instant = Math.floor(secs % store.ins_in_mom)
	store.true_h = trueh
	store.zhour = adjh
	store.zmoment = Math.floor(adjsecs / store.ins_in_mom) % store.mom_in_sess
	store.zwhile = whiles
	store.zsess = sess
	return () => clearInterval(timerID)
}
let timerID
onMounted(() => {
	timerID = setInterval(timePulse, 1000)
})
onUnmounted(() => {
	timePulse()
})
const infoTemplate = ref(`<h1>zenCalendar System</h1>`)
const todayName = ref(null)
const showInfo = ref(false)
const toggleInfoView = (infoView: string) => {
  showInfo.value = true
  if (infoView==='zendate') {
    infoTemplate.value = `
      <h4>This is the current date in zen calendar</h4>
    `
  } else if (infoView==='holiday') {
    infoTemplate.value = `
      <h4>Holidays occur on the first of every Habit and share the Habit name.</h4>
      <h6>ZenWeek is a special weeklong Holiday at the end/start of the year</h6>
    `
  } else if (infoView==='solstice') {
    infoTemplate.value = `
      <h4>Solstice is the maximum intensity point of seasonal oscillation, marking the end and halfway point of the year.</h4>
    `
  } else if (infoView==='equinox') {
    infoTemplate.value = `
      <h4>Equinox is the center intensity point of seasonal transition, and defines the quarters of the year.</h4>
      <h6>The habit simple makes one further division, dividing the year into 8 periods of equal length (and one holiday week)</h6>
    `
  } else {
    infoTemplate.value = `
      <h1>zenCalendar System</h1>
    `
    showInfo.value = false
  }
}

</script>
<template>
	<div class="zen-wrapper">
		<div class="info-panel" v-if="showInfo" v-html="infoTemplate"
			@click="toggleInfoView('')">
		</div>
		<div class="flex-me-center">
			<div class="zen-meters">
				<h3>{{ store.forma }}</h3>
				<transition name="wiggle" appear>
					<div class="title-logo">
						<h1>zenCalendar</h1>
						<button>
							<i class="material-icons">mood</i>
						</button>
						<h2>by SteinUnlimited</h2>
						<!-- <h3>{{store.zenDate}}</h3> -->
					</div>
				</transition>
				<!-- <h2>zenTime</h2> -->
				<h3>
					<span v-for="t of displayZenTime" key="t">{{t}}</span>
				</h3>
				<!-- <label for="Session">Session {{store.zsess+1}}</label>
				<meter id="Session" :value="store.zsess" max="11"></meter>
				<label for="While">{{`While/Moment ${store.zmoment}`}}</label>
				<meter id="While" :value="store.zmoment" max="100"></meter>
				<label for="Instant">Instant {{store.instant}}</label>
				<meter id="Instant" :value="store.instant" max="80"></meter> -->
				<component :is="OGSvgs" />
				<div class="flex-me">
					<component :is="ZenDay" />
					<component :is="YearWheel"
					@zendate="toggleInfoView('zendate')"
					@holiday="toggleInfoView('holiday')"
					@solstice="toggleInfoView('solstice')"
					@equinox="toggleInfoView('equinox')"
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
<style lang="sass">
$primary-dark: #192
$primary: #4F7
$stein-green: #4f4
$slime-green: #3f3
$stein-lightgreen: #9f9
$primary-light: #AFA
$safe-light: #DFD
$stein-lumenwhite: #d0fff1
$teal: teal
$light-teal: #4fa
$stein-blue: #2800ff
$greg-dark: rgb(29, 34, 154)
$greg-light: rgb(56, 107, 221)
$midnight: #000202
$midnight-cream: #101
$midnight-deluxe: #323
$midnight-light: #FDC
$secondary-dark: #204
$contrast-light: #F84
$contrast: #C40
$contrast-dark: #810
$secondary-light: #D9F
$secondary: #A5D
$stein-magenta: rgb(105, 92, 233)
$stein-lightpurple: rgb(71, 53, 240)
$medium-orchid: rgb(70, 34, 153)
$stein-purple: rgb(49, 14, 132)
$stein-dark-purple: rgb(42, 4, 109)
$darker-purple: rgb(25, 0, 51)
$hot-purple: rgb(131, 33, 255)
$box-midnight-cream: 0 0 0 1px $midnight-cream
$box-midnight-light: 0 0 0 1px $midnight-light
@font-face
	font-family: HK Grotesk
	src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")
@font-face
	font-family: HK Grotesk
	font-weight: bold
	src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")

@keyframes woggle
	0%
		transform: scale(1)
	50%
		transform: scale(0.7)
	70%
		transform: scale(1.2)
	100%
		transform: scale(0)
.wiggle-enter-active
	animation: woggle 0.5s reverse
.wiggle-leave-active
	animation: woggle 0.5s ease
.time-nav
	display: grid
	margin: 0
	position: fixed
	bottom: .2em
	left: 200px
.time-nav-item
	background: $hot-purple
	color: $slime-green
	max-width: 200px
.title-logo
	display: grid
	font-size: 4rem
	button
		margin: 1em 13em
		background-image: linear-gradient(to right, $stein-lumenwhite, white, $stein-lumenwhite)
		i
			color: $midnight

// zenTime
.zen-meters
	display: flex
	flex-direction: column
	justify-content: space-around
.greg-dark, .greg-light, .zen-borders
	rx: 5px
	ry: 5px
.greg-dark
	stroke: $stein-lumenwhite
	fill: $greg-dark
.greg-light
	stroke: $stein-lumenwhite
	fill: $greg-light
.greg-text
	stroke: $stein-lumenwhite
	fill: $midnight-light
.center-circle
	fill: rgba(91, 246, 65, 0.7)
	stroke: white
	stroke-dasharray: 3 200
	stroke-width: 18

@keyframes tick-pulse
	0%
		transform: rotate(-90deg)
	to
		transform: rotate(270deg)
.tick-pulse
	animation: tick-pulse 1s ease
	animation-iteration-count: infinite
.clock-hand
	// stroke: $contrast-light
	stroke: rgba(91, 246, 65, 0.7)
	stroke-width: 4
.zen-rect
	// stroke: $stein-lumenwhite
.zen-mint
	fill: $slime-green
.zen-borders
	fill: none
	fill: rgba(40, 0, 100, 0.2)
	stroke: $stein-lumenwhite

// TimeConversions
.conversionTable
	max-width: 80vw
	display: grid
	background-color: black
	align-items: stretch
	margin: 2rem
	padding: 2em
	grid-gap: 2rem
	table
		color: lavender
		box-shadow: 0 0 8px 1px lightblue
		font-size: 1.2rem
		th
			padding: 0.5rem 0.8rem
		.th
			border: 1px solid darkmagenta
		.th-blue
			border: 1px solid lightskyblue

.flex-me
	display: flex
	@media screen and (max-width: 800px)
		margin: 0
		flex-direction: column
.zen-wrapper
	// max-width: 1970px
	// width: 100vw
	font-family: HK Grotesk
	display: grid
	@media screen and (min-width: 1440px)
		grid-template: auto / 1fr 1fr
	@media screen and (max-width: 425px)
		display: flex
		flex-direction: column
		width: 425px
		align-items: center
		overflow-x: hidden
		svg
			// transform: scaleX(60%)
		// overflow-x: scroll
	@media screen and (max-width: 800px)
		min-width: 100%
		grid-template: 1fr / auto
	color: $stein-lumenwhite
	background-color: $midnight
	justify-content: space-evenly
	min-height: 100vh
	padding: 10px 5px
	margin: 0 auto
	grid-gap: 10px
	h1
		font-size: 46px
		color: $stein-lumenwhite
		font-size: 3rem
		line-height: 105%
		margin: .1em 0
	h2
		margin: 0 0 .4em
		color: $hot-purple
		font-size: 2rem
	h3
		font-size: 1.31em
		margin: 0 0 .1em
		color: $teal
	.flex-me-center
		display: flex
		justify-content: space-around
		// grid-row: 1 / 3
	.selected
		background-color: $stein-purple
		color: white
		list-style: none
		font-size: 1.3em
		color: $safe-light
	a:hover
		text-decoration: none
#habits
	display: flex
	flex-direction: column
	@media screen and (min-width: 799px)
		grid-gap: 30px
		display: grid
		box-shadow: 0 0 2px $midnight-light
		margin: 1em
		align-items: space-around
	// grid-row: 1 / 3
.baheader
	text-align: center
	font-weight: 500
	height: 20px
	align-self: flex-end
.baheader-zen
	background-color: $secondary
	color: $stein-lumenwhite
.unchunk
	color: $safe-light
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr
	grid-gap: 2px
.uncell
	background-color: $midnight
	margin: 0
	padding: 1em
.uncell-zen
	border: 1px solid $secondary-light
	cursor: pointer
.uncell-zen:hover
	border: 1px solid $secondary
	background-color: $midnight-cream
.selected-date
	font-weight: bolder
	background-color: $stein-purple
	color: $primary

.info-panel
	position: absolute
	bottom: 0
	right: 0
	background: rgba(80, 80, 180, 0.8)
	height: 100vh
	width: 90vw
.zenwheel text
	cursor: pointer
.dayname
	color: lime
.dayname-active
	background-color: darkViolet
.session-cell
	color: black
	background-color: lime
	text-align: left
.active
	background-color: darkViolet
.zentime-container
	margin: 0.2em 6em
	@media screen and (max-width: 800px)
		padding: 1em 4em
		margin: 1em
	border-radius: 60px
	background-color: $stein-dark-purple
	div
		padding: 5px 0
		.stroke-me
			stroke: chartreuse
.zenwheel
	text.active
		fill: white
.above-cal
	display: grid
	@media screen and (max-width: 799px)
		// grid-template: auto / auto
		display: flex
		flex-direction: column
	@media screen and (min-width: 800px)
		grid-template: 3fr 1fr / 1fr
		justify-content: center
		align-items: flex-end
.zen-calendar
	margin: 1em
.day-container
	justify-content: space-around
	align-items: center
	align-content: center
	svg
		align-self: flex-end
		display: block
		transform: translateX(9rem)
		@media screen and (min-width: 800px)
			transform: translateX(3em)
</style>
