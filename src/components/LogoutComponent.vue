<script setup>
import { ref } from "vue";
import { auth } from "@/services/firebaseconfig"
import { useStore } from "@/stores/index.ts"
import { signOut } from "firebase/auth"
const emit = defineEmits(["sent"])
const store = useStore()
const showWarn = ref(true)
const unLogMe = async () => {
  await signOut(auth)
  store.setEmail(null)
  store.setIsOut()
  emit("sent")
};
</script>

<template>
  <div class="modal-std-container">
    <div class="modal-std">
      <span v-if="showWarn">
        <i class="material-icons">dark_mode</i>
        Really? Are you <strong>sure?</strong>
        <button class="navItem glow" @click.prevent="unLogMe">unLogMe</button>
      </span>
    </div>
  </div>
</template>
<style lang="sass">
$mypurp: #92099e
$mygreen: #31e833
.modal-std-container
  color: $mygreen
  font-size: 1.5rem
  padding: 1em
  display: block
  position: absolute
  z-index: 200
  background-color: black
  width: 100vw
  height: 100vh
  overflow: hidden
.modal-std
  text-align: center
  display: grid
  justify-content: space-between
  .navItem.glow
    margin: 1rem
    padding: 1rem
    background-color: orange
    color: white
    border-radius: 8px
    border: 1px solid pink
    padding: 0.6rem 1rem
</style>
