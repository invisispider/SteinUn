<script setup lang="ts">
import { ref } from "vue"
import ThousandPlusPlaylist from "@/components/ThousandPlusPlaylist.vue"
document.title = "Music Lessons with Adam"
const showEmail = ref(false)
const getMail = () => {
	showEmail.value = !showEmail.value
}
const showPlaylist = ref(true)
</script>
<template>
	<div id="bodyMain">
		<div class="headban fadeInUp">
			<div class="bounceInRight">
				<h1 class="glow" id="hometitle">MUSIC LESSONS</h1>
			</div>
			<div class="bounceInleft animationDelay">
				<h2>with Adam Loewen</h2>
			</div>
			<div class="bounceIn animationDelayMed">
				<h3>Piano | Guitar | Bass | Ukelele | Drums | Voice</h3>
			</div>
		</div>
		<div class="top-container">
			<div class="glow contdiv insert-into piano-div">
				<h2>Private/Group Lessons and Coaching</h2>
				<h4>
					I have switched careers and no longer teach full time.<br> I love to teach and play,
					and always accept new students for remote or local sessions.
				</h4>
				<div @click="getMail">
					<img v-if="showEmail" class="pulse" id="emailImg" src="@/assets/images/gmail.png" />
					<h2 v-else class="bounceMe">Contact Me!</h2>
				</div>
			</div>
			<component v-if="showPlaylist" :is="ThousandPlusPlaylist" />
			<!-- <div v-else @click="showPlaylist=true" class="contdiv insert-into sea-div"> -->
				<!-- <h2>Click Me for a Song</h2> -->
			<!-- </div> -->
		</div>
		<div class="bottom-container">
			<div class="contdiv2 glow">
				<div class="double-width">
					<h1>Testimonials</h1>
				</div>
				<div class="testimonial">
					<p>
						Adam has been a patient and encouraging teacher. He even helped my son
						print his own song, 'The Mason Jam', so he could 'sell' copies. We
						love watching Mason's love for music grow and we have Adam to thank
						for that.
					</p>
					<img src="@/assets/images/kid2.jpg" />
				</div>
				<div class="testimonial">
					<p>
						Our daughter has made great progress with piano under Adam's
						instruction. He is encouraging, motivating, and she loves coming to
						class each week. We would highly recommend him!
					</p>
					<img src="@/assets/images/ruby.jpg" />
				</div>
				<div class="testimonial">
					<p>
						There are no shortcuts in music. Adam is a teacher with an effective
						grasp of musicality in addition to the patience to teach this art
						form. I support and recommend this teacher for your student.
					</p>
					<img src="@/assets/images/kid3.jpg" />
				</div>
				<div class="testimonial">
					<p>
						My name is Owen. I play the drums. Adam is a very good teacher. He
						helps me learning new songs and is patient with me.
					</p>
					<img src="@/assets/images/Owen.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
@font-face
	font-family: "lhandw"
	src: url(@/assets/fonts/lhandw.ttf) format("truetype")
@font-face
	font-family: "mistral"
	src: url(@/assets/fonts/mistral.ttf) format("truetype")
body
	margin: 0
	background-color: #7bd
	background-color: black
#emailImg
	width: 320px
	max-width: 80vw
#bodyMain
	display: flex
	flex-direction: column
	width: 100vw
	#hometitle
		text-shadow: 3px 3px 8px #90d
		word-wrap: break-word
		font-size: 4.5em
		color: white
		vertical-align: middle
		text-align: center
		margin: 0
		margin-top: 20px
	.headban
		background-color: #7bd
		display: grid
		font-family: 'Lobster', cursive
		background-repeat: no-repeat
		background-size: 400px
		margin: 0
		box-shadow: 1px 0 10px white
		border-bottom: 1px solid white
		margin-bottom: 1rem
		@media screen and (max-width: 800px)
			background-image: url("@/assets/images/smileyOutline.png"), url("@/assets/images/cabworkr.png")
			background-position-x: left, right
			background-position-y: bottom, top
			padding-bottom: 500px
		@media screen and (min-width: 800px)
			background-image: url("@/assets/images/smileyOutline.png"), url("@/assets/images/cabworkr.png")
			background-position-x: left, right
			background-position-y: bottom, bottom
			padding-bottom: 300px
		font-size: 32px
		text-shadow: 3px 3px 3px #50d
		color: #cef
		vertical-align: middle
		text-align: center
		text-shadow: 2px 2px 5px #000
		font-size: 26px
		vertical-align: middle
		text-align: center
		color: white
		margin: 5px 0px
	// .banimg
	// 	max-width: 300px
	// 	margin: auto
	// 	border: solid 2px #DAD
	// 	border-radius: 10px
	// 	z-index: 5
	.hidden
		visibility: hidden
	.contdiv
		font-family: 'Lobster'
		justify-content: center
		text-align: center
		color: #ede
		font-size: 1.3rem
		overflow: hidden
		margin: 1em auto
		padding: 0.2em
	.testimonial
		text-align: center
		// justify-content: center
		// background-image: linear-gradient(to bottom right, #205, #527)
		font-family: 'lhandw'
		margin: 0
		padding: auto 0
		max-width: 100vw
		color: #bff
		font-size: 1.3rem
		h3
			padding: 0.1em
			border-bottom: 2px solid #6F8e
		img
			max-width: 100%
			// min-width: 300px
			width: 300px
			border: 1px solid #6F8e
			border-radius: 20px
			-webkit-filter: sepia(80%)
			filter: sepia(80%)
			// img
	.button
		margin: 0px 50px
		color: #dbf
		background-color: #609
		padding: 10px
		border: 3px groove #b0a
		border-radius: 8px
		cursor: pointer
	.top-container
		text-shadow: 3px 3px 8px #90d
		color: #2FE
		text-align: center
		display: grid
		grid-template-columns: 1fr
		@media screen and (min-width: 600px)
			grid-template-columns: 1fr 1fr
			justify-items: center
	.piano-div
		background-image: url(@/assets/images/paintpiano.jpg)
	.sea-div
		background-image: url(@/assets/images/seattle.jpg)
		h2
			font-style: italic
			cursor: pointer
			display: block
	.insert-into
		border-radius: 5px
		border: 1px solid white
		margin: 0
		justify-content: center
		align-items: center
		background-size: cover
		background-repeat: no-repeat
		background-position: center
		align-content: center
		text-align: center
		max-width: 600px
		min-height: 400px
		background-size: cover
		background-repeat: no-repeat
		background-position: bottom
	.bottom-container
		display: grid
	.double-width h1
		margin: 3rem auto
		text-align: center
		font-size: 3rem
		font-family: 'Lobster', cursive
		box-shadow: 1px 0 10px white
@media screen and (min-width: 430px)
	.headban
		padding-bottom: 0
	.piano-div, .sea-div
		min-height: 800px
		width: 800px
	.top-container
		display: grid
		grid-template-columns: 1fr 1fr
	.double-width
		text-align: center
		grid-column: 1/3
	.bottom-container
		display: grid
	.testimonial
		display: flex
		margin: 0
		img
			margin: 1em
			max-width: 500px
			max-height: 500px
	.contdiv2
		display: grid
		grid-template-columns: 1fr 1fr
		max-width: 100%
		justify-self: center
</style>
