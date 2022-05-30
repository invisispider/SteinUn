<script setup lang="ts">
import '@/assets/css/base.sass'
import { defineComponent } from "vue"
import { RouterView } from "vue-router"
// import LoadingComponent from "@/components/LoadingComponent.vue"
import Sidebar from '@/components/sidebar/Sidebar.vue'
import { sidebarWidth } from '@/components/sidebar/state'
</script>
<template>
	<div id="app">
		<Sidebar />
		<div :style="{ 'margin-left': sidebarWidth }">
			<router-view v-slot="{ Component} ">
				<transition name="route" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
</template>
<style lang="sass">
.route-enter-from
	opacity: 0
	transform: translateX(100px)
.route-enter-active
	transition:	all 0.3s ease-out
.route-leave-to
	opacity: 0
	transform: translateX(-100px)
.route-leave-active
	transition:	all 0.3s ease-in
#app
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
#nav
	padding: 30px
#nav a
	font-weight: bold
	color: #2c3e50
#nav a.router-link-exact-active
	color: #42b983
</style>




<!--// <script setup lang="ts">
// import FooterComponent from "@/components/FooterComponent.vue"
// 		<div class="content">
// 			<component :is="NavbarComponent" />
// 			<main>
// 				<router-view />
// 			</main>
// 			<transition name="shrink" appear>
// 				<component :is="FooterComponent" />
// 			</transition>
// 		</div>
// // VITE / VUE THEME
// $white: #ffffff
// $white-soft: #f8f8f8
// $white-mute: #f2f2f2
// $black: #181818
// $black-soft: #222222
// $black-mute: #282828
// $indigo: #2c3e50
// $divider-light-1: rgba(60, 60, 60, 0.29)
// $divider-light-2: rgba(60, 60, 60, 0.12)
// $divider-dark-1: rgba(84, 84, 84, 0.65)
// $divider-dark-2: rgba(84, 84, 84, 0.48)
// $light-1: $indigo
// $light-2: rgba(60, 60, 60, 0.66)
// $dark-1: $white
// $dark-2: rgba(235, 235, 235, 0.64)
// // MY DEFAULT THEME
// $mypurp: #92099e
// $mygreen: #31e833
// $section-gap: 160px
// // APP SPECIFIC VARS - varnames are scoped!
//
// // SETTINGS FOR MOBILE AND DEFAULTS
// // absolutely keep these!
// *,
// *::before,
// *::after
// 	box-sizing: border-box
// @media (hover: hover)
// 	a:hover
// 		background-color: hsla(160, 100%, 37%, 0.2)
// body
// 	background-color: #150018
// 	font-family: 'Lacquer', verdana
// button, a, router-link, RouterLink, i
// 	cursor: pointer
// 	display: block
// .content
// 	max-width: 100vw
// 	margin-top: 5rem
// .christmas-icon
// 	margin: auto auto
// 	min-width: 2em
// 	color: $mygreen
// 	padding: 8px
// 	border-radius: 1rem
// 	box-shadow: 0 0 10px $mygreen
// 	background: rgba(0, 0, 0, 0.7)
// 	cursor: pointer
// .green
// 	color: $mygreen
// .red
// 	color: rgb(218, 26, 84)
// .topnav
// 	position: fixed
// 	display: flex
// 	top: 0
// 	left: 0
// 	z-index: 5
// 	max-width: 100vw
// 	background-image: url("@/assets/img/keys.jpg")
// 	background-color: rgba(0, 0, 0, 0)
// 	background-repeat: repeat-x
// 	background-size: 40%
// 	background-position: top
// 	justify-content: left
// 	.bcn
// 		font-family: 'Lacquer', verdana
// 		font-size: 1.2rem
// 		padding: 0.2rem
// 		margin: 0.4rem
// 	ul
// 		font-family: Roboto
// 		min-height: 25vh
// 		display: flex
// 		flex-wrap: wrap
// 		padding: 0.2rem 0
// 		width: 100vw
// 		margin: 5px 0
// 		font-size: 1.4rem
// 		// min-width: 70vw
// 	.navItem
// 		box-shadow: 0 0 10px $mygreen
// 	li
// 		background-color: rgba(0, 0, 0, 0.8)
// 		z-index: 10
// 		min-width: 70vw
// 		border-radius: 10px
// 		white-space: nowrap
// 		text-align: center
// 		cursor: pointer
// 		// margin: 3px
// 		// background-color: black
// 		border: solid 1px white
// 		list-style-type: none
// 	.center
// 		display: flex
// 		justify-content: center
// 		align-content: center
// 		align-items: center
// 	a, router-link
// 		box-shadow: 0 0 10px $mypurp
// 		display: block
// 		text-decoration: none
// 		color: #fbf
// 		padding: 0.4rem 0.2rem
// 		border-radius: 6px
// 		height: 100%
// 	a:hover, router-link:hover
// 		color: #fff
// 	h3
// 		text-shadow: 2px 2px 5px #000
// 		font-size: 26px
// 		font-family: "mistral"
// 		vertical-align: middle
// 		text-align: center
// 		color: white
// 		margin: 5px 0px
// .hidden
// 	visibility: hidden
// footer
// 	z-index: 7
// 	display: flex
// 	position: fixed
// 	bottom: 0
// 	text-align: center
// 	background: rgba(20, 0, 0, 0.9)
// 	border-radius: 1em
// 	.collapseButton
// 		padding: 0.5em
// 		display: flex
// 	.footer-collapsible
// 		padding: 1rem
// 		justify-content: center
// 		width: 100%
// 	.warped-logo
// 		transform: rotate(245deg)
// 		box-shadow: 0 0 12px white
// 	span
// 		position: relative
// 		word-wrap: nowrap
// 		font-family: "mistral"
// 		color: #adf
// 		font-size: 1.2rem
// 		box-shadow: -4px -3px 4px black
// 		background: rgba(40, 219, 95, 0.1)
//
//
// // LAPTOP/COMPUTER STYLE
// @media screen and (min-width: 430px)
// 	.topnav
// 		padding-top: 0
// 		margin-top: 0
// 		position: fixed
// 		// flex-direction: row
// 		z-index: 2
// 		background-size: 9em
// 		ul
// 			min-height: 2rem
// 			display: flex
// 			grid-template-columns: auto
// 			// flex-direction: row
// 			flex-wrap: nowrap
// 			max-width: 100vw
// 			justify-content: flex-start
// 			list-style-type: none
// 			padding: 0
// 			margin: 0
// 			li
// 				font-size: 1.2rem
// 				min-width: 10vw
// 				padding: 0.2rem
//
// // Net ninja method, works great for div transitions but BE CAREFUL
// .grow-enter-from, .grow-leave-to
// 	opacity: 0
// 	transform: scale(0)
// .grow-enter-to, .grow-leave-from
// 	opacity: 1
// 	transform: scale(1)
// .grow-enter-active, .grow-leave-active
// 	transition: all .8s
// .bounceInRight-enter-active, .bounceInRight-leave-active
// 	transition: all 3s ease
// @keyframes bounceInRight
// 	0%
// 		opacity: 0
// 		transform: translateX(2000px)
// 	60%
// 		transform: translateX(-20px)
// 	80%
// 		transform: translateX(5px)
// 	100%
// 		opacity: 1
// 		transform: translateX(0)
// .bounceInRight-enter-active
// 	animation: bounceInRight 2s ease
// @keyframes bounceInLeft
// 	0%
// 		opacity: 0
// 		transform: translateX(-2000px)
// 	60%
// 		transform: translateX(20px)
// 	80%
// 		transform: translateX(-5px)
// 	100%
// 		opacity: 1
// 		transform: translateX(0)
// .bounceInRight-enter-active
// 	animation: bounceInLeft 2s ease
// @keyframes bounceIn
// 	0%
// 		opacity: 0
// 		transform: scale(.3)
// 	50%
// 		transform: scale(1.05)
// 	70%
// 		transform: scale(.9)
// 	100%
// 		opacity: 1
// 		transform: scale(1)
// .bounceIn-enter-active
// 	animation: bounceIn 2s ease
// @keyframes spang
// 	0%
// 		transform: rotate(0deg)
// 	100%
// 		transform: rotate(360deg)
// .spinMe
// 	animation: spang 15s linear
// 	animation-iteration-count: infinite
// 	// animation-delay: 20s
// @keyframes bounce
// 	0%
// 		transform: scale(1)
// 	50%
// 		transform: scale(0.9)
// 	70%
// 		transform: scale(1.15)
// 	100%
// 		transform: scale(1)
// .bounceMe
// 	animation: bounce 3s ease
// 	animation-iteration-count: 40
// 	animation-delay: 10s
// .fadeDown-enter-from, .fadeDown-leave-to
// 	opacity: 0
// 	transform: translateY(-500px)
// .fadeDown-enter-active, .fadeDown-leave-active
// 	transition: all 0.6s ease
// .fade-enter-from, .fade-leave-to
// 	opacity: 0
// .fade-enter-active, .fade-leave-active
// 	transition: opacity 0.5s ease
// .fadeUp-enter-from, .fadeUp-leave-to
// 	opacity: 0
// 	transform: translateY(20px)
// .fadeUp-enter-to, .fadeUp-leave-from
// 	opacity: 1
// 	transform: translateY(0)
// .fadeUp-enter-active, .fadeInUp-leave-active
// 	transition: all 0.5s ease
// .glow
// 	animation: glow 1.5s ease-in-out infinite alternate
// @keyframes glow
// 	from
// 		text-shadow: 0px 0px 8px #aaa, 3px 3px 13px #90d, 0px 0px 23px #e60073
// 	to
// 		text-shadow: 0px 0px 18px #50d, 3px 3px 3px #90d, 0px 0px 33px #ff4da6
// .pulse
// 	transition: transform .3s
// 	animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite alternate
// 	z-index: 1
// @keyframes pulse
// 	0%
// 		transform: scale(1)
// 	100%
// 		transform: scale(1.2)
// .roam
// 	transition: transform 3s
// 	animation: roam-animation 4s cubic-bezier(0.24, 0, 0.38, 1) infinite alternate
// 	z-index: 1
// @keyframes roam
// 	0%
// 		transform: translateX(-1200px)
// 	100%
// 		transform: translateX(1200px)
// .shrink-enter-from, .shrink-leave-to
// 	scale: 0
// .shrink-enter-to, .shrink-leave-from
// 	scale: 1
// .shrink-enter-active
// 	transition: scale 5s ease
// </style>-->
