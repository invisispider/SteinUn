<script setup>
import junkReviews from "@/composables/videosjunkreviews";
import junkPlays from "@/composables/videosjunkplays";
import gwtfParts from "@/composables/videosgwtf";
import steinLive from "@/composables/videosstein";
import randomVids from "@/composables/videosunwolfme";
import {ref} from "vue";
// unWolfMe
const selector = ref('junkReviews');
const buttons = [
  {'select': 'steinLive', 'display': 'Stein'},
  {'select': 'junkReviews', 'display': 'Reviews'},
  {'select': 'junkPlays', 'display': 'Lets Play'},
  {'select': 'gwtfParts', 'display': 'Going With The Flow'},
  {'select': 'randomVids', 'display': 'Vlogs'}
];
// @TODO upload stein Blue Room videos to unwolfme
// @TODO upload stein Accidance! DVD rips to unwolfme
// @TODO upload CCT to unwolfme
// @TODO upload tracks from There You Are?
// @TODO upload tracks from kitty blue?
// @TODO upload tracks from Junk Tracks fo sho
// @TODO upload tracks from Stepladder
// @TODO upload stein Shades tracks to unwolfme
// @TODO upload stein Opposites tracks to unwolfme?
// const junkReviews = () => import("@/components/videosjunkreviews.js");
// const junkPlays = () => import("@/components/videosjunkplays.js");
const jPlays = junkPlays.reverse();
const gParts = gwtfParts.reverse();

</script>
<template>
  <main>
    <h1 class="white xxl">Previous Projects</h1>
    <!-- <h4 class="white lg">A list of crap old youtube videos</h4> -->
    <div class="button-group">
      <button
        v-for="button of buttons"
        @click="selector=button.select"
        :key="button.display"
        :class="{active: button.select==selector}"
      >{{button.display}}</button>
    </div>
    <section v-if="selector=='junkReviews'">
      <h2>Junk Reviews (2011-2015)</h2>
      <h3>Angry movie and game reviews from back when that was a thing.</h3>
      <div v-for="(vid, ct) of junkReviews" :key="ct">
        <a :href="vid.link" target="_blank">{{vid.title}}</a>
      </div>
    </section>
    <section v-if="selector=='junkPlays'">
      <h2>Junk Plays (2013-2017)</h2>
      <h3>Adam plays video games and tries to be funny with friends who are embarrassed to be involved.</h3>
      <div v-for="(vid, ct) of jPlays" :key="ct">
        <a :href="vid.link" target="_blank">{{vid.title}}</a>
      </div>
    </section>
    <section v-if="selector=='gwtfParts'">
      <h2>Going With the Flow (2010)</h2>
      <h3>Feature comedy film that took a long time to make and sucks.</h3>
      <div v-for="(vid, ct) of gParts" :key="ct">
        <a :href="vid.link" target="_blank">{{vid.title}}</a>
      </div>
    </section>
    <section v-if="selector=='steinLive'">
      <h2>Stein (2011-2017)</h2>
      <h3 class="white">MEMBERS: </h3>
      <p class="member-berries">
        <span class="member">Adam Loewen</span> | <span class="berries">Guitar, Vox</span>
        <span class="member">Thilo Savage</span> | <span class="berries">Drums, Keys, Vox</span>
        <span class="member">Taya Jacobs</span> | <span class="berries">Keys, Vox</span>
        <span class="member">Ross Wilson</span> | <span class="berries">Bass, Vox</span>
        <span class="member">Andrew Grumelot</span> | <span class="berries">Vox</span>
        <span class="member">Ryan Augenbaugh</span> | <span class="berries">Bass</span>
        <span class="member">Gayle Towell</span> | <span class="berries">Drums</span>
        <span class="member">Alex Van Minnen</span> | <span class="berries">Drums</span>
        <span class="member">Dan Bacon</span> | <span class="berries">Guitar</span>
        <span class="member">Erik Aanastad</span> | <span class="berries">Guitar</span>
        <span class="member">John Galbraith</span> | <span class="berries">Bass</span>
        <span class="member">Sean Hall</span> | <span class="berries">Drums</span>
        <span class="member">Jeff Rottschafer</span> | <span class="berries">Bass</span>
        <span class="member">Dominic Jacobs</span> | <span class="berries">Guitar</span>
      </p>
      <h3 class="white">GENRE: Post-Crunk Poogaze Revival CyberGrunge Psychedelic Sex Rock</h3>
      <h4>Stein was a smart-alecky prog band that lasted ten years, depending on how you tally these things up.
      Starting as a duo, Stein would eventually court fourteen core members and countless
      lineup miscarriages. What never changed was the purple, green, and black.
      </h4>
      <h4>The band recorded the prog rock album Travels before leaving Missoula, MT for
      Portland, OR where after numerous botched attempts, Adam ultimately
      reformed Stein with the Accidance! lineup, developing a small following and filming a
      VHS movie out of a frickin Flophouse to promote the Lo-Fi DIY album project.
      </h4>
      <h4>Adam's vision for Stein is to always move in opposite directions, so
      having established a garage party band, the next move was a return to high concept
      progressive experimentation, and so he inflicted Shades on the band, causing more upset
      and membership changes.
      </h4>
      <h4>
      In a last ditch effort to keep the band afloat and gain any interest whatsoever,
      Adam penned the final Stein album, Opposites Attract, featuring disco dance beats
      and lyrics exclusively about the sex act. Needless to say, it was ridiculous.
      The finished album recording currently sits unmastered on a Google drive.
      </h4>
      <div v-for="(vid, ct) of steinLive" :key="ct">
        <a :href="vid.link" target="_blank">{{vid.title}}</a>
      </div>
    </section>
    <section v-if="selector=='randomVids'">
      <h2>Vlogs (2008-2017)</h2>
      <h3>Adam goofs around with friends, talks about stuff, and plays songs.</h3>
      <div v-for="(vid, ct) of randomVids" :key="ct">
        <a :href="vid.link" target="_blank">{{vid.title}}</a>
      </div>
    </section>
  </main>
</template>
<style lang="sass" scoped>
.member-berries
  display: grid
  grid-template-columns: auto 40px auto
  max-width: 600px
  justify-content: center
  margin: auto
  .member
    color: purple
  .berries
    color: white
    text-transform: uppercase
.clcike
  color: purple
  cursor: pointer
h4
  max-width: 500px
  margin: auto
  margin-bottom: 1em
h2, h3, h4
  color: limegreen
a
  color: white
  text-decoration: none
  font-size: 22px
a:active
  color: white
.button-group
  display: flex
  justify-content: center
  button
    background-color: rgb(48, 16, 88)
    color: white
    padding: 0.6em
    border-radius: 7px
    margin: 0.2em
    font-size: medium
  button:hover
    background-color: rgb(93, 60, 134)
  button.active
    background-color: rgb(134, 14, 108)
.white
  color: #ccc
.xxl
  font-size: xx-large
.lime-green
  color: limegreen
.lg
  font-size: large
</style>
@/composables/videosgwtf@/composables/videosjunk@/composables/videosjunkreviews@/composables/videosunwolfme@/composables/videosstein