<script setup lang="ts">
// import LogoutComponent from "@/components/LogoutComponent.vue";
// import Login from "@/components/Login.vue";

import { onMounted } from "vue";
// import { useRouter } from "vue-router";
// import { useStore } from "@/stores/index";
// import { auth, firestoreDb } from "@/services/firebaseconfig";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
import {headerContent, headerHeader} from "@/components/landingContent.js";
document.title = "Stein Unlimited | HOME";
// const store = useStore();
// const router = useRouter();
// const inputPassword = ref("");
// const inputUsername = ref("");
// const signIn = () => {
//   signInWithEmailAndPassword(auth, inputUsername.value, inputPassword.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       store.setUid(user.uid);
//       store.setIsIn();
//       store.setAuthIsReady();
//       auth.currentUser
//         .getIdTokenResult()
//         .then((idTokenResult) => {
//           if (idTokenResult.claims.admin) {
//             console.info("you are a faggot");
//             store.setAdmin();
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       router.push("/Chat");
//     })
//     .catch((error) => {
//       console.error(error.code, error.message);
//     });
// };
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     store.setIsIn();
//     store.setUid((await user.uid) as string);
//     const docRef = doc(firestoreDb, "users", user.uid);
//     const docSnap = await getDoc(docRef);
//     if (docSnap) {
//       store.setUsername(await docSnap.data().username);
//     } else {
//       console.error("No user listing in database!");
//     }
//     store.setAuthIsReady();
//     auth.currentUser
//       .getIdTokenResult()
//       .then((idTokenResult) => {
//         if (idTokenResult.claims.admin) {
//           console.info("hi beerworm");
//           store.setAdmin();
//         }
//       })
//       .catch((error) => {
//         console.error(error.code, error.message);
//       });
//     router.push("/Chat");
//   } else {
//     store.setAuthIsReady();
//     console.info("shut it");
//   }
// });
</script>
<template>
  <div class="home-container">
    <div class="pitch-container">
      <span>Everything You See Is Light | The Future of Sales</span><audio type="audio/mpeg" controls
      src="https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/sounds%2FPITCH_Everything_You_See_Is_Light.mp3?alt=media&token=0baa3cac-b5ed-4246-ba66-9e1d7f7a7105"
      >Your browser does not support the audio tag.</audio>
    </div>
    <!-- <h1 v-html="headerHeader"></h1> -->
    <p v-html="headerContent"></p>
    <!-- <Login>
    </Login> -->
  </div>
</template>
<style lang="sass" scoped>
audio
  margin: auto
  box-shadow: 5px 5px 20px rgba(200,0,255,0.5)
  border-radius: 90px
.pitch-container
  margin: auto
  display: flex
  flex-direction: column
  box-shadow: 5px 5px 20px rgba(0,255,0,0.5)
  border-radius: 10px
  padding: 1em
  span
    margin: 0 1em 1em 1em
    color: white
.home-container
  background: linear-gradient(#9198e5, #313875)
.home-container p
  color: rgb(205, 249, 203)
  font-size: large
  line-height: 1.3
</style>
