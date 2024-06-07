<script setup lang="ts">
import { pageSelections } from '@/composables/landing-pages';
</script>
<template>
    <div>
        <!-- <h5>Repeat: Love Is Okay</h5> -->
        <p>🙏🏿 Thank you for Being with us. 🙏🏿 This is Stein unLimited now.
            The top panels allow you to open a menu of site features, change the color
            theme, and browse this information section. 
        </p>

        <p>I'm Adam. I'm a software developer, cannabis industry professional, music teacher, 
            storyteller, and integral theory speaker currently residing in Missoula, MT. Every person has a unique 
            signature or fingerprint of skills, passions, and abilities.
            Stein unLimited is an attempt to showcase the overlap of my diverse 
            offerings and unite them in a single brand.         
        </p>
        <p><RouterLink to="/landing/Technomancy">Software Opportunities:</RouterLink> Please contact via <a href="mailto:adam.loewen@gmail.com">email</a> or <a href="https://www.linkedin.com/in/adam-loewen-3218ab48/">LinkedIn</a>
            <!-- collaborate on <a href="https://github.com/invisispider" target="_blank">my github</a> -->
        </p><br>
        <h2>Information Sections:</h2>
        <div class="kill-birds">
            <div v-for="selection of pageSelections" class="bird" :key="selection.name">
                <router-link :to="'/landing/'+selection.name">
                <i class="material-icons">{{ selection.icon }}</i>{{ " "+selection.name }}
                </router-link>
            </div>
        </div>
        <br><br>
        <h2>Site Features:</h2>
        <!-- <h4>My Treasures:</h4> -->
        <p><b><RouterLink to="/UnThinkMe">unThinkMe:</RouterLink></b> YouTube philosophy podcasts and tutorials, stories and humor.</p>
        <p><b><RouterLink to="/Time">Time: </RouterLink></b> Open source clock and calendar system.</p>
        <p><b><RouterLink to="/Integral">Integral: </RouterLink></b>Interactive tool for exploring AQALATAS.</p>
        <p><b><RouterLink to="/landing/Beacon">Beacon:</RouterLink></b> An online science fiction novel.</p>
        <p><b><RouterLink to="/Music">Music: </RouterLink></b> Providing music instruction and holistic coaching.</p>
        <p><b><RouterLink to="/Videos">Videos: </RouterLink></b> A collection of old music and comedy projects.</p>
        <p><b><RouterLink to="/Crossword">Crossword: </RouterLink></b> I actually wrote this to impress a Tinder date.</p>
        <p><b><RouterLink to="/Login">Wall Chat: </RouterLink></b>Realtime chat for logged in users. (request only).</p>
        <p>We encourage and <b>GREATLY APPRECIATE</b> any donations that you can spare! You can donate via <a href="https://venmo.com/u/Adam-Loewen-1">Venmo.</a> 100% goes to development of <RouterLink to="/landing/SteinunLimited">Stein unLimited!</RouterLink></p>
        <p>Stay tuned for updates and please reach out via email with any requests.</p>
        <div class="hero-image">
            <img src="@/assets/img/adam_med.png" class="adam-med">
        </div>
    </div>
</template>
<style lang="sass" scoped>

.kill-birds
    display: flex
    flex-wrap: wrap
    justify-content: center
    .bird
        margin: 10px

</style>