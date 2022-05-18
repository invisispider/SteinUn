<script setup lang="ts">
// import DevMenu from "@/components/Chat/DevMenu.vue"
import { useRouter } from "vue-router"
import { onAuthStateChanged } from "firebase/auth"
import { ref, reactive, toRefs, computed, onMounted, watchEffect, onUnmounted } from "vue"
import { useStore } from "@/stores/index"
import { auth } from "@/services/firebaseconfig"
import * as firestoreService from '@/components/Chat/database/firestore'
import * as firebaseService from '@/components/Chat/database/firebase'
import * as storageService from '@/components/Chat/database/storage'
import { parseTimestamp, formatTimestamp } from '@/components/Chat/utils/dates'
import '@/assets/css/vue-advanced-stein.sass'
import ChatWindow from '@/components/Chat/ChatWindow.vue'
document.title="unTalkMe"
const store = useStore()
const router = useRouter()
const unmaximize = ref(null)
const notification = ref(null)
onAuthStateChanged(auth, async (user) => {
	if (!user) {
		router.push('/')
	store.setAuthIsReady()
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
	menuActions: [
		{ name: 'inviteUser', title: 'Invite User' },
		// { name: 'removeUser', title: 'Remove User' },
		// { name: 'deleteRoom', title: 'Delete Room' }
	messageSelectionActions: [{ name: 'deleteMessages', title: 'Delete' }],
	styles: { container: { borderRadius: '4px' } },
	templatesText: [
			tag: 'help',
			text: 'This is the help'
		},
			tag: 'action',
			text: 'This is the action'
		},
			tag: 'action 2',
			text: 'This is the second action'
	dbRequestCount: 0
// , {deep: true})
const showOptions = computed(() => !state.isDevice || state.showDemoOptions)
const loadedRooms = computed(() => state.rooms.slice(0, state.roomsLoadedCount))
const screenHeight = computed(() => state.isDevice ? window.innerHeight + 'px' : 'calc(90vh - 80px)')
const unsub = watchEffect(() => {
	if (!currentUserId.value) {
		state.showChat = false
		// setTimeout(() => (state.showChat = true), 10050)
		// setTimeout(() => (router.push('/')), 20000)
onMounted(() => {
	if (!username.value) {
		router.push('/UnThinkMe')
	state.isDevice = window.innerWidth < 500
	firebaseService.updateUserOnlineStatus(currentUserId.value)
	fetchRooms()
onUnmounted(() => {
	unsub()
const playSound = (soundName: string) => {
	if (soundName=='unmaximize') {
		unmaximize.value.play()
	if (soundName=='notification') {
		notification.value.play()
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
const resetMessages = () => {
	state.messages = []
	state.messagesLoaded = false
	state.lastLoadedMessage = null
	state.previousLastLoadedMessage = null
	state.listeners.forEach(listener => listener())
	state.listeners = []
const fetchRooms = () => {
	resetRooms()
	fetchMoreRooms()
const fetchMoreRooms = async () => {
	if (state.endRooms && !state.startRooms) {
		state.roomsLoaded = true
		return
	const query = firestoreService.roomsQuery(
		currentUserId.value,
		state.roomsPerPage,
		state.startRooms
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
	const rawUsers = []
	roomUserIds.forEach(userId => {
		const promise = firestoreService.getUser(userId)
		rawUsers.push(promise)
	state.allUsers = [...state.allUsers, ...(await Promise.all(rawUsers))]
	const roomList = {}
	data.forEach(room => {
		roomList[room.id] = { ...room, users: [] }
		room.users.forEach(userId => {
			const foundUser = state.allUsers.find(user => user?._id === userId)
			if (foundUser) roomList[room.id].users.push(foundUser)
		})
	const formattedRooms = []
	Object.keys(roomList).forEach((key) => {
		const room = roomList[key]
		const roomContacts = room.users.filter(
			user => user._id !== currentUserId.value
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
		// })
	state.rooms = state.rooms.concat(formattedRooms)
	formattedRooms.forEach(room => listenLastMessage(room))
	if (!state.rooms.length) {
		state.loadingRooms = false
		state.roomsLoadedCount = 0
	listenUsersOnlineStatus(formattedRooms)
	listenRooms(query)
	// setTimeout(() => console.log('TOTAL', dbRequestCount), 2000)
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
	state.roomsListeners.push(listener)
const formatLastMessage = (message, room) => {
	if (!message.timestamp) return
	let content = message.content
	if (message.files?.length) {
		const file = message.files[0]
		content = `${file.name}.${file.extension || file.type}`
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
const fetchMessages = ({ room, options = {} }) => {
	if (options.reset) {
		resetMessages()
		state.roomId = room.roomId
	if (state.previousLastLoadedMessage && !state.lastLoadedMessage) {
		state.messagesLoaded = true
		return
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
	state.listeners.push(listener)
const markMessagesSeen = (room, message) => {
	if (
		message.sender_id !== currentUserId.value &&
		(!message.seen || !message.seen[currentUserId.value])
	) {
		firestoreService.updateMessage(room.roomId, message.id, {
			[`seen.${currentUserId.value}`]: new Date()
		})
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
	if (message.replyMessage) {
		formattedMessage.replyMessage = {
			...message.replyMessage,
			...{
				senderId: message.replyMessage.sender_id
			}
	return formattedMessage
const sendMessage = async ({ content, roomId, files, replyMessage }) => {
	const message = {
		sender_id: currentUserId.value,
		content,
		timestamp: new Date()
	if (files) {
		message.files = formattedFiles(files)
	if (replyMessage) {
		message.replyMessage = {
			_id: replyMessage._id,
			content: replyMessage.content,
			sender_id: replyMessage.senderId
		if (replyMessage.files) {
			message.replyMessage.files = replyMessage.files
	const { id } = await firestoreService.addMessage(roomId, message)
	if (files) {
		for (let index = 0; index < files.length; index++) {
			await uploadFile({ file: files[index], messageId: id, roomId })
	firestoreService.updateRoom(roomId, { lastUpdated: new Date() })
const editMessage = async ({ messageId, newContent, roomId, files }) => {
	const newMessage = { edited: new Date() }
	newMessage.content = newContent
	if (files) {
		newMessage.files = formattedFiles(files)
	} else {
		newMessage.files = firestoreService.deleteDbField
	await firestoreService.updateMessage(roomId, messageId, newMessage)
	if (files) {
		for (let index = 0; index < files.length; index++) {
			if (files[index]?.blob) {
				await uploadFile({ file: files[index], messageId, roomId })
			}
const deleteMessage = async ({ message, roomId }) => {
	await firestoreService.updateMessage(roomId, message._id, {
		deleted: new Date()
	const { files } = message
	if (files) {
		files.forEach(file => {
			storageService.deleteFile(currentUserId.value, message._id, file)
		})
const uploadFile = async ({ file, messageId, roomId }) => {
	return new Promise(resolve => {
		let type = file.extension || file.type
		if (type === 'svg' || type === 'pdf') {
			type = file.type
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
const updateFileProgress = (messageId, fileUrl, progress) => {
	const message = state.messages.find(message => message._id === messageId)
	if (!message || !message.files) return
	message.files.find(file => file.url === fileUrl).progress = progress
	state.messages = [...state.messages]
const formattedFiles = (files) => {
	const formattedFiles = []
	files.forEach(file => {
		const messageFile = {
			name: file.name,
			size: file.size,
			type: file.type,
			extension: file.extension || file.type,
			url: file.url || file.localUrl
		if (file.audio) {
			messageFile.audio = true
			messageFile.duration = file.duration
		formattedFiles.push(messageFile)
	return formattedFiles
const openFile = ({ file }) => {
	window.open(file.file.url, '_blank')
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
	if (roomId) {
		state.roomId = roomId
		return
			type: 'strike'
		},
		[typeMarkdown.underline]: {
			end: typeMarkdown.underline,
			allowed_chars: '.',
			type: 'underline'
		},
		[typeMarkdown.multilineCode]: {
			end: typeMarkdown.multilineCode,
			allowed_chars: '(.|\n)',
			type: 'multiline-code'
		},
		[typeMarkdown.inlineCode]: {
			end: typeMarkdown.inlineCode,
			allowed_chars: '.',
			type: 'inline-code'
		},
		'<usertag>': {
			allowed_chars: '.',
			end: '</usertag>',
			type: 'tag'
	const json = compileToJSON(text, pseudoMarkdown)
	const html = compileToHTML(json, pseudoMarkdown)
	const result = [].concat.apply([], html)
	if (doLinkify) linkifyResult(result)
	return result
function compileToJSON(str, pseudoMarkdown) {
	let result = []
	let minIndexOf = -1
	let minIndexOfKey = null
	let links = linkify.find(str)
	let minIndexFromLink = false
	if (links.length > 0) {
		minIndexOf = str.indexOf(links[0].value)
		minIndexFromLink = true
	Object.keys(pseudoMarkdown).forEach(startingValue => {
		const io = str.indexOf(startingValue)
		if (io >= 0 && (minIndexOf < 0 || io < minIndexOf)) {
			minIndexOf = io
			minIndexOfKey = startingValue
			minIndexFromLink = false
	if (minIndexFromLink && minIndexOfKey !== -1) {
		let strLeft = str.substr(0, minIndexOf)
		let strLink = str.substr(minIndexOf, links[0].value.length)
		let strRight = str.substr(minIndexOf + links[0].value.length)
		result.push(strLeft)
		result.push(strLink)
		result = result.concat(compileToJSON(strRight, pseudoMarkdown))
		return result
	if (minIndexOfKey) {
		let strLeft = str.substr(0, minIndexOf)
		const char = minIndexOfKey
		let strRight = str.substr(minIndexOf + char.length)
		if (str.replace(/\s/g, '').length === char.length * 2) {
			return [str]
		const match = strRight.match(
			new RegExp(
				'^(' +
					(pseudoMarkdown[char].allowed_chars || '.') +
					'*' +
					(pseudoMarkdown[char].end ? '?' : '') +
					')' +
					(pseudoMarkdown[char].end
						? '(' + pseudoMarkdown[char].end + ')'
						: ''),
				'm'
			)
		if (!match || !match[1]) {
			strLeft = strLeft + char
			result.push(strLeft)
		} else {
			if (strLeft) {
				result.push(strLeft)
			}
			const object = {
				start: char,
				content: compileToJSON(match[1], pseudoMarkdown),
				end: match[2],
				type: pseudoMarkdown[char].type
			}
			result.push(object)
			strRight = strRight.substr(match[0].length)
		result = result.concat(compileToJSON(strRight, pseudoMarkdown))
		return result
	} else {
		if (str) {
			return [str]
		} else {
			return []
function compileToHTML(json, pseudoMarkdown) {
	const result = []
	json.forEach(item => {
		if (typeof item === 'string') {
			result.push({ types: [], value: item })
		} else {
			if (pseudoMarkdown[item.start]) {
				result.push(parseContent(item))
			}
	return result
function parseContent(item) {
	const result = []
	iterateContent(item, result, [])
	return result
function iterateContent(item, result, types) {
	item.content.forEach(it => {
		if (typeof it === 'string') {
			result.push({
				types: removeDuplicates(types.concat([item.type])),
				value: it
			})
		} else {
			iterateContent(
				it,
				result,
				removeDuplicates([it.type].concat([item.type]).concat(types))
			)
function removeDuplicates(items) {
	return [...new Set(items)]
function linkifyResult(array) {
	const result = []
	array.forEach(arr => {
		const links = linkify.find(arr.value)
		if (links.length) {
			const spaces = arr.value.replace(links[0].value, '')
			result.push({ types: arr.types, value: spaces })
			arr.types = ['url'].concat(arr.types)
			arr.href = links[0].href
			arr.value = links[0].value
		result.push(arr)
	return result
export function detectMobile() {
	var userAgent = getUserAgent()
	var userAgentPart = userAgent.substr(0, 4)
	return (
		/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
			userAgent
		) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(
			userAgentPart
function getUserAgent() {
	var userAgent =
		navigator.userAgent || navigator.vendor || window.opera || null
	if (!userAgent) throw new Error('Failed to look for user agent information.')
	return userAgent
 * Modified for Vue 3 from https://github.com/ndelvalle/v-click-outside
 * Cf. https://github.com/ndelvalle/v-click-outside/issues/238
const HANDLERS_PROPERTY = '__v-click-outside'
const HAS_WINDOWS = typeof window !== 'undefined'
const HAS_NAVIGATOR = typeof navigator !== 'undefined'
const IS_TOUCH =
	HAS_WINDOWS &&
	('ontouchstart' in window ||
		(HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0))
const EVENTS = IS_TOUCH ? ['touchstart'] : ['click']
const processDirectiveArguments = bindingValue => {
	const isFunction = typeof bindingValue === 'function'
	if (!isFunction && typeof bindingValue !== 'object') {
		throw new Error(
			'v-click-outside: Binding value must be a function or an object'
	return {
		handler: isFunction ? bindingValue : bindingValue.handler,
		middleware: bindingValue.middleware || (item => item),
		events: bindingValue.events || EVENTS,
		isActive: !(bindingValue.isActive === false),
		detectIframe: !(bindingValue.detectIframe === false),
		capture: Boolean(bindingValue.capture)
const execHandler = ({ event, handler, middleware }) => {
	if (middleware(event)) {
		handler(event)
const onFauxIframeClick = ({ el, event, handler, middleware }) => {
	// Note: on firefox clicking on iframe triggers blur, but only on
	//       next event loop it becomes document.activeElement
	// https://stackoverflow.com/q/2381336#comment61192398_23231136
	setTimeout(() => {
		const { activeElement } = document
		if (
			activeElement &&
			activeElement.tagName === 'IFRAME' &&
			!el.contains(activeElement)
		) {
			execHandler({ event, handler, middleware })
	}, 0)
const onEvent = ({ el, event, handler, middleware }) => {
	// Note: composedPath is not supported on IE and Edge, more information here:
	//       https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
	//       In the meanwhile, we are using el.contains for those browsers, not
	//       the ideal solution, but using IE or EDGE is not ideal either.
	const path = event.path || (event.composedPath && event.composedPath())
	const isClickOutside = path
		? path.indexOf(el) < 0
		: !el.contains(event.target)
	if (!isClickOutside) {
		return
	execHandler({ event, handler, middleware })
const beforeMount = (el, { value }) => {
	const {
		events,
		handler,
		middleware,
		isActive,
		detectIframe,
		capture
	} = processDirectiveArguments(value)
	if (!isActive) {
		return
	el[HANDLERS_PROPERTY] = events.map(eventName => ({
		event: eventName,
		srcTarget: document.documentElement,
		handler: event => onEvent({ el, event, handler, middleware }),
		capture
	}))
	if (detectIframe) {
		const detectIframeEvent = {
			event: 'blur',
			srcTarget: window,
			handler: event => onFauxIframeClick({ el, event, handler, middleware }),
			capture
		el[HANDLERS_PROPERTY] = [...el[HANDLERS_PROPERTY], detectIframeEvent]
	el[HANDLERS_PROPERTY].forEach(({ event, srcTarget, handler: thisHandler }) =>
		setTimeout(() => {
			// Note: More info about this implementation can be found here:
			//       https://github.com/ndelvalle/v-click-outside/issues/137
			if (!el[HANDLERS_PROPERTY]) {
				return
			}
			srcTarget.addEventListener(event, thisHandler, capture)
		}, 0)
const unmounted = el => {
	const handlers = el[HANDLERS_PROPERTY] || []
	handlers.forEach(({ event, srcTarget, handler, capture }) =>
		srcTarget.removeEventListener(event, handler, capture)
	delete el[HANDLERS_PROPERTY]
const updated = (el, { value, oldValue }) => {
	if (JSON.stringify(value) === JSON.stringify(oldValue)) {
		return
	unmounted(el)
	beforeMount(el, { value })
const directive = {
	beforeMount,
	updated,
	unmounted
export default HAS_WINDOWS ? directive : {}
// Credits to https://github.com/grishkovelli/vue-audio-recorder
import Mp3Encoder from './mp3-encoder'
export default class {
	constructor(options = {}) {
		this.beforeRecording = options.beforeRecording
		this.pauseRecording = options.pauseRecording
		this.afterRecording = options.afterRecording
		this.micFailed = options.micFailed
		this.encoderOptions = {
			bitRate: options.bitRate,
			sampleRate: options.sampleRate
		this.bufferSize = 4096
		this.records = []
		this.isPause = false
		this.isRecording = false
		this.duration = 0
		this.volume = 0
		this._duration = 0
	start() {
		const constraints = {
			video: false,
			audio: {
				channelCount: 1,
				echoCancellation: false
			}
		this.beforeRecording && this.beforeRecording('start recording')
		navigator.mediaDevices
			.getUserMedia(constraints)
			.then(this._micCaptured.bind(this))
			.catch(this._micError.bind(this))
		this.isPause = false
		this.isRecording = true
		if (!this.lameEncoder) {
			this.lameEncoder = new Mp3Encoder(this.encoderOptions)
	stop() {
		this.stream.getTracks().forEach(track => track.stop())
		this.input.disconnect()
		this.processor.disconnect()
		this.context.close()
		let record = null
		record = this.lameEncoder.finish()
		record.duration = this.duration
		this.records.push(record)
		this._duration = 0
		this.duration = 0
		this.isPause = false
		this.isRecording = false
		this.afterRecording && this.afterRecording(record)
	pause() {
		this.stream.getTracks().forEach(track => track.stop())
		this.input.disconnect()
		this.processor.disconnect()
		this._duration = this.duration
		this.isPause = true
		this.pauseRecording && this.pauseRecording('pause recording')
	_micCaptured(stream) {
		this.context = new (window.AudioContext || window.webkitAudioContext)()
		this.duration = this._duration
		this.input = this.context.createMediaStreamSource(stream)
		this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1)
		this.stream = stream
		this.processor.onaudioprocess = ev => {
			const sample = ev.inputBuffer.getChannelData(0)
			let sum = 0.0
			if (this.lameEncoder) {
				this.lameEncoder.encode(sample)
			}
			for (let i = 0; i < sample.length; ++i) {
				sum += sample[i] * sample[i]
			}
			this.duration =
				parseFloat(this._duration) +
				parseFloat(this.context.currentTime.toFixed(2))
			this.volume = Math.sqrt(sum / sample.length).toFixed(2)
		this.input.connect(this.processor)
		this.processor.connect(this.context.destination)
	_micError(error) {
		this.micFailed && this.micFailed(error)
<template>
	<div
		class="vac-format-message-wrapper"
		:class="{ 'vac-text-ellipsis': singleLine }"
		<div
			v-if="!textFormatting.disabled"
			:class="{ 'vac-text-ellipsis': singleLine }"
			<div
				v-for="(message, i) in linkifiedMessage"
				:key="i"
				class="vac-format-container"
			>
				<component
					:is="message.url ? 'a' : 'span'"
					:class="{
						'vac-text-ellipsis': singleLine,
						'vac-text-bold': message.bold,
						'vac-text-italic': deleted || message.italic,
						'vac-text-strike': message.strike,
						'vac-text-underline': message.underline,
						'vac-text-inline-code': !singleLine && message.inline,
						'vac-text-multiline-code': !singleLine && message.multiline,
						'vac-text-tag': !singleLine && !reply && message.tag
					}"
					:href="message.href"
					:target="message.href ? linkOptions.target : null"
					:rel="message.href ? linkOptions.rel : null"
					@click="openTag(message)"
				>
					<slot name="deleted-icon" v-bind="{ deleted }">
						<svg-icon v-if="deleted" name="deleted" class="vac-icon-deleted" />
					</slot>
					<template v-if="message.url && message.image">
						<div class="vac-image-link-container">
							<div
								class="vac-image-link"
								:style="{
									'background-image': `url('${message.value}')`,
									height: message.height
								}"
							/>
						</div>
						<div class="vac-image-link-message">
							<span>{{ message.value }}</span>
						</div>
					</template>
					<template v-else>
						<span>{{ message.value }}</span>
					</template>
				</component>
			</div>
		</div>
		<div v-else>
			{{ formattedContent }}
		</div>
	</div>
</template>
