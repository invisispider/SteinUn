<script setup lang="ts">
// import {reactive, ref as refer, watch, onMounted, onUnmounted} from "vue"
import {ref, onUnmounted} from "vue"
// import {storage} from "@/services/firebaseconfig"
import {firestoreDb} from "@/services/firebaseconfig"
// import {ref, getDownloadURL, list, listAll, deleteObject} from "firebase/storage"
// import { collection, doc, setDoc } from "firebase/firestore"
import { collection, query, where, onSnapshot } from "firebase/firestore";
const listedDocuments = ref([])
const stageSelector = ref('propagation')
const q = query(collection(firestoreDb, "mjblog"), where("stage", "==", stageSelector.value));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
	  const blogData = [];
	  querySnapshot.forEach((doc) => {
	      blogData.push(...doc.data(), doc.id);
	  });
	  listedDocuments.value = blogData
		console.info("retrieved docsnap.")
	},
	(error)=>console.warn(error))

// interface CannaEntry {
// 	// this is date parsed with regex
// 	id: (string|null|undefined)
// 	// date parsed to server timestamp
// 	date: (string|null|undefined)
// 	// optional caption for image
// 	caption: (string|null|undefined)
// 	// this is the main article that we will live edit
// 	description: (string|null|undefined)
// 	// this is the photo url that we have drawn, to be saved to db (might need tut)
// 	photo: (string|null|undefined)
// }
// interface CannaWeek {
// 	thisWeek: CannaEnrty[]
// }
// interface CannaArticle {
// 	// calculated from week
// 	growWeek: CannaWeek[]
// }
// interface BlogDb {
// 	propagation: CannaArticle[],
// 	vegetative: CannaArticle[],
// 	flowering: CannaArticle[],
// 	harvest: CannaArticle[],
// 	reflowering: CannaArticle[],
// 	secondveg: CannaArticle[],
// 	secondflowering: CannaArticle[],
// 	secondharvest: CannaArticle[],
// 	miscellaneous: CannaArticle[]
// }
// const listedStorageImages = refer([])
// const blogImgRef = ref(storage, 'mjblog')
// const getMJBlogImage = (filename) => {
// 	let el = document.querySelector(`.mj-image[alt='${filename}']`)
// 	let imageRealName = filename.substring(filename.indexOf('.com') + 4)
// 	let test_url = ''
// 	setTimeout(() => {
// 		getDownloadURL(ref(storage, `${imageRealName}`))
// 			.then((url) => el.src = url)
// 	}, 3000)
// }
// const getStorageImages = async () => {
// 	const listem = await listAll(blogImgRef)
// 	let smallList = []
// 	listem.items.forEach(ite => smallList.push(ite))
// 	listedStorageImages.value = smallList
		// .catch(error => console.warn(error.message))
// const getStorageImages = async () => {
	// const firstPage = await list(blogImgRef, { maxResults: 40 })
	// let smallList = []
  // firstPage.items.forEach((itemRef) => {
	// 	smallList.push(itemRef)
	// })
	// if (firstPage.nextPageToken) {
	// 	const secondPage = await list(blogImgRef, {
	// 		maxResults: 40,
	// 		pageToken: firstPage.nextPageToken,
	// 	})
	// 	let smallList = []
	// 	firstPage.items.forEach((itemRef) => {
	// 		smallList.push(itemRef)
	// 	})
	// }
	// listedStorageImages.value = smallList
// }
// const deleteThisImageFromStorage = (filename) => {
// 	let imageRealName = filename.substring(filename.indexOf('.com') + 4)
// 	deleteObject(ref(storage, `${imageRealName}`))
// 	let removed = listedStorageImages.value.filter(name=>name!==filename)
// 	console.info(`removed: ${removed}`)
// }
const handleSubmit = (e, imagePath) => {
	// const pattern = /202\d{5}_\d+/
	// let file_id = imagePath.match(pattern)[0]
	// console.log("file id:", file_id)
	// let this_date = file_id.slice(0, file_id.indexOf('_'))
	// const origin_date = new Date(2021, 10, 17)
	// console.log("date from file:", this_date)
	// let y = this_date.slice(0, 4)
	// let m = this_date.slice(4, 6)
	// let d = this_date.slice(6, 8)
	// let this_timestamp = new Date(y, m, d)
	// console.log("this is day one for code as timestamp:", this_timestamp)
	// let this_week = Math.floor((this_timestamp-origin_date)/86400000/7)
	// let stage = ''
	// if (this_week<=4) { stage = 'Propagation'
	// } else if (this_week<=12) {	stage = 'Vegetative'
	// } else if (this_week<=22) {	stage = 'Flowering'
	// } else if (this_week<=24) {	stage = 'Harvest'
	// } else if (this_week<=34) {	stage = 'Re-Vegging'
	// } else { stage = 'Re-Flowering'
	// }
	let description = ""
	let caption = ""
	let formEl = e.target
	let inputEl = formEl.firstElementChild
	let textareaEl = formEl.lastElementChild
	// input = inputEl.value
	// let imgEl = document.querySelector(`.mj-image[alt='${imagePath}']`)
	// let url = imgEl.src
	const recordInsert = {
		// growWeek: this_week,
		// date: this_timestamp,
		caption: this_date,
		// stage: stage,
		description: "",
		// photo: url
	}
	const blogRef = collection(firestoreDb, "mjblog");
	// if (confirm(JSON.stringify(recordInsert))==true) {
	setDoc(doc(blogRef, file_id), recordInsert)
	// }
// onMounted(() => {
	// listedDocuments.value = retrieveBlog()
// 	getStorageImages()
// 	.then(()=> {
// 		listedStorageImages.value.forEach((filename)=>{
			// let formEl = document.querySelector(`.mj-edit-form[name='${filename.toString()}']`)
			// getMJBlogImage(filename.toString())
			// setTimeout(()=>{
			// 	formEl.submit()
			// }, 10000)
// 		})
// 	})
// })
}
onUnmounted(()=> {
	unsubscribe()
})
</script>
<template>
	<main class="mj-blog">
		<div>
			<button>Prop</button>
			<button>Veg</button>
			<button>Flower</button>
			<button>Harvest</button>
			<button>Re-Veg</button>
			<button>Re-Flower</button>
		</div>
		<!-- <button class="mj-list-all-btn" @click.prevent="getStorageImages">I am a black man jolly jolly black manta</button> -->
		<!-- <article class="mj-image-div"
			v-for="(image, ind) in listedStorageImages" :key="image.toString()"> -->
			<!-- <button class="mj-delete-btn" @click="deleteThisImageFromStorage(image.toString())">delete ME!!!</button> -->
			<!-- <img class="mj-image" ref="myImg" :src="getMJBlogImage('20211209_174710.jpg')" width="400" height="300" /> -->
		<article class="mj-article" v-for="dat in listedDocuments" :key="dat._id">
			<h2 class="mj-image-name">{{dat.stage}}</h2>
			<p>{{dat.growWeek}}</p>
			<p>{{dat.date}}</p>
			<h3 class="mj-title">{{dat._id}}</h3>
			<p>{{dat.caption}}</p>
			<p class="mj-p">{{dat.description}}</p>
			<img class="mj-image" :src="dat.photo" width="1008" height="477" />
			<form class="mj-edit-form" @submit.prevent="handleSubmit($event, dat._id+'.jpg')">
				<input class="mj-input" type="text" name="caption" />
				<input type="submit" />
				<textarea class="mj-textarea" name="description" />
			</form>
		</article>
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
	.mj-image-div
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
		.mj-delete-btn
			width: 100px
			color: $safe-light
			background-color: $contrast
		.mj-delete-btn:hover
			background-color: $midnight-light
</style>
