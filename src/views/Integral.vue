<script setup lang="ts">
import { ref } from "vue";
import { AqalQuadrants } from "@/composables/Integral/aqal-quadrants";
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import { AqalLines } from "@/composables/Integral/aqal-lines";
import { AqalStates } from "@/composables/Integral/aqal.states";
import { AqalTypes } from "@/composables/Integral/aqal-types";
// import { AqalStates } from "@/composables/Integral/aqal-states";
import Quadrants from "@/components/Integral/Quadrants.vue"; 
import Levels from "@/components/Integral/Levels.vue";
import Map from "@/components/Integral/Map.vue";
import States from "@/components/Integral/States.vue";

document.title="Integral Theory Abstract";
const chosenModule = ref('levels');
const chosenType = ref('jungian');
const modeSelectorButtons = ['Map', 'Quadrants', 'Levels', 'Lines', 'Types', 'States'];
const Selected = ref('Map');
const SelectButton = (btn: string) => Selected.value=btn;
const quadInfo = ref({});
const levelInfo = ref({});
const lineInfo = ref({});
const showInfo = ref(false);
const toggle = () => {
  showInfo.value = !showInfo.value
};
const toggleBase = () => {
    if (Selected.value!=='Map'|'Lines') {
        quadInfo.value = {};
        levelInfo.value = {};
        showInfo.value = true;
        lineInfo.value = {};
    }
}
const selectQuad = (sel) => {
    if (sel==='base') {
        quadInfo.value = {};
        showInfo.value = true;
    } else {
        quadInfo.value = AqalQuadrants[sel]
        showInfo.value = true;             
    }
}
const toggleLevel = (sel) => {
    if (sel==='base') {
        levelInfo.value = {};
        showInfo.value = true;
    } else {
        levelInfo.value = AqalLevels.filter((obj)=>obj.color==sel).pop();
        showInfo.value = true;
    }
}
const toggleLine = (sel) => {
    lineInfo.value = AqalLines.filter((line)=>line.name==sel).pop();
}
</script>
<template>
    <div class="integral-wrapper">
        <div class="info-panel" v-if="showInfo" @click="toggle" key="apple">
            <template v-if="Selected=='Quadrants'">
                <template v-if="!quadInfo.x">
                    <h2>There are four dimensions to reality.</h2>
                    <h3>There is interior (subjective) and an exterior (objective).</h3>
                    <h3>There are individual and collective dimensions.</h3>
                </template>
                <template v-else>
                    <h2 style="cursor: pointer;" @click="selectQuad('base')">
                        {{  quadInfo.y.toUpperCase() }}
                        {{  quadInfo.x.toUpperCase() }}
                    </h2>
                    <h2>{{ quadInfo.description }}</h2>
                    <h2>Fields:</h2>
                    <p>{{  quadInfo.fields }}</p>
                    <h2>Strengths:</h2>
                    <p>{{  quadInfo.strengths }}</p>
                    <h2>Pathology:</h2>
                    <p>{{  quadInfo.pathology }}</p>
                </template>
            </template>
            <template v-else-if="Selected=='Levels'">
                <template v-if="!levelInfo.color">
                    <h2>Altitudes system</h2>
                    <h2>Levels of consciousness are meta-memes or super-patterns 
                        that govern the thoughts, values, and behavior of people.
                    </h2>
                </template>
                <template v-else>
                    <h1>{{ levelInfo.number }} {{  levelInfo.color.toUpperCase() }}</h1>
                    <h3>{{ levelInfo.desc }}</h3>
                    <h2>Values:</h2>
                    <h3>{{ levelInfo.values }}</h3>
                    <h2>Nickname</h2>
                    <h3>"{{ levelInfo.nickname }}"</h3>
                </template>
            </template>
        </div>
        <div class="home-changer">
            <a @click="SelectButton(btn)" v-for="btn in modeSelectorButtons" :key="btn">{{ btn }}</a>
        </div>
        <h1 @click="toggleBase" class="module-name">{{ Selected }}</h1>
        <Map v-if="Selected=='Map'" />            
        <template v-else-if="Selected=='Quadrants'">
            <Quadrants 
                @upper-left="selectQuad('upper-left')" 
                @upper-right="selectQuad('upper-right')"
                @lower-left="selectQuad('lower-left')" 
                @lower-right="selectQuad('lower-right')" />
        </template>
        <template v-else-if="Selected=='Levels'">
            <Levels
                @infrared="toggleLevel('infrared')"
                @magenta="toggleLevel('magenta')"
                @red="toggleLevel('red')"
                @amber="toggleLevel('amber')"
                @orange="toggleLevel('orange')"
                @green="toggleLevel('green')"
                @teal="toggleLevel('teal')"
                @turquoise="toggleLevel('turquoise')"
                @indigo="toggleLevel('indigo')"
                @violet="toggleLevel('violet')"
                @ultraviolet="toggleLevel('ultraviolet')"
                @clearlight="toggleLevel('clearlight')"
            />
        </template>
        <template v-else-if="Selected=='Types'">
            <div class="btn-group">
                <button v-for="tGet, index of AqalTypes" @click="chosenType=index" :key="index">{{ index }}</button>
            </div>
            <div class="types-model">
                <h2>Type System: {{ chosenType[0].toUpperCase()+chosenType.slice(1) }}</h2>
                <p>{{AqalTypes[chosenType].description}}</p>
                <template v-for="t of AqalTypes[chosenType].types">
                    <h3>{{ t.type }}</h3>
                    <p>{{ t.desc }}</p>
                </template>
                <p>{{ AqalTypes[chosenType].setbacks }}</p>
            </div>
        </template>
        <template v-else-if="Selected=='Lines'">
            <!-- <div class="lines-model"> -->
                <div class="btn-group">
                    <button @click="toggleLine(tGet.name)" v-for="tGet, index of AqalLines":key="index">{{ tGet.name }}</button>
                </div>
                <template v-if="lineInfo.line">
                    <h2>Line: {{ lineInfo.line }}</h2>
                    <h2>Author: {{ lineInfo.author }}</h2>
                    <h2>Name: {{  lineInfo.name }}</h2>
                    <h3>Description: {{ lineInfo.description }}</h3>
                    <h2>Stages:</h2>
                    <div v-for="(stg, id) of lineInfo.stages" key="stg.title">
                        <h4>{{id}}: {{ stg.title }}</h4>
                        <p>{{ stg.desc }}</p>
                    </div>
                    <h3>{{ lineInfo.notes }}</h3>
                </template>
                <template v-else>
                    <h2>Developmental Lines</h2>
                    <h2>Various parts of a person or group move independently
                        through Levels of consciousness. These parts can be called
                        Lines or Streams.
                    </h2>
                </template>
            <!-- </div> -->
        </template>
        <template v-else-if="Selected=='States'">
            <States />
        </template>
    </div>
</template>
<style lang="sass">
.integral-wrapper
    display: flex
    flex-direction: column
    align-items: center
    // max-width: 100vw
.btn-group
    display: flex
    button:active
        color: red
.home-changer
    justify-content: center
    position: fixed
    top: 1.7em
    z-index: 2
    font-size: 0.9em
    margin-inline: auto
    max-width: 100vw
    a
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