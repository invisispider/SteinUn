<script setup lang="ts">
import LogoutComponent from "@/components/LogoutComponent.vue"
import { ref, onUnmounted, computed } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "@/stores/index"
import { auth, firestoreDb } from "@/services/firebaseconfig"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
document.title = "Home Screen"
const store = useStore()
const router = useRouter()
const inputPassword = ref("")
const inputUsername = ref("")
const signIn = () => {
	signInWithEmailAndPassword(auth, inputUsername.value, inputPassword.value)
	.then((userCredential) => {
		const user = userCredential.user
		store.setUid(user.uid)
		store.setIsIn()
		store.setAuthIsReady()
		auth.currentUser.getIdTokenResult()
			.then((idTokenResult) => {
				if (!!idTokenResult.claims.admin) {
					 console.info("you are a faggot")
					 store.setAdmin()
				 }
			})
			.catch((error) => {
				console.log(error)
			})
		router.push('/Chat')
	}).catch((error) => {
    console.error(error.code, error.message)
  })
}
onAuthStateChanged(auth, async (user) => {
	if (user) {
		store.setIsIn()
		store.setUid(await user.uid as string)
		const docRef = doc(firestoreDb, "users", user.uid)
		const docSnap = await getDoc(docRef)
		if (docSnap) {
			store.setUsername(await docSnap.data().username)
		} else {
			console.error("No user listing in database!")
		}
		store.setAuthIsReady()
		auth.currentUser.getIdTokenResult()
		  .then((idTokenResult) => {
		    if (!!idTokenResult.claims.admin) {
					 console.info("hi beerworm")
		       store.setAdmin()
		     }
		  })
		  .catch((error) => {
		    console.error(error.code, error.message)
		  })
		router.push('/Chat')
	} else {
		store.setAuthIsReady()
		console.info("shut it")
  }
})
</script>
<template>
	<div class="home-container">
		<form	v-if="!store.username" class="login" v-on:submit.prevent="signIn"
		autocomplete="on" method="dialog"
		>
			<h2>Kenny Logins</h2>
			<input type="email" name="username"
				autocomplete="username email" v-model="inputUsername"
			/>
			<i class="material-icons">supervisor_account</i>
			<input type="password" name="password"
				autocomplete="current-password" v-model="inputPassword"
			/>
			<i class="material-icons">password</i>
			<input type="submit" name="submit" />
			<i class="material-icons">grade</i><br />
			<i class="material-icons christmas-icon">build</i>
		</form>
	</div>
</template>
