<script setup>
document.title = "UnReadMe";
</script>
<template>
	<div class="UnReadMe">
		<h1>Welcome to the Future.</h1>
		<p>
			Pick up controller.
		</p>
		<!-- <ul> -->
			<!-- <li>
				<h3>Site Content</h3>
			</li>
			<li>
				<a href="/"><strong>Home</strong> ((Not Public)<br>Chat, Scheduler, Tasks</a>
			</li>
			<li>
				<a href="/Crossword"><strong>Crossword</strong><br>Crossword Puzzle Game</a>
			</li>
			<li>
				<a href="/unTimeMe"><strong>unTimeMe</strong><br>Alternative Zen Calendar System & Clock</a>
			</li>
			<li>
				<a href="/unJamMe"><strong>unJamMe</strong> (Coming Soon)<br>Plays Songs I Want To Share</a>
			</li>
			<li>
				<a href="/unTeachMe"><strong>unTeachMe</strong><br>Music Lessons and Demonstrations</a>
			</li>
			<li>
				<a href="/unThinkMe"><strong>unThinkMe</strong><br>Anti-ideology Video Blog</a>
			</li>
			<li>
				<a href="/unReadMe"><strong>unReadMe</strong><br>This Page</a>
			</li> -->
		<!-- </ul> -->
		<!-- <p>
			Feel free to contact me with any thoughts about this project, or if you would
			like to contribute. I hope that the site content is somewhat self explanatory
			and compelling, but I always want to know how it could be more so.
			Features will be released as they are completed, and at certain pre-defined
			milestones. Please do not cheat or hack unless invited to do so (there will be
			opportunities). There's always a better way. Don't stamp on the flower.
		</p> -->
		<!-- <p style="margin-bottom: 2em">
			This site was made with Vue 3 setup script, Typescript, Pinia, Sass, and
			Firebase, culled together from different projects written in PHP/MySQL,
			Python/Flask, React, etc, and some early vanilla on vanilla trying too hard.
			Refactoring and config was pretty harsh, but we now have a component mill.
		</p> -->
	</div>
</template>
<style lang="sass" scoped>
$salmon: rgb(233, 105, 151)
$pipegreen: rgb(120, 140, 140)
$pipegreen-dark: rgb(5, 26, 34)
$lilac: rgb(184, 145, 246)
$cornflower: rgb(112, 214, 246)
.UnReadMe
	display: grid
	max-width: 100%
	margin: auto
	background-color: $pipegreen-dark
	// justify-content: space-around
		text-decoration: none
		color: $salmon
		font-size: 1.2rem
	h1, h3, p, li
		text-align: center
		padding: 20px 14px
		margin: 2px 8px
		box-shadow: 0 0 20px 0 $pipegreen
		color: $pipegreen
		color: $lilac
		color: $cornflower
		padding: 0
		padding: 1rem
		color: $salmon
		list-style-type: none
@media screen and (min-width: 430px)
	.UnReadMe
		max-width: 1000px
		h1, h3, p, li
			box-shadow: 0 0 20px 0 $pipegreen
		li
			list-style-type: none
</style>
