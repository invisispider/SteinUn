
<script setup>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
import { useStore } from "@/stores/index.ts"
import { ref } from "vue"
import { collection, where, query, onSnapshot } from "firebase/firestore"
import { firestoreDb } from "@/services/firebaseconfig"
const store = useStore()
const chatRooms = ref([])
const colRef = collection(firestoreDb, "room_coll")
const q1 = query(colRef, where('users', 'array-contains', store.name))
const killBilbo = onSnapshot(q1, (snap) => {
  let chats = []
  snap.forEach((doc) => {
    chats.push({ ...doc.data(), id: doc.id })
  })
  chatRooms.value = chats
})


const messages=[
  {
    _id: 7890,
    indexId: 12092,
    content: 'Message 1',
    senderId: 1234,
    username: 'John Doe',
    avatar: 'src/assets/images/gmail.png',
    date: '13 November',
    timestamp: '10:20',
    system: false,
    saved: true,
    distributed: true,
    seen: true,
    deleted: false,
    failure: true,
    disableActions: false,
    disableReactions: false,
    // files: [
    //   {
    //     name: 'My File',
    //     size: 67351,
    //     type: 'png',
    //     audio: true,
    //     duration: 14.4,
    //     url: 'https://firebasestorage.googleapis.com/...',
    //     preview: 'data:image/png;base64,iVBORw0KGgoAA...',
    //     progress: 88
    //   }
    // ],
    // reactions: {
    //   😁: [
    //     1234, // USER_ID
    //     4321
    //   ],
    //   🥰: [
    //     1234
    //   ]
    // },
    replyMessage: {
      content: 'Reply Message',
      senderId: 4321,
      // files: [
      //   {
      //     name: 'My Replied File',
      //     size: 67351,
      //     type: 'png',
      //     audio: true,
      //     duration: 14.4,
      //     url: 'https://firebasestorage.googleapis.com/...',
      //     preview: 'data:image/png;base64,iVBORw0KGgoAA...'
      //   }
      // ]
    },
  }
]
</script>

<template>
  <chat-window
    :current-user-id="store.name"
    :rooms="chatRooms"
    :messages="messages"
    theme="dark"
  />
</template>
