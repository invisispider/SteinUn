<script setup lang="ts">
import { useRouter } from "vue-router"
import { onAuthStateChanged } from "firebase/auth"
import { ref, reactive, toRefs, computed, onMounted, watchEffect, onUnmounted } from "vue"
import { useStore } from "@/stores/index"
import { auth } from "@/services/firebaseconfig"
import * as firestoreService from '@/components/Chat/database/firestore'
import * as firebaseService from '@/components/Chat/database/firebase'
import * as storageService from '@/components/Chat/database/storage'
import { parseTimestamp, formatTimestamp } from '@/components/Chat/utils/dates'
// import '@/assets/css/chat.sass'
// import ChatContainer from '@/components/Chat/ChatContainer.vue'
// import ChatWindow from '@/components/Chat/ChatWindow.vue'
// import ChatWindow from '@/components/Chat/ChatContainer.vue'

import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
// import { useStore } from "@/stores/index.ts"
// import { ref } from "vue"
import { collection, where, query, onSnapshot } from "firebase/firestore"
import { firestoreDb } from "@/services/firebaseconfig"
const store = useStore()
const chatRooms = ref([])
const colRef = collection(firestoreDb, "room_coll")
const q1 = query(colRef, where('users', 'array-contains', store.username))
const getChatMessages = onSnapshot(q1, (snap) => {
  let chats = []
  snap.forEach((doc) => {
    chats.push({ ...doc.data(), id: doc.id })
  })
  chatRooms.value = chats
})
// const messages = []

document.title="unTalkMe"
// const store = useStore()
const router = useRouter()
const unmaximize = ref(null)
const notification = ref(null)
onAuthStateChanged(auth, async (user) => {
	if (!user) {
		router.push('/')
	}
	store.setAuthIsReady()
})
// get download links here:
// console.info(storageService.getAvatarUrl('nien_nunb.resized.png'))
const currentUserId = ref(store.uid)
const username = ref(store.username)
const state = reactive({
	devMessage: '',
	theme: 'dark',
	isDevice: false,
	showChat: true,
	showDemoOptions: true,
	updatingData: false,
	roomsPerPage: 15,
	rooms: [],
	roomId: '',
	startRooms: null,
	endRooms: null,
	roomsLoaded: false,
	loadingRooms: true,
	allUsers: [],
	loadingLastMessageByRoom: 0,
	roomsLoadedCount: 0,
	selectedRoom: null,
	messagesPerPage: 20,
	messages: [],
	messagesLoaded: false,
	roomMessage: '',
	lastLoadedMessage: null,
	previousLastLoadedMessage: null,
	roomsListeners: [],
	listeners: [],
	typingMessageCache: '',
	disableForm: false,
	addNewRoom: null,
	addRoomUsername: '',
	inviteRoomId: null,
	invitedUsername: '',
	removeRoomId: null,
	removeUserId: '',
	removeUsers: [],
	roomActions: [
		{ name: 'inviteUser', title: 'Invite User' },
		// { name: 'removeUser', title: 'Remove User' },
		// { name: 'deleteRoom', title: 'Delete Room' }
	],
	menuActions: [
		{ name: 'inviteUser', title: 'Invite User' },
		// { name: 'removeUser', title: 'Remove User' },
		// { name: 'deleteRoom', title: 'Delete Room' }
	],
	messageSelectionActions: [{ name: 'deleteMessages', title: 'Delete' }],
	styles: { container: { borderRadius: '4px' } },
	templatesText: [
		{
			tag: 'help',
			text: 'This is the help'
		},
		{
			tag: 'action',
			text: 'This is the action'
		},
		{
			tag: 'action 2',
			text: 'This is the second action'
		}
	],
	dbRequestCount: 0
	}
)

const showOptions = computed(() => !state.isDevice || state.showDemoOptions)
const loadedRooms = computed(() => state.rooms.slice(0, state.roomsLoadedCount))
const screenHeight = computed(() => state.isDevice ? window.innerHeight + 'px' : 'calc(90vh - 80px)')
const unsub = watchEffect(() => {
	if (!currentUserId.value) {
		state.showChat = false
		// setTimeout(() => (state.showChat = true), 10050)
		// setTimeout(() => (router.push('/')), 20000)
	}
})
onMounted(() => {
	if (!username.value) {
		router.push('/UnThinkMe')
	}
	state.isDevice = window.innerWidth < 500
	firebaseService.updateUserOnlineStatus(currentUserId.value)
	fetchRooms()
})
onUnmounted(() => {
	unsub()
})
const playSound = (soundName: string) => {
	if (soundName=='unmaximize') {
		unmaximize.value.play()
	}
	if (soundName=='notification') {
		notification.value.play()
	}
}
const resetRooms = () => {
	state.loadingRooms = true
	state.loadingLastMessageByRoom = 0
	state.roomsLoadedCount = 0
	state.rooms = []
	state.roomsLoaded = true
	state.startRooms = null
	state.endRooms = null
	state.roomsListeners.forEach(listener => listener())
	state.roomsListeners = []
	resetMessages()
}
const resetMessages = () => {
	state.messages = []
	state.messagesLoaded = false
	state.lastLoadedMessage = null
	state.previousLastLoadedMessage = null
	state.listeners.forEach(listener => listener())
	state.listeners = []
}
const fetchRooms = () => {
	resetRooms()
	fetchMoreRooms()
}
const fetchMoreRooms = async () => {
	if (state.endRooms && !state.startRooms) {
		state.roomsLoaded = true
		return
	}
	const query = firestoreService.roomsQuery(
		currentUserId.value,
		state.roomsPerPage,
		state.startRooms
	)
	const { data, docs } = await firestoreService.getRooms(query)
	// incrementDbCounter('Fetch Rooms', data.length)
	state.roomsLoaded = data.length === 0 || data.length < state.roomsPerPage
	if (state.startRooms) state.endRooms = state.startRooms
	state.startRooms = docs[docs.length - 1]
	const roomUserIds = []
	data.forEach(room => {
		room.users.forEach(userId => {
			const foundUser = state.allUsers.find(user => user?._id === userId)
			if (!foundUser && roomUserIds.indexOf(userId) === -1) {
				roomUserIds.push(userId)
			}
		})
	// incrementDbCounter('Fetch Room Users', roomUserIds.length)
	})
	const rawUsers = []
	roomUserIds.forEach(userId => {
		const promise = firestoreService.getUser(userId)
		rawUsers.push(promise)
	})
	state.allUsers = [...state.allUsers, ...(await Promise.all(rawUsers))]
	const roomList = {}
	data.forEach(room => {
		roomList[room.id] = { ...room, users: [] }
		room.users.forEach(userId => {
			const foundUser = state.allUsers.find(user => user?._id === userId)
			if (foundUser) roomList[room.id].users.push(foundUser)
		})
	})
	const formattedRooms = []
	Object.keys(roomList).forEach((key) => {
		const room = roomList[key]
		const roomContacts = room.users.filter(
			user => user._id !== currentUserId.value
		)
		// room.roomName = room.roomName
		// +' ~ '+
			// roomContacts.map(user => user.username).join(', ') || 'Myself')
			// roomAvatar.value = room.avatar
		// let avatarUrl = storageService.getAvatarUrl(room.avatar).then((url)=>{
		// 	return JSON.stringify(url)
		// })
			// console.log(fetchAvatarUrl.value)
		// fetchAvatarUrl('nien_nunb.png').then((url)=>{
		formattedRooms.push({
			...room,
			roomName: room.roomName,
			roomId: key,
			avatar: room.avatar,
			index: room.lastUpdated.seconds,
			lastMessage: {
				content: 'Room created',
				timestamp: formatTimestamp(
					new Date(room.lastUpdated.seconds),
					room.lastUpdated
				)
			}
		})
	})
	state.rooms = state.rooms.concat(formattedRooms)
	formattedRooms.forEach(room => listenLastMessage(room))
	if (!state.rooms.length) {
		state.loadingRooms = false
		state.roomsLoadedCount = 0
	}
	listenUsersOnlineStatus(formattedRooms)
	listenRooms(query)
	// setTimeout(() => console.log('TOTAL', dbRequestCount), 2000)
}
const listenLastMessage = (room) => {
	const listener = firestoreService.listenLastMessage(
		room.roomId,
		messages => {
			// incrementDbCounter('Listen Last Room Message', messages.length)
			messages.forEach(message => {
				const lastMessage = formatLastMessage(message, room)
				const roomIndex = state.rooms.findIndex(
					r => room.roomId === r.roomId
				)
				state.rooms[roomIndex].lastMessage = lastMessage
				state.rooms = [...state.rooms]
			})
			if (state.loadingLastMessageByRoom < state.rooms.length) {
				state.loadingLastMessageByRoom++
				if (state.loadingLastMessageByRoom === state.rooms.length) {
					state.loadingRooms = false
					state.roomsLoadedCount = state.rooms.length
				}
			}
		}
	)
	state.roomsListeners.push(listener)
}
const formatLastMessage = (message, room) => {
	if (!message.timestamp) return
	let content = message.content
	if (message.files?.length) {
		const file = message.files[0]
		content = `${file.name}.${file.extension || file.type}`
	}
	const username =
		message.sender_id !== currentUserId.value
			? room.users.find(user => message.sender_id === user._id)?.username
			: ''
	return {
		...message,
		...{
			content,
			timestamp: formatTimestamp(
				new Date(message.timestamp.seconds * 1000),
				message.timestamp
			),
			username: username,
			distributed: true,
			seen: message.sender_id === currentUserId.value ? message.seen : null,
			new:
				message.sender_id !== currentUserId.value &&
				(!message.seen || !message.seen[currentUserId.value])
		}
	}
}
const fetchMessages = ({ room, options = {} }) => {
	if (options.reset) {
		resetMessages()
		state.roomId = room.roomId
	}
	if (state.previousLastLoadedMessage && !state.lastLoadedMessage) {
		state.messagesLoaded = true
		return
	}
	state.selectedRoom = room.roomId
	playSound('notification')
	firestoreService
		.getMessages(room.roomId, state.messagesPerPage, state.lastLoadedMessage)
		.then(({ data, docs }) => {
			// incrementDbCounter('Fetch Room Messages', messages.length)
			if (state.selectedRoom !== room.roomId) return
			if (data.length === 0 || data.length < state.messagesPerPage) {
				setTimeout(() => (state.messagesLoaded = true), 0)
			}
			if (options.reset) state.messages = []
			data.forEach(message => {
				const formattedMessage = formatMessage(room, message)
				state.messages.unshift(formattedMessage)
			})
			if (state.lastLoadedMessage) {
				state.previousLastLoadedMessage = state.lastLoadedMessage
			}
			state.lastLoadedMessage = docs[docs.length - 1]
			listenMessages(room)
		})
}
const listenMessages = (room) => {
	const listener = firestoreService.listenMessages(
		room.roomId,
		state.lastLoadedMessage,
		state.previousLastLoadedMessage,
		messages => {
			messages.forEach(message => {
				const formattedMessage = formatMessage(room, message)
				const messageIndex = state.messages.findIndex(
					m => m._id === message.id
				)
				if (messageIndex === -1) {
					state.messages = state.messages.concat([formattedMessage])
				} else {
					state.messages[messageIndex] = formattedMessage
					state.messages = [...state.messages]
				}
				markMessagesSeen(room, message)
			})
		}
	)
	state.listeners.push(listener)
}
const markMessagesSeen = (room, message) => {
	if (
		message.sender_id !== currentUserId.value &&
		(!message.seen || !message.seen[currentUserId.value])
	) {
		firestoreService.updateMessage(room.roomId, message.id, {
			[`seen.${currentUserId.value}`]: new Date()
		})
	}
}
const formatMessage = (room, message) => {
	const formattedMessage = {
		...message,
		...{
			senderId: message.sender_id,
			_id: message.id,
			seconds: message.timestamp.seconds,
			timestamp: parseTimestamp(message.timestamp, 'HH:mm'),
			date: parseTimestamp(message.timestamp, 'DD MMMM YYYY'),
			username: room.users.find(user => message.sender_id === user._id)
				?.username,
			// avatar: senderUser.avatar ? senderUser.avatar : null,
			distributed: true
		}
	}
	if (message.replyMessage) {
		formattedMessage.replyMessage = {
			...message.replyMessage,
			...{
				senderId: message.replyMessage.sender_id
			}
		}
	}
	return formattedMessage
}
const sendMessage = async ({ content, roomId, files, replyMessage }) => {
	const message = {
		sender_id: currentUserId.value,
		content,
		timestamp: new Date()
	}
	if (files) {
		message.files = formattedFiles(files)
	}
	if (replyMessage) {
		message.replyMessage = {
			_id: replyMessage._id,
			content: replyMessage.content,
			sender_id: replyMessage.senderId
		}
		if (replyMessage.files) {
			message.replyMessage.files = replyMessage.files
		}
	}
	const { id } = await firestoreService.addMessage(roomId, message)
	if (files) {
		for (let index = 0; index < files.length; index++) {
			await uploadFile({ file: files[index], messageId: id, roomId })
		}
	}
	firestoreService.updateRoom(roomId, { lastUpdated: new Date() })
}
const editMessage = async ({ messageId, newContent, roomId, files }) => {
	const newMessage = { edited: new Date() }
	newMessage.content = newContent
	if (files) {
		newMessage.files = formattedFiles(files)
	} else {
		newMessage.files = firestoreService.deleteDbField
	}
	await firestoreService.updateMessage(roomId, messageId, newMessage)
	if (files) {
		for (let index = 0; index < files.length; index++) {
			if (files[index]?.blob) {
				await uploadFile({ file: files[index], messageId, roomId })
			}
		}
	}
}
const deleteMessage = async ({ message, roomId }) => {
	await firestoreService.updateMessage(roomId, message._id, {
		deleted: new Date()
	})
	const { files } = message
	if (files) {
		files.forEach(file => {
			storageService.deleteFile(currentUserId.value, message._id, file)
		})
	}
}
const uploadFile = async ({ file, messageId, roomId }) => {
	return new Promise(resolve => {
		let type = file.extension || file.type
		if (type === 'svg' || type === 'pdf') {
			type = file.type
		}
		storageService.listenUploadImageProgress(
			currentUserId.value,
			messageId,
			file,
			type,
			progress => {
				updateFileProgress(messageId, file.localUrl, progress)
			},
			_error => {
				resolve(false)
			},
			async url => {
				const message = await firestoreService.getMessage(roomId, messageId)
				message.files.forEach(f => {
					if (f.url === file.localUrl) {
						f.url = url
					}
				})
				await firestoreService.updateMessage(roomId, messageId, {
					files: message.files
				})
				resolve(true)
			}
		)
	})
}
const updateFileProgress = (messageId, fileUrl, progress) => {
	const message = state.messages.find(message => message._id === messageId)
	if (!message || !message.files) return
	message.files.find(file => file.url === fileUrl).progress = progress
	state.messages = [...state.messages]
}
const formattedFiles = (files) => {
	const formattedFiles = []
	files.forEach(file => {
		const messageFile = {
			name: file.name,
			size: file.size,
			type: file.type,
			extension: file.extension || file.type,
			url: file.url || file.localUrl
		}
		if (file.audio) {
			messageFile.audio = true
			messageFile.duration = file.duration
		}
		formattedFiles.push(messageFile)
	})
	return formattedFiles
}
const openFile = ({ file }) => {
	window.open(file.file.url, '_blank')
}
const openUserTag = async ({ user }) => {
	let roomId
	state.rooms.forEach(room => {
		if (room.users.length === 2) {
			const userId1 = room.users[0]._id
			const userId2 = room.users[1]._id
			if (
				(userId1 === user._id || userId1 === currentUserId.value) &&
				(userId2 === user._id || userId2 === currentUserId.value)
			) {
				roomId = room.roomId
			}
		}
	})
	if (roomId) {
		state.roomId = roomId
		return
	}
	const query1 = await firestoreService.getUserRooms(
		currentUserId.value,
		user._id
	)
	if (query1.data.length) {
		return loadRoom(query1)
	}
	const query2 = await firestoreService.getUserRooms(
		user._id,
		currentUserId.value
	)
	if (query2.data.length) {
		return loadRoom(query2)
	}
	const users =
		user._id === currentUserId.value
			? [currentUserId.value]
			: [user._id, currentUserId.value]
	const room = await firestoreService.addRoom({
		users: users,
		lastUpdated: new Date()
	})
	state.roomId = room.id
	fetchRooms()
}
const loadRoom = async (query) => {
	query.forEach(async room => {
		if (state.loadingRooms) return
		await firestoreService.updateRoom(room.id, { lastUpdated: new Date() })
		state.roomId = room.id
		fetchRooms()
	})
}
const menuActionHandler = ({ action, roomId }) => {
	switch (action.name) {
		case 'inviteUser':
			return inviteUser(roomId)
		case 'removeUser':
			return removeUser(roomId)
		case 'deleteRoom':
			return deleteRoom(roomId)
	}
}
const messageSelectionActionHandler = ({ action, messages, roomId }) => {
	switch (action.name) {
		case 'deleteMessages':
			messages.forEach(message => {
				deleteMessage({ message, roomId })
			})
	}
}
const sendMessageReaction =  async ({ reaction, remove, messageId, roomId }) => {
	firestoreService.updateMessageReactions(
		roomId,
		messageId,
		currentUserId.value,
		reaction.unicode,
		remove ? 'remove' : 'add'
	)
}
const typingMessage = ({ message, roomId }) => {
	if (roomId) {
		if (message?.length > 1) {
			state.typingMessageCache = message
			return
		}
		if (message?.length === 1 && state.typingMessageCache) {
			state.typingMessageCache = message
			return
		}
		state.typingMessageCache = message
		firestoreService.updateRoomTypingUsers(
			roomId,
			currentUserId.value,
			message ? 'add' : 'remove'
		)
	}
}
const listenRooms =  async (query) => {
	const listener = firestoreService.listenRooms(query, rooms => {
		// this.incrementDbCounter('Listen Rooms Typing Users', rooms.length)
		rooms.forEach(room => {
			const foundRoom = state.rooms.find(r => r.roomId === room.id)
			if (foundRoom) {
				foundRoom.typingUsers = room.typingUsers
				foundRoom.index = room.lastUpdated.seconds
			}
		})
	})
	state.roomsListeners.push(listener)
}
const listenUsersOnlineStatus = (rooms) => {
	rooms.forEach(room => {
		room.users.forEach(user => {
			const listener = firebaseService.firebaseListener(
				firebaseService.userStatusRef(user._id),
				snapshot => {
					if (!snapshot || !snapshot.val()) return
					const lastChanged = formatTimestamp(
						new Date(snapshot.val().lastChanged),
						new Date(snapshot.val().lastChanged)
					)
					user.status = { ...snapshot.val(), lastChanged }
					const roomIndex = state.rooms.findIndex(
						r => room.roomId === r.roomId
					)
					state.rooms[roomIndex] = room
					state.rooms = [...state.rooms]
				}
			)
			state.roomsListeners.push(listener)
		})
	})
}
const addRoom = () => {
	resetForms()
	state.addNewRoom = true
}
const createRoom =  async () => {
	state.disableForm = true
	const { id } = await firestoreService.addUser({
		username: state.addRoomUsername
	})
	await firestoreService.updateUser(id, { _id: id })
	await firestoreService.addRoom({
		users: [id, currentUserId.value],
		lastUpdated: new Date()
	})
	state.addNewRoom = false
	state.addRoomUsername = ''
	fetchRooms()
}
const inviteUser = (roomId) => {
	resetForms()
	state.inviteRoomId = roomId
}
const addRoomUser = async () => {
	state.disableForm = true
	const { id } = await firestoreService.addUser({
		username: state.invitedUsername
	})
	await firestoreService.updateUser(id, { _id: id })
	await firestoreService.addRoomUser(state.inviteRoomId, id)
	state.inviteRoomId = null
	state.invitedUsername = ''
	fetchRooms()
}
const removeUser = (roomId) => {
	resetForms()
	state.removeRoomId = roomId
	state.removeUsers = state.rooms.find(room => room.roomId === roomId).users
}
const deleteRoomUser = async () => {
	state.disableForm = true
	await firestoreService.removeRoomUser(
		state.removeRoomId,
		state.removeUserId
	)
	state.removeRoomId = null
	state.removeUserId = ''
	fetchRooms()
}
// const deleteRoom = async (roomId) => {
// 	const room = state.rooms.find(r => r.roomId === roomId)
// 	if (
// 		room.users.find(user => user._id === 'SGmFnBZB4xxMv9V4CVlW') ||
// 		room.users.find(user => user._id === '6jMsIXUrBHBj7o2cRlau')
// 	) {
// 		return alert('Nope, for demo purposes you cannot delete this room')
// 	}
// 	firestoreService.getMessages(roomId).then(({ data }) => {
// 		data.forEach(message => {
// 			firestoreService.deleteMessage(roomId, message.id)
// 			if (message.files) {
// 				message.files.forEach(file => {
// 					storageService.deleteFile(currentUserId.value, message.id, file)
// 				})
// 			}
// 		})
// 	})
// 	await firestoreService.deleteRoom(roomId)
// 	fetchRooms()
// }
const resetForms = () => {
	state.disableForm = false
	state.addNewRoom = null
	state.addRoomUsername = ''
	state.inviteRoomId = null
	state.invitedUsername = ''
	state.removeRoomId = null
	state.removeUserId = ''
}
// ,incrementDbCounter(type, size) {
// 	size = size || 1
// 	this.dbRequestCount += size
// 	console.log(type, size)
// }

</script>
<template>
	<div>
		<div class="app-container" style="background: rgba(40, 40, 40, 0.5);"
			:class="{ 'app-mobile': state.isDevice, 'app-mobile-dark': state.theme === 'dark' }"
    >
			<chat-window
			:current-user-id="currentUserId"
			:theme="state.theme"
			:is-device="state.isDevice"
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
				:class="{ 'user-logged-dark': state.theme === 'dark' }"
			>
				Logged as
			</span>
			<div v-if="showOptions">
				<h1 :key="store.username"
					style="color: white;" :value="store.username">
					{{ store.username }}
				</h1>
			</div>
			<div v-if="showOptions" class="button-theme">
				<button class="button-light" @click="state.theme = 'light'">
					Light
				</button>
				<button class="button-dark" @click="state.theme = 'dark'">
					Dark
				</button>
				<button class="button-github">
					<!-- <a href="https://github.com/antoine92190/vue-advanced-chat"> -->
						<!-- <img src="@/assets/github.svg" /> -->
					<!-- </a> -->
				</button>
			</div>
			<!-- :theme="state.theme" -->
			<div class="version-container">
				v~1.1.0
			</div>
		</div>
	</div>
</template>
