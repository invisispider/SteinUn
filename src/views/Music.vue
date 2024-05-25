<script setup lang="ts">
import { ref } from "vue";
// import ThousandPlusPlaylist from "@/components/ThousandPlusPlaylist.vue";
document.title = "Music Lessons with Adam";
const showPlaylist = ref(true);
// const steinPlayers = ref(false);
// const toggleSteinPlayers = () => steinPlayers.value = !steinPlayers.value;
</script>
<template>
	<div id="bodyMain">
		<!-- <div v-if="steinPlayers" class="stein-players">
			<iframe style="border: 0;"
				src="https://bandcamp.com/EmbeddedPlayer/album=2892329347/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
				seamless>
				<a href="https://thesteinsound.bandcamp.com/album/shades">Shades by Stein</a>
			</iframe>
			<iframe style="border: 0;"
				src="https://bandcamp.com/EmbeddedPlayer/album=1494684139/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
				seamless>
				<a href="https://thesteinsound.bandcamp.com/album/accidance-2">Accidance! by Stein</a>
			</iframe>
			<iframe style="border: 0;"
				src="https://bandcamp.com/EmbeddedPlayer/album=2566349416/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
				seamless>
				<a href="https://thesteinsound.bandcamp.com/album/travels-reissue">Travels (Reissue) by Stein</a>
			</iframe>
		</div> -->
		<!-- <h2 v-else
			class="double-width glow" 
			style="cursor: pointer;" 
			@click="toggleSteinPlayers"
			>Listen to Adam's music as Stein.
		</h2> -->
		<h1 class="glow double-width">Adam Loewen</h1>
		<div class="headban fadeInUp">
			<!-- <h2>Instruments</h2> -->
			<h3>🎤 Voice</h3>
			<h3>🎹 Piano</h3>
			<h3>🎸 Guitar</h3>
			<h3>♟️ Bass</h3>
			<h3>🧹 Uke</h3>
			<!-- <h3>🥁 Drums</h3> -->
			<!-- <h3>🖋️ Songwriting</h3> -->
			<h3>🎼 Theory</h3>
			<!-- <h3>🎙️ Recording</h3> -->
			<h3>👉🏿 Coaching</h3>
			<h3>⚕️ Therapy</h3>
			<img class="stu-banner" src="@/assets/img/musicbusinesscardF.png" />
		</div>
		<!-- <h2 class="double-width">Availability</h2> -->
		<!-- <h4>
			While music and teaching are not my current focus, I genuinely
			enjoy the rewards and experiences of teaching and
			try to keep a handful of students.
		</h4> -->

		<h3>Currently Available:</h3>
		<p>Remote online lessons.</p>
		<p>In-home lessons around Missoula, MT.</p>
		<h3>Rates:</h3>
		<p>$30 per half hour - includes lesson prep but not travel
			costs or materials.
		</p>

		<!-- <h3>
			To be honest, some lessons are the most fun I've
			ever had in my life, and I've been told that by students.
			What could be better?
		</h3> -->

		<h2 class="double-width">Benefits</h2>
		<ul class="benefits">
			<li>Master music reading, theory, and vocabulary.</li>
			<li>Develop multiple intelligences and social skills.</li>
			<li>Positive attitude, self-esteem, and confidence.</li>
			<li>Emotional and artistic expression.</li>
			<li>Performances connect and enliven community.</li>
			<li>It's terribly fun.</li>
		</ul>
		<h2 class="double-width">Skills</h2>
		<ul class="benefits">
			<li>Critical awareness and goal-orientation.</li>
			<li>Work closely with personal aims and ambitions.</li>
			<li>Work ethic and practice scheduling</li>
			<li>Breathing, posture and self awareness</li>
		</ul>
		<!-- <h3>Growing Together:</h3>
		<p>I work extensively with ensembles, and occasionally
			have had the opportunity to create them from families or
			unrelated students who had expressed interest.
			This type of lesson is extremely rewarding and cost
			effective on both sides, and it allows me to continue developing
			the more advanced students.
		</p> -->
		<!-- <h3>Advanced Students:</h3>
		<p>I am available to coach or mentor existing musical talent or acts.
			I can help to devise overall strategies and business practices.
			I can work with interpersonal dynamics and roles, help brainstorm
			or workshop new material, isolate or brush up parts and develop overall image and
			presentation.
		</p>
 -->
		<!-- <h2 class="double-width">Methods</h2> -->
		<!-- <h3>Learn classical, pop, or jazz on any instrument.</h3> -->
		<!-- <h3>Develop personal style and compose original material.</h3> -->
		<!-- <h2>
			<RouterLink to="Integral">
				The Integral or Holistic approach is a methodology that applies to music.
			</RouterLink>
		</h2> -->
		<!-- <p>Entirely relevant to singing, we may practice a small amount of yoga to
			warm up. This offers superlative
			comprehension of proper breathing and posture.</p> -->
		<!-- <p>If we feel
			nervous or preoccupied, we may work on building rapport, reframing
			situational context, or ice-breaker warmup games.
		</p> -->
		<!-- <p>
			We get comfortable being loud, being ourselves, and working together.
		</p>
		<p>We learn to stop being afraid to make music.
		</p>
		<p>We develop and schedule goals and maintain a practice.</p>
		<p>We may learn about acoustics, physics, and mathematics.</p>
		<p>We may learn history of musical styles and technology. </p>
		<p>We may analyze sounds and trends and search for secret sauce.</p>
		<p>We might be at a stage where we're talking music business, recording, gigging, social media, band dynamics.
		</p>
		<h3>Curiosity compells us to music. <br>Never lose that!</h3> -->

		<h2 class="double-width">Experience</h2>
		<h4>I studied music, history, theory, and trumpet in college and played
			in classical, jazz, and pop bands for 20 years. I have written and recorded over
			a thousand original songs, and performed hundreds on
			stage.
		</h4>
		<h2>Read about me in
			<a href="https://www.bigrapidsnews.com/news/article/evart-music-teacher-provides-osceola-county-fun-17741370.php"
				target="_blank">Big Rapids News.</a>
		</h2>
		<h4>For six years, I taught as staff at Vancouver Music Academy, My Voice Music
			(teen after-school program), and Westside Music School
			(Harmony Road classes), while also freelancing as Stein unLimited. I
			was also facilitating intructor and music teacher at Community Yoga
			in Michigan.
		</h4>


		<!-- <h2 class="double-width">Specialization</h2>
		<h3>
			I teach the same way as conventional teachers, at base.
		</h3>
		<h3>My lessons
			often take on a more holistic role in the life of the student.
		</h3>
		<h3>It doesn't happen every time, but many students have gained
			benefits beyond simply learning to play music.
		</h3>
		<p>I have worked extensively with the elderly,
			emotionally troubled, developmentally disabled,
			neuro-atypical and autistic spectrum clients,
			often blending in elements of music therapy. Parents and students
			have reported positive changes to behavior and perspective - that
			lessons bring out "new sides" to the student!
		</p> -->

		<h2 class="double-width glow">Testimonials</h2>
		<div class="testimonials">
			<div class="testimonial">
				"Our daughter has made great progress with piano under Adam's
				instruction. He is encouraging, motivating, and she loves coming to
				class each week. We would highly recommend him!"
			</div>
			<img class="kid-image" src="@/assets/img/kidpiano.jpg" />
			<img class="kid-image" src="@/assets/img/kidsplash.jpg" />
			<div class="testimonial">
				"There are no shortcuts in music. Adam is a teacher with an effective
				grasp of musicality in addition to the patience to teach this art
				form. I support and recommend this teacher for your student."
			</div>
			<img class="kid-image" src="@/assets/img/kiddrum.jpg" />
			<img class="kid-image" src="@/assets/img/kiddrum2.jpg" />
			<!-- <img class="kid-image" src="@/assets/img/kidfest.jpg" /> -->
			<div class="testimonial">
				"My name is Owen. I play the drums. Adam is a very good teacher. He
				helps me learning new songs and is patient with me."
			</div>
			<!-- <img class="kid-image" src="@/assets/img/kidpiano2.jpg" /> -->
			<img class="kid-image" src="@/assets/img/kidguitar.jpg" />
			<img class="kid-image" src="@/assets/img/paintpiano.jpg" />
			<!-- <img class="kid-image" src="@/assets/img/kidpiano3.jpg" /> -->
			<div class="testimonial">
				"Adam has been a patient and encouraging teacher. He even helped my son
				print his own song, 'The Mason Jam', so he could 'sell' copies. We
				love watching Mason's love for music grow and we have Adam to thank
				for that."
			</div>
		</div>
		<h2 class="double-width glow">Adam's Music</h2>
		<h2>Watch a playlist of cover songs and original home recordings.
			<a href="https://www.youtube.com/watch?v=j4BOaxU6zvk&list=PL-HrctEZpo50_xIks89Gi_2TA__wYh00l"
				target="_blank">ThousandPlus Playlist</a>
		</h2>
		<h2>Read about Adam's rock band and see performance videos:
			<RouterLink to="Videos">
				Stein unLimited Video Archive.
			</RouterLink>
		</h2>
	</div>
</template>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
@font-face
	font-family: "lhandw"
	src: url(@/assets/fonts/lhandw.ttf) format("truetype")
@font-face
	font-family: "mistral"
	src: url(@/assets/fonts/mistral.ttf) format("truetype")

#bodyMain
	// max-width: 100vw
	margin: 2em 0
	display: flex
	flex-direction: column
	justify-content: center
	// text-shadow: 3px 3px 3px #50d
.headban
	max-width: 100vw
	min-height: 200px
	background-image: url("@/assets/img/smileyOutline.png"), url("@/assets/img/cabworkr.png")
	background-size: 9em
	background-repeat: no-repeat
	background-position: bottom left, top right
	display: flex
	justify-content: center
	flex-wrap: wrap
	// justify-content: space-around
	padding-inline: 20%
	*
		margin: 1em
// 	// font-size: 26px
// 	vertical-align: middle
// 	text-align: center
// 	color: white
// .contdiv
// 	font-family: 'Lobster'
// 	justify-content: center
// 	text-align: center
	// color: #ede
	// font-size: 1.3rem
	// overflow: hidden
	// margin: 1em auto
	// padding: 0.2em
.testimonials
	.testimonial
		display: flex
		flex-direction: column
		font-family: 'lhandw'
		font-size: 1rem
.kid-image
	// box-shadow: -1px 0 4px white
	border: 1px solid #a996b9
	// min-width: 300px
	border-radius: 20px
	margin: 5px
	filter: sepia(40%)
	-webkit-filter: sepia(40%)
	max-width: 40vw
	border-radius: 7px
	min-height: 40vw
	max-height: 10vh
// @media screen and (min-width: 430px)
// 	.testimonials
// 		text-align: center
// 		// grid-template-columns: 1fr
// 		margin: 1rem 5rem
// 		align-items: center
// 		.testimonial
// 			p
// 				width: 100%
// 				font-family: 'lhandw'
// 				color: #bff
// 				// font-size: 1.2rem
// 				// display: flex
// 				// flex-direction: column

.double-width
	margin: 1rem 10%
	text-align: center
	padding: 8px
	border-radius: 6px
	// font-size: 3rem
	// font-family: 'Lobster', cursive
	box-shadow: 1px 0 10px white
	// color: white
// @media screen and (min-width: 430px)
// 	.headban
// 		padding-bottom: 0
// 		background-size: 400px
// 	.double-width
// 		text-align: center
// 		// grid-column: 1/3
// 	.testimonials
// 		display: grid
// 		grid-gap: 1em
// 		grid-template-columns: 1fr 1fr 1fr 1fr
// 		img
// 			margin: auto
// #habits
// 	padding: 1em
.stein-players
	display: flex
	flex-direction: column
	max-width: 100vw
	align-items: center
	// margin: 0
	// pardding: 0
	iframe
		max-width: 80vw
		max-width: 88vw
		// height: 120px
		// margin: 0
.inline
	display: inline-flex
	margin: auto
h2
	font-size: 1.7em
h4, p
	font-family: Poppins
h2, h1
	font-family: 'Lobster', cursive
	color: white
	text-shadow: 2px 1px 4px #2c0b4c
.testimonial
	text-shadow: 2px 1px 4px #2c0b4c
	padding: 1em
.stu-banner
	max-width: 500px
	min-width: 300px
	// margin-inline: auto
	margin-block: 30px
// a, router-link
	// cursor: pointer
	// text-decoration: none
	// color: inherit
.benefits
	list-style: none
	padding-inline: 1em
	li
		margin-block: auto
</style>
