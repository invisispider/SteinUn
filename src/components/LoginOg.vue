<script setup>
import { useStore } from "@/stores/index";
import { ref } from "vue";
import { auth, firestoreDb } from "@/services/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const store = useStore();
const inputPassword = ref("");
const inputUsername = ref("");
const signIn = function () {
  signInWithEmailAndPassword(auth, inputUsername.value, inputPassword.value)
    .then((userCredential) => {
      store.setEmail(userCredential.email);
      store.setUid(userCredential.uid);
      store.setIsIn();
    })
    .catch((err) => console.log(err));
  if (store.uid) {
    const docRef = doc(firestoreDb, "users", store.uid);
    const docSnap = getDoc(docRef);
    if (docSnap) {
      store.setUsername(docSnap.data().username);
    }
  }
  store.setAuthIsReady();
};
</script>
<template>
  <form
    class="login"
    v-on:submit.prevent="signIn"
    autocomplete="on"
    method="dialog"
  >
    <i class="material-icons christmas-icon">build</i>
    <h2>Kenny Logins</h2>
    <label class="avatoar" for="username">
      <input
        type="email"
        name="username"
        autocomplete="username email"
        v-model="inputUsername"
      /><i class="material-icons">supervisor_account</i>
    </label>
    <label class="avatoar" for="password">
      <input
        type="password"
        name="password"
        autocomplete="current-password"
        v-model="inputPassword"
      /><i class="material-icons">password</i>
    </label>
    <label class="avatoar" for="submit">
      <input type="submit" name="submit" /><i class="material-icons">grade</i>
    </label>
  </form>
</template>
<style scoped>
.login {
  width: 100%;
  z-index: 2;
  z-index: 4;
  background-color: #111;
  text-align: center;
  margin: auto;
  /* margin: auto auto; */
  /* justify-content: center; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 1fr 1fr 1fr 9fr; */
  /* height: 100%; */
  /* align-items: space-between; */
  /* justify-content: space-around; */
  /* display: grid; */
  /* flex-direction: column; */
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
span,
label,
h1 {
  /* z-index: 12; */
  /* opacity: 1; */
  /* text-align: center; */
  /* color: rgb(200, 20, 250); */
}
@media screen and (min-width: 430px) {
  .blaine {
    /* display: inline-grid;
    grid-auto-rows: 50vh; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* align-items: center; */
    /* margin: 1em 10vw 1em 0; */
    /* margin: 2px; */
    /* width: 40vw; */
    /* height: 100%; */
    /* border-radius: 15px; */
    background-color: gray;
  }
}
</style>
