<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {firestoreDb} from "@/services/firebaseconfig";
import UtmBlogArticle from "@/components/UtmBlogArticle.vue";
import { collection, query, orderBy, getDocs, doc, getDoc, type DocumentData } from "firebase/firestore";
document.title = "unThinkMe";
// import { useMonitorSize } from '@/composables/monitor-size';
// const sizes = useMonitorSize();
const youTubeData = ref<DocumentData|undefined>({});
const isVisible = ref<Array<HTMLElement|null>>([]);
const ToggleDiv = (i: number) => {
  isVisible.value[i]=null;
}
const fromHtmlEntities = (str: string) => {
  var doc = new DOMParser().parseFromString(str, "text/html");
  return doc.documentElement.textContent;
    // return (string+"").replace(/&#\d+;/gm,function(s) {
        // return String.fromCharCode(s.match(/\d+/gm)[0]);
    // })
};

// const snapshot = await youtubeRef.get();
// youtubechannel/latest/items/#0-49/id/videoId
                                //  /snippet/{title, description, thumbnails}
interface UtmArticle {
  id: number;
  date: string;
  title: string;
  tnurl: string;
  ytlink: string;
  content: string;
}

const blogData = ref<UtmArticle[]>([]);

const q = query(collection(firestoreDb, "utmblog"), orderBy("id", "desc"));
const getBlog = async () => {
  const tempData: DocumentData = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    tempData.push(doc.data());
  });
  blogData.value = tempData as UtmArticle[];
}

onMounted(async ()=>{
  const docRef = doc(firestoreDb, 'youtubechannel', 'latest');
  const snapshot = await getDoc(docRef);
  if (snapshot) {
    // console.info(snapshot.data());
    youTubeData.value = snapshot.data();
  } 
  getBlog();
})
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
// watch(sizes.browserWidth.value, async (new, old) => {
//   if (new)
// }
</script>
<template>
  <div class="home-content unthinkme">
    <!-- <h1 class="glow">unThinkMe</h1> -->
    <h2 class="glow">Visit our <a href="https://discord.gg/jZrS3GVXsS" target="_blank">Discord community!<img class="utm-social" src="@/assets/img/social_dc.png" /></a></h2>
    <h3>Discussing Integral Theory and Altitudes in our ordinary lives as ordinary weird people.</h3>
    <img src="@/assets/img/unthinkme.png" style="margin-block: 1em;" class="stu-banner" />
    <h2 class="glow">Latest Videos:</h2>
    <div class="video-container">
    <div class="video-div" v-for="(item, index) of youTubeData?.items" v-show="index<12" :key="item.etag">
      <div v-if="item.id.kind=='youtube#video'">
        <h3>{{ fromHtmlEntities(item.snippet.title) }}</h3>
        <a target="_blank" :href="'https://www.youtube.com/embed/'+item.id.videoId">
        <!-- <a @click.prevent="ToggleDiv(index)" ref="isVisible">  -->
          <img 
            :src="item.snippet.thumbnails.default.url" 
            />
            <!-- v-if="isVisible[index]"  -->
          <!-- <div v-else style="width: 100%; min-width: 400px; max-width: 800px;"> -->
            <!-- <div style="position: relative; width: 100%; overflow: hidden; padding-top: 56.25%;">               -->
            <!-- <p><iframe 
              :src="'https://www.youtube.com/embed/'+item.id.videoId"
              style="position: absolute; top: 0; left: 0; right: 0; width: 100%; height: 100%; border: none;" 
              width="560" height="315" allowfullscreen: string="allowfullscreen" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe></p> -->
            <!-- </div> -->
          <!-- </div> -->
        </a>      
        <p>{{ item.snippet.description }}</p>
      </div>
      <div class="playlist-div" v-else-if="item.id.kind=='youtube#playlist'">
        <h2>Playlist: {{ item.snippet.title }}</h2>
        <img :src="item.snippet.thumbnails.default.url" />
      </div>
      <div v-else><h2>{{ item.snippet.title }}</h2></div>
    </div>
      <!-- <div v-if="Data.message"><h1>{{ Data.message }}</h1></div>
      <div v-else-if="Data">
        <div v-for="item in Data.items" :key="item.id.videoId||item.id.playlistId">
          <div v-if="item.id && item.id.kind=='youtube#video'">
            <h2>{{ item.snippet.title }}</h2>
            <iframe width="420" height="315"
            :src="'https://www.youtube.com/embed/'+item.id.videoId">
            </iframe>
          </div>
          <div v-else-if="item.id && item.id.kind=='youtube#playlist'">
            <h2>Playlist: {{ item.snippet.title }}</h2>
            <img :src="item.snippet.thumbnails.default.url" :width="item.snippet.thumbnails.default.width" :height="item.snippet.thumbnails.default.height" /> -->
            <!-- <pre>{{ item }}</pre> -->
          <!-- </div>
        </div>
      </div> -->
      <h2 class="unthink-title">Classic Videos: <i class="material-icons glow">park</i> Integral Philosophy</h2>
      <div class="unthinkme-div">
        <UtmBlogArticle
          v-for="datum in blogData"
          :key="datum.id"
          :id="datum.id"
          :date="datum.date"
          :content="datum.content"
          :tnurl="datum.tnurl"
          :ytlink="datum.ytlink"
          :title="datum.title"
          class="video-div"
        />
      </div>
    </div>
  </div>
</template>

