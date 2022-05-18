export const defaultThemeStyles = {
	light: {
		general: {
			color: '#0a0a0a',
			colorButtonClear: '#1976d2',
			colorButton: '#fff',
			backgroundColorButton: '#1976d2',
			backgroundInput: '#fff',
			colorPlaceholder: '#9ca6af',
			colorCaret: '#1976d2',
			colorSpinner: '#333',
			borderStyle: '1px solid #e1e4e8',
			backgroundScrollIcon: '#fff'
		},
		container: {
			border: 'none',
			borderRadius: '4px',
			boxShadow:
				'0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
		},
		header: {
			background: '#fff',
			colorRoomName: '#0a0a0a',
			colorRoomInfo: '#9ca6af'
		},
		footer: {
			background: '#f8f9fa',
			borderStyleInput: '1px solid #e1e4e8',
			borderInputSelected: '#1976d2',
			backgroundReply: '#e5e5e6',
			backgroundTagActive: '#e5e5e6',
			backgroundTag: '#f8f9fa'
		},
		content: {
			background: '#f8f9fa'
		},
		sidemenu: {
			background: '#fff',
			backgroundHover: '#f6f6f6',
			backgroundActive: '#e5effa',
			colorActive: '#1976d2',
			borderColorSearch: '#e1e5e8'
		},
		dropdown: {
			background: '#fff',
			backgroundHover: '#f6f6f6'
		},
		message: {
			background: '#fff',
			backgroundMe: '#ccf2cf',
			color: '#0a0a0a',
			colorStarted: '#9ca6af',
			backgroundDeleted: '#dadfe2',
			backgroundSelected: '#c2dcf2',
			colorDeleted: '#757e85',
			colorUsername: '#9ca6af',
			colorTimestamp: '#828c94',
			backgroundDate: '#e5effa',
			colorDate: '#505a62',
			backgroundSystem: '#e5effa',
			colorSystem: '#505a62',
			backgroundMedia: 'rgba(0, 0, 0, 0.15)',
			backgroundReply: 'rgba(0, 0, 0, 0.08)',
			colorReplyUsername: '#0a0a0a',
			colorReply: '#6e6e6e',
			colorTag: '#0d579c',
			backgroundImage: '#ddd',
			colorNewMessages: '#1976d2',
			backgroundScrollCounter: '#0696c7',
			colorScrollCounter: '#fff',
			backgroundAudioRecord: '#eb4034',
			backgroundAudioLine: 'rgba(0, 0, 0, 0.15)',
			backgroundAudioProgress: '#455247',
			backgroundAudioProgressSelector: '#455247',
			colorFileExtension: '#757e85'
		},
		markdown: {
			background: 'rgba(239, 239, 239, 0.7)',
			border: 'rgba(212, 212, 212, 0.9)',
			color: '#e01e5a',
			colorMulti: '#0a0a0a'
		},
		room: {
			colorUsername: '#0a0a0a',
			colorMessage: '#67717a',
			colorTimestamp: '#a2aeb8',
			colorStateOnline: '#4caf50',
			colorStateOffline: '#9ca6af',
			backgroundCounterBadge: '#0696c7',
			colorCounterBadge: '#fff'
		},
		icons: {
			search: '#9ca6af',
			add: '#1976d2',
			toggle: '#0a0a0a',
			menu: '#0a0a0a',
			close: '#9ca6af',
			closeImage: '#fff',
			file: '#1976d2',
			paperclip: '#1976d2',
			closeOutline: '#000',
			closePreview: '#fff',
			send: '#1976d2',
			sendDisabled: '#9ca6af',
			document: '#1976d2',
			pencil: '#9e9e9e',
			checkmark: '#9e9e9e',
			checkmarkSeen: '#0696c7',
			eye: '#fff',
			dropdownMessage: '#fff',
			dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
			dropdownRoom: '#9e9e9e',
			dropdownScroll: '#0a0a0a',
			microphone: '#1976d2',
			audioPlay: '#455247',
			audioPause: '#455247',
			audioCancel: '#eb4034',
			audioConfirm: '#1ba65b'
	dark: {
		general: {
			color: '#fff',
			colorButtonClear: '#fff',
			colorButton: '#fff',
			backgroundColorButton: '#1976d2',
			backgroundInput: '#202223',
			colorPlaceholder: '#596269',
			colorCaret: '#fff',
			colorSpinner: '#fff',
			borderStyle: 'none',
			backgroundScrollIcon: '#fff'
		},
		container: {
			border: 'none',
			borderRadius: '4px',
			boxShadow:
				'0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
		},
		header: {
			background: '#181a1b',
			colorRoomName: '#fff',
			colorRoomInfo: '#9ca6af'
		},
		footer: {
			background: '#131415',
			borderStyleInput: 'none',
			borderInputSelected: '#1976d2',
			backgroundReply: '#1b1c1c',
			backgroundTagActive: '#1b1c1c',
			backgroundTag: '#131415'
		},
		content: {
			background: '#131415'
		},
		sidemenu: {
			background: '#181a1b',
			backgroundHover: '#202224',
			backgroundActive: '#151617',
			colorActive: '#fff',
			borderColorSearch: '#181a1b'
		},
		dropdown: {
			background: '#2a2c33',
			backgroundHover: '#26282e'
		},
		message: {
			background: '#22242a',
			backgroundMe: '#1f7e80',
			color: '#fff',
			colorStarted: '#9ca6af',
			backgroundDeleted: '#1b1c21',
			backgroundSelected: '#c2dcf2',
			colorDeleted: '#a2a5a8',
			colorUsername: '#b3bac9',
			colorTimestamp: '#ebedf2',
			backgroundDate: 'rgba(0, 0, 0, 0.3)',
			colorDate: '#bec5cc',
			backgroundSystem: 'rgba(0, 0, 0, 0.3)',
			colorSystem: '#bec5cc',
			backgroundMedia: 'rgba(0, 0, 0, 0.18)',
			backgroundReply: 'rgba(0, 0, 0, 0.18)',
			colorReplyUsername: '#fff',
			colorReply: '#d6d6d6',
			colorTag: '#f0c60a',
			backgroundImage: '#ddd',
			colorNewMessages: '#fff',
			backgroundScrollCounter: '#1976d2',
			colorScrollCounter: '#fff',
			backgroundAudioRecord: '#eb4034',
			backgroundAudioLine: 'rgba(255, 255, 255, 0.15)',
			backgroundAudioProgress: '#b7d4d3',
			backgroundAudioProgressSelector: '#b7d4d3',
			colorFileExtension: '#a2a5a8'
		},
		markdown: {
			background: 'rgba(239, 239, 239, 0.7)',
			border: 'rgba(212, 212, 212, 0.9)',
			color: '#e01e5a',
			colorMulti: '#0a0a0a'
		},
		room: {
			colorUsername: '#fff',
			colorMessage: '#6c7278',
			colorTimestamp: '#6c7278',
			colorStateOnline: '#4caf50',
			colorStateOffline: '#596269',
			backgroundCounterBadge: '#1976d2',
			colorCounterBadge: '#fff'
		},
		icons: {
			search: '#596269',
			add: '#fff',
			toggle: '#fff',
			menu: '#fff',
			close: '#9ca6af',
			closeImage: '#fff',
			file: '#1976d2',
			paperclip: '#fff',
			closeOutline: '#fff',
			closePreview: '#fff',
			send: '#fff',
			sendDisabled: '#646a70',
			document: '#1976d2',
			pencil: '#ebedf2',
			checkmark: '#ebedf2',
			checkmarkSeen: '#f0d90a',
			eye: '#fff',
			dropdownMessage: '#fff',
			dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
			dropdownRoom: '#fff',
			dropdownScroll: '#0a0a0a',
			microphone: '#fff',
			audioPlay: '#b7d4d3',
			audioPause: '#b7d4d3',
			audioCancel: '#eb4034',
			audioConfirm: '#1ba65b'
export const cssThemeVars = ({
	general,
	container,
	header,
	footer,
	sidemenu,
	content,
	dropdown,
	message,
	markdown,
	room,
	icons
}) => {
	return {
		// general
		'--chat-color': general.color,
		'--chat-color-button-clear': general.colorButtonClear,
		'--chat-color-button': general.colorButton,
		'--chat-bg-color-button': general.backgroundColorButton,
		'--chat-bg-color-input': general.backgroundInput,
		'--chat-color-spinner': general.colorSpinner,
		'--chat-color-placeholder': general.colorPlaceholder,
		'--chat-color-caret': general.colorCaret,
		'--chat-border-style': general.borderStyle,
		'--chat-bg-scroll-icon': general.backgroundScrollIcon,
		// container
		'--chat-container-border': container.border,
		'--chat-container-border-radius': container.borderRadius,
		'--chat-container-box-shadow': container.boxShadow,
		// header
		'--chat-header-bg-color': header.background,
		'--chat-header-color-name': header.colorRoomName,
		'--chat-header-color-info': header.colorRoomInfo,
		// footer
		'--chat-footer-bg-color': footer.background,
		'--chat-border-style-input': footer.borderStyleInput,
		'--chat-border-color-input-selected': footer.borderInputSelected,
		'--chat-footer-bg-color-reply': footer.backgroundReply,
		'--chat-footer-bg-color-tag-active': footer.backgroundTagActive,
		'--chat-footer-bg-color-tag': footer.backgroundTag,
		// content
		'--chat-content-bg-color': content.background,
		// sidemenu
		'--chat-sidemenu-bg-color': sidemenu.background,
		'--chat-sidemenu-bg-color-hover': sidemenu.backgroundHover,
		'--chat-sidemenu-bg-color-active': sidemenu.backgroundActive,
		'--chat-sidemenu-color-active': sidemenu.colorActive,
		'--chat-sidemenu-border-color-search': sidemenu.borderColorSearch,
		// dropdown
		'--chat-dropdown-bg-color': dropdown.background,
		'--chat-dropdown-bg-color-hover': dropdown.backgroundHover,
		// message
		'--chat-message-bg-color': message.background,
		'--chat-message-bg-color-me': message.backgroundMe,
		'--chat-message-color-started': message.colorStarted,
		'--chat-message-bg-color-deleted': message.backgroundDeleted,
		'--chat-message-bg-color-selected': message.backgroundSelected,
		'--chat-message-color-deleted': message.colorDeleted,
		'--chat-message-color-username': message.colorUsername,
		'--chat-message-color-timestamp': message.colorTimestamp,
		'--chat-message-bg-color-date': message.backgroundDate,
		'--chat-message-color-date': message.colorDate,
		'--chat-message-bg-color-system': message.backgroundSystem,
		'--chat-message-color-system': message.colorSystem,
		'--chat-message-color': message.color,
		'--chat-message-bg-color-media': message.backgroundMedia,
		'--chat-message-bg-color-reply': message.backgroundReply,
		'--chat-message-color-reply-username': message.colorReplyUsername,
		'--chat-message-color-reply-content': message.colorReply,
		'--chat-message-color-tag': message.colorTag,
		'--chat-message-bg-color-image': message.backgroundImage,
		'--chat-message-color-new-messages': message.colorNewMessages,
		'--chat-message-bg-color-scroll-counter': message.backgroundScrollCounter,
		'--chat-message-color-scroll-counter': message.colorScrollCounter,
		'--chat-message-bg-color-audio-record': message.backgroundAudioRecord,
		'--chat-message-bg-color-audio-line': message.backgroundAudioLine,
		'--chat-message-bg-color-audio-progress': message.backgroundAudioProgress,
		'--chat-message-bg-color-audio-progress-selector':
			message.backgroundAudioProgressSelector,
		'--chat-message-color-file-extension': message.colorFileExtension,
		// markdown
		'--chat-markdown-bg': markdown.background,
		'--chat-markdown-border': markdown.border,
		'--chat-markdown-color': markdown.color,
		'--chat-markdown-color-multi': markdown.colorMulti,
		// room
		'--chat-room-color-username': room.colorUsername,
		'--chat-room-color-message': room.colorMessage,
		'--chat-room-color-timestamp': room.colorTimestamp,
		'--chat-room-color-online': room.colorStateOnline,
		'--chat-room-color-offline': room.colorStateOffline,
		'--chat-room-bg-color-badge': room.backgroundCounterBadge,
		'--chat-room-color-badge': room.colorCounterBadge,
		// icons
		'--chat-icon-color-search': icons.search,
		'--chat-icon-color-add': icons.add,
		'--chat-icon-color-toggle': icons.toggle,
		'--chat-icon-color-menu': icons.menu,
		'--chat-icon-color-close': icons.close,
		'--chat-icon-color-close-image': icons.closeImage,
		'--chat-icon-color-file': icons.file,
		'--chat-icon-color-paperclip': icons.paperclip,
		'--chat-icon-color-close-outline': icons.closeOutline,
		'--chat-icon-color-close-preview': icons.closePreview,
		'--chat-icon-color-send': icons.send,
		'--chat-icon-color-send-disabled': icons.sendDisabled,
		'--chat-icon-color-document': icons.document,
		'--chat-icon-color-pencil': icons.pencil,
		'--chat-icon-color-checkmark': icons.checkmark,
		'--chat-icon-color-checkmark-seen': icons.checkmarkSeen,
		'--chat-icon-color-eye': icons.eye,
		'--chat-icon-color-dropdown-message': icons.dropdownMessage,
		'--chat-icon-bg-dropdown-message': icons.dropdownMessageBackground,
		'--chat-icon-color-dropdown-room': icons.dropdownRoom,
		'--chat-icon-color-dropdown-scroll': icons.dropdownScroll,
		'--chat-icon-color-microphone': icons.microphone,
		'--chat-icon-color-audio-play': icons.audioPlay,
		'--chat-icon-color-audio-pause': icons.audioPause,
		'--chat-icon-color-audio-cancel': icons.audioCancel,
		'--chat-icon-color-audio-confirm': icons.audioConfirm
<script setup>
</script>
<template>
  <div>
    <button @click="fetchRooms">Fetch Rooms</button>
    <button @click="resetData">
      Clear Data
    </button>
    <button :disabled="state.updatingData" @click="addData">
      Add Data
    </button>
  </div>
  <span
    v-if="showOptions"
    class="user-logged"
    :class="{ 'user-logged-dark': state.theme === 'dark' }"
    Logged as
  </span>
  <div v-if="showOptions">
    <h1 :key="state.currentUserId"
      style="color: white;" :value="state.currentUserId">
      {{ state.username }}
    </h1>
  </div>
  <div class="button-theme">
    <button class="button-light" @click="state.theme = 'light'">
      Light
    </button>
    <button class="button-dark" @click="state.theme = 'dark'">
      Dark
    </button>
    <button class="button-github">
      <a @click.prevent>
        <img src="@/assets/github.svg" />
      </a>
    </button>
  </div>
  <div class="version-container">{{state.devMessage||"v~1.1.0"}}</div>
  <form v-if="state.addNewRoom" @submit.prevent="createRoom">
    <input v-model="state.addRoomUsername" type="text" placeholder="Add username" />
    <button type="submit" :disabled="state.disableForm || !state.addRoomUsername">
      Create Room
    </button>
    <button class="button-cancel" @click="state.addNewRoom = false">
      Cancel
    </button>
  </form>
  <form v-if="state.inviteRoomId" @submit.prevent="addRoomUser">
    <input v-model="state.invitedUsername" type="text" placeholder="Add username" />
    <button type="submit" :disabled="state.disableForm || !state.invitedUsername">
      Add User
    </button>
    <button class="button-cancel" @click="state.inviteRoomId = null">
      Cancel
    </button>
  </form>
  <form v-if="state.removeRoomId" @submit.prevent="state.deleteRoomUser">
    <select v-model="state.removeUserId">
      <option default value="">
        Select User
      </option>
      <option v-for="user in state.removeUsers" :key="state.currentUserId" :value="state.currentUserId">
        {{ state.username }}
      </option>
    </select>
    <button type="submit" :disabled="state.disableForm || !state.removeUserId">
      Remove User
    </button>
    <button class="button-cancel" @click="state.removeRoomId = null">
      Cancel
    </button>
  </form>
</template>
<script setup></script>
<template>
	<div class="zdocs-container">
		<div class="zdocs-header">
			<h3>
				Why is Garfield so popular?
			</h3>
			<h4>
				He's got one thing in common with everyone else. A case of the Mondays. So, if one seventh of life is a disease, why don't we <em>do</em> something about it?
			</h4>
			<h2>
				Welcome to zenCalendar.
			</h2>
		</div>
		<div class="article">
			<div class="col">
				<h4>
					I began to ask myself, why is there Monday?
					Because the Calendar says so.
				</h4>
				<p>
					Oh well, nothing to be done about that. Surely, there's some logical reason why the week is divided up into seven days, just like the span of Creation described in the Holy Bible.
				</p>
				<p>
					The seven day week is utterly arbitrary and meaningless. The imperial Romans and Greeks and Christians have created the week this way so that you work so much that you are unhappy one seventh of the time.
				</p>
				<h3>
					And once you see it, there's no turning back.
				</h3>
				<h4>
					zenDate "12022, Tues, Flowers 6 Tues"
				</h4>
				<h3>
					Which days do <em>You</em> want to keep? Definitely the whole weekend, and the latter half of the workweek isn't so bad, but after long consideration, if I had to choose between Tuesday and Wednesday (the so-called "Hump-Day"), I've chosen Tuesday.
				</h3>
				<p>
					If you are a busy person as most professionals are, you can work "more than full-time" while still doing a similar hourly schedule by working four out of the five days of the week. If you are getting stressed and need more free time, you can have a three day work week with a full weekend. This way, the schedule doesn't tell you how much to work, it gives you the option and the power to choose for yourself whether you feel normal, a little behind, or a bit ahead of the curve.
				</p>
				<p>
					Again, there was no reason for seven-day weeks, and five-day weeks are actually easier to use. For example, we generally consider the year to be 365 days, even though this is slightly off from the actual revolutionary period of the Earth. Small adjustments are made every four years, and I don't see any reason to be sneaky about it.
				</p>
				<h4>
					How many days should we have in a year?
				</h4>
				<p>
					Well, I think that 360 happens to be close to something you could lay out on a circle, so lets have that many days a year. Just like before, whatever days we don't want in the year, we just "leap" them. In practice, that means that 4-6 days are spent each year, after the 360th, and prior to the 1st. This period is called newZen. It can be thought of as a holiday week, as many cultures already do at the new year. In this system, it is encouraged to use this time to clear yourself of the baggage of the preceding year, to gear yourself towards the new year, to evolve forward and come into the future yourself. This is the purpose of newZen. While this idea may sound exotic, it is actually the basic of the Egyptian calendar, which preceded the Gregorian Calendar and was influential to it. They chose 360 days with a Festival period because it seemed logical. In my own personal journey, I arrived at exactly the same solution before I even knew this was so.
				</p>
				<p>
					Let us now conceptualize the Habit. A habit is a forty-five day period consisting of nine, as we promised, five-day weeks. The number forty-five was chosen to reflect the belief that it takes about forty-five days to form a habit. This is the length of time it takes to establish a relationship, to quit a vice, to find a job, etc.
					The Habit sounds okay, but what about months? Well, months are really, really complicated and confusing. For one thing, they are all different amounts of days, for no reason. As I say, all Habits are forty-five days long and there are eight of them a year. That's simple. Do you even know how many days there are in each month? Do you have a poem memorized for that? Are you kidding me? We are wasting our children's time. Who was Februarius? Any idea? Somebody trying to control your life? Let's get rid of it. What to name the Habits, if not dead people lost to time? And what's up with Holidays? They are all over the place - they don't even happen the same day every year!
				</p>
				<p>
					In zenCalendar, each Habit is named for its Holiday, which is a general holiday that is open-source and can be used either for the default purpose, or whatever observances you may have in your own tradition. For these Holidays, I have given general, secular names, as I don't want to push a single tradition or mythology on the rest of the world, as the current system does. But, for example, it is perfectly fine to call your Feast day Thanksgiving, or Christmas, or both. It's a feast.
				</p>
				<p>
					This is not in any way to discourage any traditional observances, rituals or practices. It is only to set a public tone in which all people can celebrate together in spite of their different views. The newZen is everybody's newZen, and we are talking about simplicity, not necessarily Buddhism. Generic secular is the default setting, but it doesn't really affect anything. My selections for the Holiday names were given in a manner similar to how George Lucas conceived of the force; I took what Holidays generally are and called them that, so these are more or less mono-myth Holidays, and can be used for any purpose while recommending a particular set of topical themes. A person can spend the Struggles with their family, they can spend it drinking and crying, they can spend it fasting and praying, they can spend it partying. It's just called the Struggles.
				</p>
				<p>
					The seasons which we have are sensible, and will be kept. In fact, more so. You may have noted that "months" are archaically tied to the moon cycles. The main problem with this approach is that, while it would be nice to track the moon (and thence understand the feminine and the surf better), the moon's orbital period is really basically not compatible with the length of the year. So, you really either have to pick one, or actually do it right and make an extremely elaborate model. This is why there are no months, and the period shall remain mysterious, as is the common preference. Without moon months, we can now understand why eight forty-five day Habits work so well. Recall that a right angle is 90 degrees, we have made the year 360 days long, so with a tiny adjustment, we can set the Habits to the solstices and equinoxes which is just incredibly obvious. If you draw a circle with an X and a +, you have the Habits of the Year, and also the seasons, and you can further divide them into forty-fives and fives to see the entire Calendar wrapped around a circle, which is not a new idea but may seem exotic to look at for those accustomed to our grid layout.
				</p>
				<h4>
					zenCalendar has thus defined the Year into 8 forty-five day Habits, each containing 9 weekly cycles of our favorite five days.
				</h4>
				<h3>
					We now look at the various ways that the clock can create stress.
				</h3>
				<p>
					For one thing, if you've ever thought about hours, they are crazy. What is the point of an hour? It tells you what time of day it was. It refers to the position of the sun, and thus what people are generally doing around that time. But do we need to have 24 of them, in a repeating cycle of twelves? Most ten-fingered people prefer to work with powers of ten if possible. So why 24 hours, 60 minutes, 60 seconds. The answer is no reason. It is arbitrary. When I think of a day in its totality, I usually will come up with a sequence of ten or so events. There is little need to rename these periods, we already have words for them. In zenTime, a Session is similar to an hour, but they are named as close as possible to what an average person might call that time of day.
				</p>
				<p>
					Minutes are also arbitrary and difficult to work with. When I remember things, I will generally think in terms of ten to fifteen minute periods, certainly not individual minutes. So, zenTime handles this problem by dividing the Session into ten Whiles, which can be used to plan and schedule, and behave similarly to a meal, a morning ritual, a work break, etc.
				</p>
				<h2>
					zenTime "Night 8.26`52"
				</h2>
				<p>
					These Whiles, which can be thought of like the individual events of a Session, are similarly divided into 10 Moments. A moment is exactly 80 seconds long, which makes it longer than a minute, but simmilar in concept. The Moment is a span of time in which, as a general rule, things will stay the same. A mood is established in a Moment. A thought or feeling or train of thought often lasts a Moment.
				</p>
			</div>
			<div class="col">
				<p>
					So, now we get to the bottom. How to handle seconds? No need. While seconds are arbitrary, it is essential to have a fine time-keeping unit, and seconds and milliseconds behave admirably. Thus, zenTime remains fully compatible and convertible with Gregorian/Roman time, existing systems, software, and hardware. To avoid confusion, the second is referred to as an Instant.
				</p>
				<h3>
					Sessions, Whiles, Moments, Instants. That seems like a lot, right?
				</h3>
				<h4>
					Well, recall that "while" and "moment" are concepts in the common usage, I've simply quantified them. And then realize that this system has been modded into a base-10 system. This means that you can forget about Moments and Whiles, and represent the session as a decimal number. Each 80 Instants, the decimal (or Moment) will increase by 0.01.
				</h4>
				<p>
					Now, while this may seem confusing at first, just consider how long it takes children to understand the clock and the calendar, how hard it is to pronounce everything, how complicated and silly the notions of "quarter-to" and "o'clock" seem to the uninitiated. How many people can tell me what PM stands for? Not many. So, why have it if it isn't needed? zenCalendar is not an elaboration, it is a clean-up.
				</p>
				<h3>
					You are now oriented in zenTime.
				</h3>
				<h4>
					How does it feel? Notice what session it is, that the session as a decimal displays the While and Moment, and the Instants tick away just like normal. Notice that the sessions all have names, and generally refer to what is going on. I have chosen to represent zenTime as a Session decimal and name, then a "tick" symbol with the Instants. It's a pun.
				</h4>
				<h3>
					And then you start to realize that it really is more simple.
				</h3>
				<p>
					You notice that 3PM and 3AM really don't have anything in common, and the three doesn't help, nor do you know why it feels so natural to use two twelves rather than the more logical 24-hour (military time) system. It's because we have five fingers on each of two hands. Twelve is almost ten. So, there are ten sessions, with ten whiles, with ten moments.
				</p>
				<p>
					And yes, we do have to sneak that 8 in there somewhere, because remember, we are stuck with seconds, days and years. There are only so many ways to divide it up. You will notice, however, that in this case, and in another, I've chosen 8. This is because two of our fingers are thumbs.
				</p>
				<h3>
					So, you may be wondering if this is all possible and aren't there a lot of hidden problems with it?
				</h3>
				<p>
					The short answer is no, not really. Truth is, there are hidden problems with the current system. We have leap years and even leap seconds, and of course time is itself relative to motion.
				</p>
				<p>
					This is where we get into the core philosophy of zenTime. Instead of hiding that stuff and pretending it doesn't happen, we acknowledge and embrace it. Each day, between the beginning and the end, there is an 8/10-length Session called zenSession. This is a period which occurs during the time when a maximum number of people will be sleeping, or practicing meditation, or coming home from an insane party, or playing video games compulsively.
				</p>
				<p>
					The zenSession is to be considered outside of ordinary time, a period where time does not flow. While you can break it down to Instants as usual, this practice is discouraged. zenSession is a time to reset, refresh, renew, reboot, let go. It is a miniature holiday each morning as the sun rises and most of us sleep through it pleasantly. This is where we lovingly place the small units of time that don't want to conform to a grid.
				</p>
				<p>
					One final point of housekeeping. In studying history, I have found it difficult to conceptualize the state of the world in relation to itself, and to other times. It occurs to me that starting time at the supposed Death of Christ is largely useful, but makes it very difficult to conceptualize pre-Christian times. I realize that you don't want to live in the year four billion etc etc, but the fact is, it really isn't meaningful at all to talk about a particular year twenty-five million years ago. We would have no way of knowing which year we're talking about, for one thing. For another, any particular year in prehistory is indistinguishable from any other. This is why the choice was made to start actually counting years. The problem is, it needs to be set earlier. But when? Well, when does it start to matter what year it is? Why, when people started writing down what year it is, of course. So, to maximize compatibility, I kept the year the same, based on BC / AD, however I added ten thousand years, so that the year this was written was 12022, which of course you can shorthand either 2022 or 22. The historical dates now will look very similar, only none of them are negative. We don't really know of anything that happened specifically on a negative date. We can carbon-date things and say, "this many years from now," and that's still exactly the same. But nobody wrote anything down prior to ten thousand years ago, so for all intents and purposes, nothing specifically happened in a given year prior to the "beginning of zenTime". Again, when speaking of cosmic phenomena, individual years are meaningless and are always many powers of ten beyond anything we could conceptualize. However, if you study history or religion, you will immediately understand and appreciate this move. Otherwise, it probably won't make any difference to you. The date of Joan of Arc's death should not be expressed in relation to another historic event, the death of Christ, by default. It should really be given relative to the start of history. A calendar measures history, so it should begin and end at the boundaries of history.
				</p>
				<h4>
					That is essentially everything there is to know about zenCalendar, and if you have understood, then you can create and implement it yourself, or use my work with my blessing. I made all of the choices that enable the system to be generated from our current system, so it is generally optimal to calculate zenTime from standard time/calendar apps and software, since society is doing a great job of keeping track of what second it is. No need to reinvent the wheel.
				</h4>
				<p>
					To make a long story short, we have taken the clock out a circle and placed it into a grid system so that we can schedule and plan and relate with it. We have taken the Calendar out of a grid and wrapped it around the circle so that we can see a year as a spiraling movement, with common themes but a general progression. It is the intention of this project to simplify and empower your relationship with time, and to subvert unseen, hostile influences on the mind.
				</p>
				<p>
					Finally, a point on the name. I have practiced meditation for many years, and find it to be the most transformative and beneficial activity available to people. I enquire as to why nobody meditates. It turns out it's difficult to make time for it. I have literally made time for it. the zenSession is an appropriate period of time each morning before the sun rises where one could potentially insert a meditation practice. The one thing I really think bears repeating, as far as "making time" goes; for most people in modern society, if you get more than 5 hours of sleep a night, an additional hour of meditation would be more beneficial to you than an extra hour of sleep. This is something I am repeating, it is something I have found to be true in my own experience, it is not medical advice as I am not a doctor or therapist.
				</p>
			</div>
		</div>
		<div class="end-quote">
			Adam L<br>
			12022, Tues, Flowers 6 Tues; Night 8.26`52<br>
			c.2022 Stein Unlimited<br>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.zdocs-container
	display: grid
	text-align: center
.title-logo
	margin: 4rem
.article
	display: grid
	grid-template-columns: 1fr
	// grid-template-columns: auto
@media screen and (min-width: 800px)
	.zdocs-container
		// display: grid
	.article
		grid-template-columns: 1fr 1fr
	.zdocs-header
		font-size: 2rem
		padding: 1rem 16rem
	.end-quote
		font-size: 3rem
</style>
<script setup lang="ts">
import { ref, computed, onMounted, watchEffect, nextTick, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import UnJamMeComponent from "@/components/UnJamMeComponent.vue";
import { useStore } from "@/stores/index.ts";
import SidebarLink from "@/components/sidebar/SidebarLink.vue"
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import FooterComponent from "@/components/FooterComponent.vue"
const store = useStore()
const randGuy = Math.floor(Math.random()*(200)+1)
// 5 E + 13 M = 18 EM
const oneInTwoHundred = randGuy==18?true:false
const doShowJams = () => {
	setTimeout(()=> {
		showJams.value = false
	}, 2000)
	showJams.value = true
const carlBatman = watchEffect(() => {
	if (store.uid) localStorage.setItem("uid", JSON.stringify(store.uid))
	if (store.username) localStorage.setItem("username", JSON.stringify(store.username))
onMounted(()=> {
	if (localStorage) {
		if (localStorage.getItem("uid")) {
			store.setUid(JSON.parse(localStorage.getItem("uid")))
		if (localStorage.getItem("username")) {
			store.setUsername(JSON.parse(localStorage.getItem("username")))
onUnmounted(()=> {
	carlBatman()
</script>
<template>
	<div class="sidebar topnav" :style="{ width: sidebarWidth }">
		<h1>
			<span v-if="collapsed">
				<div>S</div>
				<div>U</div>
			</span>
			<span v-else>Stein Unlimited</span>
		</h1>
		<template v-if="!collapsed">
			<transition-group name="fadeDown" key="banana" tag="div" class="glow" mode="in-out">
				<SidebarLink v-if="store.uid" key="0a" class="navItem" to="/Chat"
				>Talk</SidebarLink>
				<SidebarLink v-if="store.uid" key="1a" class="navItem" to="/Logout"
				>Logout</SidebarLink>
				<SidebarLink v-if="store.admin" key="11a" class="navItem" to="/Admin"
				>Admin</SidebarLink>
				<SidebarLink to="/" v-if="!store.uid" key="2a" class="navItem"
				>Login</SidebarLink>
				<!-- <SidebarLink to="/Crossword" key="3a" class="navItem" icon="keyboard_double_arrow_left"
				>Puzzle</SidebarLink> -->
				<!-- <SidebarLink to="/Next" v-if="oneInTwoHundred" key="em"
					class="navItem nav-item-dark"	icon="keyboard_double_arrow_left"
					>TEMP</SidebarLink> -->
				<SidebarLink to="/Teacher" key="5a" class="navItem"
				>Music</SidebarLink>
				<SidebarLink to="/UnTimeMe" key="6a" class="navItem"
				>zenTime</SidebarLink>
				<!-- <component :is="UnJamMeComponent" v-if="showJams" key="7a" class="navItem"
					id="music-player" /> -->
				<!-- <a v-else id="songToggle" @click="doShowJams" -->
				<!-- >UnJamMe</a> -->
				<SidebarLink to="/UnThinkMe" key="9a" class="navItem"
				>unThinkMe</SidebarLink>
				<SidebarLink to="/UnReadMe" key="8a" class="navItem"
				>unReadMe</SidebarLink>
			</transition-group>
			<!-- <transition name="shrink" appear>
				<component :is="FooterComponent" />
			</transition> -->
			<div class="glow" v-if="!collapsed" key="banano">
				<span v-if="store.username" class="christmas-icon center">
					<span class="green">{{store.username}}</span>
				</span>
				<span v-else class="red christmas-icon">
					<i class='material-icons'>vpn_key</i>
				</span>
			</div>
		</template>
		<span
		class="collapse-icon"
		:class="{ 'rotate-180': collapsed }"
		@click="toggleSidebar"
			<i class='material-icons three-hundred-up'>keyboard_double_arrow_left</i>
		</span>
	</div>
</template>


<template>
	<div
		v-show="showRoomsList"
		class="vac-rooms-container vac-app-border-r"
		:class="{ 'vac-rooms-container-full': isMobile }"
		<slot name="rooms-header" />
		<slot name="rooms-list-search">
			<rooms-search
				:rooms="rooms"
				:loading-rooms="loadingRooms"
				:text-messages="textMessages"
				:show-search="showSearch"
				:show-add-room="showAddRoom"
				@search-room="searchRoom"
				@add-room="$emit('add-room')"
			>
				<template v-for="(i, name) in $slots" #[name]="data">
					<slot :name="name" v-bind="data" />
				</template>
			</rooms-search>
		</slot>
		<loader :show="loadingRooms">
			<template v-for="(idx, name) in $slots" #[name]="data">
				<slot :name="name" v-bind="data" />
			</template>
		</loader>
		<div v-if="!loadingRooms && !rooms.length" class="vac-rooms-empty">
			<slot name="rooms-empty">
				{{ textMessages.ROOMS_EMPTY }}
			</slot>
		</div>
		<div v-if="!loadingRooms" id="rooms-list" class="vac-room-list">
			<div
				v-for="fRoom in filteredRooms"
				:id="fRoom.roomId"
				:key="fRoom.roomId"
				class="vac-room-item"
				:class="{ 'vac-room-selected': selectedRoomId === fRoom.roomId }"
				@click="openRoom(fRoom)"
			>
				<room-content
					:current-user-id="currentUserId"
					:room="fRoom"
					:text-formatting="textFormatting"
					:link-options="linkOptions"
					:text-messages="textMessages"
					:room-actions="roomActions"
					@room-action-handler="$emit('room-action-handler', $event)"
				>
					<template v-for="(i, name) in $slots" #[name]="data">
						<slot :name="name" v-bind="data" />
					</template>
				</room-content>
			</div>
			<transition name="vac-fade-message">
				<div v-if="rooms.length && !loadingRooms" id="infinite-loader-rooms">
					<loader :show="showLoader" :infinite="true">
						<template v-for="(idx, name) in $slots" #[name]="data">
							<slot :name="name" v-bind="data" />
						</template>
					</loader>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
import Loader from './components/Loader.vue'
import RoomsSearch from './RoomsList/RoomsSearch.vue'
import RoomContent from './RoomsList/RoomContent.vue'
import filteredItems from './utils/filter-items'
export default {
	name: 'RoomsList',
	components: {
		Loader,
		RoomsSearch,
		RoomContent
	props: {
		currentUserId: { type: [String, Number], required: true },
		textMessages: { type: Object, required: true },
		showRoomsList: { type: Boolean, required: true },
		showSearch: { type: Boolean, required: true },
		showAddRoom: { type: Boolean, required: true },
		textFormatting: { type: Object, required: true },
		linkOptions: { type: Object, required: true },
		isMobile: { type: Boolean, required: true },
		rooms: { type: Array, required: true },
		loadingRooms: { type: Boolean, required: true },
		roomsLoaded: { type: Boolean, required: true },
		room: { type: Object, required: true },
		roomActions: { type: Array, required: true },
		scrollDistance: { type: Number, required: true }
	emits: [
		'add-room',
		'room-action-handler',
		'loading-more-rooms',
		'fetch-room',
		'fetch-more-rooms'
	data() {
		return {
			filteredRooms: this.rooms || [],
			observer: null,
			showLoader: true,
			loadingMoreRooms: false,
			selectedRoomId: ''
	watch: {
		rooms: {
			deep: true,
			handler(newVal, oldVal) {
				this.filteredRooms = newVal
				if (newVal.length !== oldVal.length || this.roomsLoaded) {
					this.loadingMoreRooms = false
				}
			}
		},
		loadingRooms(val) {
			if (!val) {
				setTimeout(() => this.initIntersectionObserver())
			}
		},
		loadingMoreRooms(val) {
			this.$emit('loading-more-rooms', val)
		},
		roomsLoaded: {
			immediate: true,
			handler(val) {
				if (val) {
					this.loadingMoreRooms = false
					if (!this.loadingRooms) {
						this.showLoader = false
					}
				}
			}
		},
		room: {
			immediate: true,
			handler(val) {
				if (val && !this.isMobile) this.selectedRoomId = val.roomId
			}
	methods: {
		initIntersectionObserver() {
			if (this.observer) {
				this.showLoader = true
				this.observer.disconnect()
			}
			const loader = document.getElementById('infinite-loader-rooms')
			if (loader) {
				const options = {
					root: document.getElementById('rooms-list'),
					rootMargin: `${this.scrollDistance}px`,
					threshold: 0
				}
				this.observer = new IntersectionObserver(entries => {
					if (entries[0].isIntersecting) {
						this.loadMoreRooms()
					}
				}, options)
				this.observer.observe(loader)
			}
		},
		searchRoom(ev) {
			this.filteredRooms = filteredItems(
				this.rooms,
				'roomName',
				ev.target.value
			)
		},
		openRoom(room) {
			if (room.roomId === this.room.roomId && !this.isMobile) return
			if (!this.isMobile) this.selectedRoomId = room.roomId
			this.$emit('fetch-room', { room })
		},
		loadMoreRooms() {
			if (this.loadingMoreRooms) return
			if (this.roomsLoaded) {
				this.loadingMoreRooms = false
				this.showLoader = false
				return
			}
			this.$emit('fetch-more-rooms')
			this.loadingMoreRooms = true
</script>
import Vue, { VNode, PluginFunction } from 'vue'
export type StringNumber = string | number
export interface UserStatus {
	state: 'online' | 'offline'
	lastChanged: string
export interface RoomUser {
	_id: StringNumber
	username: string
	avatar: string
	status: UserStatus
export type RoomUsers = RoomUser[]
export interface MessageFile {
	name: string
	type: string
	url: string
	preview: string
	size?: number
	audio?: boolean
	duration?: number
	progress?: number
export interface LastMessage {
	content: string
	senderId: StringNumber
	username?: string
	timestamp?: string
	saved?: boolean
	distributed?: boolean
	seen?: boolean
	new?: boolean
	files?: MessageFile[]
export interface Room {
	roomId: StringNumber
	roomName: string
	avatar: String
	users: RoomUsers
	unreadCount?: StringNumber
	index?: StringNumber | Date
	lastMessage?: LastMessage
	typingUsers?: StringNumber[]
export type Rooms = Room[]
export interface Message {
	_id: StringNumber
	indexId?: StringNumber
	content: string
	senderId: StringNumber
	username?: string
	avatar?: string
	date: string
	timestamp: string
	system?: boolean
	saved?: boolean
	distributed?: boolean
	seen?: boolean
	deleted?: boolean
	failure?: boolean
	disableActions?: boolean
	files?: MessageFile[]
	replyMessage?: Message
export type Messages = Message[]
export interface CustomAction {
	name: string
	title: string
export type CustomActions = CustomAction[]
export interface MessageAction {
	name: string
	title: string
	onlyMe?: boolean
export type MessageActions = MessageAction[]
export interface TextFormatting {
	disabled?: boolean
	italic?: string
	bold?: string
	strike?: string
	underline?: string
	multilineCode?: string
	inlineCode?: string
export type TemplateText = { tag: string; text: string }
export type TemplatesText = TemplateText[]
export interface AutoScroll {
	send: {
		new: boolean
		newAfterScrollUp: boolean
	receive: {
		new: boolean
		newAfterScrollUp: boolean
export type UsernameOptions = { minUsers: number; currentUser: StringNumber }
export interface Slots {
	'rooms-header': VNode[]
	'room-list-item': VNode[]
	'room-list-options': VNode[]
	'room-header': VNode[]
	'room-header-avatar': VNode[]
	'room-header-info': VNode[]
	'room-options': VNode[]
	message: VNode[]
	'messages-empty': VNode[]
	'rooms-empty': VNode[]
	'no-room-selected': VNode[]
	'menu-icon': VNode[]
	'toggle-icon': VNode[]
	'scroll-icon': VNode[]
	'reply-close-icon': VNode[]
	'image-close-icon': VNode[]
	'file-icon': VNode[]
	'file-close-icon': VNode[]
	'edit-close-icon': VNode[]
	'paperclip-icon': VNode[]
	'send-icon': VNode[]
	'eye-icon': VNode[]
	'document-icon': VNode[]
	'pencil-icon': VNode[]
	'checkmark-icon': VNode[]
	'deleted-icon': VNode[]
	'microphone-icon': VNode[]
	'microphone-off-icon': VNode[]
	'dropdown-icon': VNode[]
	'room-list-options-icon': VNode[]
	'search-icon': VNode[]
	'add-icon': VNode[]
	[key: string]: VNode[]
export interface Props {
	'current-user-id': StringNumber
	rooms: Rooms
	'rooms-order': 'desc' | 'asc'
	messages: Messages
	height?: string
	theme?: 'light' | 'dark'
	styles?: Record<string, Record<string, string>>
	'loading-rooms'?: boolean
	'rooms-loaded'?: boolean
	'room-id'?: StringNumber
	'load-first-room'?: boolean
	'room-message'?: string
	'messages-loaded'?: boolean
	'room-actions'?: CustomActions
	'menu-actions'?: CustomActions
	'message-actions'?: MessageActions
	'message-selection-actions'?: CustomActions
	'templates-text'?: TemplatesText
	'auto-scroll'?: AutoScroll
	'show-search'?: boolean
	'show-add-room'?: boolean
	'show-send-icon'?: boolean
	'show-files'?: boolean
	'show-audio'?: boolean
	'show-new-messages-divider'?: boolean
	'show-footer'?: boolean
	'text-messages'?: Record<string, StringNumber>
	'text-formatting'?: TextFormatting
	'responsive-breakpoint'?: boolean
	'single-room'?: boolean
	'accepted-files'?: string
	'username-options'?: UsernameOptions
export interface AdvancedChatOptions {
	props: Props
	slots?: Slots
export default class AdvancedChat extends Vue {
	rooms: Rooms
	messages: Messages
	$slots: Slots
	$props: Props
	static install: PluginFunction<AdvancedChatOptions>
<script setup>
import { computed } from "vue"
import { useTime } from "@/stores/time.ts"
const store = useTime()
const svgHeight = 600
const svgWidth = 300
const halfWidth = svgWidth/2
const rSpread = svgHeight / 24
const zSpread = svgHeight / 10.8
const zenSpread = svgHeight / 13.5
const hou_height = computed(() => svgHeight - (svgHeight / 24) * store.zhour)
</script>
<template>
  <div class="time-container">
    <svg :width="svgWidth" :height="svgHeight">
      <g id="gregMeter" fill="none">
        <template v-for="(num, i) in 25">
          <rect v-if="i < 6 || i > 17" :y="rSpread * i"
            class="greg-dark" :width="halfWidth" :height="svgHeight / 24"
          />
          <rect v-else :y="rSpread * i" class="greg-light"
            :width="halfWidth" :height="svgHeight / 24"
          />
          <text
            :x="svgWidth / 100"
            :y="i * rSpread - 0.15 * rSpread"
            class="greg-text"
            v-text="(48-i+6)%24"
          />
        </template>
      </g>
      <g id="zenMeter" fill="none">
        <rect :x="halfWidth" :y="0" :width="halfWidth" :height="zenSpread*8" class="zen-borders" />
        <text :x="svgWidth/1.6" :y="0.6*zenSpread" v-text="`~zen~`" />
        <template v-for="(zses, j) in store.zsessionNames" :key="j">
          <template v-for="k in 10" :key="k">
            <rect :x="halfWidth" :y="(svgHeight/10.8)*(j)+(svgHeight/108)*(7+k)"
              :width="halfWidth" :height="svgHeight/108" class="zen-dark"
            />
            <rect :x="halfWidth" :y="zenSpread+zSpread*j-zSpread"
            :width="halfWidth" :height="zSpread" class="zen-borders"
            />
            <text :x="svgWidth/1.6" :y="j*zSpread+zSpread/2" class="zen-mint">
              {{ store.zsessionNames[10-j] }}{{ " | " }}{{ 11 - j }}
            </text>
          </template>
        </template>
      </g>
      <g id="clockHand" fill="none" >
        <line x1="0" :y1="hou_height" :x2="svgWidth"
          :y2="hou_height" class="clock-hand"
        />
        <circle :cx="halfWidth" :cy="hou_height" r="30" class="center-circle tick-pulse" />
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watchEffect, onMounted } from "vue"
import { useTime } from "@/stores/time"
const store = useTime()
const coreDate = ref(new Date())
const habitName = ref("")
const gYear = ref(2022)
const daysInHabit = ref(45)
const state = reactive({
	monthNum: 0,
	gregDate: 0,
	startOfYear: 0,
	dayOfYear: 0,
	firstDayOfCurrentMonth: 0,
	startingDateName: "",
	daysInCurrentMonth: 0,
	romanFancy: "",
	monthName: "",
	habitNum: 0,
	dayOfHabit: 0,
	dayStartOffset: 0,
const getHabitFromName = (hName: string) => store.habitNames.indexOf(hName)
const getNameFromHabit = (habit: number) => store.habitNames[habit]
const getHabitFromDay = (doy: number) => Math.floor(doy/daysInHabit.value)
const firstDayOfHabit = (hab: number) => new Date(gYear.value, 0, 1+(daysInHabit.value*(state.habitNum)))
const monthName = ref('')
onMounted(()=>{
	monthName.value = ref(coreDate.value.toLocaleString("en-US", { month: "long"}))
	state.dayOfHabit = state.dayOfYear-((state.habitNum)*daysInHabit.value)
watchEffect(()=> {
	state.monthNum = coreDate.value.getMonth()
	state.gregDate = coreDate.value.getDate()
	state.startOfYear = new Date(gYear.value, 0, 1)
	state.dayOfYear = 1+Math.floor(new Date(coreDate.value-state.startOfYear)/(86400000))
	state.firstDayOfCurrentMonth = new Date(gYear.value, state.monthNum, 1)
	state.startingDateName = state.firstDayOfCurrentMonth.toLocaleString("en-US", { weekday: "long"})
	state.daysInCurrentMonth =  new Date(gYear.value, state.monthNum+1, 0).getDate()
	state.romanFancy = coreDate.value?coreDate.value.toDateString():null
	state.monthName = coreDate.value.toLocaleString("en-US", { month: "long"})
	state.habitNum = Math.floor((state.dayOfYear/daysInHabit.value))
	state.dayStartOffset = store.gregDayNames.indexOf(state.startingDateName)
	habitName.value = getNameFromHabit(state.habitNum)
const selectHabit = (newHabit) => {
	console.log(newHabit)
	state.habitNum = getHabitFromName(newHabit)
	coreDate.value = new Date(gYear.value, 0, ((state.habitNum)*daysInHabit.value)+1)
	state.dayStartOffset = store.gregDayNames.indexOf(state.startingDateName)
	console.log(coreDate.value)
const changeDate = (d: number) => {
	coreDate.value = new Date(gYear.value, 0, ((state.habitNum)*daysInHabit.value)+d)
	state.dayOfHabit = d
const dayOfWeekZen = computed(()=>store.dayNames[(state.dayOfHabit-1)%5])
</script>
<template>
	<div class="untable">
		<div class="calendars-container">
			<section id="habits">
				<h2>{{dayOfWeekZen}} {{state.dayOfHabit}} {{habitName}} {{10000+gYear}}</h2>
				<ol>
					<li v-for="hab in store.habitNames" @click="selectHabit(hab)"
						:class="hab==habitName?'selected':''">{{hab}}</li>
				</ol>
				<div class="unchunk" v-if="habitName!=='~newZen~'">
					<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
					<div class="uncell uncell-zen" v-for="d of daysInHabit"
						@click="changeDate(d)"
						:class="d==state.dayOfHabit?'selected-date':''"
						:key="d">
						{{ d }}
					</div>
				</div>
				<div class="unchunk" v-else>
					<div class="baheader baheader-zen" v-for="day of store.dayNames" :key="day">{{ day }}</div>
					<div class="uncell uncell-zen" v-for="(d, ind) of store.dayNames"
						@click="changeDate(ind+1)"
						:class="ind+1==state.dayOfHabit?'selected-date':''"
						:key="ind">
						{{ ind+1 }}
					</div>
				</div>
			</section>
			<section id="months">
				<h2>{{state.romanFancy}}</h2>
				<div class="unchunk-greg">
					<div class="baheader baheader-greg" v-for="gregDayName of store.gregDayNames"
						:key="gregDayName"
					>{{gregDayName}}</div>
					<div v-for="index of state.dayStartOffset" class="uncell uncell-greg" :key="index"></div>
					<div class="uncell uncell-greg" v-for="index of state.daysInCurrentMonth"
						:class="index==state.gregDate?'selected-date':''" :key="index"
					>{{index}}
					</div>
					<!-- <div v-for="index of endCap" class="uncell uncell-greg" :key="index"></div> -->
				</div>
			</section>
		</div>
		<div class="unheader">
			<h2>Day Of Year: {{state.dayOfYear+1}}</h2>
		</div>
	</div>
</template>
<script setup lang="ts">
import {ref, onUnmounted} from "vue"
import {firestoreDb} from "@/services/firebaseconfig"
import {collection, onSnapshot, updateDoc} from "firebase/firestore"
// import {ref as refer, getDownloadURL} from "firebase/storage"
const listedDocuments = ref([])
const stages = ref([
	'Propagation',
	'Vegetative',
	'Flowering',
	'Harvest',
	'Re-Vegging',
	'Re-Flowering'
const stageSelector = ref('')
const stageSelect = (thisStage) => stageSelector.value = thisStage
const docsRef = collection(firestoreDb, "mjblog")
const unsubscribe = onSnapshot(docsRef, (querySnapshot) => {
	  let blogData = []
	  querySnapshot.forEach((queryData) => {
	      blogData.push({...queryData.data(), id: queryData.id})
	  })
	  listedDocuments.value = blogData
		console.info("retrieved docsnap.")
	(error)=>console.warn(error))
const handleSubmit = async (imagePath) => {
	imagePath += '.jpg'
	let description = ""
	let formEl = e.target
	let textareaEl = formEl.lastElementChild
	let recordInsert = {description: ''}
	recordInsert.description = textareaEl.value
	await upDateDoc(ref, recordInsert)
onUnmounted(()=> {
	unsubscribe()
</script>
<template>
	<main class="mj-blog">
		<div class="mj-selector">
			<button v-for="stg in stages" :key="stg" @click="stageSelect(stg)">{{stg}}</button>
		</div>
			<h2 class="mj-image-name">{{stageSelector}}</h2>
			<template v-for="dat in listedDocuments">
			<article class="mj-article" v-if="stageSelector==dat.stage" :key="dat.id">
				<p>{{dat.growWeek}}</p>
				<p>{{dat.date}}</p>
				<h3 class="mj-title">{{dat.id}}</h3>
				<p>{{dat.caption}}</p>
				<p class="mj-p">{{dat.description}}</p>
				<img class="mj-image" :src="dat.photo" width="1008" height="477" />
				<form class="mj-edit-form" @submit.prevent="handleSubmit($event, dat.id)">
					<input class="mj-input" type="text" name="caption" />
					<input type="submit" />
					<textarea class="mj-textarea" name="description" />
				</form>
			</article>
		</template>
	</main>
</template>
<style lang="sass" scoped>
$midnight: #101
$midnight-cream: #313
$midnight-light: #FDC
$safe-light: #DFD
$safe-dark: #101
$primary-light: #7FA
$primary: #4F7
$primary-dark: #194
$secondary-light: #D9F
$secondary: #A5D
$secondary-dark: #204
$contrast-light: #F84
$contrast: #C40
$contrast-dark: #810
.mj-blog
	display: flex
	flex-direction: column
	justify-content: center
	background: $primary-dark
	.mj-selector
		background-color: $midnight-cream
		display: flex
		button
			background-color: $midnight
			color: $midnight-light
		button:hover
			color: $contrast
	.mj-article
		background: $secondary-dark
		color: $safe-light
		text-align: center
		margin: 2em
		padding: 1em
		display: grid
		.mj-list-all-btn
			background-color: $primary-dark
			color: $safe-light
		.mj-image
			border: 1px solid $midnight-light
			border-radius: 5px
		.mj-image-name
			color: $safe-light
			box-shadow: 1px 1px 5px 2px $contrast-light
			background-color: $contrast
		// .mj-delete-btn
		// 	width: 100px
		// 	color: $safe-light
		// 	background-color: $contrast
		// .mj-delete-btn:hover
		// 	background-color: $midnight-light
</style>
          // IMPORT LIBRARY CLASSES
// import {
  // addDoc,
  // arrayRemove,
  // arrayUnion,
  // collection,
  // deleteDoc,
  // deleteField,
  // doc,
  // endAt,
  // getDoc,
  // getDocs,
  // limit,
  // onSnapshot,
  // orderBy,
  // query,
  // setDoc,
  // startAfter,
  // startAt,
  // updateDoc,
  // where
// } from "firebase/firestore"
// import {
  // onDisconnect,
  // onValue,
  // ref,
  // serverTimestamp,
  // set
// } from "firebase/database"
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable
} from "firebase/storage"
// import {
// } from "firebase/functions"
              // AUTH / ADMIN STUFF
// setCustomUserClaims(user.uid, { admin: true })
// .then(() => {
//   console.log("you are an admin")
// // The new custom claims will propagate to the user's ID token the
// // next time a new one is issued.
// });
// const giveMeThePower = httpsCallable(fireFunctions, 'addAdminRole')
// const clickAdmin = () => {
//   giveMeThePower()
//   .then((result) => {
//     // Read result of the Cloud Function.
//     /** @type {any} */
//     const data = result.data;
//     const sanitizedMessage = data.text;
//   })
//   .then(()=>{
  // console.warn("Go shimmy a sandbag")
    // console.info(data, sanitizedMessage);
  // });
              // IMPORT MY INSTANCES
import { storage } from "@/services/firebaseconfig"
// import { firestoreDb } from "@/services/firebaseconfig"
// import { realtimeDb } from "@/services/firebaseconfig"
// import { fireFunctions } from "@/services/firebaseconfig"
// import { auth } from "@/services/firebaseconfig"
// // PATH CONSTANTS
// const FILES_PATH = 'chatFiles'
// const AVATARS_PATH = 	'avatars'
// const SFX_PATH = 'sounds'
// CURRENT DEV ADMIN ACTIVITY:         %%%%%%######%%%%%%
getTrucks(truckRef, storageRef) {
  truckRef.once('value', (snap) => {
    console.log(snap.val());
    // console.log(snap.key);
    let trucks = [];
    snap.forEach((trucksSnap) => {
      console.log(trucksSnap.key);
      uid = trucksSnap.key;
      this.setState({user: uid});
      trucksSnap.forEach((truckSnap) => {
        console.log(truckSnap.key);
        console.log(truckSnap.val());
        let truck = truckSnap.val();
        trucks.push({
          uid: uid,
          name: truck.name,
          food: truck.foodType,
          desc: truck.description,
          menu: truck.menu,
          phone: truck.phone,
        });
      });
    });
    console.log(trucks);
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(trucks)
    });
  });
              // ENVIRONMENT VARIABLE NAMES
// const firebaseConfig = {
//   projectId: "stein-unlimited",
//   appId: import.meta.env.VITE_FB_APPID as string,
//   databaseURL: import.meta.env.VITE_UN_FB_DATABASEURL as string,
//   storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET as string,
//   apiKey: import.meta.env.VITE_FB_APIKEY as string,
//   authDomain: "stein-unlimited.firebaseapp.com",
//   messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID as string,
//   measurementId: import.meta.env.VITE_FB_MEASUREMENTID as string
// };
            // STORAGE SECTION
// export const getSoundUrl = async (fileName) => await getDownloadURL(ref(storage, `${SFX_PATH}/${fileName}`))
// export const getAvatarUrl = async (fileName) => await getDownloadURL(ref(storage, `${AVATARS_PATH}/${fileName}`))
// const fileRef = (currentUserId, messageId, fileName) => {
// 	return ref(storage, `${FILES_PATH}/${currentUserId}/${messageId}/${fileName}`)
// }
// export const deleteFile = (currentUserId, messageId, file) => {
// 	return deleteObject(
// 		fileRef(
// 			currentUserId,
// 			messageId,
// 			`${file.name}.${file.extension || file.type}`
// 		)
// 	)
// }
            // RT DATABASE SECTION
// export const firebaseListener = onValue
// export const userStatusRef = userId => {
// 	return ref(realtimeDb, '/status/' + userId)
// }
// export const updateUserOnlineStatus = currentUserId => {
// 	const isOfflineData = {
// 		state: 'offline',
// 		lastChanged: serverTimestamp()
// 	}
// 	const isOnlineData = {
// 		state: 'online',
// 		lastChanged: serverTimestamp()
// 	}
// 	const connectedRef = ref(realtimeDb, '.info/connected')
// 	onValue(connectedRef, snap => {
// 		if (snap.val() === true) {
// 			onDisconnect(userStatusRef(currentUserId))
// 				.set(isOfflineData)
// 				.then(() => {
// 					set(userStatusRef(currentUserId), isOnlineData)
// 				})
// 		}
// 	})
// }
            // FIRESTORE DB SECTION
// const USERS_PATH = 'users'
// const ROOMS_PATH = 'chatRooms'
// const MESSAGES_PATH = 'messages'
// const MESSAGE_PATH = roomId => {
// 	return `${ROOMS_PATH}/${roomId}/${MESSAGES_PATH}`
// }
// const TIMESTAMP_FIELD = 'timestamp'
// const LAST_UPDATED_FIELD = 'lastUpdated'
// const TYPING_USERS_FIELD = 'typingUsers'
// const MESSAGE_REACTIONS_FIELD = 'reactions'
// const ROOM_USERS_FIELD = 'users'
// export const firestoreListener = onSnapshot
// export const deleteDbField = deleteField()
// const getDocuments = query => {
// 	return getDocs(query).then(docs => {
// 		return { data: formatQueryDataArray(docs), docs: docs.docs }
// 	})
// }
// const getDocument = ref => {
// 	return getDoc(ref).then(doc => formatQueryDataObject(doc))
// }
// const addDocument = (ref, data) => {
// 	return addDoc(ref, data)
// }
// const setDocument = (path, docId, data) => {
// 	return setDoc(doc(firestoreDb, path, docId), data)
// }
// const updateDocument = (ref, data) => {
// 	return updateDoc(ref, data)
// }
// const deleteDocument = (ref, docId) => {
// 	return deleteDoc(doc(firestoreDb, ref, docId))
// }
// // USERS
// const usersRef = collection(firestoreDb, USERS_PATH)
// const userRef = userId => {
// 	return doc(firestoreDb, USERS_PATH, userId)
// }
