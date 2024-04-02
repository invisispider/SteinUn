<script setup lang="ts">
// import LogoutComponent from "@/components/LogoutComponent.vue";
import { ref } from "vue";
// import { useRouter } from "vue-router";
import { useStore } from "@/stores/index";
import { auth, firestoreDb } from "@/services/firebaseconfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const store = useStore();
// const router = useRouter();
const errorMessage = ref('Login by request only.')
const inputPassword = ref("");
const inputUsername = ref("");
const signIn = () => {
  signInWithEmailAndPassword(auth, inputUsername.value, inputPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      store.setUid(user.uid);
      store.setIsIn();
      store.setAuthIsReady();
      if (auth.currentUser !== null) {
      auth.currentUser
        .getIdTokenResult()
        .then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            errorMessage.value = "Hello Adamsly."
            console.info("Admin logged in");
            store.setAdmin();
          }
        })
        .catch((error) => {
          errorMessage.value = error.toString();
          console.log(error);
        });
      }
      // router.push("/");
    })
    .catch((error) => errorMessage.value = error.toString());
};
onAuthStateChanged(auth, async (user) => {
  if (user) {
    store.setIsIn();
    store.setUid((await user.uid) as string);
    const docRef = doc(firestoreDb, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      let docData = await docSnap.data();
      if (docData && docData.username) {
        store.setUsername(docData.username);
      }
    } else {
      errorMessage.value = "No user listing in databse!";
      // console.error("No user listing in database!");
    }
    store.setAuthIsReady();
    if (auth.currentUser){
      auth.currentUser
        .getIdTokenResult()
        .then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            errorMessage.value = "Hello Adam."
            console.info("Admin on state change");
            store.setAdmin();
          }
        })
        .catch((error) => {
          errorMessage.value = "Logged In."
          console.error("Regular User Status.");
        });
    }
    // router.push("/Chat");
  } else {
    store.setAuthIsReady();
    console.info("auth ready");
  }
});
</script>
<template>
  <div class="login-page">
    <form
      v-if="!store.username"
      class="login"
      v-on:submit.prevent="signIn"
      autocomplete="on"
      method="dialog"
    >
      <!-- <div class=image-style="{'background-image': '@/assets/img/steinun-logo1.png'}"> -->
        <!-- <img src="@/assets/img/steinun-logo4.png" /> -->
      <!-- </div> -->
      <h2>Kenny Logins</h2>
      <div>{{ errorMessage }}</div>
      <label for="username">account</label>
      <br>
      <input
      type="email"
      name="username"
      autocomplete="username email"
      v-model="inputUsername"
      />
      <i class="material-icons">supervisor_account</i>
      <br>
      <label for="password">password</label>
      <br>
      <input
      type="password"
      name="password"
      autocomplete="current-password"
      v-model="inputPassword"
      />
      <i class="material-icons">password</i>
      <br>
      <input class="login-submit-button" type="submit" name="submit" />
      <RouterLink to="TermsOfService">Terms of Service</RouterLink>
      <RouterLink to="PrivacyPolicy">Privacy Policy</RouterLink>
      <!-- <i class="material-icons">grade</i><br /> -->
      <!-- <i class="material-icons christmas-icon">build</i> -->
    </form>
    <form v-else class="login"
    >
      <div class="user">
        <div>{{ errorMessage }}</div>
        <h2>User Stuff</h2>
        <RouterLink class="login-submit-button" to="Logout">Logout</RouterLink>
      </div>
    </form>
  </div>  
</template>
<style lang="sass" scoped>
.login-page
  display: flex
  flex-direction: column
  margin: auto
.user 
  // min-height: 100vh
  margin: auto  
  // margin-top: 20vh
  // margin-bottom: auto
  // margin: auto  
  // div
    // min-height: 80vh
  // margin-top: auto  
.login
  font-family: "Poppins" Bold
  margin: auto
  border-radius: 5px
  max-width: 800px
  padding: 1em 2em
  // i
    // text-shadow: 1px 1px white
  h2
    border-radius: 5px
  input
    max-width: 70vw
    font-size: 1.4em
  input[name="submit"]
    margin: 1em
  i
    margin-left: 8px
  p, a, router-link
    display: block
    text-decoration: none

</style>
