<script setup lang="ts">
import { reactive } from "vue";
document.title = "Wow You Found It!";
var state = reactive({
	one: true,
	two: true,
	three: true,
	four: true,
})
</script>
<template>
	<div id="nextBody">
		<transition name="shrinkDiv">
			<img
				id="abaDon"
				src="@/assets/images/Abandon.jpg"
				class="transparent"
				v-if="state.one"
				@mouseleave="state.one=false"
			/>
		</transition>
		<h1 style="text-align: center">
			/NEXT Error: This Feature Does Not Exist Yet!
		</h1>
		<div>
			<h2 style="color: #ffffff">/NEXT Error10441: ThisFeaturedoesnotexits</h2>
			<transition name="growText">
				<h4 id="abaDont" v-if="state.two" @mouseover="state.two=false">
					Oh... you know, I didn't think you'd get here so soon. <br />
					I, uh... I don't really have anything ready for you yet.<br />
					It's like, the opposite of that.<br />
					You know the old tale about the ant and the grasshopper, right?<br />
					I left an old copy lying around, in case you get bored.<br />
					It's inside the shop. I think I've gotht eh key around here somewhere.
					Uh...<br />
					Check back with us soon, though! I'm really sorry.
				</h4>
			</transition>
		</div>
		<transition name="shrinkText">
			<p id="abaDona" v-if="state.three" @mouseover="state.three=false" align="left">
				<br /><br /><br /><br /><br /><br />
			</p>
		</transition>
		<transition name="appearDiv">
			<p id="abaDong" v-if="!state.four" align="left">
				<br /><br /><br />
			</p>
		</transition>
		<!--<p align="right"> The past poisoned, he staggars forwardr through strange lands, hindered by harsh forests.<br>
			Once proud and true, he was known to venture the darkness<br>
			and walk with a limp. In solitude, he sought friendship<br>
			among cowards, beggars, and liars.<br>
			How easy it is to turn their gaze, to make them believe.<br>
			With proper names, numbers, and symbols they were aassembled.<br>
			Ever after from that madness with his icon of solid crystal he stole to the humble grove village of Em.</p>
		-->
		<div id="footer" class="text-center" @click="state.four=false">
			comments--><!---->
		</div>
	</div>
</template>
<style lang="sass">
body
	margin: 0
	padding: 0
	overflow: hidden
#nextBody
	font-family: 'Quicksand', "Poppins", helvetica, verdana
	display: flex
	flex-direction: column
	width: 100vw
	height: 100vh
	margin: auto
	padding: 0
	background-image: url("@/assets/images/P1.jpg")
	background-repeat: no-repeat
	background-position: bottom left
	background-size: 100vw
	text-align: center
	h1, h2, h4
		color: #182
		opacity: 10
		color: #609
	img
		margin: auto
	table, th, td
		border: 1px solid black
		border-collapse: collapse
	img
		width: auto
		height: auto
		display: flex
.transparent
	filter: alpha(opacity=10)
	-moz-opacity: 0.8
	opacity: 0.8
.shrinkDiv-leave-from
	width: 620px
.shrinkDiv-leave-to
	width: 0
.shrinkDiv-leave-active
	transition: width 20s
.growText-leave-from
	font-size: 14px
.growText-leave-to
	font-size: 20px
.growText-leave-active
	transition: font-size 10s ease
.shrinkText-leave-from
	font-size: 14px
.shrinkText-leave-to
	font-size: 0px
.shrinkText-leave-active
	transition: font-size 10s ease
.appearDiv-enter-from
	opacity: 0
.appearDiv-enter-to
	opacity: 1
.appearDiv-enter-active
	transition: opacity 5s ease
</style>
