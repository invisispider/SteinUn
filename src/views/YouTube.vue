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

</script>
<template>
  <div>
    <h1 class="unthink-title">unThinkMe <i class="material-icons glow">park</i> Integral Philosophy</h1>
    <div class="unthinkme">
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
  </div>
</template>
<style lang="sass">
.unthink-title
  background-color: rgb(6, 20, 8)
  display: flex
  justify-content: center
  align-items: center
  margin: 0
  padding: 1rem
  color: rgb(37, 180, 191)
  i
    margin: 0 20px
    color: #2c3e50
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
  // .unBgMe
  //   background-image: url(https://firebasestorage.googleapis.com/v0/b/stein-unlimited.appspot.com/o/utmblog%2Fbitmap.png?alt=media&token=a57abbb9-cda6-4f39-8e08-c45f2eb8fe51)
  //   width: 700px
  //   height: 125px
  //   background-size: contain
  //   background-repeat: no-repeat
  //   background-position: top center
  //   background-blend-mode: lighten
  // h2
  //   text-align: left
  //   display: float-left
  //   font-size: 2rem
  //   font-style: italic
  //   max-width: 500px
  // h4
  //   max-width: 500px
  //   text-align: right
  .utm-blog-article
    border-radius: 5px
    min-height: 300px
    margin: 10px
    max-width: 700px
    box-shadow: 0 0 5px white
    background: rgba(0,0,0,0.5)
    padding: 1em 0
    .title-place
      text-align: center
      color: rgb(37, 180, 191)
    .tn-place
      justify-content: center
      display: flex
    .video-place
      margin: 1em
      width: 400px
      height: 225px
      background-size: 400px 225px
      background-repeat: no-repeat
    .desc-place
      text-align: center
      color: #D3C
      padding: 0 5em
@media screen and (min-width: 768px)
  .unthinkme
    display: grid
    grid-template-columns: 1fr 1fr
@media screen and (min-width: 1440px)
  .unthinkme
    display: grid
    grid-template-columns: 1fr 1fr 1fr
</style>
