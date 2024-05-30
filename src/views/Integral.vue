<script setup lang="ts">
import { ref } from "vue";
import { AqalQuadrants } from "@/composables/Integral/aqal-quadrants";
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import { AqalLines } from "@/composables/Integral/aqal-lines";
import { AqalStates } from "@/composables/Integral/aqal-states";
import { AqalTypes } from "@/composables/Integral/aqal-types";
import Quadrants from "@/components/Integral/Quadrants.vue";
import Levels from "@/components/Integral/Levels.vue";
import Map from "@/components/Integral/Map.vue";
import States from "@/components/Integral/States.vue";

document.title = "Integral Theory Abstract";
// const chosenModule = ref('levels');
const chosenType = ref('jungian');
const modeSelectorButtons = ['Map', 'Quadrants', 'Levels', 'Lines', 'Types', 'States'];
const Selected = ref('Map');
const SelectButton = (btn: string) => Selected.value = btn;
const quadInfo = ref({});
const levelInfo = ref({
    number: '', 
    color: '', 
    desc: '', 
    values: '', 
    nickname: ''
});
const lineInfo = ref({});
const selState = ref('')
const stateInfo = ref({});
const showInfo = ref(false);
const toggle = () => {
    showInfo.value = !showInfo.value
};
// const toggleBase = () => {
//     if (Selected.value !== 'Map' | 'Lines') {
//         quadInfo.value = {};
//         levelInfo.value = {};
//         showInfo.value = true;
//         lineInfo.value = {};
//     }
// }
type Quad = 'upper-left'|'lower-right'|'lower-left'|'upper-right'|'base'
const selectQuad = (sel: Quad) => {
    if (sel === 'base') {
        quadInfo.value = {};
        showInfo.value = true;
    } else {
        quadInfo.value = AqalQuadrants[sel]
        showInfo.value = true;
    }
}
type Level = 'infrared'|'magenta'|'red'|'amber'|'orange'|'green'|'teal'|'turquoise'|'indigo'|'violet'|'ultraviolet'|'clearlight'|'base';
const toggleLevel = (sel: Level) => {
    if (sel === 'base') {
        levelInfo.value = {
            number: '', 
            color: '', 
            desc: '', 
            values: '', 
            nickname: ''
        };
        showInfo.value = true;
    } else {
        levelInfo.value = AqalLevels.filter((obj) => obj.color == sel).pop();
        showInfo.value = true;
    }
}
const toggleLine = (sel) => {
    lineInfo.value = AqalLines.filter((line) => line.name == sel).pop();
}
const toggleState = (sel) => {
    selState.value = sel[0].toUpperCase()+sel.slice(1);
    stateInfo.value = AqalStates[sel];
    showInfo.value = true;
}
</script>
<template>
    <div class="integral-wrapper">
        <div class="info-panel" v-if="showInfo" @click="toggle" key="apple">
            <template v-if="Selected == 'Quadrants'">
                <template v-if="!quadInfo.x">
                    <h2>There are four dimensions to reality.</h2>
                    <h3>There is interior (subjective) and an exterior (objective).</h3>
                    <h3>There are individual and collective dimensions.</h3>
                </template>
                <template v-else>
                    <h2 style="cursor: pointer;" @click="selectQuad('base')">
                        {{ quadInfo.y.toUpperCase() }}
                        {{ quadInfo.x.toUpperCase() }}
                    </h2>
                    <h2>{{ quadInfo.description }}</h2>
                    <h2>Fields:</h2>
                    <p>{{ quadInfo.fields }}</p>
                    <h2>Strengths:</h2>
                    <p>{{ quadInfo.strengths }}</p>
                    <h2>Pathology:</h2>
                    <p>{{ quadInfo.pathology }}</p>
                </template>
            </template>
            <template v-else-if="Selected == 'Levels'">
                <template v-if="!levelInfo.color">
                    <h2>Altitudes system</h2>
                    <h2>Levels of consciousness are meta-memes or super-patterns
                        that govern the thoughts, values, and behavior of people.
                    </h2>
                </template>
                <template v-else>
                    <h1>{{ levelInfo.number }} {{ levelInfo.color.toUpperCase() }}</h1>
                    <h3>{{ levelInfo.desc }}</h3>
                    <h2>Values:</h2>
                    <h3>{{ levelInfo.values }}</h3>
                    <h2>Nickname</h2>
                    <h3>"{{ levelInfo.nickname }}"</h3>
                </template>
            </template>
            <template v-else-if="Selected == 'States'">
                <template v-if="stateInfo">
                    <h1>{{ selState }}</h1>
                    <h2>{{ stateInfo }}</h2>
                </template>
            
            </template>
        </div>
        <div class="home-changer">
            <a @click="SelectButton(btn)" v-for="btn in modeSelectorButtons" :key="btn">{{ btn }}</a>
        </div>
        <h1></h1>
        <!-- <h1 @click="toggleBase" class="module-name">{{ Selected }}</h1> -->
        <Map v-if="Selected == 'Map'" />
        <template v-else-if="Selected == 'Quadrants'">
            <Quadrants @upper-left="selectQuad('upper-left')" @upper-right="selectQuad('upper-right')"
                @lower-left="selectQuad('lower-left')" @lower-right="selectQuad('lower-right')" />
        </template>
        <template v-else-if="Selected == 'Levels'">
            <Levels @infrared="toggleLevel('infrared')" @magenta="toggleLevel('magenta')" @red="toggleLevel('red')"
                @amber="toggleLevel('amber')" @orange="toggleLevel('orange')" @green="toggleLevel('green')"
                @teal="toggleLevel('teal')" @turquoise="toggleLevel('turquoise')" @indigo="toggleLevel('indigo')"
                @violet="toggleLevel('violet')" @ultraviolet="toggleLevel('ultraviolet')"
                @clearlight="toggleLevel('clearlight')" />
        </template>
        <template v-else-if="Selected == 'Types'">
            <div class="btn-group">
                <button v-for="tGet, index of AqalTypes" @click="chosenType = index" :key="index">{{ index }}</button>
            </div>
            <div class="types-model">
                <h2>Type System: {{ chosenType[0].toUpperCase() + chosenType.slice(1) }}</h2>
                <p>{{ AqalTypes[chosenType].description }}</p>
                <template v-for="t of AqalTypes[chosenType].types">
                    <h3>{{ t.type }}</h3>
                    <p>{{ t.desc }}</p>
                </template>
                <h2>Verdict:</h2>
                <p>{{ AqalTypes[chosenType].setbacks }}</p>
            </div>
        </template>
        <template v-else-if="Selected == 'Lines'">
            <!-- <div class="lines-model"> -->
            <div class="btn-group">
                <button @click="toggleLine(tGet.name)" v-for="tGet, index of AqalLines" :key="index">{{ tGet.line
                    }}</button>
            </div>
            <template v-if="lineInfo.line">
                <h1>{{ lineInfo.line }}</h1>
                <h2>{{ lineInfo.name }}</h2>
                <h2>Author: {{ lineInfo.author }}</h2>
                <h3>{{ lineInfo.description }}</h3>
                <h2>Stages:</h2>
                <div v-for="(stg, id) of lineInfo.stages" key="stg.title">
                    <h4>{{ id }}: {{ stg.title }}</h4>
                    <p>{{ stg.desc }}</p>
                </div>
                <h3>{{ lineInfo.notes }}</h3>
            </template>
            <template v-else>
                <!-- <h2>Developmental Lines</h2> -->
                <h2>Various aspects of people develop independently.<br>
                    These can be called Developmental Lines or Streams.
                </h2>
                <p>Integral maintains that Altitudes are a system of archetypal 
                    meta-meme stage Levels 
                    which all Lines develop through. To illustrate this, we turn to the work of
                    many of the major names in the field of positive developmental psychology, 
                    and we can see in the Integral Psychograph image that all of these independent 
                    stage theories of various Lines of development have an unmistakable overlap.
                </p>
                <img alt="Integral Psychograph" class="stu-banner" src="@/assets/img/kwlines.jpg" />
                <p>(This image originally from official Integral Life resources.)</p>
                <p>The Altitudes system characterizes these core patterns and enables
                    developmentalists (which is everyone who learns or teaches) to compare 
                    across Lines and see the overlap and appreciate the true urgency of the fact 
                    that self, culture, and nature are all generated by these underlying overall 
                    modes of knowing, feeling, and being.
                </p>
                <h3>⚔️ Integral Dungeons & Dragons 🛡️
                </h3>
                <p>Consider 
                    an RPG stat sheet. Your individual stats are your Lines, and while you yourself 
                    level up as a whole character (Altitudes) your individual attribute stats will 
                    also develop <em>somewhat</em> independently. A min-maxed character is 
                    advanced in some Lines, with other Lines at low stages. This allows a 
                    low-level character to be temporarily OP. 😋
                </p>
                <!-- <img alt="Integral Psychograph" class="stu-banner" src="@/assets/img/kwaqal.jpg" /> -->
                <h3>Anything that learns, or develops, is a line. Psychologist 
                    Howard Gardner popularized the concept of <em>multiple intelligences,</em>
                    and we often use Emotional Intelligence Quotient alongside IQ. These are all 
                    approaches to Lines. 
                </h3>
                <p>While Lines are an intuitive and obvious way of analyzing the overall strengths of 
                    a human being, including moral, cognitive, care and concern, self sense, 
                    and worldview, Integral does not currently recognize an archetypal or standard
                    set of Lines. The Integral Psychograph chart is not intended to be comprehensive, 
                    exhaustive, or anything more than an essay.
                </p>
            </template>
            <!-- </div> -->
        </template>
        <template v-else-if="Selected == 'States'">
            <States 
                @ordinary="toggleState('ordinary')"
                @beta="toggleState('beta')"
                @alpha="toggleState('alpha')"
                @theta="toggleState('theta')"
                @delta="toggleState('delta')"
                @brainwaves="toggleState('brainwaves')"
                @being="toggleState('being')"
                @state="toggleState('state')"
                @gross="toggleState('gross')"
                @psychic="toggleState('psychic')"
                @subtle="toggleState('subtle')"
                @causal="toggleState('causal')"
                @nondual="toggleState('nondual')"
                @identity="toggleState('identity')"
                @personality="toggleState('personality')"
                @ego="toggleState('ego')"
                @psyche="toggleState('psyche')"
                @consciousness="toggleState('consciousness')"
                @creation="toggleState('creation')"
            />
        </template>
    </div>
</template>
<style lang="sass">
.integral-wrapper
    display: flex
    flex-direction: column
    align-items: center
    // max-width: 100vw
    padding-block: 3em
.btn-group
    position: fixed
    bottom: 0
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    :active
        color: red
    :hover
        background-color: #111
    button
        flex-grow: 1
        // background-color: #08F
        background-color: #101
        margin-inline: 2px
        box-shadow: 2px 2px rgb(74 32 126), -2px -2px rgb(126 220 74)
        padding: 0.2em
        align-items: center
        justify-content: center
        border-radius: 4px
        color: white
    button:hover
        background-color: #444
    @media screen and (max-width: 350px)
        button
            font-size: 0.7em
.home-changer
    justify-content: center
    position: fixed
    top: 1.7em
    z-index: 2
    font-size: 0.9em
    margin-inline: auto
    max-width: 100vw
    a
        flex-grow: 1
        background-color: #101
        margin-inline: 3px
        box-shadow: 2px 2px rgb(74 32 126), -2px -2px rgb(126 220 74)
        padding: 0.4em
        align-items: center
        justify-content: center
        border-radius: 7px
        color: white
    a:hover
        background-color: #444
    @media screen and (max-width: 350px)
        a
            font-size: 0.7em

.info-panel
    display: flex
    flex-direction: column
    position: fixed
    align-items: center
    z-index: 3
    bottom: 0
    right: 0
    color: #d0fff1
    background: rgba(11, 6, 14, 0.96)
    height: 100vh
    width: 100vw
    padding: 10%
    overflow: scroll
    h1
        margin: 1em 10%
        text-shadow: 1px 1px 10px black
.module-name
    margin-top: 2.3em
    margin-bottom: 0.5em
</style>