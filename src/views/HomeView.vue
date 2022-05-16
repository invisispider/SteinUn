<script setup lang="ts">
import LoginOg from "@/components/LoginOg.vue"
import ChatApp from '@/components/Chat/ChatApp.vue'
import TodoComponent from "@/components/TodoComponent.vue"
import ScheduleComponent from "@/components/ScheduleComponent.vue"
import LogoutComponent from "@/components/LogoutComponent.vue"
import { ref, defineComponent, nextTick, unUnmounted, computed } from "vue"
import { auth } from "@/services/firebaseconfig"
import { firestoreDb } from "@/services/firebaseconfig.ts"
import { useStore } from "@/stores/index"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
document.title = "Get Out!"
const store = useStore()
const doShowChat = ref(false)
const doShowTodo = ref(false)
const doShowSchedule = ref(false)
const doShowLogout = ref(false)
const collapseState = ref(false)
const chooseWindow = (which: string) => {
  doShowChat.value = false
  doShowTodo.value = false
  doShowSchedule.value = false
  doShowLogout.value = false
  nextTick(()=>{
    if (which === "chat") {
      doShowChat.value = true
    } else if (which === "todo") {
      doShowTodo.value = true
    } else if (which === "schedule") {
      doShowSchedule.value = true
    } else if (which === "logout") {
      doShowLogout.value = true
    }
  })
}
const toggleCollapse = () => collapseState.value = !collapseState.value
onAuthStateChanged(auth, async (user) => {
  if (user) {
    store.setEmail(await user.email as string)
    store.setIsIn()
    store.setUid(await user.uid as string)
    const docRef = doc(firestoreDb, "users", user.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap) {
      store.setUsername(await docSnap.data().username)
    } else {
      console.log("No such document!")
    }
  } else {
    store.$reset()
  }
  store.setAuthIsReady()
})
const getUid = computed(() => store.uid)
</script>
<template>
  <div class="container">
    <nav class="collapseNav" v-show="store.username">
      <i class="material-icons christmas-icon green"
        @click.prevent="toggleCollapse">terminal</i>
      <button v-show="!collapseState" class="userButton"
        @click.prevent="chooseWindow('chat')">Talk
      </button>
      <button v-show="!collapseState" class="userButton"
        @click.prevent="chooseWindow('todo')">Memo
      </button>
      <button v-show="!collapseState" class="userButton"
        @click.prevent="chooseWindow('schedule')">Habit
      </button>
      <button v-show="!collapseState" class="userButton"
        @click.prevent="chooseWindow('logout')">Logout
      </button>
    </nav>
    <div v-if="store.username">
     <component :is="ChatApp"
        :currentUserId="store.uid"
        :username="store.username"
        :theme="'dark'"
        :isdevice="false"
        v-if="doShowChat"
      />
      <component :is="TodoComponent" v-if="doShowTodo" />
      <component :is="ScheduleComponent" v-if="doShowSchedule" />
      <component :is="LogoutComponent" v-if="doShowLogout"
        @sent="(collapseState = true), (doShowLogout = false)" />
    </div>
    <component :is="LoginOg" v-if="!store.username" />
  </div>
</template>
<style lang="sass">
.container
  display: grid
  font-family: Roboto
.collapseNav
  margin: 0em auto
  color: white
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  // justify-items: center
  // align-items: center
  // justify-content: center
  // flex-direction: row
.userButton
  background: rgba(0, 0, 0, 0)
  color: red
  font-size: 1.3rem
  padding: 3px 10px
  display: block
  border-radius: 5px
.userButton:hover
  background: rgba(220, 220, 220, 1)
@media screen and (min-width: 430px)
  .container
    // display: grid
  .collapseNav
    // margin: 0.2em auto
    // color: white
    // display: flex
</style>
