<script setup>
document.title = "UnReadMe";
</script>
<template>
  <div class="UnReadMe">
    <h1>Welcome to the Future.</h1>
    <p>
      Stein Unlimited provides a set of anti-tools to help you reduce the amount
      of garbage you have going on your imaginary cell phone life. <br>
      I hope for the look to be less pencil and paper, less simulacra,
      more like something I want to engage with, like an indie
      video game, with exploration, things moving around and eluding you,
      a story, a platform for self-marketing and technomancer shadow work. We
      hope to encourage genuine and challenging interactions.
    </p>
    <ul>
      <li>
        <h3>Site Contents in Plain Anglo</h3>
      </li>
      <li>
        <a href="/"><strong>Home</strong> ((Not Public) Chat, Scheduler, Tasks</a>
      </li>
      <li>
        <a href="/Crossword"><strong>Crossword</strong> (Crossword Puzzle Game</a>
      </li>
      <li>
        <a href="/unTimeMe"><strong>unTimeMe</strong> (Alternative Zen Calendar System & Clock</a>
      </li>
      <li>
        <a href="/unJamMe"><strong>unJamMe</strong> (Coming Soon) Plays Songs I Want To Share</a>
      </li>
      <li>
        <a href="/unTeachMe"><strong>unTeachMe</strong> Music Lessons and Demonstrations</a>
      </li>
      <li>
        <a href="/unThinkMe"><strong>unThinkMe</strong> Anti-ideology Video Blog</a>
      </li>
      <li>
        <a href="/unReadMe"><strong>unReadMe</strong>This Page</a>
      </li>
    </ul>
    <p>
      Feel free to contact me with any thoughts about this project, or if you would
      like to contribute. I hope that the site content is somewhat self explanatory
      and compelling, but I always want to know how it could be more so.
      Features will be released as they are completed, and at certain pre-defined
      milestones. Please do no cheat or hack unless invited to do so (there will be
      opportunities), as we as yet do not have any security experts on the payroll.
      There's always a better way, and it's often not the yolo way. Don't stamp on the flower.
    </p>
    <p style="margin-bottom: 2em">
      This site was made with Vue 3 setup script, Typescript, Pinia, Sass, and
      Firebase, predominantly. It was actually culled together from a bunch of
      different projects written in PHP/MySQL, Python/Flask, React, etc, and
      some early vanilla on vanilla trying too hard. Refactoring and config was
      pretty harsh, but as a result, developent goes wonderfully.
    </p>
  </div>
</template>
<style lang="sass" scoped>
$salmon: rgb(233, 105, 151)
$pipegreen: rgb(120, 140, 140)
$pipegreen-dark: rgb(5, 26, 34)
$lilac: rgb(184, 145, 246)
$cornflower: rgb(112, 214, 246)
.UnReadMe
	max-width: 100%
	background-color: $pipegreen-dark
	h1, h3, p, li
		text-align: center
		padding: 20px 14px
		margin: 2px 8px
		box-shadow: 0 0 20px 0 $pipegreen
	h3
		color: orange
	h1
		color: $lilac
	p
		color: $cornflower
	ul
		padding: 0
	li
		padding: 1rem
		color: $salmon
		list-style-type: none
@media screen and (min-width: 430px)
	.UnReadMe
		max-width: 1000px
		h1, h3, p, li
			box-shadow: 0 0 20px 0 $pipegreen
		h3

		h1

		p

		ul

		li
			list-style-type: none
</style>
