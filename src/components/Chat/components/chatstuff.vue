<template>
	<div class="vac-card-window" :style="[{ height }, cssVars]">
		<div class="vac-chat-container">
			<rooms-list
				v-if="!singleRoom"
				:current-user-id="currentUserId"
				:rooms="orderedRooms"
				:loading-rooms="loadingRooms"
				:rooms-loaded="roomsLoaded"
				:room="room"
				:room-actions="roomActions"
				:text-messages="t"
				:show-search="showSearch"
				:show-add-room="showAddRoom"
				:show-rooms-list="showRoomsList"
				:text-formatting="textFormatting"
				:link-options="linkOptions"
				:is-mobile="isMobile"
				:scroll-distance="scrollDistance"
				@fetch-room="fetchRoom"
				@fetch-more-rooms="fetchMoreRooms"
				@loading-more-rooms="loadingMoreRooms = $event"
				@add-room="addRoom"
				@room-action-handler="roomActionHandler"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</rooms-list>
			<room
				:current-user-id="currentUserId"
				:rooms="rooms"
				:room-id="room.roomId || ''"
				:load-first-room="loadFirstRoom"
				:messages="messages"
				:room-message="roomMessage"
				:messages-loaded="messagesLoaded"
				:menu-actions="menuActions"
				:message-actions="messageActions"
				:message-selection-actions="messageSelectionActions"
				:auto-scroll="autoScroll"
				:show-send-icon="showSendIcon"
				:show-files="showFiles"
				:show-audio="showAudio"
				:audio-bit-rate="audioBitRate"
				:audio-sample-rate="audioSampleRate"
				:show-new-messages-divider="showNewMessagesDivider"
				:show-footer="showFooter"
				:text-messages="t"
				:single-room="singleRoom"
				:show-rooms-list="showRoomsList"
				:text-formatting="textFormatting"
				:link-options="linkOptions"
				:is-mobile="isMobile"
				:loading-rooms="loadingRooms"
				:room-info-enabled="roomInfoEnabled"
				:textarea-action-enabled="textareaActionEnabled"
				:user-tags-enabled="userTagsEnabled"
				:scroll-distance="scrollDistance"
				:accepted-files="acceptedFiles"
				:templates-text="templatesText"
				:username-options="usernameOptions"
				@toggle-rooms-list="toggleRoomsList"
				@room-info="roomInfo"
				@fetch-messages="fetchMessages"
				@send-message="sendMessage"
				@edit-message="editMessage"
				@delete-message="deleteMessage"
				@open-file="openFile"
				@open-user-tag="openUserTag"
				@open-failed-message="openFailedMessage"
				@menu-action-handler="menuActionHandler"
				@message-action-handler="messageActionHandler"
				@message-selection-action-handler="messageSelectionActionHandler"
				@typing-message="typingMessage"
				@textarea-action-handler="textareaActionHandler"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</room>
		</div>
		<transition name="vac-fade-preview" appear>
			<media-preview
				v-if="showMediaPreview"
				:file="previewFile"
				@close-media-preview="showMediaPreview = false"
			/>
		</transition>
	</div>
</template>
<script>
import RoomsList from './RoomsList.vue'
import Room from './Room.vue'
import MediaPreview from './MediaPreview.vue'
import locales from './locales'
import { defaultThemeStyles, cssThemeVars } from './themes'
// const {
// 	roomsValidation,
// 	participantsValidation
// } = require('./utils/data-validation')
import { roomsValidation, participantsValidation } from './utils/data-validation'
export default {
	name: 'ChatContainer',
	components: {
		RoomsList,
		Room,
		MediaPreview
	props: {
		height: { type: String, default: '100%' },
		theme: { type: String, default: 'light' },
		styles: { type: Object, default: () => ({}) },
		responsiveBreakpoint: { type: Number, default: 900 },
		singleRoom: { type: Boolean, default: false },
		roomsListOpened: { type: Boolean, default: true },
		textMessages: { type: Object, default: null },
		currentUserId: { type: [String, Number], default: '' },
		rooms: { type: Array, default: () => [] },
		roomsOrder: { type: String, default: 'desc' },
		loadingRooms: { type: Boolean, default: false },
		roomsLoaded: { type: Boolean, default: false },
		roomId: { type: [String, Number], default: null },
		loadFirstRoom: { type: Boolean, default: true },
		messages: { type: Array, default: () => [] },
		messagesLoaded: { type: Boolean, default: false },
		roomActions: { type: Array, default: () => [] },
		menuActions: { type: Array, default: () => [] },
		messageActions: {
			type: Array,
			default: () => [
				{ name: 'replyMessage', title: 'Reply' },
				{ name: 'editMessage', title: 'Edit Message', onlyMe: true },
				{ name: 'deleteMessage', title: 'Delete Message', onlyMe: true },
				{ name: 'selectMessages', title: 'Select' }
			]
		},
		messageSelectionActions: { type: Array, default: () => [] },
		autoScroll: {
			type: Object,
			default: () => {
				return {
					send: {
						new: true,
						newAfterScrollUp: true
					},
					receive: {
						new: true,
						newAfterScrollUp: false
					}
				}
			}
		},
		showSearch: { type: Boolean, default: true },
		showAddRoom: { type: Boolean, default: true },
		showSendIcon: { type: Boolean, default: true },
		showFiles: { type: Boolean, default: true },
		showAudio: { type: Boolean, default: true },
		audioBitRate: { type: Number, default: 128 },
		audioSampleRate: { type: Number, default: 44100 },
		showNewMessagesDivider: { type: Boolean, default: true },
		showFooter: { type: Boolean, default: true },
		textFormatting: {
			type: Object,
			default: () => ({
				disabled: false,
				italic: '_',
				bold: '*',
				strike: '~',
				underline: '
				multilineCode: '```',
				inlineCode: '`'
			})
		},
		linkOptions: {
			type: Object,
			default: () => ({ disabled: false, target: '_blank', rel: null })
		},
		roomInfoEnabled: { type: Boolean, default: false },
		textareaActionEnabled: { type: Boolean, default: false },
		userTagsEnabled: { type: Boolean, default: true },
		roomMessage: { type: String, default: '' },
		scrollDistance: { type: Number, default: 60 },
		acceptedFiles: { type: String, default: '*' },
		templatesText: { type: Array, default: null },
		mediaPreviewEnabled: { type: Boolean, default: true },
		usernameOptions: {
			type: Object,
			default: () => ({ minUsers: 3, currentUser: false })
	emits: [
		'toggle-rooms-list',
		'room-info',
		'fetch-messages',
		'send-message',
		'edit-message',
		'delete-message',
		'open-file',
		'open-user-tag',
		'open-failed-message',
		'menu-action-handler',
		'message-action-handler',
		'typing-message',
		'textarea-action-handler',
		'fetch-more-rooms',
		'add-room',
		'room-action-handler',
		'message-selection-action-handler'
	data() {
		return {
			room: {},
			loadingMoreRooms: false,
			showRoomsList: true,
			isMobile: false,
			showMediaPreview: false,
			previewFile: {}
	computed: {
		t() {
			return {
				...locales,
				...this.textMessages
			}
		},
		cssVars() {
			const defaultStyles = defaultThemeStyles[this.theme]
			const customStyles = {}
			Object.keys(defaultStyles).map(key => {
				customStyles[key] = {
					...defaultStyles[key],
					...(this.styles[key] || {})
				}
			})
			return cssThemeVars(customStyles)
		},
		orderedRooms() {
			return this.rooms.slice().sort((a, b) => {
				const aVal = a.index || 0
				const bVal = b.index || 0
				if (this.roomsOrder === 'asc') {
					return aVal < bVal ? -1 : bVal < aVal ? 1 : 0
				}
				return aVal > bVal ? -1 : bVal > aVal ? 1 : 0
			})
	watch: {
		rooms: {
			immediate: true,
			deep: true,
			handler(newVal, oldVal) {
				if (
					!newVal[0] ||
					!newVal.find(room => room.roomId === this.room.roomId)
				) {
					this.showRoomsList = true
				}
				if (
					!this.loadingMoreRooms &&
					this.loadFirstRoom &&
					newVal[0] &&
					(!oldVal || newVal.length !== oldVal.length)
				) {
					if (this.roomId) {
						const room = newVal.find(r => r.roomId === this.roomId) || {}
						this.fetchRoom({ room })
					} else if (!this.isMobile || this.singleRoom) {
						this.fetchRoom({ room: this.orderedRooms[0] })
					} else {
						this.showRoomsList = true
					}
				}
			}
		},
		loadingRooms(val) {
			if (val) this.room = {}
		},
		roomId: {
			immediate: true,
			handler(newVal, oldVal) {
				if (newVal && !this.loadingRooms && this.rooms.length) {
					const room = this.rooms.find(r => r.roomId === newVal)
					this.fetchRoom({ room })
				} else if (oldVal && !newVal) {
					this.room = {}
				}
			}
		},
		room(val) {
			if (!val || Object.entries(val).length === 0) return
			roomsValidation(val)
			val.users.forEach(user => {
				participantsValidation(user)
			})
		},
		roomsListOpened(val) {
			this.showRoomsList = val
	created() {
		this.updateResponsive()
		window.addEventListener('resize', ev => {
			if (ev.isTrusted) this.updateResponsive()
		})
	methods: {
		updateResponsive() {
			this.isMobile = window.innerWidth < this.responsiveBreakpoint
		},
		toggleRoomsList() {
			this.showRoomsList = !this.showRoomsList
			if (this.isMobile) this.room = {}
			this.$emit('toggle-rooms-list', { opened: this.showRoomsList })
		},
		fetchRoom({ room }) {
			this.room = room
			this.fetchMessages({ reset: true })
			if (this.isMobile) this.showRoomsList = false
		},
		fetchMoreRooms() {
			this.$emit('fetch-more-rooms')
		},
		roomInfo() {
			this.$emit('room-info', this.room)
		},
		addRoom() {
			this.$emit('add-room')
		},
		fetchMessages(options) {
			this.$emit('fetch-messages', { room: this.room, options })
		},
		sendMessage(message) {
			this.$emit('send-message', { ...message, roomId: this.room.roomId })
		},
		editMessage(message) {
			this.$emit('edit-message', { ...message, roomId: this.room.roomId })
		},
		deleteMessage(message) {
			this.$emit('delete-message', { message, roomId: this.room.roomId })
		},
		openFile({ message, file }) {
			if (this.mediaPreviewEnabled && file.action === 'preview') {
				this.previewFile = file.file
				this.showMediaPreview = true
			} else {
				this.$emit('open-file', { message, file })
			}
		},
		openUserTag({ user }) {
			this.$emit('open-user-tag', { user })
		},
		openFailedMessage({ message }) {
			this.$emit('open-failed-message', {
				message,
				roomId: this.room.roomId
			})
		},
		menuActionHandler(ev) {
			this.$emit('menu-action-handler', {
				action: ev,
				roomId: this.room.roomId
			})
		},
		roomActionHandler({ action, roomId }) {
			this.$emit('room-action-handler', {
				action,
				roomId
			})
		},
		messageActionHandler(ev) {
			this.$emit('message-action-handler', {
				...ev,
				roomId: this.room.roomId
			})
		},
		messageSelectionActionHandler(ev) {
			this.$emit('message-selection-action-handler', {
				...ev,
				roomId: this.room.roomId
			})
		},
		typingMessage(message) {
			this.$emit('typing-message', {
				message,
				roomId: this.room.roomId
			})
		},
		textareaActionHandler(message) {
			this.$emit('textarea-action-handler', {
				message,
				roomId: this.room.roomId
			})
</script>
<template>
	<transition name="vac-slide-up">
		<div
			v-if="messageReply"
			class="vac-reply-container"
			:style="{ bottom: `${footerHeight}px` }"
			<div class="vac-reply-box">
				<div class="vac-reply-info">
					<div class="vac-reply-username">
						{{ messageReply.username }}
					</div>
					<div class="vac-reply-content">
						<format-message
							:content="messageReply.content"
							:users="room.users"
							:text-formatting="textFormatting"
							:link-options="linkOptions"
							:reply="true"
						>
							<template v-for="(i, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</format-message>
					</div>
				</div>
				<img v-if="isImage" :src="firstFile.url" class="vac-image-reply" />
				<video v-else-if="isVideo" controls class="vac-image-reply">
					<source :src="firstFile.url" />
				</video>
				<audio-player
					v-else-if="isAudio"
					:src="firstFile.url"
					class="vac-audio-reply"
				>
					<template v-for="(i, name) in $slots" #[name]="data">
						<slot :name="name" v-bind="data" />
					</template>
				</audio-player>
				<div v-else-if="isOtherFile" class="vac-image-reply vac-file-container">
					<div>
						<slot name="file-icon">
							<svg-icon name="file" />
						</slot>
					</div>
					<div class="vac-text-ellipsis">
						{{ firstFile.name }}
					</div>
					<div
						v-if="firstFile.extension"
						class="vac-text-ellipsis vac-text-extension"
					>
						{{ firstFile.extension }}
					</div>
				</div>
			</div>
			<div class="vac-icon-reply">
				<div class="vac-svg-button" @click="$emit('reset-message')">
					<slot name="reply-close-icon">
						<svg-icon name="close-outline" />
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import SvgIcon from '../../components/SvgIcon.vue'
import FormatMessage from '../../components/FormatMessage.vue'
import AudioPlayer from '../RoomMessage/AudioPlayer.vue'
import {
	isAudioFile,
	isImageFile,
	isVideoFile
}  from '../../utils/media-file'
export default {
	name: 'RoomMessageReply',
	components: {
		SvgIcon,
		FormatMessage,
		AudioPlayer
	props: {
		room: { type: Object, required: true },
		messageReply: { type: Object, default: null },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true }
	emits: ['reset-message'],
	computed: {
		footerHeight() {
			return document.getElementById('room-footer').clientHeight
		},
		firstFile() {
			return this.messageReply.files?.length ? this.messageReply.files[0] : {}
		},
		isImage() {
			return isImageFile(this.firstFile)
		},
		isVideo() {
			return isVideoFile(this.firstFile)
		},
		isAudio() {
			return isAudioFile(this.firstFile)
		},
		isOtherFile() {
			return (
				this.messageReply.files?.length &&
				!this.isAudio &&
				!this.isVideo &&
				!this.isImage
			)
</script>
<template>
	<div
		v-show="Object.keys(room).length && showFooter"
		id="room-footer"
		class="vac-room-footer"
		:class="{
			'vac-app-box-shadow': shadowFooter
		}"
		<room-users-tag
			:filtered-users-tag="filteredUsersTag"
			:select-item="selectUsersTagItem"
			:active-up-or-down="activeUpOrDownUsersTag"
			@select-user-tag="selectUserTag($event)"
			@activate-item="activeUpOrDownUsersTag = 0"
		/>
		<room-templates-text
			:filtered-templates-text="filteredTemplatesText"
			:select-item="selectTemplatesTextItem"
			:active-up-or-down="activeUpOrDownTemplatesText"
			@select-template-text="selectTemplateText($event)"
			@activate-item="activeUpOrDownTemplatesText = 0"
		/>
		<room-message-reply
			:room="room"
			:message-reply="messageReply"
			:text-formatting="textFormatting"
			:link-options="linkOptions"
			@reset-message="resetMessage"
			<template v-for="(i, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</room-message-reply>
		<room-files
			:files="files"
			@remove-file="removeFile"
			@reset-message="resetMessage"
			<template v-for="(i, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</room-files>
		<div
			class="vac-box-footer"
			:class="{ 'vac-box-footer-border': !files.length }"
			<div v-if="showAudio && !files.length" class="vac-icon-textarea-left">
				<template v-if="isRecording">
					<div class="vac-svg-button vac-icon-audio-stop" @click="stopRecorder">
						<slot name="audio-stop-icon">
							<svg-icon name="close-outline" />
						</slot>
					</div>
					<div class="vac-dot-audio-record" />
					<div class="vac-dot-audio-record-time">
						{{ recordedTime }}
					</div>
					<div
						class="vac-svg-button vac-icon-audio-confirm"
						@click="toggleRecorder(false)"
					>
						<slot name="audio-stop-icon">
							<svg-icon name="checkmark" />
						</slot>
					</div>
				</template>
				<div v-else class="vac-svg-button" @click="toggleRecorder(true)">
					<slot name="microphone-icon">
						<svg-icon name="microphone" class="vac-icon-microphone" />
					</slot>
				</div>
			</div>
			<textarea
				id="roomTextarea"
				ref="roomTextarea"
				:placeholder="textMessages.TYPE_MESSAGE"
				class="vac-textarea"
				:class="{
					'vac-textarea-outline': editedMessage._id
				}"
				:style="{
					'min-height': `20px`,
					'padding-left': `12px`
				}"
				@input="onChangeInput"
				@keydown.esc="escapeTextarea"
				@keydown.enter.exact.prevent="selectItem"
				@paste="onPasteImage"
				@keydown.tab.exact.prevent=""
				@keydown.tab="selectItem"
				@keydown.up.exact.prevent=""
				@keydown.up="updateActiveUpOrDown(-1)"
				@keydown.down.exact.prevent=""
				@keydown.down="updateActiveUpOrDown(1)"
			/>
			<div class="vac-icon-textarea">
				<div
					v-if="editedMessage._id"
					class="vac-svg-button"
					@click="resetMessage"
				>
					<slot name="edit-close-icon">
						<svg-icon name="close-outline" />
					</slot>
				</div>
				<div v-if="showFiles" class="vac-svg-button" @click="launchFilePicker">
					<slot name="paperclip-icon">
						<svg-icon name="paperclip" />
					</slot>
				</div>
				<div
					v-if="textareaActionEnabled"
					class="vac-svg-button"
					@click="textareaActionHandler"
				>
					<slot name="custom-action-icon">
						<svg-icon name="deleted" />
					</slot>
				</div>
				<input
					v-if="showFiles"
					ref="file"
					type="file"
					multiple
					:accept="acceptedFiles"
					style="display: none"
					@change="onFileChange($event.target.files)"
				/>
				<div
					v-if="showSendIcon"
					class="vac-svg-button"
					:class="{ 'vac-send-disabled': isMessageEmpty }"
					@click="sendMessage"
				>
					<slot name="send-icon">
						<svg-icon
							name="send"
							:param="isMessageEmpty || isFileLoading ? 'disabled' : ''"
						/>
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SvgIcon from '../components/SvgIcon.vue'
import RoomFiles from './RoomFooter/RoomFiles.vue'
import RoomMessageReply from './RoomFooter/RoomMessageReply.vue'
import RoomUsersTag from './RoomFooter/RoomUsersTag.vue'
import RoomTemplatesText from './RoomFooter/RoomTemplatesText.vue'
import vClickOutside from '../utils/on-click-outside'
import filteredItems from '../utils/filter-items'
import Recorder from '../utils/recorder'
import { detectMobile }  from '../utils/mobile-detection'
export default {
	name: 'RoomFooter',
	components: {
		SvgIcon,
		RoomFiles,
		RoomMessageReply,
		RoomUsersTag,
		RoomTemplatesText
	directives: {
		clickOutside: vClickOutside
	props: {
		room: { type: Object, required: true },
		roomId: { type: [String, Number], required: true },
		roomMessage: { type: String, default: null },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		textMessages: { type: Object, required: true },
		showSendIcon: { type: Boolean, required: true },
		showFiles: { type: Boolean, required: true },
		showAudio: { type: Boolean, required: true },
		showFooter: { type: Boolean, required: true },
		acceptedFiles: { type: String, required: true },
		textareaActionEnabled: { type: Boolean, required: true },
		userTagsEnabled: { type: Boolean, required: true },
		templatesText: { type: Array, default: null },
		audioBitRate: { type: Number, required: true },
		audioSampleRate: { type: Number, required: true },
		initReplyMessage: { type: Object, default: null },
		initEditMessage: { type: Object, default: null }
	emits: [
		'edit-message',
		'send-message',
		'update-edited-message-id',
		'textarea-action-handler',
		'typing-message'
	data() {
		return {
			message: '',
			editedMessage: {},
			messageReply: null,
			cursorRangePosition: null,
			files: [],
			fileDialog: false,
			selectUsersTagItem: null,
			selectTemplatesTextItem: null,
			format: 'mp3',
			activeUpOrDownUsersTag: null,
			activeUpOrDownTemplatesText: null,
			keepKeyboardOpen: false,
			filteredUsersTag: [],
			selectedUsersTag: [],
			filteredTemplatesText: [],
			recorder: this.initRecorder(),
			isRecording: false
	computed: {
		isMessageEmpty() {
			return !this.files.length && !this.message.trim()
		},
		isFileLoading() {
			return this.files.some(e => e.loading)
		},
		recordedTime() {
			return new Date(this.recorder.duration * 1000).toISOString().substr(14, 5)
		},
		shadowFooter() {
			return (
				!!this.filteredUsersTag.length ||
				!!this.filteredTemplatesText.length ||
				!!this.files.length ||
				!!this.messageReply
			)
	watch: {
		roomId() {
			this.resetMessage(true, true)
			if (this.roomMessage) {
				this.message = this.roomMessage
				setTimeout(() => this.onChangeInput())
			}
		},
		message(val) {
			this.getTextareaRef().value = val
		},
		roomMessage: {
			immediate: true,
			handler(val) {
				if (val) this.message = this.roomMessage
			}
		},
		editedMessage(val) {
			this.$emit('update-edited-message-id', val._id)
		},
		initReplyMessage(val) {
			this.replyMessage(val)
		},
		initEditMessage(val) {
			this.editMessage(val)
	mounted() {
		const isMobile = detectMobile()
		this.getTextareaRef().addEventListener('keyup', e => {
			if (e.key === 'Enter' && !e.shiftKey && !this.fileDialog) {
				if (isMobile) {
					this.message = this.message + '\n'
					setTimeout(() => this.onChangeInput())
				} else if (
					!this.filteredUsersTag.length &&
					!this.filteredTemplatesText.length
				) {
					this.sendMessage()
				}
			}
			setTimeout(() => {
				this.updateFooterLists()
			}, 60)
		})
		this.getTextareaRef().addEventListener('click', () => {
			if (isMobile) this.keepKeyboardOpen = true
			this.updateFooterLists()
		})
		this.getTextareaRef().addEventListener('blur', () => {
			this.resetFooterList()
			if (isMobile) setTimeout(() => (this.keepKeyboardOpen = false))
		})
	beforeUnmount() {
		this.stopRecorder()
	methods: {
		getTextareaRef() {
			return this.$refs.roomTextarea
		},
		focusTextarea(disableMobileFocus) {
			if (detectMobile() && disableMobileFocus) return
			if (!this.getTextareaRef()) return
			this.getTextareaRef().focus()
			if (this.cursorRangePosition) {
				setTimeout(() => {
					this.getTextareaRef().setSelectionRange(
						this.cursorRangePosition,
						this.cursorRangePosition
					)
					this.cursorRangePosition = null
				})
			}
		},
		onChangeInput() {
			if (this.getTextareaRef()?.value || this.getTextareaRef()?.value === '') {
				this.message = this.getTextareaRef()?.value
			}
			this.keepKeyboardOpen = true
			this.resizeTextarea()
			this.$emit('typing-message', this.message)
		},
		resizeTextarea() {
			const el = this.getTextareaRef()
			if (!el) return
			const padding = window
				.getComputedStyle(el, null)
				.getPropertyValue('padding-top')
				.replace('px', '')
			el.style.height = 0
			el.style.height = el.scrollHeight - padding * 2 + 'px'
		},
		escapeTextarea() {
			if (this.filteredUsersTag.length) this.filteredUsersTag = []
			else if (this.filteredTemplatesText.length) {
				this.filteredTemplatesText = []
			} else this.resetMessage()
		},
		onPasteImage(pasteEvent) {
			const items = pasteEvent.clipboardData?.items
			if (items) {
				Array.from(items).forEach(item => {
					if (item.type.includes('image')) {
						const blob = item.getAsFile()
						this.onFileChange([blob])
					}
				})
			}
		},
		updateActiveUpOrDown(direction) {
			if (this.filteredUsersTag.length) {
				this.activeUpOrDownUsersTag = direction
			} else if (this.filteredTemplatesText.length) {
				this.activeUpOrDownTemplatesText = direction
			}
		},
		selectItem() {
			if (this.filteredUsersTag.length) {
				this.selectUsersTagItem = true
			} else if (this.filteredTemplatesText.length) {
				this.selectTemplatesTextItem = true
			}
		},
		selectTemplateText(template) {
			this.selectTemplatesTextItem = false
			if (!template) return
			const { position, endPosition } = this.getCharPosition('/')
			const space = this.message.substr(endPosition, endPosition).length
				? ''
				: ' '
			this.message =
				this.message.substr(0, position - 1) +
				template.text +
				space +
				this.message.substr(endPosition, this.message.length - 1)
			this.cursorRangePosition =
				position + template.text.length + space.length + 1
			this.focusTextarea()
		},
		launchFilePicker() {
			this.$refs.file.value = ''
			this.$refs.file.click()
		},
		async onFileChange(files) {
			this.fileDialog = true
			this.focusTextarea()
			Array.from(files).forEach(async file => {
				const fileURL = URL.createObjectURL(file)
				const typeIndex = file.name.lastIndexOf('.')
				this.files.push({
					loading: true,
					name: file.name.substring(0, typeIndex),
					size: file.size,
					type: file.type,
					extension: file.name.substring(typeIndex + 1),
					localUrl: fileURL
				})
				const blobFile = await fetch(fileURL).then(res => res.blob())
				let loadedFile = this.files.find(file => file.localUrl === fileURL)
				if (loadedFile) {
					loadedFile.blob = blobFile
					loadedFile.loading = false
					delete loadedFile.loading
				}
			})
			setTimeout(() => (this.fileDialog = false), 500)
		},
		removeFile(index) {
			this.files.splice(index, 1)
			this.focusTextarea()
		},
		toggleRecorder(recording) {
			this.isRecording = recording
			if (!this.recorder.isRecording) {
				setTimeout(() => this.recorder.start(), 200)
			} else {
				try {
					this.recorder.stop()
					const record = this.recorder.records[0]
					this.files.push({
						blob: record.blob,
						name: `audio.${this.format}`,
						size: record.blob.size,
						duration: record.duration,
						type: record.blob.type,
						audio: true,
						localUrl: URL.createObjectURL(record.blob)
					})
					this.recorder = this.initRecorder()
					this.sendMessage()
				} catch {
					setTimeout(() => this.stopRecorder(), 100)
				}
			}
		},
		stopRecorder() {
			if (this.recorder.isRecording) {
				try {
					this.recorder.stop()
					this.recorder = this.initRecorder()
				} catch {
					setTimeout(() => this.stopRecorder(), 100)
				}
			}
		},
		textareaActionHandler() {
			this.$emit('textarea-action-handler', this.message)
		},
		sendMessage() {
			let message = this.message.trim()
			if (!this.files.length && !message) return
			if (this.isFileLoading) return
			this.selectedUsersTag.forEach(user => {
				message = message.replace(
					`@${user.username}`,
					`<usertag>${user._id}</usertag>`
				)
			})
			const files = this.files.length ? this.files : null
			if (this.editedMessage._id) {
				if (
					this.editedMessage.content !== message ||
					this.editedMessage.files?.length ||
					this.files.length
				) {
					this.$emit('edit-message', {
						messageId: this.editedMessage._id,
						newContent: message,
						files: files,
						replyMessage: this.messageReply,
						usersTag: this.selectedUsersTag
					})
				}
			} else {
				this.$emit('send-message', {
					content: message,
					files: files,
					replyMessage: this.messageReply,
					usersTag: this.selectedUsersTag
				})
			}
			this.resetMessage(true)
		},
		// eslint-disable-next-line vue/no-unused-properties
		editMessage(message) {
			this.resetMessage()
			this.editedMessage = { ...message }
			let messageContent = message.content
			const initialContent = messageContent
			const firstTag = '<usertag>'
			const secondTag = '</usertag>'
			const usertags = [
				...messageContent.matchAll(new RegExp(firstTag, 'gi'))
			].map(a => a.index)
			usertags.forEach(index => {
				const userId = initialContent.substring(
					index + firstTag.length,
					initialContent.indexOf(secondTag, index)
				)
				const user = this.room.users.find(user => user._id === userId)
				messageContent = messageContent.replace(
					`${firstTag}${userId}${secondTag}`,
					`@${user?.username || 'unknown'}`
				)
				this.selectUserTag(user, true)
			})
			this.message = messageContent
			if (message.files) {
				this.files = [...message.files]
			}
			setTimeout(() => this.resizeTextarea())
		},
		// eslint-disable-next-line vue/no-unused-properties
		replyMessage(message) {
			this.editedMessage = {}
			this.messageReply = message
			this.focusTextarea()
		},
		updateFooterLists() {
			this.updateFooterList('@')
			this.updateFooterList(':')
			this.updateFooterList('/')
		},
		updateFooterList(tagChar) {
			if (!this.getTextareaRef()) return
			if (tagChar === ':') {
				return
			}
			if (tagChar === '@' && (!this.userTagsEnabled || !this.room.users)) {
				return
			}
			if (tagChar === '/' && !this.templatesText) {
				return
			}
			const textareaCursorPosition = this.getTextareaRef().selectionStart
			let position = textareaCursorPosition
			while (
				position > 0 &&
				this.message.charAt(position - 1) !== tagChar &&
				// eslint-disable-next-line no-unmodified-loop-condition
				(this.message.charAt(position - 1) !== ' ' || tagChar !== ':')
			) {
				position--
			}
			const beforeTag = this.message.charAt(position - 2)
			const notLetterNumber = !beforeTag.match(/^[0-9a-zA-Z]+$/)
			if (
				this.message.charAt(position - 1) === tagChar &&
				(!beforeTag || beforeTag === ' ' || notLetterNumber)
			) {
				const query = this.message.substring(position, textareaCursorPosition)
				if (tagChar === '@') {
					this.updateShowUsersTag(query)
				} else if (tagChar === '/') {
					this.updateShowTemplatesText(query)
				}
			} else {
				this.resetFooterList(tagChar)
			}
		},
		updateShowUsersTag(query) {
			this.filteredUsersTag = filteredItems(
				this.room.users,
				'username',
				query,
				true
			).filter(user => user._id !== this.currentUserId)
		},
		selectUserTag(user, editMode = false) {
			this.selectUsersTagItem = false
			if (!user) return
			const { position, endPosition } = this.getCharPosition('@')
			const space = this.message.substr(endPosition, endPosition).length
				? ''
				: ' '
			this.message =
				this.message.substr(0, position) +
				user.username +
				space +
				this.message.substr(endPosition, this.message.length - 1)
			this.selectedUsersTag = [...this.selectedUsersTag, { ...user }]
			if (!editMode) {
				this.cursorRangePosition =
					position + user.username.length + space.length + 1
			}
			this.focusTextarea()
		},
		updateShowTemplatesText(query) {
			this.filteredTemplatesText = filteredItems(
				this.templatesText,
				'tag',
				query,
				true
			)
		},
		getCharPosition(tagChar) {
			const cursorPosition = this.getTextareaRef().selectionStart
			let position = cursorPosition
			while (position > 0 && this.message.charAt(position - 1) !== tagChar) {
				position--
			}
			const endPosition = this.getTextareaRef().selectionEnd
			return { position, endPosition }
		},
		resetFooterList(tagChar = null) {
			if (tagChar === '@') {
				this.filteredUsersTag = []
			} else if (tagChar === '/') {
				this.filteredTemplatesText = []
			} else {
				this.filteredUsersTag = []
				this.filteredTemplatesText = []
			}
		},
		resetMessage(disableMobileFocus = false, initRoom = false) {
			if (!initRoom) {
				this.$emit('typing-message', null)
			}
			this.selectedUsersTag = []
			this.resetFooterList()
			this.resetTextareaSize()
			this.message = ''
			this.editedMessage = {}
			this.messageReply = null
			this.files = []
			this.preventKeyboardFromClosing()
			setTimeout(() => this.focusTextarea(disableMobileFocus))
		},
		resetTextareaSize() {
			if (this.getTextareaRef()) {
				this.getTextareaRef().style.height = '20px'
			}
		},
		preventKeyboardFromClosing() {
			if (this.keepKeyboardOpen) this.getTextareaRef().focus()
		},
		initRecorder() {
			this.isRecording = false
			return new Recorder({
				bitRate: this.audioBitRate,
				sampleRate: this.audioSampleRate,
				beforeRecording: null,
				afterRecording: null,
				pauseRecording: null,
				micFailed: this.micFailed
			})
		},
		micFailed() {
			this.isRecording = false
			this.recorder = this.initRecorder()
</script>
<template>
	<div>
		<div class="vac-audio-player">
			<div class="vac-svg-button" @click="playback">
				<slot v-if="isPlaying" name="audio-pause-icon">
					<svg-icon name="audio-pause" />
				</slot>
				<slot v-else name="audio-play-icon">
					<svg-icon name="audio-play" />
				</slot>
			</div>
			<audio-control
				:percentage="progress"
				:message-selection-enabled="messageSelectionEnabled"
				@change-linehead="onUpdateProgress"
				@hover-audio-progress="$emit('hover-audio-progress', $event)"
			/>
			<audio :id="playerUniqId" :src="audioSource" />
		</div>
	</div>
</template>
<script>
import SvgIcon from '../../components/SvgIcon.vue'
import AudioControl from './AudioPlayer/AudioControl.vue'
export default {
	name: 'AudioPlayer',
	components: {
		SvgIcon,
		AudioControl
	props: {
		messageId: { type: [String, Number], default: null },
		src: { type: String, default: null },
		messageSelectionEnabled: { type: Boolean, required: true }
	emits: ['hover-audio-progress', 'update-progress-time'],
	data() {
		return {
			isPlaying: false,
			duration: this.convertTimeMMSS(0),
			playedTime: this.convertTimeMMSS(0),
			progress: 0
	computed: {
		playerUniqId() {
			return `audio-player${this.messageId}`
		},
		audioSource() {
			if (this.src) return this.src
			this.resetProgress()
			return null
	mounted() {
		this.player = document.getElementById(this.playerUniqId)
		this.player.addEventListener('ended', () => {
			this.isPlaying = false
		})
		this.player.addEventListener('loadeddata', () => {
			this.resetProgress()
			this.duration = this.convertTimeMMSS(this.player.duration)
			this.updateProgressTime()
		})
		this.player.addEventListener('timeupdate', this.onTimeUpdate)
	methods: {
		convertTimeMMSS(seconds) {
			return new Date(seconds * 1000).toISOString().substr(14, 5)
		},
		playback() {
			if (this.messageSelectionEnabled || !this.audioSource) return
			if (this.isPlaying) this.player.pause()
			else setTimeout(() => this.player.play())
			this.isPlaying = !this.isPlaying
		},
		resetProgress() {
			if (this.isPlaying) this.player.pause()
			this.duration = this.convertTimeMMSS(0)
			this.playedTime = this.convertTimeMMSS(0)
			this.progress = 0
			this.isPlaying = false
			this.updateProgressTime()
		},
		onTimeUpdate() {
			this.playedTime = this.convertTimeMMSS(this.player.currentTime)
			this.progress = (this.player.currentTime / this.player.duration) * 100
			this.updateProgressTime()
		},
		onUpdateProgress(pos) {
			if (pos) this.player.currentTime = pos * this.player.duration
		},
		updateProgressTime() {
			this.$emit(
				'update-progress-time',
				this.progress > 1 ? this.playedTime : this.duration
			)
</script>
<template>
	<div class="vac-message-actions-wrapper">
		<div
			class="vac-options-container"
			:style="{
				display: hoverAudioProgress ? 'none' : 'initial',
				width:
					filteredMessageActions.length ? '70px' : '45px'
			}"
			<transition-group name="vac-slide-left" tag="span">
				<div
					v-if="isMessageActions"
					key="1"
					class="vac-blur-container"
					:class="{
						'vac-options-me': message.senderId === currentUserId
					}"
				/>
				<div
					v-if="isMessageActions"
					ref="actionIcon"
					key="2"
					class="vac-svg-button vac-message-options"
					@click="openOptions"
				>
					<slot name="dropdown-icon">
						<svg-icon name="dropdown" param="message" />
					</slot>
				</div>
			</transition-group>
		</div>
		<transition
			v-if="filteredMessageActions.length"
			:name="
				message.senderId === currentUserId
					? 'vac-slide-left'
					: 'vac-slide-right'
			"
			<div
				v-if="optionsOpened"
				ref="menuOptions"
				v-click-outside="closeOptions"
				class="vac-menu-options"
				:class="{
					'vac-menu-left': message.senderId !== currentUserId
				}"
				:style="{ top: `${menuOptionsTop}px` }"
			>
				<div class="vac-menu-list">
					<div v-for="action in filteredMessageActions" :key="action.name">
						<div class="vac-menu-item" @click="messageActionHandler(action)">
							{{ action.title }}
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import vClickOutside from '../../utils/on-click-outside'
import SvgIcon from '../../components/SvgIcon.vue'
export default {
	name: 'MessageActions',
	components: { SvgIcon },
	directives: {
		clickOutside: vClickOutside
	props: {
		currentUserId: { type: [String, Number], required: true },
		message: { type: Object, required: true },
		messageActions: { type: Array, required: true },
		messageHover: { type: Boolean, required: true },
		hoverMessageId: { type: [String, Number], default: null },
		hoverAudioProgress: { type: Boolean, required: true }
	emits: [
		'update-options-opened',
		'update-message-hover',
		'message-action-handler'
	data() {
		return {
			menuOptionsTop: 0,
			optionsOpened: false,
			optionsClosing: false
	computed: {
		isMessageActions() {
			return (
				this.filteredMessageActions.length &&
				this.messageHover &&
				!this.message.deleted &&
				!this.message.disableActions &&
				!this.hoverAudioProgress
			)
		},
		filteredMessageActions() {
			return this.message.senderId === this.currentUserId
				? this.messageActions
				: this.messageActions.filter(message => !message.onlyMe)
	watch: {
		optionsOpened(val) {
			this.$emit('update-options-opened', val)
	methods: {
		openOptions() {
			if (this.optionsClosing) return
			this.optionsOpened = !this.optionsOpened
			if (!this.optionsOpened) return
			setTimeout(() => {
				const roomFooterRef = document.getElementById('room-footer')
				if (
					!roomFooterRef ||
					!this.$refs.menuOptions ||
					!this.$refs.actionIcon
				) {
					return
				}
				const menuOptionsTop =
					this.$refs.menuOptions.getBoundingClientRect().height
				const actionIconTop = this.$refs.actionIcon.getBoundingClientRect().top
				const roomFooterTop = roomFooterRef.getBoundingClientRect().top
				const optionsTopPosition =
					roomFooterTop - actionIconTop > menuOptionsTop + 50
				if (optionsTopPosition) this.menuOptionsTop = 30
				else this.menuOptionsTop = -menuOptionsTop
			})
		},
		closeOptions() {
			this.optionsOpened = false
			this.optionsClosing = true
			this.updateMessageHover()
			setTimeout(() => (this.optionsClosing = false), 100)
		},
		updateMessageHover() {
			if (this.hoverMessageId !== this.message._id) {
				this.$emit('update-message-hover', false)
			}
		},
		messageActionHandler(action) {
			this.closeOptions()
			this.$emit('message-action-handler', action)
		},
</script>
<template>
	<div class="vac-message-file-container">
		<div
			v-if="isImage"
			:ref="'imageRef' + index"
			class="vac-message-image-container"
			@mouseover="imageHover = true"
			@mouseleave="imageHover = false"
			@click="openFile($event, 'preview')"
			<progress-bar
				v-if="file.progress >= 0"
				:progress="file.progress"
				:style="{ top: `${imageResponsive.loaderTop}px` }"
			/>
			<loader
				v-else
				:show="isImageLoading"
				:style="{ top: `${imageResponsive.loaderTop}px` }"
			>
				<template v-for="(idx, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</loader>
			<div
				class="vac-message-image"
				:class="{
					'vac-blur-loading':
						isImageLoading && message.senderId === currentUserId
				}"
				:style="{
					'background-image': `url('${
						isImageLoading ? file.preview || file.url : file.url
					}')`,
					'max-height': `${imageResponsive.maxHeight}px`
				}"
			>
				<transition name="vac-fade-image">
					<div
						v-if="!messageSelectionEnabled && imageHover && !isImageLoading"
						class="vac-image-buttons"
					>
						<div
							class="vac-svg-button vac-button-view"
							@click="openFile($event, 'preview')"
						>
							<slot name="eye-icon">
								<svg-icon name="eye" />
							</slot>
						</div>
						<div
							class="vac-svg-button vac-button-download"
							@click="openFile($event, 'download')"
						>
							<slot name="document-icon">
								<svg-icon name="document" />
							</slot>
						</div>
					</div>
				</transition>
			</div>
		</div>
		<div
			v-else-if="isVideo"
			class="vac-video-container"
			@click.prevent="openFile('preview')"
			<progress-bar v-if="file.progress >= 0" :progress="file.progress" />
			<video width="100%" height="100%" controls>
				<source :src="file.url" />
			</video>
		</div>
	</div>
</template>
<script>
import Loader from '../../../components/Loader.vue'
import ProgressBar from '../../../components/ProgressBar.vue'
import SvgIcon from '../../../components/SvgIcon.vue'
import { isImageFile, isVideoFile } from '../../../utils/media-file'
// const { isImageFile, isVideoFile } = require('../../../utils/media-file')
export default {
	name: 'MessageFile',
	components: { SvgIcon, Loader, ProgressBar },
	props: {
		currentUserId: { type: [String, Number], required: true },
		message: { type: Object, required: true },
		file: { type: Object, required: true },
		index: { type: Number, required: true },
		messageSelectionEnabled: { type: Boolean, required: true }
	emits: ['open-file'],
	data() {
		return {
			imageResponsive: '',
			imageLoading: false,
			imageHover: false
	computed: {
		isImageLoading() {
			return this.file.url.indexOf('blob:http') !== -1 || this.imageLoading
		},
		isImage() {
			return isImageFile(this.file)
		},
		isVideo() {
			return isVideoFile(this.file)
	watch: {
		file: {
			immediate: true,
			handler() {
				this.checkImgLoad()
			}
	mounted() {
		const ref = this.$refs['imageRef' + this.index]
		if (ref) {
			this.imageResponsive = {
				maxHeight: ref.clientWidth - 18,
				loaderTop: ref.clientHeight / 2 - 9
			}
	methods: {
		checkImgLoad() {
			if (!isImageFile(this.file)) return
			this.imageLoading = true
			const image = new Image()
			image.src = this.file.url
			image.addEventListener('load', () => (this.imageLoading = false))
		},
		openFile(event, action) {
			if (!this.messageSelectionEnabled) {
				event.stopPropagation()
				this.$emit('open-file', { file: this.file, action })
			}
</script>
<template>
	<div class="vac-message-files-container">
		<div v-for="(file, idx) in imageVideoFiles" :key="idx + 'iv'">
			<message-file
				:file="file"
				:current-user-id="currentUserId"
				:message="message"
				:index="idx"
				:message-selection-enabled="messageSelectionEnabled"
				@open-file="$emit('open-file', $event)"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</message-file>
		</div>
		<div
			v-for="(file, idx) in otherFiles"
			:key="idx + 'a'"
			class="vac-file-wrapper"
			<progress-bar
				v-if="file.progress >= 0"
				:progress="file.progress"
				:style="{ top: '44px' }"
			/>
			<div
				class="vac-file-container"
				:class="{ 'vac-file-container-progress': file.progress >= 0 }"
				@click="openFile($event, file, 'download')"
			>
				<div class="vac-svg-button">
					<slot name="document-icon">
						<svg-icon name="document" />
					</slot>
				</div>
				<div class="vac-text-ellipsis">
					{{ file.name }}
				</div>
				<div v-if="file.extension" class="vac-text-ellipsis vac-text-extension">
					{{ file.extension }}
				</div>
			</div>
		</div>
		<format-message
			:content="message.content"
			:users="roomUsers"
			:text-formatting="textFormatting"
			:link-options="linkOptions"
			@open-user-tag="$emit('open-user-tag')"
			<template v-for="(i, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</format-message>
	</div>
</template>
<script>
import SvgIcon from '../../components/SvgIcon.vue'
import FormatMessage from '../../components/FormatMessage.vue'
import ProgressBar from '../../components/ProgressBar.vue'
import MessageFile from './MessageFiles/MessageFile.vue'
// const { isImageVideoFile } = require('../../utils/media-file')
import { isImageVideoFile } from '../../utils/media-file'
export default {
	name: 'MessageFiles',
	components: { SvgIcon, FormatMessage, ProgressBar, MessageFile },
	props: {
		currentUserId: { type: [String, Number], required: true },
		message: { type: Object, required: true },
		roomUsers: { type: Array, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		messageSelectionEnabled: { type: Boolean, required: true }
	emits: ['open-file', 'open-user-tag'],
	computed: {
		imageVideoFiles() {
			return this.message.files.filter(file => isImageVideoFile(file))
		},
		otherFiles() {
			return this.message.files.filter(file => !isImageVideoFile(file))
	methods: {
		openFile(event, file, action) {
			if (!this.messageSelectionEnabled) {
				event.stopPropagation()
				this.$emit('open-file', { file, action })
			}
</script>
<template>
	<div class="vac-reply-message">
		<div class="vac-reply-username">
			{{ replyUsername }}
		</div>
		<div v-if="isImage" class="vac-image-reply-container">
			<div
				class="vac-message-image vac-message-image-reply"
				:style="{
					'background-image': `url('${firstFile.url}')`
				}"
			/>
		</div>
		<div v-else-if="isVideo" class="vac-video-reply-container">
			<video width="100%" height="100%" controls>
				<source :src="firstFile.url" />
			</video>
		</div>
		<audio-player
			v-else-if="isAudio"
			:src="firstFile.url"
			@update-progress-time="progressTime = $event"
			@hover-audio-progress="hoverAudioProgress = $event"
			<template v-for="(i, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</audio-player>
		<div v-else-if="isOtherFile" class="vac-file-container">
			<div>
				<slot name="file-icon">
					<svg-icon name="file" />
				</slot>
			</div>
			<div class="vac-text-ellipsis">
				{{ firstFile.name }}
			</div>
			<div
				v-if="firstFile.extension"
				class="vac-text-ellipsis vac-text-extension"
			>
				{{ firstFile.extension }}
			</div>
		</div>
		<div class="vac-reply-content">
			<format-message
				:content="message.replyMessage.content"
				:users="roomUsers"
				:text-formatting="textFormatting"
				:link-options="linkOptions"
				:reply="true"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</format-message>
		</div>
	</div>
</template>
<script>
import SvgIcon from '../../components/SvgIcon.vue'
import FormatMessage from '../../components/FormatMessage.vue'
import AudioPlayer from './AudioPlayer.vue'
import {
	isAudioFile,
	isImageFile,
	isVideoFile
} from '../../utils/media-file'
// const {
// 	isAudioFile,
// 	isImageFile,
// 	isVideoFile
// } = require('../../utils/media-file')
export default {
	name: 'MessageReply',
	components: { AudioPlayer, SvgIcon, FormatMessage },
	props: {
		message: { type: Object, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		roomUsers: { type: Array, required: true }
	computed: {
		replyUsername() {
			const { senderId } = this.message.replyMessage
			const replyUser = this.roomUsers.find(user => user._id === senderId)
			return replyUser ? replyUser.username : ''
		},
		firstFile() {
			return this.message.replyMessage.files?.length
				? this.message.replyMessage.files[0]
				: {}
		},
		isAudio() {
			return isAudioFile(this.firstFile)
		},
		isImage() {
			return isImageFile(this.firstFile)
		},
		isVideo() {
			return isVideoFile(this.firstFile)
		},
		isOtherFile() {
			return (
				this.message.replyMessage.files?.length &&
				!this.isAudio &&
				!this.isVideo &&
				!this.isImage
			)
</script>
<template>
	<div :id="message._id" ref="message" class="vac-message-wrapper">
		<div v-if="showDate" class="vac-card-info vac-card-date">
			{{ message.date }}
		</div>
		<div v-if="newMessage._id === message._id" class="vac-line-new">
			{{ textMessages.NEW_MESSAGES }}
		</div>
		<div v-if="message.system" class="vac-card-info vac-card-system">
			<format-message
				:content="message.content"
				:users="roomUsers"
				:text-formatting="textFormatting"
				:link-options="linkOptions"
				@open-user-tag="openUserTag"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</format-message>
		</div>
		<div
			v-else
			class="vac-message-box"
			:class="{ 'vac-offset-current': message.senderId === currentUserId }"
			@click="selectMessage"
			<slot name="message" v-bind="{ message }">
				<div
					v-if="message.avatar && message.senderId !== currentUserId"
					class="vac-avatar"
					:style="{ 'background-image': `url('${message.avatar}')` }"
				/>
				<div
					v-if="hasSenderUserAvatar && !message.avatar"
					class="vac-avatar-offset"
				/>
				<div
					class="vac-message-container"
					:class="{
						'vac-message-container-offset': messageOffset
					}"
				>
					<div
						class="vac-message-card"
						:class="{
							'vac-message-highlight': isMessageHover,
							'vac-message-current': message.senderId === currentUserId,
							'vac-message-deleted': message.deleted,
							'vac-item-clickable': messageSelectionEnabled,
							'vac-message-selected': isMessageSelected
						}"
						@mouseover="onHoverMessage"
						@mouseleave="onLeaveMessage"
					>
						<div
							v-if="showUsername"
							class="vac-text-username"
							:class="{
								'vac-username-reply': !message.deleted && message.replyMessage
							}"
						>
							<span>{{ message.username }}</span>
						</div>
						<message-reply
							v-if="!message.deleted && message.replyMessage"
							:message="message"
							:room-users="roomUsers"
							:text-formatting="textFormatting"
							:link-options="linkOptions"
						>
							<template v-for="(i, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</message-reply>
						<div v-if="message.deleted">
							<slot name="deleted-icon">
								<svg-icon name="deleted" class="vac-icon-deleted" />
							</slot>
							<span>{{ textMessages.MESSAGE_DELETED }}</span>
						</div>
						<format-message
							v-else-if="!message.files || !message.files.length"
							:content="message.content"
							:users="roomUsers"
							:text-formatting="textFormatting"
							:link-options="linkOptions"
							@open-user-tag="openUserTag"
						>
							<template v-for="(i, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</format-message>
						<message-files
							v-else-if="!isAudio || message.files.length > 1"
							:current-user-id="currentUserId"
							:message="message"
							:room-users="roomUsers"
							:text-formatting="textFormatting"
							:link-options="linkOptions"
							:message-selection-enabled="messageSelectionEnabled"
							@open-file="openFile"
						>
							<template v-for="(i, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</message-files>
						<template v-else>
							<audio-player
								:message-id="message._id"
								:src="message.files[0].url"
								:message-selection-enabled="messageSelectionEnabled"
								@update-progress-time="progressTime = $event"
								@hover-audio-progress="hoverAudioProgress = $event"
							>
								<template v-for="(i, name) in $slots" #[name]="data">
									<slot :name="name" v-bind="data" />
								</template>
							</audio-player>
							<div v-if="!message.deleted" class="vac-progress-time">
								{{ progressTime }}
							</div>
						</template>
						<div class="vac-text-timestamp">
							<div
								v-if="message.edited && !message.deleted"
								class="vac-icon-edited"
							>
								<slot name="pencil-icon">
									<svg-icon name="pencil" />
								</slot>
							</div>
							<span>{{ message.timestamp }}</span>
							<span v-if="isCheckmarkVisible">
								<slot name="checkmark-icon" v-bind="{ message }">
									<svg-icon
										:name="
											message.distributed ? 'double-checkmark' : 'checkmark'
										"
										:param="message.seen ? 'seen' : ''"
										class="vac-icon-check"
									/>
								</slot>
							</span>
						</div>
						<message-actions
							:current-user-id="currentUserId"
							:message="message"
							:message-actions="messageActions"
							:message-hover="messageHover"
							:hover-message-id="hoverMessageId"
							:hover-audio-progress="hoverAudioProgress"
							@update-message-hover="messageHover = $event"
							@update-options-opened="optionsOpened = $event"
							@message-action-handler="messageActionHandler"
						>
							<template v-for="(i, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</message-actions>
					</div>
				</div>
				<slot name="message-failure" v-bind="{ message }">
					<div
						v-if="message.failure && message.senderId === currentUserId"
						class="vac-failure-container vac-svg-button"
						:class="{
							'vac-failure-container-avatar':
								message.avatar && message.senderId === currentUserId
						}"
						@click="$emit('open-failed-message', { message })"
					>
						<div class="vac-failure-text">
							!
						</div>
					</div>
				</slot>
				<div
					v-if="message.avatar && message.senderId === currentUserId"
					class="vac-avatar vac-avatar-current"
					:style="{ 'background-image': `url('${message.avatar}')` }"
				/>
				<div
					v-if="hasCurrentUserAvatar && !message.avatar"
					class="vac-avatar-current-offset"
				/>
			</slot>
		</div>
	</div>
</template>
<script>
import SvgIcon from '../components/SvgIcon.vue'
import FormatMessage from '../components/FormatMessage.vue'
import MessageReply from './RoomMessage/MessageReply.vue'
import MessageFiles from './RoomMessage/MessageFiles.vue'
import MessageActions from './RoomMessage/MessageActions.vue'
import AudioPlayer from './RoomMessage/AudioPlayer.vue'
import { messagesValidation } from '../utils/data-validation'
import { isAudioFile } from '../utils/media-file'
// const { messagesValidation } = require('../utils/data-validation')
// const { isAudioFile } = require('../utils/media-file')
export default {
	name: 'RoomMessage',
	components: {
		SvgIcon,
		FormatMessage,
		AudioPlayer,
		MessageReply,
		MessageFiles,
		MessageActions
	props: {
		currentUserId: { type: [String, Number], required: true },
		textMessages: { type: Object, required: true },
		index: { type: Number, required: true },
		message: { type: Object, required: true },
		messages: { type: Array, required: true },
		editedMessageId: { type: [String, Number], default: null },
		roomUsers: { type: Array, default: () => [] },
		messageActions: { type: Array, required: true },
		newMessages: { type: Array, default: () => [] },
		showNewMessagesDivider: { type: Boolean, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		usernameOptions: { type: Object, required: true },
		messageSelectionEnabled: { type: Boolean, required: true },
		selectedMessages: { type: Array, default: () => [] }
	emits: [
		'message-added',
		'open-file',
		'open-user-tag',
		'open-failed-message',
		'message-action-handler',
		'select-message',
		'unselect-message'
	data() {
		return {
			hoverMessageId: null,
			messageHover: false,
			optionsOpened: false,
			newMessage: {},
			progressTime: '- : -',
			hoverAudioProgress: false
	computed: {
		showUsername() {
			if (
				!this.usernameOptions.currentUser &&
				this.message.senderId === this.currentUserId
			) {
				return false
			} else {
				return this.roomUsers.length >= this.usernameOptions.minUsers
			}
		},
		showDate() {
			return (
				this.index > 0 &&
				this.message.date !== this.messages[this.index - 1].date
			)
		},
		messageOffset() {
			return (
				this.index > 0 &&
				this.message.senderId !== this.messages[this.index - 1].senderId
			)
		},
		isMessageHover() {
			return (
				this.editedMessageId === this.message._id ||
				this.hoverMessageId === this.message._id
			)
		},
		isAudio() {
			return this.message.files?.some(file => isAudioFile(file))
		},
		isCheckmarkVisible() {
			return (
				this.message.senderId === this.currentUserId &&
				!this.message.deleted &&
				(this.message.saved || this.message.distributed || this.message.seen)
			)
		},
		hasCurrentUserAvatar() {
			return this.messages.some(
				message => message.senderId === this.currentUserId && message.avatar
			)
		},
		hasSenderUserAvatar() {
			return this.messages.some(
				message => message.senderId !== this.currentUserId && message.avatar
			)
		},
		isMessageSelected() {
			return (
				this.messageSelectionEnabled &&
				!!this.selectedMessages.find(
					message => message._id === this.message._id
				)
			)
	watch: {
		newMessages: {
			immediate: true,
			deep: true,
			handler(val) {
				if (!val.length || !this.showNewMessagesDivider) {
					this.newMessage = {}
					return
				}
				this.newMessage = val.reduce((res, obj) =>
					obj.index < res.index ? obj : res
				)
			}
		},
		messageSelectionEnabled() {
			this.resetMessageHover()
	mounted() {
		messagesValidation(this.message)
		this.$emit('message-added', {
			message: this.message,
			index: this.index,
			ref: this.$refs.message
		})
	methods: {
		onHoverMessage() {
			if (!this.messageSelectionEnabled) {
				this.messageHover = true
				if (this.canEditMessage()) this.hoverMessageId = this.message._id
			}
		},
		canEditMessage() {
			return !this.message.deleted
		},
		onLeaveMessage() {
			if (!this.messageSelectionEnabled) {
				if (!this.optionsOpened) this.messageHover = false
				this.hoverMessageId = null
			}
		},
		resetMessageHover() {
			this.messageHover = false
			this.hoverMessageId = null
		},
		openFile(file) {
			this.$emit('open-file', { message: this.message, file: file })
		},
		openUserTag(user) {
			this.$emit('open-user-tag', { user })
		},
		messageActionHandler(action) {
			this.resetMessageHover()
			setTimeout(() => {
				this.$emit('message-action-handler', { action, message: this.message })
			}, 300)
		},
		selectMessage() {
			if (this.messageSelectionEnabled) {
				if (this.isMessageSelected) {
					this.$emit('unselect-message', this.message._id)
				} else {
					this.$emit('select-message', this.message)
				}
			}
</script>
<template>
	<div
		v-show="(isMobile && !showRoomsList) || !isMobile || singleRoom"
		class="vac-col-messages"
		@touchstart="touchStart"
		<slot v-if="showNoRoom" name="no-room-selected">
			<div class="vac-container-center vac-room-empty">
				<div>{{ textMessages.ROOM_EMPTY }}</div>
			</div>
		</slot>
		<room-header
			v-else
			:current-user-id="currentUserId"
			:text-messages="textMessages"
			:single-room="singleRoom"
			:show-rooms-list="showRoomsList"
			:is-mobile="isMobile"
			:room-info-enabled="roomInfoEnabled"
			:menu-actions="menuActions"
			:room="room"
			:message-selection-enabled="messageSelectionEnabled"
			:message-selection-actions="messageSelectionActions"
			:selected-messages-total="selectedMessages.length"
			@toggle-rooms-list="$emit('toggle-rooms-list')"
			@room-info="$emit('room-info')"
			@menu-action-handler="$emit('menu-action-handler', $event)"
			@message-selection-action-handler="messageSelectionActionHandler"
			@cancel-message-selection="messageSelectionEnabled = false"
			<template v-for="(i, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</room-header>
		<div
			id="messages-list"
			ref="scrollContainer"
			class="vac-container-scroll"
			@scroll="onContainerScroll"
			<loader :show="loadingMessages">
				<template v-for="(idx, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</loader>
			<div class="vac-messages-container">
				<div :class="{ 'vac-messages-hidden': loadingMessages }">
					<transition name="vac-fade-message">
						<div>
							<div v-if="showNoMessages" class="vac-text-started">
								<slot name="messages-empty">
									{{ textMessages.MESSAGES_EMPTY }}
								</slot>
							</div>
							<div v-if="showMessagesStarted" class="vac-text-started">
								{{ textMessages.CONVERSATION_STARTED }} {{ messages[0].date }}
							</div>
						</div>
					</transition>
					<div
						v-if="messages.length && !messagesLoaded"
						id="infinite-loader-messages"
					>
						<loader :show="true" :infinite="true">
							<template v-for="(idx, name) in $slots" #[name]="data">
								<slot :name="name" v-bind="data" />
							</template>
						</loader>
					</div>
					<transition-group :key="roomId" name="vac-fade-message" tag="span">
						<div v-for="(m, i) in messages" :key="m.indexId || m._id">
							<room-message
								:current-user-id="currentUserId"
								:message="m"
								:index="i"
								:messages="messages"
								:edited-message-id="editedMessageId"
								:message-actions="messageActions"
								:room-users="room.users"
								:text-messages="textMessages"
								:new-messages="newMessages"
								:show-new-messages-divider="showNewMessagesDivider"
								:text-formatting="textFormatting"
								:link-options="linkOptions"
								:username-options="usernameOptions"
								:message-selection-enabled="messageSelectionEnabled"
								:selected-messages="selectedMessages"
								@message-added="onMessageAdded"
								@message-action-handler="messageActionHandler"
								@open-file="openFile"
								@open-user-tag="openUserTag"
								@open-failed-message="$emit('open-failed-message', $event)"
								@select-message="selectMessage"
								@unselect-message="unselectMessage"
							>
								<template v-for="(idx, name) in $slots" #[name]="data">
									<slot :name="name" v-bind="data" />
								</template>
							</room-message>
						</div>
					</transition-group>
				</div>
			</div>
		</div>
		<div v-if="!loadingMessages">
			<transition name="vac-bounce">
				<div v-if="scrollIcon" class="vac-icon-scroll" @click="scrollToBottom">
					<transition name="vac-bounce">
						<div
							v-if="scrollMessagesCount"
							class="vac-badge-counter vac-messages-count"
						>
							{{ scrollMessagesCount }}
						</div>
					</transition>
					<slot name="scroll-icon">
						<svg-icon name="dropdown" param="scroll" />
					</slot>
				</div>
			</transition>
		</div>
		<room-footer
			:room="room"
			:room-id="roomId"
			:room-message="roomMessage"
			:text-messages="textMessages"
			:show-send-icon="showSendIcon"
			:show-files="showFiles"
			:show-audio="showAudio"
			:show-footer="showFooter"
			:accepted-files="acceptedFiles"
			:textarea-action-enabled="textareaActionEnabled"
			:user-tags-enabled="userTagsEnabled"
			:templates-text="templatesText"
			:text-formatting="textFormatting"
			:link-options="linkOptions"
			:audio-bit-rate="audioBitRate"
			:audio-sample-rate="audioSampleRate"
			:init-reply-message="initReplyMessage"
			:init-edit-message="initEditMessage"
			@update-edited-message-id="editedMessageId = $event"
			@edit-message="$emit('edit-message', $event)"
			@send-message="$emit('send-message', $event)"
			@typing-message="$emit('typing-message', $event)"
			@textarea-action-handler="$emit('textarea-action-handler', $event)"
		/>
	</div>
</template>
<script>
import Loader from './components/Loader.vue'
import SvgIcon from './components/SvgIcon.vue'
import RoomHeader from './RoomHeader.vue'
import RoomFooter from './Room/RoomFooter.vue'
import RoomMessage from './Room/RoomMessage.vue'
export default {
	name: 'Room',
	components: {
		Loader,
		SvgIcon,
		RoomHeader,
		RoomFooter,
		RoomMessage
	props: {
		currentUserId: { type: [String, Number], required: true },
		textMessages: { type: Object, required: true },
		singleRoom: { type: Boolean, required: true },
		showRoomsList: { type: Boolean, required: true },
		isMobile: { type: Boolean, required: true },
		rooms: { type: Array, required: true },
		roomId: { type: [String, Number], required: true },
		loadFirstRoom: { type: Boolean, required: true },
		messages: { type: Array, required: true },
		roomMessage: { type: String, default: null },
		messagesLoaded: { type: Boolean, required: true },
		menuActions: { type: Array, required: true },
		messageActions: { type: Array, required: true },
		messageSelectionActions: { type: Array, required: true },
		autoScroll: { type: Object, required: true },
		showSendIcon: { type: Boolean, required: true },
		showFiles: { type: Boolean, required: true },
		showAudio: { type: Boolean, required: true },
		audioBitRate: { type: Number, required: true },
		audioSampleRate: { type: Number, required: true },
		showNewMessagesDivider: { type: Boolean, required: true },
		showFooter: { type: Boolean, required: true },
		acceptedFiles: { type: String, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		loadingRooms: { type: Boolean, required: true },
		roomInfoEnabled: { type: Boolean, required: true },
		textareaActionEnabled: { type: Boolean, required: true },
		userTagsEnabled: { type: Boolean, required: true },
		scrollDistance: { type: Number, required: true },
		templatesText: { type: Array, default: null },
		usernameOptions: { type: Object, required: true }
	emits: [
		'toggle-rooms-list',
		'room-info',
		'menu-action-handler',
		'message-selection-action-handler',
		'edit-message',
		'send-message',
		'delete-message',
		'message-action-handler',
		'fetch-messages',
		'typing-message',
		'open-file',
		'open-user-tag',
		'open-failed-message',
		'textarea-action-handler'
	data() {
		return {
			editedMessageId: null,
			initReplyMessage: null,
			initEditMessage: null,
			infiniteState: null,
			loadingMessages: false,
			observer: null,
			showLoader: true,
			loadingMoreMessages: false,
			scrollIcon: false,
			scrollMessagesCount: 0,
			newMessages: [],
			messageSelectionEnabled: false,
			selectedMessages: []
	computed: {
		room() {
			return this.rooms.find(room => room.roomId === this.roomId) || {}
		},
		showNoMessages() {
			return (
				this.roomId &&
				!this.messages.length &&
				!this.loadingMessages &&
				!this.loadingRooms
			)
		},
		showNoRoom() {
			const noRoomSelected =
				(!this.rooms.length && !this.loadingRooms) ||
				(!this.roomId && !this.loadFirstRoom)
			if (noRoomSelected) {
				this.loadingMessages = false /* eslint-disable-line vue/no-side-effects-in-computed-properties */
			}
			return noRoomSelected
		},
		showMessagesStarted() {
			return this.messages.length && this.messagesLoaded
	watch: {
		loadingMessages(val) {
			if (val) {
				this.infiniteState = null
			} else {
				if (this.infiniteState) this.infiniteState.loaded()
				setTimeout(() => this.initIntersectionObserver())
			}
		},
		roomId() {
			this.onRoomChanged()
		},
		messages: {
			deep: true,
			handler(newVal, oldVal) {
				newVal.forEach((message, i) => {
					if (
						this.showNewMessagesDivider &&
						!message.seen &&
						message.senderId !== this.currentUserId
					) {
						this.newMessages.push({
							_id: message._id,
							index: i
						})
					}
				})
				if (oldVal?.length === newVal?.length - 1) {
					this.newMessages = []
				}
				if (this.infiniteState) {
					this.infiniteState.loaded()
				}
				setTimeout(() => (this.loadingMoreMessages = false))
			}
		},
		messagesLoaded(val) {
			if (val) this.loadingMessages = false
			if (this.infiniteState) this.infiniteState.complete()
	mounted() {
		this.newMessages = []
	methods: {
		initIntersectionObserver() {
			if (this.observer) {
				this.showLoader = true
				this.observer.disconnect()
			}
			const loader = document.getElementById('infinite-loader-messages')
			if (loader) {
				const options = {
					root: document.getElementById('messages-list'),
					rootMargin: `${this.scrollDistance}px`,
					threshold: 0
				}
				this.observer = new IntersectionObserver(entries => {
					if (entries[0].isIntersecting) {
						this.loadMoreMessages()
					}
				}, options)
				this.observer.observe(loader)
			}
		},
		preventTopScroll() {
			const container = this.$refs.scrollContainer
			const prevScrollHeight = container.scrollHeight
			const observer = new ResizeObserver(_ => {
				if (container.scrollHeight !== prevScrollHeight) {
					if (this.$refs.scrollContainer) {
						this.$refs.scrollContainer.scrollTo({
							top: container.scrollHeight - prevScrollHeight
						})
						observer.disconnect()
					}
				}
			})
			for (var i = 0; i < container.children.length; i++) {
				observer.observe(container.children[i])
			}
		},
		touchStart(touchEvent) {
			if (this.singleRoom) return
			if (touchEvent.changedTouches.length === 1) {
				const posXStart = touchEvent.changedTouches[0].clientX
				const posYStart = touchEvent.changedTouches[0].clientY
				addEventListener(
					'touchend',
					touchEvent => this.touchEnd(touchEvent, posXStart, posYStart),
					{ once: true }
				)
			}
		},
		touchEnd(touchEvent, posXStart, posYStart) {
			if (touchEvent.changedTouches.length === 1) {
				const posXEnd = touchEvent.changedTouches[0].clientX
				const posYEnd = touchEvent.changedTouches[0].clientY
				const swippedRight = posXEnd - posXStart > 100
				const swippedVertically = Math.abs(posYEnd - posYStart) > 50
				if (swippedRight && !swippedVertically) {
					this.$emit('toggle-rooms-list')
				}
			}
		},
		onRoomChanged() {
			this.loadingMessages = true
			this.scrollIcon = false
			this.scrollMessagesCount = 0
			this.resetMessageSelection()
			if (!this.messages.length && this.messagesLoaded) {
				this.loadingMessages = false
			}
			const unwatch = this.$watch(
				() => this.messages,
				val => {
					if (!val || !val.length) return
					const element = this.$refs.scrollContainer
					if (!element) return
					unwatch()
					setTimeout(() => {
						element.scrollTo({ top: element.scrollHeight })
						this.loadingMessages = false
					})
				}
			)
		},
		resetMessageSelection() {
			this.messageSelectionEnabled = false
			this.selectedMessages = []
		},
		selectMessage(message) {
			this.selectedMessages.push(message)
		},
		unselectMessage(messageId) {
			this.selectedMessages = this.selectedMessages.filter(
				message => message._id !== messageId
			)
		},
		onMessageAdded({ message, index, ref }) {
			if (index !== this.messages.length - 1) return
			const autoScrollOffset = ref.offsetHeight + 60
			setTimeout(() => {
				const scrolledUp =
					this.getBottomScroll(this.$refs.scrollContainer) > autoScrollOffset
				if (message.senderId === this.currentUserId) {
					if (scrolledUp) {
						if (this.autoScroll.send.newAfterScrollUp) {
							this.scrollToBottom()
						}
					} else {
						if (this.autoScroll.send.new) {
							this.scrollToBottom()
						}
					}
				} else {
					if (scrolledUp) {
						if (this.autoScroll.receive.newAfterScrollUp) {
							this.scrollToBottom()
						} else {
							this.scrollIcon = true
							this.scrollMessagesCount++
						}
					} else {
						if (this.autoScroll.receive.new) {
							this.scrollToBottom()
						} else {
							this.scrollIcon = true
							this.scrollMessagesCount++
						}
					}
				}
			})
		},
		onContainerScroll(e) {
			if (!e.target) return
			const bottomScroll = this.getBottomScroll(e.target)
			if (bottomScroll < 60) this.scrollMessagesCount = 0
			this.scrollIcon = bottomScroll > 500 || this.scrollMessagesCount
		},
		loadMoreMessages() {
			if (this.loadingMessages) return
			setTimeout(
				() => {
					if (this.loadingMoreMessages) return
					if (this.messagesLoaded || !this.roomId) {
						this.loadingMoreMessages = false
						this.showLoader = false
						return
					}
					this.preventTopScroll()
					this.$emit('fetch-messages')
					this.loadingMoreMessages = true
				},
				// prevent scroll bouncing speed
				500
			)
		},
		messageActionHandler({ action, message }) {
			switch (action.name) {
				case 'replyMessage':
					this.initReplyMessage = message
					return
				case 'editMessage':
					this.initEditMessage = message
					return
				case 'deleteMessage':
					return this.$emit('delete-message', message)
				case 'selectMessages':
					this.selectedMessages = [message]
					this.messageSelectionEnabled = true
					return
				default:
					return this.$emit('message-action-handler', { action, message })
			}
		},
		messageSelectionActionHandler(action) {
			this.$emit('message-selection-action-handler', {
				action,
				messages: this.selectedMessages
			})
			this.resetMessageSelection()
		},
		getBottomScroll(element) {
			const { scrollHeight, clientHeight, scrollTop } = element
			return scrollHeight - clientHeight - scrollTop
		},
		scrollToBottom() {
			setTimeout(() => {
				const element = this.$refs.scrollContainer
				element.classList.add('vac-scroll-smooth')
				element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' })
				setTimeout(() => element.classList.remove('vac-scroll-smooth'))
			}, 50)
		},
		openFile({ message, file }) {
			this.$emit('open-file', { message, file })
		},
		openUserTag(user) {
			this.$emit('open-user-tag', user)
</script>
<template>
	<div class="vac-room-header vac-app-border-b">
		<slot name="room-header" v-bind="{ room, typingUsers, userStatus }">
			<div class="vac-room-wrapper">
				<transition name="vac-slide-up">
					<div v-if="messageSelectionEnabled" class="vac-room-selection">
						<div
							v-for="action in messageSelectionActions"
							:id="action.name"
							:key="action.name"
						>
							<div
								class="vac-selection-button"
								@click="messageSelectionActionHandler(action)"
							>
								{{ action.title }}
								<span class="vac-selection-button-count">
									{{ selectedMessagesTotal }}
								</span>
							</div>
						</div>
						<div
							class="vac-selection-cancel vac-item-clickable"
							@click="$emit('cancel-message-selection')"
						>
							{{ textMessages.CANCEL_SELECT_MESSAGE }}
						</div>
					</div>
				</transition>
				<template
					v-if="!messageSelectionEnabled && messageSelectionAnimationEnded"
				>
					<div
						v-if="!singleRoom"
						class="vac-svg-button vac-toggle-button"
						:class="{ 'vac-rotate-icon': !showRoomsList && !isMobile }"
						@click="$emit('toggle-rooms-list')"
					>
						<slot name="toggle-icon">
							<svg-icon name="toggle" />
						</slot>
					</div>
					<div
						class="vac-info-wrapper"
						:class="{ 'vac-item-clickable': roomInfoEnabled }"
						@click="$emit('room-info')"
					>
						<slot name="room-header-avatar" v-bind="{ room }">
							<div
								v-if="room.avatar"
								class="vac-avatar"
								:style="{ 'background-image': `url('${room.avatar}')` }"
							/>
						</slot>
						<slot
							name="room-header-info"
							v-bind="{ room, typingUsers, userStatus }"
						>
							<div class="vac-text-ellipsis">
								<div class="vac-room-name vac-text-ellipsis">
									{{ room.roomName }}
								</div>
								<div v-if="typingUsers" class="vac-room-info vac-text-ellipsis">
									{{ typingUsers }}
								</div>
								<div v-else class="vac-room-info vac-text-ellipsis">
									{{ userStatus }}
								</div>
							</div>
						</slot>
					</div>
					<slot v-if="room.roomId" name="room-options">
						<div
							v-if="menuActions.length"
							class="vac-svg-button vac-room-options"
							@click="menuOpened = !menuOpened"
						>
							<slot name="menu-icon">
								<svg-icon name="menu" />
							</slot>
						</div>
						<transition v-if="menuActions.length" name="vac-slide-left">
							<div
								v-if="menuOpened"
								v-click-outside="closeMenu"
								class="vac-menu-options"
							>
								<div class="vac-menu-list">
									<div v-for="action in menuActions" :key="action.name">
										<div
											class="vac-menu-item"
											@click="menuActionHandler(action)"
										>
											{{ action.title }}
										</div>
									</div>
								</div>
							</div>
						</transition>
					</slot>
				</template>
			</div>
		</slot>
	</div>
</template>
<script>
import SvgIcon from './components/SvgIcon.vue'
import vClickOutside from './utils/on-click-outside'
import typingText from './utils/typing-text'
export default {
	name: 'RoomHeader',
	components: {
		SvgIcon
	directives: {
		clickOutside: vClickOutside
	props: {
		currentUserId: { type: [String, Number], required: true },
		textMessages: { type: Object, required: true },
		singleRoom: { type: Boolean, required: true },
		showRoomsList: { type: Boolean, required: true },
		isMobile: { type: Boolean, required: true },
		roomInfoEnabled: { type: Boolean, required: true },
		menuActions: { type: Array, required: true },
		room: { type: Object, required: true },
		messageSelectionEnabled: { type: Boolean, required: true },
		messageSelectionActions: { type: Array, required: true },
		selectedMessagesTotal: { type: Number, required: true }
	emits: [
		'toggle-rooms-list',
		'room-info',
		'menu-action-handler',
		'cancel-message-selection',
		'message-selection-action-handler'
	data() {
		return {
			menuOpened: false,
			messageSelectionAnimationEnded: true
	computed: {
		typingUsers() {
			return typingText(this.room, this.currentUserId, this.textMessages)
		},
		userStatus() {
			if (!this.room.users || this.room.users.length !== 2) return
			const user = this.room.users.find(u => u._id !== this.currentUserId)
			if (!user.status) return
			let text = ''
			if (user.status.state === 'online') {
				text = this.textMessages.IS_ONLINE
			} else if (user.status.lastChanged) {
				text = this.textMessages.LAST_SEEN + user.status.lastChanged
			}
			return text
	watch: {
		messageSelectionEnabled(val) {
			if (val) {
				this.messageSelectionAnimationEnded = false
			} else {
				setTimeout(() => {
					this.messageSelectionAnimationEnded = true
				}, 300)
			}
	methods: {
		menuActionHandler(action) {
			this.closeMenu()
			this.$emit('menu-action-handler', action)
		},
		closeMenu() {
			this.menuOpened = false
		},
		messageSelectionActionHandler(action) {
			this.$emit('message-selection-action-handler', action)
</script>
<template>
	<div class="vac-room-container">
		<slot name="room-list-item" v-bind="{ room }">
			<slot name="room-list-avatar" v-bind="{ room }">
				<div
					v-if="room.avatar"
					class="vac-avatar"
					:style="{ 'background-image': `url('${room.avatar}')` }"
				/>
			</slot>
			<div class="vac-name-container vac-text-ellipsis">
				<div class="vac-title-container">
					<div
						v-if="userStatus"
						class="vac-state-circle"
						:class="{ 'vac-state-online': userStatus === 'online' }"
					/>
					<div class="vac-room-name vac-text-ellipsis">
						{{ room.roomName }}
					</div>
					<div v-if="room.lastMessage" class="vac-text-date">
						{{ room.lastMessage.timestamp }}
					</div>
				</div>
				<div
					class="vac-text-last"
					:class="{
						'vac-message-new':
							room.lastMessage && room.lastMessage.new && !typingUsers
					}"
				>
					<span v-if="isMessageCheckmarkVisible">
						<slot name="checkmark-icon" v-bind="{ message: room.lastMessage }">
							<svg-icon
								:name="
									room.lastMessage.distributed
										? 'double-checkmark'
										: 'checkmark'
								"
								:param="room.lastMessage.seen ? 'seen' : ''"
								class="vac-icon-check"
							/>
						</slot>
					</span>
					<div
						v-if="room.lastMessage && !room.lastMessage.deleted && isAudio"
						class="vac-text-ellipsis"
					>
						<slot name="microphone-icon">
							<svg-icon name="microphone" class="vac-icon-microphone" />
						</slot>
						{{ formattedDuration }}
					</div>
					<format-message
						v-else-if="room.lastMessage"
						:content="getLastMessage"
						:deleted="!!room.lastMessage.deleted && !typingUsers"
						:users="room.users"
						:linkify="false"
						:text-formatting="textFormatting"
						:link-options="linkOptions"
						:single-line="true"
					>
						<template #deleted-icon="data">
							<slot name="deleted-icon" v-bind="data" />
						</template>
					</format-message>
					<div
						v-if="!room.lastMessage && typingUsers"
						class="vac-text-ellipsis"
					>
						{{ typingUsers }}
					</div>
					<div class="vac-room-options-container">
						<div
							v-if="room.unreadCount"
							class="vac-badge-counter vac-room-badge"
						>
							{{ room.unreadCount }}
						</div>
						<slot name="room-list-options" v-bind="{ room }">
							<div
								v-if="roomActions.length"
								class="vac-svg-button vac-list-room-options"
								@click.stop="roomMenuOpened = room.roomId"
							>
								<slot name="room-list-options-icon">
									<svg-icon name="dropdown" param="room" />
								</slot>
							</div>
							<transition v-if="roomActions.length" name="vac-slide-left">
								<div
									v-if="roomMenuOpened === room.roomId"
									v-click-outside="closeRoomMenu"
									class="vac-menu-options"
								>
									<div class="vac-menu-list">
										<div v-for="action in roomActions" :key="action.name">
											<div
												class="vac-menu-item"
												@click.stop="roomActionHandler(action)"
											>
												{{ action.title }}
											</div>
										</div>
									</div>
								</div>
							</transition>
						</slot>
					</div>
				</div>
			</div>
		</slot>
	</div>
</template>
<script>
import SvgIcon from '../components/SvgIcon.vue'
import FormatMessage from '../components/FormatMessage.vue'
import vClickOutside from '../utils/on-click-outside'
import typingText from '../utils/typing-text'
// const { isAudioFile } = require('../utils/media-file')
import { isAudioFile } from '../utils/media-file'
export default {
	name: 'RoomsContent',
	components: {
		SvgIcon,
		FormatMessage
	directives: {
		clickOutside: vClickOutside
	props: {
		currentUserId: { type: [String, Number], required: true },
		room: { type: Object, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		textMessages: { type: Object, required: true },
		roomActions: { type: Array, required: true }
	emits: ['room-action-handler'],
	data() {
		return {
			roomMenuOpened: null
	computed: {
		getLastMessage() {
			const isTyping = this.typingUsers
			if (isTyping) return isTyping
			const content = this.room.lastMessage.deleted
				? this.textMessages.MESSAGE_DELETED
				: this.room.lastMessage.content
			if (this.room.users.length <= 2) {
				return content
			}
			const user = this.room.users.find(
				user => user._id === this.room.lastMessage.senderId
			)
			if (this.room.lastMessage.username) {
				return `${this.room.lastMessage.username} - ${content}`
			} else if (!user || user._id === this.currentUserId) {
				return content
			}
			return `${user.username} - ${content}`
		},
		userStatus() {
			if (!this.room.users || this.room.users.length !== 2) return
			const user = this.room.users.find(u => u._id !== this.currentUserId)
			if (user && user.status) return user.status.state
			return null
		},
		typingUsers() {
			return typingText(this.room, this.currentUserId, this.textMessages)
		},
		isMessageCheckmarkVisible() {
			return (
				!this.typingUsers &&
				this.room.lastMessage &&
				!this.room.lastMessage.deleted &&
				this.room.lastMessage.senderId === this.currentUserId &&
				(this.room.lastMessage.saved ||
					this.room.lastMessage.distributed ||
					this.room.lastMessage.seen)
			)
		},
		formattedDuration() {
			const file = this.room.lastMessage.files[0]
			if (!file.duration) {
				return `${file.name}.${file.extension}`
			}
			let s = Math.floor(file.duration)
			return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s
		},
		isAudio() {
			return this.room.lastMessage.files
				? isAudioFile(this.room.lastMessage.files[0])
				: false
	methods: {
		roomActionHandler(action) {
			this.closeRoomMenu()
			this.$emit('room-action-handler', { action, roomId: this.room.roomId })
		},
		closeRoomMenu() {
			this.roomMenuOpened = null
</script>
