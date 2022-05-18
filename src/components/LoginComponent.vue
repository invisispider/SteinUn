<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { auth } from "@/services/firebaseconfig"
import firebase from "firebase/compat/app"
import * as firebaseui from "firebaseui"
import { useStore } from "@/stores/index"
import { doc } from "firebase/firestore"
import { firestoreDb } from "@/services/firebaseconfig.ts"
const router = useRouter()
const store = useStore()
var uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: function () {
    router.push("/TermsOfService")
  },
  privacyPolicyUrl: function () {
    router.push("/PrivacyPolicy")
  },
  callbacks: {
    signInSuccessWithAuthResult: function (
      currentUser,
      credential,
      redirectUrl
    ) {
      console.info("currentUser: ", currentUser, "credential: ", credential)
      store.setUserName(currentUser.email)
      store.setAuthIsReady()
      store.setIsIn()
      // router.push(redirectUrl)
      const userDoc = doc(firestoreDb, "users", currentUser.uid)
      userDoc.
      store.setUid(currentUser.uid)
      store.setName(userDoc.displayName)
      // const userId = currentUser.uid
      // Manually redirect.
      // window.location.assign(`/users/${userId}`)
      // Do not automatically redirect.
      return false
    },
  },
var ui = new firebaseui.auth.AuthUI(auth)
const container = onMounted(() => {
  ui.start("#firebaseui-auth-container", uiConfig)
container()
</script>
<template>
  <div>
    <h1>Welcome to My Brown App</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>
