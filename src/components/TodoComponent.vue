<script setup>
import { ref, onUnmounted } from "vue";
import { firestoreDb } from "@/services/firebaseconfig.ts"
import { useStore } from "@/stores/index.ts"
import { collection, query, where, orderBy, serverTimestamp,
  onSnapshot, addDoc, doc, deleteDoc
} from "firebase/firestore"
const store = useStore()
const newTodo = ref("");
const Todos = ref([])
const colRef = collection(firestoreDb, "todo_collection")

const q = query(colRef, where("user", "==", store.username), orderBy("createdAt"))
// real time collection data
const killCupid = onSnapshot(q, (snapshot) => {
  let todos = []
  snapshot.docs.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id })
  })
  Todos.value = todos
}, err => {
  console.log(err.message)
})


const addTodo = () => {
  if (store.username) {
    addDoc(colRef, {
      description: newTodo.value,
      user: store.username,
      createdAt: serverTimestamp(),
    }).then(() => {
      newTodo.value = ""
    })
  }
}
const removeTodo = (id) => {
  if (store.username) {
    const docRef = doc(firestoreDb, "todo_collection", id)
    deleteDoc(docRef)
  }
}
onUnmounted(()=>{
  killCupid()
})
</script>
<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <i class="material-icons">cruelty_free</i>
    </form>
    <div class="todo-title"><h2>unDoMe</h2></div>
    <div class="todo-item" v-for="ado in Todos" :key="ado">
      <a class="material-icons" @click.prevent="removeTodo(ado.id)">delete</a>
      <span class="todo-desc">{{ ado.description }}</span>
      <span class="todo-time">
        {{ado.createdAt.toDate().toLocaleString("en-us", {
            dateStyle: "short",
            timeStyle: "short",
            hour12: false,
          })
        }}
      </span>
    </div>
  </div>
</template>
<style lang="sass">
$mypurp: #92099e
$mygreen: #31e833
$section-gap: 160px
.todo-list
  color: $mygreen
  font-size: 2rem
  display: grid
  width: 100vw
  margin: 1rem 0
  justify-content: center
  border-radius: 5px
  border: 1px solid $mypurp
  .todo-time
    font-size: 0.7rem
    color: orange
    text-align: right
  .todo-desc
    color: lightBlue
    text-align: left
  .todo-item, .todo-title
    color: $mygreen
    background-color: black
    margin: 0
    padding: 0
    border: 1px solid $mypurp
  .todo-item
    text-align: right
    display: flex
    justify-content: space-between
    padding: 0.8rem 1rem
    align-items: center
    font-size: 1.2rem
    font-family: helvetica
  .todo-title
    text-align: center
    align-items: center
    display: grid
  h2
    margin: 0.8rem
    justify-content: center
  form
    display: flex
  i
    font-size: 2rem
@media (min-width: 1024px)
  form
    width: 100%
    margin: 0
    padding: 0
  input
    width: 100%
  .todo-item, .todo-title
    text-align: center
    margin: auto
  .todo-list
    // text-align: center
    // max-width: 100%
    // display: flex
    // grid-template-columns: 1fr 1fr
</style>
