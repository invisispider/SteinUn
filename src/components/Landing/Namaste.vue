<script setup lang="ts">
import { pageSelections } from '@/composables/landing-pages';
</script>
<template>
    <div>
        <!-- <h5>Repeat: Love Is Okay</h5> -->
        <h4>🙏🏿 Thank you for Being 🙏🏿 with us.</h4> 

    <!-- <div class="home-logo"> -->
    <!-- </div> -->
        <h4>
            This is our living website.<br>
            <span class="pedantic">Use top panels to open site menu, change color
            theme, and browse this orienting information (try arrow keys).</span> 
            </h4>

        <h2>Welcome:</h2>
        <div class="kill-birds">
            <div v-for="selection of pageSelections" class="bird" :key="selection.name">
                <router-link :to="'/landing/'+selection.name" v-if="selection.name!='Namaste'" >
                <i class="material-icons">{{ selection.icon }}</i>{{ " "+selection.name }}
                </router-link>
            </div>
        </div>
        <br>
        <h2>Site Features:</h2>
        <!-- <h4>My Treasures:</h4> -->
        <p><b><RouterLink to="/UnThinkMe">unThinkMe:</RouterLink></b> Our YouTube channel explores 
            Integral Theory in a unique voice.</p>
        <p><b><RouterLink to="/Time">unLimited Time: </RouterLink></b> Fully functioning progressive clock and calendar framework we created.</p>
        <p><b><RouterLink to="/Integral">Integral AQALATAS Map: </RouterLink></b>Educational playground exploring Ken Wilber's revolutionary philosophy with the unThinkMe flavor.</p>
        <p><b><RouterLink to="/landing/Beacon">Beacon:</RouterLink></b> A progressive-release science fiction mystery about a computerized facility that interfaces with human consciousness.</p>
        <p><b><RouterLink to="/Music">Music: </RouterLink></b> Adam provides music instruction, peformance, and holistic coaching. Get in touch if interested.</p>
        <p><b><RouterLink to="/Videos">Videos: </RouterLink></b> A dusty old archive of Adam's music and comedy projects.</p>
        <p><b><RouterLink to="/Crossword">Crossword: </RouterLink></b> An Integral Theory crossword puzzle for no reason that's pointless.</p>
        <!-- <p><b><RouterLink to="/Login">Wall Chat: </RouterLink></b>Realtime chat for logged in users. (request only).</p> -->
        
        <p><b>Contribution</b>: We encourage and <b>greatly appreciate</b> any donations or investment opportunities! 
            You can donate via <a href="https://venmo.com/u/Adam-Loewen-1">Venmo.</a> 100% goes to business development.</p>
        <!-- <p>Stay tuned for updates and please reach out via email with any requests.</p> -->
        <div class="hero-image">
            <img src="@/assets/img/adam_med.png" class="adam-med">
        </div>
        <p><span style="font-size: xx-large;"><b>Adam Loewen</b></span> is a software developer, cannabis industry specialist, and music teacher 
            from Missoula, MT. Currently seeking all types of employment globally,
            and working passionately to create unThinkMe.
        </p>
        <p> <RouterLink to="/landing/Technomancy">Opportunities:</RouterLink> We offer this website as proof that we can make 
            websites, graphics, content, music, video, visibility, community, good feelings, 
            happy times, right attitude, right livelihood. Perhaps you'd like to work with us, or help 
            out in some way, or perhaps Adam could help you bring together 
            something beautiful in any role whatsoever where the whole Integral thing would not be 
            cause for exclusion. Reach out, get in touch
            via <a href="mailto:adam.loewen@gmail.com">email</a> or <a href="https://www.linkedin.com/in/adam-loewen-3218ab48/">LinkedIn</a>,
            other options below. 💚
            <!-- collaborate on <a href="https://github.com/invisispider" target="_blank">my github</a> -->
        </p>
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