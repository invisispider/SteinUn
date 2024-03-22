<script setup>
import { ref, onMounted } from 'vue'
document.title = "unThinkMe";
import {firestoreDb} from "@/services/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
const youTubeData = ref({});
const Toggled = ref([]);
const isVisible = ref([]);
const ToggleDiv = (i)=> isVisible.value[i]=!isVisible.value[i];
const fromHtmlEntities = (str) => {
  var doc = new DOMParser().parseFromString(str, "text/html");
  return doc.documentElement.textContent;
    // return (string+"").replace(/&#\d+;/gm,function(s) {
        // return String.fromCharCode(s.match(/\d+/gm)[0]);
    // })
};
onMounted(async ()=>{
  const docRef = doc(firestoreDb, 'youtubechannel', 'latest');
  const snapshot = await getDoc(docRef);
  if (snapshot) {
    // console.info(snapshot.data());
    youTubeData.value = snapshot.data();
  } 
})
// const snapshot = await youtubeRef.get();
// youtubechannel/latest/items/#0-49/id/videoId
                                //  /snippet/{title, description, thumbnails}
</script>
<template>
  <div class="unthinkme">
    <div class="video-div" v-for="item, index of youTubeData.items" :key="item.etag">
      <div v-if="item.id.kind=='youtube#video'">
        <h2>{{ fromHtmlEntities(item.snippet.title) }}</h2>
        <a @click="ToggleDiv(index)" ref="isVisible"> 
          <img v-if="isVisible[index]" :src="item.snippet.thumbnails.default.url" />
          <div v-else>
            <iframe width="420" height="315"
            :src="'https://www.youtube.com/embed/'+item.id.videoId">
            </iframe>          
          </div>
        </a>
        <p>{{ item.snippet.description }}</p>
      </div>
      <div class="playlist-div" v-else-if="item.id.kind=='youtube#playlist'">
        <h2>Playlist: {{ item.snippet.title }}</h2>
        <img :src="item.snippet.thumbnails.default.url" />
      </div>
      <div class="unknown-div" v-else><h2>{{ item.snippet.title }}</h2></div>
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
  </div>
</template>
