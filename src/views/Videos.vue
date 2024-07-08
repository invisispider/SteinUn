<script setup>
import junkReviews from "@/composables/videosjunkreviews";
import junkPlays from "@/composables/videosjunkplays";
import gwtfParts from "@/composables/videosgwtf";
import steinLive from "@/composables/videosstein";
import randomVids from "@/composables/videosunwolfme";
import { ref } from "vue";
// unWolfMe
const selector = ref('steinLive');
const buttons = [
  { 'select': 'steinLive', 'display': 'Stein' },
  { 'select': 'junkReviews', 'display': 'Reviews' },
  { 'select': 'junkPlays', 'display': 'Lets Play' },
  { 'select': 'gwtfParts', 'display': 'Going With The Flow' },
];
// { 'select': 'randomVids', 'display': 'Vlogs' }
// @TODO upload CCT to unwolfme
// @TODO upload tracks from There You Are?
// @TODO upload tracks from kitty blue?
// @TODO upload tracks from Junk Tracks fo sho
// @TODO upload tracks from Stepladder
// @TODO upload stein Opposites tracks to unwolfme?
const jPlays = junkPlays.reverse();
const gParts = gwtfParts.reverse();

</script>
<template>
  <div class="container">
    <h1>Previous Projects</h1>
    <!-- <h4 class="white lg">A list of crap old youtube videos</h4> -->
    <div class="button-group">
      <button v-for="button of buttons" @click="selector = button.select" :key="button.display"
        :class="{ active: button.select == selector }">{{ button.display }}</button>
    </div>
    <section v-if="selector == 'junkReviews'">
      <h2>The Junk era</h2>
      <p>For many years, Adam took ownership of the hobby status of his passions.
        He recorded music demos as Junk Tracks and made comedy videos as Junk Reviews.
        The unWolfMeLightOx channel became an outlet for "lightOx" to tell jokes and 
        bring intellectuals aspect to a generally more superficial medium.
      </p>
      <h2>Junk Reviews (2011-2015)</h2>
      <p>Following early YouTube trends, Adam rants about pop media with 
        skits, a title theme and crude homemade video effects.</p>
      <div v-for="(vid, ct) of junkReviews" :key="ct">
        <a :href="vid.link" target="_blank">{{ vid.title }}</a>
      </div>
    </section>
    <section v-if="selector == 'junkPlays'">
      <h2>Junk Plays (2013-2017)</h2>
      <p>
        Adam and Craig, or various guests who were embarrassed to be involved,  
        improvise jokes and intellectualize over gameplay footage.
      </p>
      <div v-for="(vid, ct) of jPlays" :key="ct">
        <a :href="vid.link" target="_blank">{{ vid.title }}</a>
      </div>
    </section>
    <section v-if="selector == 'gwtfParts'">
      <h1>Going With the Flow (2010)</h1>
      <h3>Unfortunately, there is no HQ version of this video in existence anymore, in spite of
        the source footage being pristine. 🙁</h3>
      <div v-for="(vid, ct) of gParts" :key="ct">
        <a :href="vid.link" target="_blank">{{ vid.title }}</a>
      </div>

      <h3>This DIY comedy film took two years to create. And kind of sucks.</h3>
      <h2>Plot</h2>
      <p>
        A time capsule of simple Summers when young people jumped in rivers in the 
        carefree alpine world of Missoula, where everyone is their own sort of weird.
        Join Brandt, the eccentric psychopath Jay, and their friend Todd who is...
        he just kind of does his own thing....
        As they embark upon a perilous journey
        with flakey friends, fun tubes, beer, a Supervolcano Survival Kit, 
        and a time machine.
      </p>
      <h2>Production</h2>
      <p>Three weird guys worked together to devise, write, and plan a movie while living together
        in a tiny apartment with two other people.
        Dustin secured a quality camera and some light and sound equipment. He organized many of the
        shoots, originally said most of the inside jokes, and his disruptiveness contributed
        greatly to the parts of the film which worked.
        Adam challenged the group to write down everything funny,
        and to take every aspect of the film seriously. 
        Thilo was the brains, the motor, and the editor of the operation. 
        <!-- Whatever task he was given, he did it profesionally -->
        <!-- and seriously. Like he was a robot programmed to do just that.  -->
        <!-- Along with Adam,  -->
        He contributed everything that was intelligent, but more noticeably,
        the absurd and non-sequitor tone.
      </p>
      <p>Sambath held the camera and said "Quiet set, quiet set, Qui-set!"
        Which became our faux production team name. Quiset Productions.
        He was also responsible for stunts and dangerous things.</p>
      <!-- <h3>All in all, it is friendly and unassuming, and if you can sit through the
        thing, and kind of get into where it's coming from,
        it's a pretty one of a kind film, with aspects that are surprisingly
        smart and funny.
      </h3> -->
      <!-- <h3>It was 100% a, "no, I'm serious - let's quit joking around - let's <em>actually</em> make a movie!" situation.
      </h3> -->
      <p>It's amazing to think that three idiots were able to pull together a film production
        with themselves as production crew and main cast, not knowing how to make movies or act, and knowing it.
        Many scenes from the script were mostly filmed and not lost or destroyed.
        <!-- We shot  -->
        All the pages from the script were shot, several reshot.
        It was edited into a feature, with special effects and rock music by Stein.
      </p>
    </section>
    <section v-if="selector == 'steinLive'">
      <img class="stu-banner" src="@/assets/img/Stein.png" />
      <h3><RouterLink to="/Music">Listen to Stein's albums on our Music page</RouterLink></h3>
      <h2>The Stein Band<br> (2006-2020)</h2>
      <h4>
        Stein was a heartfelt experimental rock band whose ever-developing sound was
        called Post-Crunk Poogaze, Psychedelic CyberGrunge, and Disco Sex Rock.
      </h4>
      <p>Smart-alecky and rarely polished, Stein performed in bars, garages,
        and basements of the Pacific Northwest for over ten years, generally living together.
        Starting as a multi-instrumental duo, Stein would ultimately court fourteen core members and countless
        lineup miscarriages. What never changed was the purple, green, and black.
      </p>
      <p class="member-berries">
        <span class="member">Adam Loewen</span> | <span class="berries">Guitar, Vox</span>
        <span class="member">Thilo Savage</span> | <span class="berries">Drums, Keys</span>
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
      <h2>YouTube Videos</h2>
      <div v-for="(vid, ct) of steinLive" :key="ct">
        <a :href="vid.link" target="_blank">{{ vid.title }}</a>
      </div>
      <h2>Lore</h2>
      <h3>Purple and Green are the duality of nature. Purple is ethereal, weblike
        essence that absorbs, detects, and authentically experiences. Green is direction, 
        purpose, and engagement with the flow of positive action.
        <!-- You can consider it like yin and yang,  -->
        Apollo and Dionysus, left and right brain, additive
        and subtractive, male and female, self and shadow. 
        <!-- We mostly exist between these two worlds, or lenses. -->
      </h3>
      <h3>But a funny thing happens when instead of opposing and reflecting one another,
        they energize and focus one another. They amplify, they eclipse, they make love, they create.
      </h3>
      <!-- <h3>The Truth, my friends... oh, the Truth.</h3>
      <h4>We looked at a Coke can and realized we should theme our brand elegantly like that.<br>
        After years of coming up with hilarious runners-up, the name Stein was unanimously
        chosen because we had a friend who would make fun of some of our stereotypical Jewish
        tones, behaviors, and rationales, by calling us "Steins."
      </h4> -->
      <!-- <h2>Formation</h2>
      <p>Adam lived a double life as a musician. While trying to gain experience playing
        in decent bands around town, his great passion was for producing demos. For many years,
        he had written hundreds and hundreds of songs, and while he was capable of writing more or less
        conventionally appealing songs, in his own practice, he was drawn towards something else.
      </p>
      <p>Songwriting, and using sound arrangement and production techniques, can be a process
        of revealing the self to the self. These are songs that came out of nowhere and have a
        strange internal symmetry.
      </p> -->
      <h4>There is nothing like the feeling of writing a song on the guitar,
        recording and producing it like a full band, and then walking around town in the middle of the
        night listening to it on headphones to check the mastering.
      </h4>
      <!-- <p>The experience of Stein rarely surpassed the energy of the demos. It was mostly
        a dream not fully rendered. A lot of why the band ultimately started to happen was
        this infectious passion that the other members had for what Adam was trying to do.
      </p> -->
      <!-- <p>We got together
        because we had in common this love of
        the strange and absurd, this friendly but rude sense of humor, we had the passion and we
        loved to play. We worked very hard and took it seriously.
      </p>
      <h3>Stein meant an awful lot to the hundreds of people who were a part of it.💜💚</h3> -->
      <h2>Early Material</h2>
      <p><em>We were making Going With the Flow, rehearsing
        generally around 40 songs, ever changing, every single evening. There were hundreds of songs,
        generally adapted from demos or acoustic songs. We were just trying to
        get good, constantly rewriting everything, changing the style, adding
        tricks.</em> 
        <!-- Eventually, we were playing shows, and became worthy of interest for local musicians. -->
      </p>
      <!-- <h2>Travels</h2> -->
      <a href="https://thesteinsound.bandcamp.com/album/shades" target="_blank">
        <img class="stu-banner" alt="travels" src="@/assets/img/stein1travels.jpg" />
      </a>
      <h2>Travels (2010)</h2>
      <p>The first set written for Stein. 
        A concept album that evokes the tone of the
        psyche as it progresses throughout the day from morning to night.
        Rough around the edges, trying too hard, often silly, Travels nevertheless
        delivers surprisingly mature riffs and cerebral lyrics, undergirded with
        an insecure positivity vibe.
      </p>
      <p>After completing Travels, Adam and Thilo moved to Portland, OR. It would be several
        years before they would have a place to rehearse again. There were many versions of
        Stein that existed in this period, including just Adam and a cellist.
        Adam played in other bands and continued making demos under the name Junk Tracks.
      </p>
      <a href="https://thesteinsound.bandcamp.com/album/accidance-2" target="_blank">
        <img class="stu-banner" alt="accidance" src="@/assets/img/stein2accidance.jpg" />
      </a>
      <h2>Accidance! (2015)</h2>
      <p>A new chapter developed when Adam moved into an art house with a basement.
        The Flophouse was an environment of inclusion and social experimentation. Multiple
        bands of many genres rehearsed and performed in the basement, there were elaborate
        theme parties, gatherings based around fiction, poetry, filmmaking, and painting.
        Stein had become a family, a tribe of sensitive outcasts
        who liked to joke around and talk about ideas. 
        Playing music was part of that.
        The music and media itself was crude, but we 
        <!-- , as creative control was much looser. -->
        <!--experiencing for the first time this sense of having a tribe -->
        felt free to
        be ourselves, like we were not alone.
      </p>
        <img class="stu-banner" alt="movies" src="@/assets/img/Accustomed2.png" />
      <p>
        Accidance! was a movie on VHS and DVD, with videos for every song, each
        directed by a different person. We had raised money on kickstarter promising
        to "swede" suggested movies. We did Jurrasic Park, Northern
        Exposure, and Twin Peaks. It was kind of pointless.
      </p>
      <a href="https://thesteinsound.bandcamp.com/album/shades" target="_blank">
        <img class="stu-banner" alt="shades" src="@/assets/img/stein3shades.jpg" />
      </a>
      <h2>Shades (2016)</h2>
      <p>Stein moves in opposite directions, so the follow-up to
        DIY basement party was something emotionally
        challenging, delicate, and serious.
        Shades is a dreamy collection of "black sheep", like
          deep cuts from non-existing bands. It created
          conflict to introduce a disciplined, high concept set with several ballads to a party
          dance band.
        <!-- </p>
        <p> -->
          What shines through is feminine, vulnerable, and thought-provoking, with
        moments of surreal beauty. The production and musicianship is competent.
        Shades is a mirror to Travels, tracing the psyche's course over the landscape of
        sleep.
        <!-- , and the reintegration of that into the complexity of life. -->
      </p>
      <img class="stu-banner" alt="shades banner" src="@/assets/img/steinshades.jpg" />
      <h2>Opposites Attract</h2>
      <p>
        Stein had stuck together, and learned to be serious. 
        A sort of sorry not sorry,
        comedy dance pop songs explicitly focused on sex. 
        Stein was a business looking to market sex, with
        the hidden agenda of being a love cult. Sex is an analogy for love.
      <!-- </p> -->
      <!-- <p> -->
        The finished album currently sits unmastered on a Google drive.
        It was ridiculous. It took too long to make. Everyone moved
        on. 
        <!-- It became imperative that Adam focus more on career. He mostly stopped playing and
        teaching music, and stopped thinking of himself as a musician. -->
      </p>
      <img class="stu-banner" alt="travels" src="@/assets/img/stein4opposites.png" />
      <!-- <h2>Stein unLimited</h2> -->
      <!-- <h3>The transformation story of Stein continues. Stay tuned for episodic,
        duality-driven Self-Help Rock<br>~The Future of Sales~</h3> -->
    </section>
    <!-- <section v-if="selector == 'randomVids'">
      <h2>Vlogs (2008-2017)</h2>
      <h3>Very young Adam goofs around with friends, talks about stuff, and plays songs.</h3>
      <div v-for="(vid, ct) of randomVids" :key="ct">
        <a :href="vid.link" target="_blank">{{ vid.title }}</a>
      </div>
    </section> -->
  </div>
</template>
<style lang="sass" scoped>
$button-text: #FDC
$button-back: rgb(40, 16, 80)
$button-active: rgb(135 19 175)
$button-hover: rgb(149 13 135 / 62%)
$a-text: #f6e1a9
$a-active: #A45
$a-hover: rgb(7 0 81 / 80%)
$limegreen: limegreen
$div-bckgrd: rgb(19 18 30 / 80%)
$box-shadow: 2px 2px rgb(74 32 126), -2px -2px rgb(126 220 74)
.stu-banner
  max-width: 500px
  margin-block: 1em
  box-shadow: 2px 2px rgb(74, 32, 126), -2px -2px rgb(126, 220, 74)
h4
  margin: auto
  margin-bottom: 1em
.button-group
  display: flex
  justify-content: center
  button
    background-color: $button-back
    color: $button-text
    padding: 0.3em
    border-radius: 7px
    margin: 0.1em
    font-size: medium
  button:hover
    background-color: $button-hover
  button.active
    background-color: $button-active

.xxl
  font-size: xx-large
.lime-green
  color: $limegreen
.lg
  font-size: large
.container
  margin-top: 2em
  section
    display: flex
    flex-flow: row wrap
    justify-content: center
    *
      justify-content: center
      width: 100vw
    @media screen and (min-width: 700px)
      p:not(.member-berries), h3, h4, h5, h6
        display: block
        padding-inline: 15%
        // max-width: 700px
      h3:has(a)
        padding-inline: 0
    span
      width: revert
    p      
      width: auto
    div:hover
      background-color: $a-hover
    div
      margin: 1em
      padding: 1em 1em 1.4em 1em
      background-color: $div-bckgrd
      font-family: Roboto
      border-radius: 5px
      box-shadow: $box-shadow
      max-width: min-content
      a
        max-width: 9em
        color: $a-text
        text-decoration: none
      a:visited
        color: $a-active
.member-berries
  padding: 1em
  border-radius: 7px
  box-shadow: $box-shadow
  // background: linear-gradient(#8f21ae, #26524f)
  display: grid
  grid-template-columns: auto 40px auto
  max-width: 600px
  justify-content: center
  margin: auto
  padding-inline: 0
  .berries
    text-transform: uppercase


  </style>