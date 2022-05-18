<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useTime } from "@/stores/time.ts"
import ZenTime from "@/components/Time/ZenTime.vue"
import ZenCalendar from "@/components/Time/ZenCalendar.vue"
import TimeConversions from "@/components/Time/TimeConversions.vue"
// import ZenDocs from "@/components/Time/ZenDocs.vue"
import { DateTime } from "luxon"
document.title = "Stein Unlimited Calendar System"
const store = useTime()
const timePulse = () => {
	let luxDate = DateTime.now().toLocal()
	let luxString =
		"" + luxDate.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)
	let luxCalendar =
		" ||  " + luxDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
	let sec = luxDate.second
	let min = luxDate.minute
	let hou = luxDate.hour
	let secs = luxDate.diff(luxDate.startOf("day"), "seconds").as("seconds")
	let adjsecs = secs < 6 * 3600 ? secs + 18 * 3600 : secs - 6 * 3600
	let trueh = (secs / 3600) % 24
	let adjh = (adjsecs / 3600) % 24
	let whiles = Math.floor((adjsecs / store.ins_in_whi) % store.mom_in_whi)
	let sess = Math.floor(adjh / store.hou_in_sess)
	store.forma = luxString + "" + luxCalendar
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
	clearInterval(timerID)
})
const whichView = ref('time')
const setView = (which) => {
	if (which==='time') {
		whichView.value = 'time'
	} else {
		whichView.value = 'date'
	}
}
const sTitleLogo = ref(true)
const trigger = () => (sTitleLogo.value = !sTitleLogo.value)
</script>
<template>
	<div class="zen-wrapper">
		<div class="selectables">
			<component :is="ZenTime" v-if="whichView==='time'" />
			<component :is="TimeConversions" v-if="whichView==='time'" />
			<component :is="ZenCalendar" v-else />
		</div>
		<aside class="time-nav">
			<button class="time-nav-item" @click.prevent="setView('time')">
				Clock
				<i class="material-icons">alarm_off</i>
			</button>
			<button class="time-nav-item" @click.prevent="setView('date')">
				Calendar
				<i class="material-icons">calendar_month</i>
			</button>
			<button @click.prevent="trigger"
				class="material-icons time-nav-item"
				v-text="sTitleLogo ? `mood` : `sentiment_very_dissatisfied`"
			></button>
		</aside>
		<transition name="wiggle" appear>
			<div class="title-logo" v-if="sTitleLogo" @click.prevent="trigger">
				<h1>zenCalendar</h1>
				<h2>by SteinUnlimited</h2>
			</div>
		</transition>
	</div>
</template>
<style lang="sass">
$bg: #001215
$wavelength-gray: #e0e0e0
$stein-green: #44ffaa
$stein-lightgreen: #00ffaa
$stein-lumenwhite: #d0fff1
$stein-blue: #2800ff
$midnight: #000202
$midnight-cream: #101
$midnight-deluxe: #323
$midnight-light: #FDC
$safe-light: #DFD
$primary-light: #7FA
$primary: #4F7
$primary-dark: #194
$secondary-dark: #204
$contrast-light: #F84
$contrast: #C40
$contrast-dark: #810
$secondary-light: #D9F
$secondary: #A5D
$stein-magenta: rgb(175, 92, 233)
$stein-lightpurple: rgb(131, 33, 255)
$medium-orchid: rgb(100, 24, 153)
$stein-purple: rgb(49, 14, 122)
$stein-dark-purple: rgb(52, 4, 89)
$darker-purple: rgb(35, 6, 51)
$box-midnight-cream: 0 0 0 1px $midnight-cream
$box-midnight-light: 0 0 0 1px $midnight-light
// @font-face
// 	font-family: HK Grotesk
// 	src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Regular.otf?v=1603136326027")
// @font-face
// 	font-family: HK Grotesk
// 	font-weight: bold
// 	src: url("https://cdn.glitch.me/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")
.zen-wrapper
	display: flex
	flex-direction: column
	color: $wavelength-gray
	background-color: $midnight
	margin: 3rem 0
	max-width: 100vw
	min-width: 80vw
	max-height: 100vh
	overflow: auto
		color: $stein-lumenwhite
		font-size: 3rem
		line-height: 105%
		margin: 0.1em 0em
		margin: 0em 0em 0.4em 0em
		color: $stein-magenta
		font-size: 2rem
		font-size: 1.31em
		margin: 0em 0em 0.1em 0em
		color: $stein-green
		color: $stein-lumenwhite
		font-size: 46px
	div.col
		display: grid
		grid: auto auto auto / auto
		justify-content: center
		align-content: center
	span
		line-height: 1.4
		font-weight: bold
		color: $medium-orchid
		font-size: 1.4em
		margin: 0.1rem 2%
		padding: 0.3rem
		width: 45vw
	// ul
	// 	// font-weight: medium
	// 	// font-family: "Tahoma"
	// 	line-height: 1.4
	// 	color: $medium-orchid
	// 	font-size: 1.4em
	// 	list-style-type: none
	// button
	// 	color: $stein-magenta
	a:hover
		text-decoration: none
.selectables
	display: grid
	grid-gap: 0.3rem
	max-width: 100%
	font-size: 0.6em
	margin: 0
	grid: auto / auto auto auto
	height: 100vh
@media screen and (min-width: 380px)
	.selectables
		font-size: 1em
@media screen and (min-width: 800px)
	.selectables
		font-size: 16px
.time-nav
	display: grid
	margin: 0
	position: fixed
	bottom: 0.2em
	left: 200px
	// right: 0.2em
	.time-nav-item
		background: $stein-lightpurple
		max-width: 200px
.title-logo
	// margin-top: 2em
	display: grid
	font-size: 4rem
@keyframes woggle
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
@media screen and (min-width: 430px)
	.zen-wrapper
		place-items: center
		min-height: 50vh
		margin: 0 0em
		// flex-direction: row
	.selectables
		// flex-direction: column
		align-items: center
		// justify-content: center
// zenTime
.zentime-container
	display: grid
	grid-template-columns: 1fr 1fr
	// width: 100vw
	justify-content: space-between
.zen-meters
	display: flex
	flex-direction: column
	// grid-template-rows: repeat(8, 1fr)
	// grid-template-columns: 1fr 1fr
	// text-align: center
	// justify-content: space-between
	label
		font-size: 1.4rem
		text-align: center
	meter
		width: 100%
	progress
		width: 100%
// sessionsChart / timeContainer???
.time-container
	font-family: Roboto
	textAlign: center
	float: right
	padding: 0.9em
	max-height: 100vh
	.greg-dark, .greg-light, .zen-borders
		rx: 5px
		ry: 5px
	.greg-dark
		stroke: #D0FFF1
		fill: rgb(29, 34, 154)
	.greg-light
		stroke: #D0FFF1
		fill: rgb(56, 107, 221)
	.greg-text
		stroke: #D0FFF1
		fill: #FFFFFF
	.center-circle
		fill: rgba(91, 246, 65, 0.7)
	.zen-dark
		stroke: #715
		fill: DarkViolet
	.clock-hand
		stroke: rgba(91, 246, 65, 0.7)
		stroke-width: 4
	.zen-rect
		stroke: #D0FFF1
		fill: rgb(10, 30, 10, 50%)
	.zen-mint
		fill: #4FA
	.zen-borders
		stroke: #D0FFF1
		fill: none
@keyframes tick-pulse
		transform: translateY(0px)
	80%
		transform: translateY(0px)
	90%
		transform: translateY(-2px)
	100%
		transform: translateY(0px)
.tick-pulse
	animation: tick-pulse 1s ease
	animation-iteration-count: infinite
// TimeConversions
.conversionTable
	max-width: 80vw
	// max-height: 100vh
	margin: 0
	display: grid
	padding: 0
	grid-gap: 0
	background-color: black
	table
		color: lavender
		box-shadow: 0 0 8px 1px lightblue
		fontSize: 1.2rem
		th
			// max-width: 80px
			padding: 0.5rem 0.8rem
		.th
			border: 1px solid darkmagenta
		.th-blue
			border: 1px solid lightskyblue
@media screen and (min-width: 430px)
	.conversionTable
		align-items: stretch
		margin: 2rem
		padding: 2em
		grid-gap: 2rem
	.calendars-container
		display: grid
		grid-template-columns: 1fr 1fr
		align-content: flex-start
// zenCalendar
.content
	margin: 0
	padding: 0
	// margin-top: 0
.untable
	display: grid
	margin: 0
	// padding: 0
	// min-height: 100vh
		text-align: center
		justify-content: center
		margin: 0
		padding: 0
		display: grid
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
		li
			text-transform: capitalize
			border: 1px solid $secondary-light
			padding: 5px
			cursor: pointer
			border-radius: 5px
			background-color: $stein-dark-purple
			color: $secondary-light
		.selected
			background-color: $stein-purple
			color: white
		list-style: none
		font-size: 1.3em
		color: $safe-light
.greg-date-td
	margin: 0
	box-shadow: $box-midnight-cream
#habits
	display: grid
	grid-gap: 30px
#months
	display: grid
	grid-gap: 30px
.unheader
	border-radius: 5px
	box-shadow: $box-midnight-light
	display: flex
	margin: 1em auto
	padding: 1em 3em 0.4em 3em
	// text-align: center
	// background-color: #316
	// text-transform: uppercase
	// flex-direction: row
	// align-items: center
	// margin: 20px auto
	// writing-mode: vertical-rl
	// text-orientation: upright
.baheader
	text-align: center
	font-weight: 500
	height: 20px
	align-self: flex-end
.baheader-zen
	background-color: $secondary
	color: black
.baheader-greg
	background-color: $primary
	color: black
.unchunk
	color: $safe-light
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr
	grid-gap: 2px
.unchunk-greg
	color: $safe-light
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
	grid-gap: 2px
.uncell
	background-color: $midnight
	margin: 0
	padding: 1em
.uncell-greg
	border: 1px solid $primary-light
.uncell-zen
	border: 1px solid $secondary-light
	cursor: pointer
.uncell-zen:hover
	border: 1px solid $secondary
	background-color: $midnight-cream
.selected-date
	color: $contrast-dark
	background-color: $midnight-deluxe
	font-weight: bolder
</style>
