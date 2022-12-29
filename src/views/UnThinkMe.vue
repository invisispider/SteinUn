<script setup lang="ts">
import { onMounted, ref } from "vue";
import UtmBlogArticle from "@/components/UtmBlogArticle.vue";
// import {storage} from "@/services/firebaseconfig"
// import {ref as refer, getDownloadURL, list, listAll, deleteObject} from "firebase/storage"
import { firestoreDb } from "@/services/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

interface UtmArticle {
  id: number;
  date: string;
  title: string;
  tnurl: string;
  ytlink: string;
  content: string;
}

const blogData: UtmArticle[] = ref([]);

const q = query(collection(firestoreDb, "utmblog"), orderBy("id", "desc"));
const getBlog = async () => {
  const tempData = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    tempData.push(doc.data());
  });
  blogData.value = tempData;
};

onMounted(() => {
  getBlog();
});

/* USE THIS TO GET IMAGE LINKS FOR NOW @TODO MAKE THIS EDITABLE IN ADMIN */
// const listedStorageImages = ref([])
// const blogImgRef = refer(storage, 'utmblog')
// const getImageLinks = () => {
//   const theImagesINeed = [
//   ]
//   theImagesINeed.forEach((item) => {
//       console.info(getDownloadURL(refer(blogImgRef, item)))
//   });
// }
// onMounted(()=>{
//   getImageLinks()
// })

// const imageLinks = {
  // "aristocratsthumb.png": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Faristocratsthumb.png?alt=media&token=178f812a-61a1-476a-864e-c744a63afdc1",
  // "bitmap.png": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fbitmap.png?alt=media&token=a57abbb9-cda6-4f39-8e08-c45f2eb8fe51",
  // "framejustgradient.png": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fframejustgradient.png?alt=media&token=f1dacafa-6fbf-4dfe-aac2-ba71f34d16a6",
  // "thumbnail_memetics.png": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fthumbnail_memetics.png?alt=media&token=01213638-7063-482c-affe-1c7faf9505bf",
  // "00offtheChartsTN.jpg": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2F00offtheChartsTN.jpg?alt=media&token=61aa1dd5-d8b5-49f4-9db2-00a45e65d1ff",
  // "12STAGES.jpg": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2F12STAGES.jpg?alt=media&token=b78b7416-778d-4528-a340-1917bde2a217"
  // "StarWars.jpg": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2FStarWars.jpg?alt=media&token=5070a8dc-e082-400b-be02-2f01b722a611"
  // "altitudes theory 1 intro.jpg" "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Faltitudes%20theory%201%20intro.jpg?alt=media&token=03ccd2e4-93f6-4933-9ca4-e336ba38b3c6"
  // "whatarealts.jpg": "https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fwhatarealts.jpg?alt=media&token=35ee550c-67ff-4828-8e6a-0ba3dbd06034"
  // "brainwav.jpg", https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fbrainwav.jpg?alt=media&token=e3f8b433-9420-4bce-9d04-175d11c22422
  // "Altitudes 1 Infrared.jpg" https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2FAltitudes%201%20Infrared.jpg?alt=media&token=50184be4-bd4d-4c8c-8445-dd510024e985
// }
</script>
<template>
  <div class="unthinkme">
    <!-- <div class="unBgMe"> -->
    <!-- <i class="material-icons glow">park</i> -->
    <!-- </div> -->
    <UtmBlogArticle
      v-for="datum in blogData"
      :key="datum.id"
      :id="datum.id"
      :date="datum.date"
      :content="datum.content"
      :tnurl="datum.tnurl"
      :ytlink="datum.ytlink"
      :title="datum.title"
    />
  </div>
</template>
<style lang="sass">

.unthinkme
  background-color: rgb(6, 20, 8)
  color: white
  text-align: center
  display: flex
  flex-direction: column
  // align-content: space-around
  justify-content: space-around
  align-items: space-between
  min-height: 70vh
  margin: auto
  padding: 3rem
  box-shadow: 1px 1px rgb(43, 27, 74), -1px -1px rgb(43, 27, 74)
  .unBgMe
    background-image: url(https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fbitmap.png?alt=media&token=a57abbb9-cda6-4f39-8e08-c45f2eb8fe51)
    width: 700px
    height: 125px
    background-size: contain
    background-repeat: no-repeat
    background-position: top center
    background-blend-mode: lighten
  h2
    text-align: left
    display: float-left
    color: rgb(37, 180, 191)
    font-size: 2rem
    font-style: italic
    max-width: 500px
  h4
    max-width: 500px
    text-align: right
  .utm-blog-article
    box-shadow: 0 0 5px white
    border-radius: 5px
    min-height: 300px
    margin: 10px
    max-width: 700px
    .date-place
      text-align: center
      color: #F0F
    .article-place
      border: 1px solid white
      display: grid
      grid-template: 1fr / 1fr 1fr
      font-size: 1em
      text-align: left
      .video-place
        width: 400px
        height: 225px
        background-size: 400px 225px
        background-repeat: no-repeat
      .text-place
        text-align: center
        color: #D3C
</style>
