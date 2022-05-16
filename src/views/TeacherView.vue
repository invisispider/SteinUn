<script setup>
document.title = "Adam Loewen | Music Lessons in Seattle";
// const getMail = () => {
//   var div = document.getElementById("maildiv");
//   div.removeChild(div.childNodes[0]);
//   var img = document.createElement("img");
//   var bounce = document.createAttribute("class");
//   bounce.value = "pulse";
//   img.setAttributeNode(bounce);
//   var att = document.createAttribute("src");
//   att.value = "@/assets/images/gmail.png";
//   img.setAttributeNode(att);
//   div.replaceChild(img, div.childNodes[0]);
// };
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
    <div class="contdiv2">
      <img class="banimg" src="@/assets/images/seattle.jpg" />
      <div class="contdiv">
        <h2 class="contdiv glow">RATES</h2>
        <p class="glow">60 Minute Private Lessons: $55</p>
        <p>Group lessons, affordable sliding scale available.</p>
        <p>Free trial and consultation.</p>
        <p class="pulse bounce">Reach out for instruction.</p>
      </div>
    </div>
    <div class="contdiv2">
      <img class="banimg" src="@/assets/images/paintpiano.jpg" />
      <div class="contdiv">
        <h2 class="contdiv glow">PHILOSOPHY</h2>
        <p align="justify">
          It will seem like we are having fun. This is deception. The teacher
          hides in the shadows, redirecting us from self-limiting narratives and
          gently applying pressure in the direction of the clear intension of
          getting better at music. Getting better will involve learning the
          language of music, and applying those lessons to the task of
          accomplishing a tangible goal. This will involve doing things over and
          over again until it is utterly unimpressive to you that you can do it,
          and until you can play the part as naturally as speaking or walking.
          Most of the real work comes down to establishing the mindset and
          habits which prevent demotivation. This may sound esoteric or
          something, but it is quite literally fear that makes a performance
          bad. We create a safe space to make awkward sounds, we find the nice
          sounds, we practice deployment until it actually seems fun.
        </p>
      </div>
    </div>
    <div class="contdiv2">
      <img class="banimg" src="@/assets/images/splash1.jpg" />
      <div class="contdiv">
        <h2 class="contdiv glow">ABOUT ADAM</h2>
        <p align="justify">
          I have always approached music as a way of building community based
          around genuine emotion, and as a means of nonverbal expression. I
          started considering myself a musician when a lifelong friend taught me
          to improvise singing and playing songs in an effort to make one
          another laugh with greater and greater exaggerations of our current
          inside joke set. Over time, we actually began to find decent harmonies
          and interesting musical content. It really struck me how the various
          ways that you screw around and waste your time with your friends
          actually have outcomes. I suppose I dedicated myself to a musical
          career for 20 years because I saw it as some sort of personal
          challenge. It sure was. I studied at the University of Montana on
          trumpet, while also recording my first few guitar albums at home, and
          touring with local rock bands on bass. As I started taking on
          students, I began to study drums and piano and develop my voice more
          seriously. I taught at several wonderful schools in the Pacific
          Northwest, classroom, group, and private.
        </p>
        <p align="justify">
          I have switched careers and no longer teach music professionally full
          time in the Pacific Northwest USA. However, I love to teach and play,
          and am currently accepting new students for remote web sessions. I
          know that is not quite as cool as being in person, but it can also be
          pretty efficient, and no travel expense.
        </p>
      </div>
    </div>
    <div class="contdiv2">
      <div class="testimonial testimonial-h3">
        <h3 class="glow">TESTIMONIALS</h3>
      </div>
      <div class="testimonial">
        <p>
          Adam has been a patient and encouraging teacher. He even helped my son
          print his own song, 'The Mason Jam', so he could 'sell' copies. We
          love watching Mason's love for music grow and we have Adam to thank
          for that.
        </p>
        <img class="testimonial wider" src="@/assets/images/kid2.jpg" />
      </div>
      <div class="testimonial">
        <p>
          Our daughter has made great progress with piano under Adam's
          instruction. He is encouraging, motivating, and she loves coming to
          class each week. We would highly recommend him!
        </p>
        <img class="testimonial" src="@/assets/images/ruby.jpg" />
      </div>
      <div class="testimonial">
        <p>
          There are no shortcuts in music. Adam is a teacher with an effective
          grasp of musicality in addition to the patience to teach this art
          form. I support and recommend this teacher for your student.
        </p>
        <img class="testimonial wider" src="@/assets/images/kid3.jpg" />
      </div>
      <div class="testimonial">
        <p>
          My name is Owen. I play the drums. Adam is a very good teacher. He
          helps me learning new songs and is patient with me.
        </p>
        <img class="testimonial" src="@/assets/images/Owen.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="sass">
#bodyMain
	background-color: #150018
	font-family: 'Lacquer', verdana
.testimonial-h3
	grid-column: 1 / 3
	font-size: 26px
	font-family: "mistral", helvetica
	padding: 0.2em
	border-bottom: 2px solid #68e
	p
		font-size: 1.6em
		margin: auto
		padding: 0
.headban
	display: grid
	width: 100%
	font-family: "mistral"
	background-image: url("@/assets/images/smiley.png")
	background-position: bottom, top
	background-repeat: no-repeat
	background-size: 400px
	background-color: #7bd
	padding: 0
	padding-bottom: 500px
	h2
		font-size: 32px
		font-family: "mistral"
		text-shadow: 3px 3px 3px #50d
		color: #cef
		vertical-align: middle
		text-align: center
	h3
		text-shadow: 2px 2px 5px #000
		font-size: 26px
		font-family: "mistral"
		vertical-align: middle
		text-align: center
		color: white
		margin: 5px 0px
#hometitle
	text-shadow: 3px 3px 8px #90d
	word-wrap: break-word
	font-size: 4.5em
	color: white
	vertical-align: middle
	text-align: center
	padding-top: 20px
	margin: 0px
.banimg
	max-width: 300px
	margin: auto
	border: solid 2px #DAD
	border-radius: 10px
	z-index: 5
.hidden
	visibility: hidden
.contdiv
	text-align: center
	color: #ece
	margin: 1em auto
	padding: 0.2em
	overflow: hidden
	p
		padding-bottom: 2em
		font-family: 'mistral'
img.testimonial
	max-width: 95vw
	border: 2px solid #DAD
	border-radius: 20px
div.testimonial
	text-align: center
	justify-content: center
	background-image: linear-gradient(to bottom right, #205, #527)
	font-family: 'lucida handwriting italic'
	margin: auto 15px
	padding: 10px 0
	color: #bff
.button
	margin: 0px 50px
	color: #dbf
	background-color: #609
	padding: 10px
	border: 3px groove #b0a
	border-radius: 8px
	cursor: pointer
.nudgeMeDown
	margin-top: 2em
.backgroundMe
	border: 1px solid white
	border-radius: 5px
	text-shadow: 3px 3px 8px #90d
	color: #2FE
	text-align: center
	padding: 1.2em
	display: grid
	background-repeat: no-repeat
	background-position: center center
	background-size: cover

@media screen and (min-width: 430px)
	.contdiv2
		display: grid
		grid-template-columns: 1fr 1fr
		max-width: 100%
	.headban
		background-image: url("@/assets/images/smiley.png"), url("@/assets/images/cabworkr.png")
		background-position: bottom left, right bottom
		padding-top: 13em
		padding-bottom: 5em
		background-size: 20%
	.nudgeMeDown
		padding-top: 6em
	.banimg
		max-width: 600px
		z-index: 1
	img.testimonial
		max-width: 500px
		max-height: 500px
	div.testimonial
		display: flex
		margin: 0
	.contdiv2
		display: grid
		grid-template-columns: 1fr 1fr
		max-width: 100%
		justify-self: center
	.headban
		background-image: url("@/assets/images/smiley.png"), url("@/assets/images/cabworkr.png")
		background-position: bottom left, right bottom
		padding-top: 13em
		padding-bottom: 5em
		background-size: 20%
	.nudgeMeDown
		padding-top: 6em
	.banimg
		max-width: 600px
		z-index: 1
	img.testimonial
		max-width: 500px
		max-height: 500px
	div.testimonial
		display: flex
		margin: 0
</style>
