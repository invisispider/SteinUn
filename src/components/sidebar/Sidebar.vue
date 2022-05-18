<script setup lang="ts">
import { RouterLink } from "vue-router";
import UnJamMeComponent from "@/components/UnJamMeComponent.vue";
import { ref, computed, onMounted, watchEffect, nextTick, onUnmounted } from "vue";
import { useStore } from "@/stores/index.ts";
const store = useStore()
const moveItUp = ref(false)
const randGuy = Math.floor(Math.random()*(200)+1)
// 5 E + 13 M = 18 EM
const oneInTwoHundred = randGuy==18?true:false
const neverShow = ref(false);
const showJams = ref(false);
const doShowJams = () => {
	setTimeout(()=> {
		showJams.value = false
	}, 2000)
	showJams.value = true
}
const expandToggle = ($event) => {
	moveItUp.value=!moveItUp.value
}
const carlBatman = watchEffect(() => {
	if (store.uid) localStorage.setItem("uid", JSON.stringify(store.uid))
	if (store.username) localStorage.setItem("username", JSON.stringify(store.username))
})
onMounted(()=> {
	if (localStorage) {
		if (localStorage.getItem("uid")) {
			store.setUid(JSON.parse(localStorage.getItem("uid")))
		}
		if (localStorage.getItem("username")) {
			store.setUsername(JSON.parse(localStorage.getItem("username")))
		}
	}
})
onUnmounted(()=> {
	carlBatman()
})
</script>
<template>
	<div>
		<!-- <Teleport to="body"> -->
			<!-- <div class="glow" v-if="store.uid">
				<i class='material-icons spinMe wheelie' @click="toggleNav=!toggleNav">accessible_forward</i>
			</div> -->
		<!-- </Teleport> -->
		<nav class="topnav" :class="moveItUp?'move-up':''">
			<div class="topnav-icon glow" key="banano">
				<span v-if="store.username" class="christmas-icons center">
					<span class="green">{{store.username}}</span>
				</span>
				<span v-else class="red christmas-icon">
					<i class='material-icons'>vpn_key</i>
				</span>
			</div>
			<transition-group name="fadeDown" key="banana" tag="ul" class="glow">
				<li v-if="store.uid" key="0a" class="userButton">
					<router-link to="/Chat">Talk</router-link>
				</li>
				<li v-if="store.uid" key="1a" class="userButton">
					<router-link to="/Logout">Logout</router-link>
				</li>
				<li v-if="store.admin" key="11a" class="navItem">
					<router-link to="/Admin">Admin</router-link>
				</li>
				<li v-if="!store.uid" key="2a" class="navItem">
					<router-link to="/">Login</router-link>
				</li>
				<li key="3a" class="navItem">
					<router-link to="/Crossword">Puzzle</router-link>
				</li>
				<li v-if="oneInTwoHundred" key="em" class="navItem nav-item-dark">
					<router-link to="/Next">TEMP</router-link>
				</li>
				<li key="5a" class="navItem">
					<router-link to="/Teacher">Learn Music</router-link>
				</li>
				<li key="6a" class="navItem">
					<router-link to="/UnTimeMe">zenTime</router-link>
				</li>
				<li key="7a" class="navItem" id="music-player">
					<component :is="UnJamMeComponent" v-if="showJams" />
					<a id="songToggle" v-else @click="doShowJams">UnJamMe</a>
				</li>
				<li key="9a" class="navItem">
					<router-link to="/UnThinkMe">unThinkMe</router-link>
				</li>
				<li key="8a" class="navItem">
					<router-link to="/UnReadMe">unReadMe</router-link>
				</li>
				<li key="10a" v-if="neverShow" class="navItem">
					<a href="#" @click="this.$router.go(-1)">Back</a>
				</li>
				<transition name="rotate" mode="out-in" key="nut">
					<i key="suckit10" @click="expandToggle" :class="{ rotate: moveItUp, moveIconUp: moveItUp }" class="material-icons expander-arrow">expand_less</i>
				</transition>
			</transition-group>
		</nav>
	</div>
</template>
<style lang="sass">
.expander-arrow
	display: grid
	color: lightBlue
	text-shadow: -2px 1px rgb(38, 255, 67), 2px -1px black
	font-size: 2em
	// z-index: 90000
	position: relative
	left: 50vw
	top: 60px
	z-index: 909
@keyframes rotate
	0%
		transform: rotateX(0deg)
	100%
		transform: rotateX(180deg)
.rotate
	animation: rotate 1s ease
.move-icon-up
	top: -10px
	// transform: rotateX(180deg)
</style>
