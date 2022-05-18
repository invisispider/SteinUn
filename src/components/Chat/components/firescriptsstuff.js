<template>
	<transition name="vac-fade-spinner" appear>
		<div ref="progress" class="vac-progress-wrapper">
			<svg :height="radius * 2" :width="radius * 2">
				<circle
					stroke="rgba(255, 255, 255, 0.7)"
					:stroke-dasharray="circumference + ' ' + circumference"
					:style="{
						strokeDashoffset: strokeDashoffset,
						strokeLinecap: 'round'
					}"
					:stroke-width="stroke"
					fill="transparent"
					:r="normalizedRadius"
					:cx="radius"
					:cy="radius"
				/>
			</svg>
			<div
				class="vac-progress-content"
				:style="{
					height: radius * 2 - 19 + 'px',
					width: radius * 2 - 19 + 'px'
				}"
			>
				<div class="vac-progress-text">
					{{ progress }}<span class="vac-progress-pourcent">%</span>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'ProgressBar',
	props: {
		progress: { type: Number, default: 0 }
	data() {
		const radius = 35
		const stroke = 4
		const normalizedRadius = radius - stroke * 2
		const circumference = normalizedRadius * 2 * Math.PI
		return {
			radius,
			stroke,
			normalizedRadius,
			circumference
	computed: {
		strokeDashoffset() {
			return this.circumference - (this.progress / 100) * this.circumference
</script>
ProgressBar.vue
<template>
	<transition name="vac-fade-spinner" appear>
		<div
			v-if="show"
			class="vac-loader-wrapper"
			:class="{
				'vac-container-center': !infinite,
				'vac-container-top': infinite
			}"
			<slot name="spinner-icon" v-bind="{ show, infinite }">
				<div id="vac-circle" />
			</slot>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'Loader',
	props: {
		show: { type: Boolean, default: false },
		infinite: { type: Boolean, default: false }
</script>
Loader.vue
FormatMessage.vue
SvgIcon.vue
ProgressBar.vue
Loader.vue
FormatMessage.vue
FormatMessage.vue
Loader.vue
SvgIcon.vue
ProgressBar.vue
components
export default (room, currentUserId, textMessages) => {
	if (room.typingUsers && room.typingUsers.length) {
		const typingUsers = room.users.filter(user => {
			if (user._id === currentUserId) return
			if (room.typingUsers.indexOf(user._id) === -1) return
			if (user.status && user.status.state === 'offline') return
			return true
		})
		if (!typingUsers.length) return
		if (room.users.length === 2) {
			return textMessages.IS_TYPING
		} else {
			return (
				typingUsers.map(user => user.username).join(', ') +
				' ' +
				textMessages.IS_TYPING
			)
typing-text.js
recorder.js
on-click-outside.js
// Credits to https://github.com/grishkovelli/vue-audio-recorder
let lamejs
try {
	lamejs = require('lamejs')
} catch (_) {
	lamejs = { missing: true }
const { Mp3Encoder } = lamejs
export default class {
	constructor(config) {
		if (lamejs.missing) {
			throw new Error(
				'You must add lamejs in your dependencies to use the audio recorder. Please run "npm install lamejs --save"'
			)
		this.bitRate = config.bitRate
		this.sampleRate = config.sampleRate
		this.dataBuffer = []
		this.encoder = new Mp3Encoder(1, this.sampleRate, this.bitRate)
	encode(arrayBuffer) {
		const maxSamples = 1152
		const samples = this._convertBuffer(arrayBuffer)
		let remaining = samples.length
		for (let i = 0; remaining >= 0; i += maxSamples) {
			const left = samples.subarray(i, i + maxSamples)
			const buffer = this.encoder.encodeBuffer(left)
			this.dataBuffer.push(new Int8Array(buffer))
			remaining -= maxSamples
	finish() {
		this.dataBuffer.push(this.encoder.flush())
		const blob = new Blob(this.dataBuffer, { type: 'audio/mp3' })
		this.dataBuffer = []
		return {
			id: Date.now(),
			blob: blob,
			url: URL.createObjectURL(blob)
	_floatTo16BitPCM(input, output) {
		for (let i = 0; i < input.length; i++) {
			const s = Math.max(-1, Math.min(1, input[i]))
			output[i] = s < 0 ? s * 0x8000 : s * 0x7fff
	_convertBuffer(arrayBuffer) {
		const data = new Float32Array(arrayBuffer)
		const out = new Int16Array(arrayBuffer.length)
		this._floatTo16BitPCM(data, out)
		return out
mp3-encoder.js
mobile-detection.js
import { IMAGE_TYPES, VIDEO_TYPES, AUDIO_TYPES } from './constants'
function checkMediaType(types, file) {
	if (!file || !file.type) return
	return types.some(t => file.type.toLowerCase().includes(t))
export function isImageFile(file) {
	return checkMediaType(IMAGE_TYPES, file)
export function isVideoFile(file) {
	return checkMediaType(VIDEO_TYPES, file)
export function isImageVideoFile(file) {
	return checkMediaType(IMAGE_TYPES, file) || checkMediaType(VIDEO_TYPES, file)
export function isAudioFile(file) {
	return checkMediaType(AUDIO_TYPES, file)
media-file.js
format-string.js
export default (items, prop, val, startsWith = false) => {
	if (!val || val === '') return items
	return items.filter(v => {
		if (startsWith) return formatString(v[prop]).startsWith(formatString(val))
		return formatString(v[prop]).includes(formatString(val))
function formatString(string) {
	return string
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
filter-items.js
export function roomsValidation(obj) {
	const roomsValidate = [
		{ key: 'roomId', type: ['string', 'number'] },
		{ key: 'roomName', type: ['string'] },
		{ key: 'users', type: ['array'] }
	const validate = (obj, props) => {
		return props.every(prop => {
			let validType = false
			if (prop.type[0] === 'array' && Array.isArray(obj[prop.key])) {
				validType = true
			} else if (prop.type.find(t => t === typeof obj[prop.key])) {
				validType = true
			}
			return validType && checkObjectValid(obj, prop.key)
		})
	if (!validate(obj, roomsValidate)) {
		throw new Error(
			'Rooms object is not valid! Must contain roomId[String, Number], roomName[String] and users[Array]'
export function participantsValidation(obj) {
	const participantsValidate = [
		{ key: '_id', type: ['string', 'number'] },
		{ key: 'username', type: ['string'] }
	const validate = (obj, props) => {
		return props.every(prop => {
			const validType = prop.type.find(t => t === typeof obj[prop.key])
			return validType && checkObjectValid(obj, prop.key)
		})
	if (!validate(obj, participantsValidate)) {
		throw new Error(
			'Participants object is not valid! Must contain _id[String, Number] and username[String]'
export function messagesValidation(obj) {
	const messagesValidate = [
		{ key: '_id', type: ['string', 'number'] },
		{ key: 'content', type: ['string', 'number'] },
		{ key: 'senderId', type: ['string', 'number'] }
	const validate = (obj, props) => {
		return props.every(prop => {
			const validType = prop.type.find(t => t === typeof obj[prop.key])
			return validType && checkObjectValid(obj, prop.key)
		})
	if (!validate(obj, messagesValidate)) {
		throw new Error(
			'Messages object is not valid! Must contain _id[String, Number], content[String, Number] and senderId[String, Number]'
function checkObjectValid(obj, key) {
	return (
		Object.prototype.hasOwnProperty.call(obj, key) &&
		obj[key] !== null &&
		obj[key] !== undefined
data-validation.js
export const IMAGE_TYPES = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif']
export const VIDEO_TYPES = ['mp4', 'video/ogg', 'webm', 'quicktime']
export const AUDIO_TYPES = ['mp3', 'audio/ogg', 'wav', 'mpeg']
constants.js
const zeroPad = (num, pad) => {
	return String(num).padStart(pad, '0')
const isSameDay = (d1, d2) => {
	return (
		d1.getFullYear() === d2.getFullYear() &&
		d1.getMonth() === d2.getMonth() &&
		d1.getDate() === d2.getDate()
export const parseTimestamp = (timestamp, format = '') => {
	if (!timestamp) return
	const date = timestamp.seconds
		? new Date(timestamp.seconds * 1000)
		: timestamp
	if (format === 'HH:mm') {
		return `${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
	} else if (format === 'DD MMMM YYYY') {
		const options = { month: 'long', year: 'numeric', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
	} else if (format === 'DD/MM/YY') {
		const options = { month: 'numeric', year: 'numeric', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
	} else if (format === 'DD MMMM, HH:mm') {
		const options = { month: 'long', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(
			date
		)}, ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
	return date
export const formatTimestamp = (date, timestamp) => {
	const timestampFormat = isSameDay(date, new Date()) ? 'HH:mm' : 'DD/MM/YY'
	const result = parseTimestamp(timestamp, timestampFormat)
	return timestampFormat === 'HH:mm' ? `Today, ${result}` : result
dates.js[


import { storage } from '@/services/firebaseconfig'
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytesResumable
} from 'firebase/storage'
const FILES_PATH = 'chatFiles'
const AVATARS_PATH = 	'avatars'
const SFX_PATH = 'sounds'
export const getSoundUrl = async (fileName) => await getDownloadURL(ref(storage, `${SFX_PATH}/${fileName}`))
export const getAvatarUrl = async (fileName) => await getDownloadURL(ref(storage, `${AVATARS_PATH}/${fileName}`))
const fileRef = (currentUserId, messageId, fileName) => {
	return ref(storage, `${FILES_PATH}/${currentUserId}/${messageId}/${fileName}`)
export const deleteFile = (currentUserId, messageId, file) => {
	return deleteObject(
		fileRef(
			currentUserId,
			messageId,
			`${file.name}.${file.extension || file.type}`
export const getFileDownloadUrl = ref => {
	return getDownloadURL(ref)
export const uploadFileTask = (currentUserId, messageId, file, type) => {
	const uploadFileRef = fileRef(
		currentUserId,
		messageId,
		`${file.name}.${type}`
	return uploadBytesResumable(uploadFileRef, file.blob, {
		contentType: type
export const listenUploadImageProgress = (
	currentUserId,
	messageId,
	file,
	type,
	callback,
	error,
	success
) => {
	const uploadTask = uploadFileTask(currentUserId, messageId, file, type)
	uploadTask.on(
		'state_changed',
		snap => {
			const progress = Math.round(
				(snap.bytesTransferred / snap.totalBytes) * 100
			)
			callback(progress)
		},
		_error => {
			error(_error)
		},
		async () => {
			const url = await getFileDownloadUrl(uploadTask.snapshot.ref)
			success(url)
storage.js
2!L&\b
firestore.js
import { realtimeDb } from '@/services/firebaseconfig'
import {
	onDisconnect,
	onValue,
	ref,
	serverTimestamp,
	set
} from 'firebase/database'
export const firebaseListener = onValue
export const userStatusRef = userId => {
	return ref(realtimeDb, '/status/' + userId)
export const updateUserOnlineStatus = currentUserId => {
	const isOfflineData = {
		state: 'offline',
		lastChanged: serverTimestamp()
	const isOnlineData = {
		state: 'online',
		lastChanged: serverTimestamp()
	const connectedRef = ref(realtimeDb, '.info/connected')
	onValue(connectedRef, snap => {
		if (snap.val() === true) {
			onDisconnect(userStatusRef(currentUserId))
				.set(isOfflineData)
				.then(() => {
					set(userStatusRef(currentUserId), isOnlineData)
				})
