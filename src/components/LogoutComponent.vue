<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "@/services/firebaseconfig";
import { useStore } from "@/stores/index.ts";
import { signOut } from "firebase/auth";
const router = useRouter();
// const emit = defineEmits(["sent"]);
const store = useStore();
const showWarn = ref(true);
const unLogMe = async () => {
  await signOut(auth);
  store.$reset();
  localStorage.clear();
  router.push("Login");
  // store.setEmail(null)
  // store.setIsOut()
  // emit("sent")
};
</script>

<template>
  <div class="login-page modal-std-container">
    <div class="modal-std">
      <span v-if="showWarn">
        <i class="material-icons">dark_mode</i>
        Really? Are you <strong>sure?</strong>
        <button @click.prevent="unLogMe">unLogMe</button>
      </span>
    </div>
  </div>
</template>
<style lang="sass">
.modal-std-container
  display: flex
  justify-content: center
  // flex-direction: column
  align-items: center
  font-size: 1.5rem
  padding: 1em
  // width: 100vw
  // height: 100vh
  overflow: hidden
  margin: auto
.modal-std
  text-align: center
  display: grid
  justify-content: space-between
</style>
