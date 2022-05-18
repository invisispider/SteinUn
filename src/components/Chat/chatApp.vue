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
const messages=[
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
    //
    //     1234, // USER_ID
    //     4321
    //   ],
    //
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
</script>
<template>
  <chat-window
    :current-user-id="store.name"
    :rooms="chatRooms"
    :messages="messages"
    theme="dark"
  />
</template>
<template>
	<div>
		<div class="app-container" style="background: rgba(40, 40, 40, 0.5);"
			:class="{ 'app-mobile': isDevice, 'app-mobile-dark': theme === 'dark' }"
			<chat-container
			:current-user-id="currentUserId"
			:theme="theme"
			:is-device="isDevice"
			@show-demo-options="showDemoOptions = $event"
			/>
			<div>
				<!-- <button @click="resetData">
					Clear Data
				</button>
				<button :disabled="updatingData" @click="addData">
					Add Data
				</button> -->
			</div>
			<span
				v-if="showOptions"
				class="user-logged"
				:class="{ 'user-logged-dark': theme === 'dark' }"
			>
				Logged as
			</span>
			<div v-if="showOptions">
				<h1 :key="currentUser._id"
					style="color: white;" :value="currentUser._id">
					{{ currentUser.username }}
				</h1>
			</div>
			<div v-if="showOptions" class="button-theme">
				<button class="button-light" @click="theme = 'light'">
					Light
				</button>
				<button class="button-dark" @click="theme = 'dark'">
					Dark
				</button>
				<button class="button-github">
					<!-- <a href="https://github.com/antoine92190/vue-advanced-chat"> -->
						<img src="@/assets/github.svg" />
					<!-- </a> -->
				</button>
			</div>
			<!-- :theme="theme" -->
			<div class="version-container">
				v~1.1.0
			</div>
		</div>
	</div>
</template>
