<script setup lang="ts">
import { ref } from "vue";
import ThousandPlusPlaylist from "@/components/ThousandPlusPlaylist.vue";
document.title = "Music Lessons with Adam";
const showEmail = ref(false);
const getMail = () => {
  showEmail.value = !showEmail.value;
};
const showPlaylist = ref(true);
</script>
<template>
  <div id="bodyMain">
    <div class="headban fadeInUp">
      <transition name="bounceInRight" appear>
        <h1 class="glow" id="hometitle">MUSIC LESSONS</h1>
      </transition>
      <transition name="bounceInLeft" class="animationDelay" appear>
        <h2>with Adam Loewen</h2>
      </transition>
      <transition name="bounceIn" class="animationDelayMed" appear>
        <h3>Piano | Guitar | Bass | Ukelele | Drums | Voice</h3>
      </transition>
    </div>
    <div class="top-container">
      <div class="glow contdiv insert-into piano-div">
        <h2>Private/Group Lessons and Coaching</h2>
        <h4>
          I have switched careers and no longer teach full time.<br />
          I love to teach and play, and always accept new students for remote or
          local sessions.
        </h4>
        <div @click="getMail">
          <img
            v-if="showEmail"
            class="pulse"
            id="emailImg"
            src="@/assets/img/gmail.png"
          />
          <h2 v-else class="bounceMe">Contact Me!</h2>
        </div>
      </div>
	  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2892329347/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://thesteinsound.bandcamp.com/album/shades">Shades by Stein</a></iframe>
	  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1494684139/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://thesteinsound.bandcamp.com/album/accidance-2">Accidance! by Stein</a></iframe> 
	  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2566349416/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://thesteinsound.bandcamp.com/album/travels-reissue">Travels (Reissue) by Stein</a></iframe>
      <component v-if="showPlaylist" :is="ThousandPlusPlaylist" />
	</div>
    <!-- <div class="double-width glow">
			<h1>Testimonials</h1>
		</div>
		<div class="testimonials">
			<div class="testimonial glow">
				<img src="@/assets/img/Owen.jpg" />
				<p>
					Adam has been a patient and encouraging teacher. He even helped my son
					print his own song, 'The Mason Jam', so he could 'sell' copies. We
					love watching Mason's love for music grow and we have Adam to thank
					for that.
				</p>
			</div>
			<div class="testimonial glow">
				<p>
					Our daughter has made great progress with piano under Adam's
					instruction. He is encouraging, motivating, and she loves coming to
					class each week. We would highly recommend him!
				</p>
				<img src="@/assets/img/ruby.jpg" />
			</div>
			<div class="testimonial glow">
				<img src="@/assets/img/kid2.jpg" />
				<p>
					There are no shortcuts in music. Adam is a teacher with an effective
					grasp of musicality in addition to the patience to teach this art
					form. I support and recommend this teacher for your student.
				</p>
			</div>
			<div class="testimonial glow">
				<p>
					My name is Owen. I play the drums. Adam is a very good teacher. He
					helps me learning new songs and is patient with me.
				</p>
				<img src="@/assets/img/kid3.jpg" />
			</div>
		</div> -->
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
	background-color: black
#emailImg
	width: 320px
	max-width: 80vw
#bodyMain
	// display: flex
	// flex-direction: column
	// width: 100%
	#hometitle
		text-shadow: 3px 3px 8px #90d
		word-wrap: break-word
		// font-size: 4.5em
		color: white
		vertical-align: middle
		text-align: center
		// margin: 0
		// margin-top: 20px
	.headban
		background-color: #7bd
		font-family: 'Lobster', cursive
		box-shadow: -1px 0 10px white
		// border-bottom: 1px solid white
		background-image: url("@/assets/img/smileyOutline.png"), url("@/assets/img/cabworkr.png")
		background-position-x: left, right
		background-position-y: bottom, center
		background-repeat: no-repeat
		background-size: 10em
		// background-size: 400px
		// margin-bottom: 1rem
		// padding-bottom: 100px
		font-size: 32px
		padding: 1rem
		margin: 1rem auto
		color: #cef
		vertical-align: middle
		text-align: center
		text-shadow: 3px 3px 3px #50d
		font-size: 26px
		vertical-align: middle
		text-align: center
		color: white
		// margin: 5px 0px
		// word-wrap: nowrap
		// word-break: keep-all
		// max-width: 100vw
		min-width: 500px
		width: 40em
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
	.testimonials
		// text-align: center
		// grid-template-columns: 1fr
		// margin: 1rem 5rem
		// align-items: center
	.testimonial
		p
			font-family: 'lhandw'
			color: #bff
			font-size: 2rem
			width: 180%
		img
			border: 1px solid #6F8e
			border-radius: 20px
			-webkit-filter: sepia(80%)
			filter: sepia(80%)
			// display: flex
			// flex-direction: column
			// max-width: 100%
			min-width: 300px
			// width: 300px
	@media screen and (min-width: 430px)
		.testimonials
			text-align: center
			// grid-template-columns: 1fr
			margin: 1rem 5rem
			align-items: center
			.testimonial
				p
					width: 100%
					font-family: 'lhandw'
					color: #bff
					font-size: 1.2rem
					// display: flex
					// flex-direction: column
				img
					max-width: 100%
					border: 1px solid #6F8e
					border-radius: 20px
					-webkit-filter: sepia(80%)
					filter: sepia(80%)
					// display: flex
					// flex-direction: column
					// min-width: 300px
					// width: 300px
	.top-container
		text-shadow: 3px 3px 8px #90d
		color: #2FE
		text-align: center
		display: grid
		background-image: linear-gradient(to bottom, #010, #000, #010)
		padding: 2rem 0
		grid-template-columns: 1fr
		@media screen and (min-width: 600px)
			grid-template-columns: 1fr 1fr
			justify-items: center
	.piano-div
		background-image: url(@/assets/img/paintpiano.jpg)
	.sea-div
		// background-image: url(@/assets/img/seattle.jpg)
		h2
			font-style: italic
			cursor: pointer
			display: block
	.insert-into
		border-radius: 5px
		border: 1px solid white
		margin: 0
		max-width: 600px
		min-height: 400px
		background-size: cover
		background-repeat: no-repeat
		background-position: bottom
.double-width h1
	margin: 1rem 10%
	text-align: center
	font-size: 3rem
	font-family: 'Lobster', cursive
	box-shadow: 1px 0 10px white
	color: white
@media screen and (min-width: 430px)
	.headban
		padding-bottom: 0
		background-size: 400px
	.piano-div, .sea-div
		min-height: 800px
		width: 800px
	.double-width
		text-align: center
		// grid-column: 1/3
	.testimonials
		display: grid
		grid-gap: 1em
		grid-template-columns: 1fr 1fr 1fr 1fr
		img
			margin: auto
#habits
	padding: 1em
</style>
