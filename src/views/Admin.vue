<script setup lang="ts">
import TodoComponent from "@/components/Admin/TodoComponent.vue";
import ScheduleComponent from "@/components/Admin/ScheduleComponent.vue";
// import MJBlog from "@/components/Admin/MJBlog.vue";
import { ref, nextTick, onMounted } from "vue";
import { useStore } from "@/stores/index";
import { auth, firestoreDb } from "@/services/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
// import { httpsCallable } from "firebase/functions";
// import { fireFunctions } from "@/services/firebaseconfig";
document.title = "the Experiment";
const store = useStore();
const router = useRouter();
const doShowTodo = ref(false);
const doShowSchedule = ref(false);
// const doShowMJ = ref(false);
const collapseState = ref(false);
const chooseWindow = (which: string) => {
  doShowTodo.value = false;
  doShowSchedule.value = false;
  // doShowMJ.value = false;
  nextTick(() => {
    if (which === "todo") {
      doShowTodo.value = true;
    } else if (which === "schedule") {
      doShowSchedule.value = true;
      // } else if (which === "mjblog") {
      //   doShowMJ.value = true;
    }
  });
};
onAuthStateChanged(auth, async (user) => {
  if (user) {
    auth.currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.admin) {
          console.info("~We create the Future~");
          // @TODO This is terrible security. Find another way.
          store.setAdmin();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    store.setIsIn();
    store.setUid((await user.uid) as string);
    const docRef = doc(firestoreDb, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      store.setUsername(await docSnap.data().username);
    } else {
      console.log("No such document!");
    }
  } else {
    // store.$reset()
    // router.push('/')
    store.setAuthIsReady();
  }
});
onMounted(() => {
  if (store.uid !== import.meta.env.VITE_UID) {
    router.push("/UnThinkMe");
  }
});
</script>
<template>
  <main class="home-container">
    <template v-if="store.admin">
      <div>
        <component :is="TodoComponent" v-if="doShowTodo" />
        <component :is="ScheduleComponent" v-if="doShowSchedule" />
        <!-- <component :is="MJBlog" v-if="doShowMJ" /> -->
      </div>
      <nav class="collapseNav" v-show="store.username">
        <button
          v-show="!collapseState"
          class="userButton"
          @click.prevent="chooseWindow('todo')"
        >
          Memo
        </button>
        <button
          v-show="!collapseState"
          class="userButton"
          @click.prevent="chooseWindow('schedule')"
        >
          Habit
        </button>
        <!-- <button
          v-show="!collapseState"
          class="userButton"
          @click.prevent="chooseWindow('mjblog')"
        >
          MJ Blog
        </button> -->
        <i
          class="material-icons christmas-icon green"
          @click.prevent="collapseState = !collapseState"
          >terminal</i
        >
      </nav>
    </template>
  </main>
</template>
<style lang="sass">
.container
  display: grid
  font-family: Roboto
.collapseNav
  max-width: 80vw
  margin: 0.2em 0.6em
  color: white
  display: grid
  background-color: rgba(10, 10, 10, 0.7)
  position: fixed
  bottom: 0
  right: 0
  z-index: 11
.userButton
  background: rgba(0, 0, 0, 0)
  color: red
  font-size: 1.3rem
  padding: 3px 10px
  display: block
  border-radius: 5px
.userButton:hover
  background: rgba(220, 220, 220, 1)
</style>
