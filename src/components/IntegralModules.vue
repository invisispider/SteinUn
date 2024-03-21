<script setup lang="ts">
import { ref } from "vue";
import { AqalTypes } from "@/components/Integral/aqal-types.js";
document.title="Integral Theory Abstract";
const chosenModule = ref('levels');
const chosenType = ref('jungian');
const modeSelectorButtons = ['Map', 'Quadrants', 'Levels', 'Lines', 'Types', 'States'];
const Selected = ref('Map');
const SelectButton = (btn) => Selected.value=btn;

</script>
<template>
    <div class="integral-theory-div">
        <div class="btn-group">
            <button @click="SelectButton(btn)" v-for="btn in modeSelectorButtons" :key="btn">{{ btn }}</button>
        </div>
        <h1>{{ Selected }}</h1>
        <template v-if="Selected=='Map'">
            <h1>Integral Theory</h1>
            <h3>It is a conceit of Stein unLimited that we are an authentic second tier holistic Turquoise enterprise.</h3>
            <p>To clarify the meaning of these words, please expore unThinkMe's visual guide to the AQALATAS Map,
                largely adapted from the theory, work, and visuals of author Ken Wilber.
            </p>
            <h3>What is the starting point of your beliefs?</h3>
            <p>Seriously, why do you think you know what you know? What are the sources that inform what you think?
               If we consider this very carefully, and let's say the goal is to include as much of absolutely everything as possible but 
               to also keep it as simple as possible, we see that reality, as you experience it right now, 
               is constructed of multiple simultaneous overlapping factors. 
            </p>
            <p>
                For example, <b>How are you feeling?</b> It's not such a simple question, is it? Sure, you have
                a pre-programmed response based on your experience with this sort of thing. But really, how are you feeling?
                Are you not more or less numb to this fundamental question at this point? Do you even know? What kind of response am I looking for here? What's the context? Are you going to 
                tell me your face itches, that I'm being annoying, pump yourself up by saying you got a raise, efface yourself 
                by saying your attractive neighbor hates you because you're annoying, your whole life story, how 
                every person you care about seems to be doing in general with their challenges,
                how human nerve cells work, detailed statistics on your brain chemistry, charts of various standards of 
                utility and wellbeing over time and region, a treatment for a
                film adaptation of the autobiographical story of your life? Are you just telling me what you 
                think I want to hear? Why would you be doing that, as opposed to anything else? How are you feeling about that?
            </p>   
            <p>
                When you go off script, you break patterns. I can tell you what the script says. I can suggest better
                versions of the script.
            </p>
            <p>
            These factors, or Five Modules of the Integral Map,
               explain why I'm saying <b>AQALALATAS: <br/>All Quadrants<br/>All Levels<br/>All Lines<br/>All Types<br/>All States<br/></b> 
               The experience of reality is the simultaneous expression of these factors. 
            </p>
            <p>One thing that might be seen as revolutionary or really cool about this perspective is that it includes you. While we tend to 
                explain reality in terms of the physical, here you are. It would be silly if there was thought to 
                be some kind of reality in which you, your personality, your drives and desires and knowledge and dreams and feelings, were 
                somehow unreal or nonexistant. Reality always includes you. It never doesn't. That's just... what reality is.
            </p>
            <p>This is a very sneaky thing the second tier does here. I'm not telling you any 
                facts, or any opinions. I'm telling you that philosophy is the result of the way that
                you relate to facts and opinions in the first place. Most of what we think, say, and do 
                is a programmed response, a repetition of a memetic pattern, a retelling of an old 
                story which may or may not still serve a valid function. The way to be free of the 
                harmful aspects of these patterns is to get better at seeing them.
                We have a highly sophisticated map (kind of the only one, really) of how
                it all works. As you can imagine, the map is not popular. 
                And the second tier is very clear that 
                we are not preaching content, just containers. Just a framework. We focus on core patterns that 
                inter-relate facts, opinions, emotions, circumstances, and ongoing outcomes. It is meta-philosophical, 
                mapping those systems which govern our comprehension of reality.
            </p>
            <p>
                The trouble is, if we start talking about applications, we start to pigeon hole
                ourselves rather quickly. This model applies to all of reality. Keep that in mind. 
                It applies very directly to philosophy, history, the humanities, and comparative religion.
                Already, that's too much. It also applies to spiritual mysticism, psychology, and self help
                topics. So, that's half of the book store. It very directly applies to politics, 
                social topics, technology, arts and pop culture. I mean, that's the whole store.
                It's as useful in the workplace as the gym, on a date night or a quiet getaway.
                So is it a valid basis upon which to form a lifestyle, a community, a business entity? 
                I've been around a while, and I say it is. So, let's try it and see.
            </p>
            <p>                
                It should also be noted that elements of this model, according to its own descriptions,
                are generally unpalatable to humanity, in the present day. The vibe of
                this theory is very second tier, so it kind of clotheslines itself on some hurdles that 
                are considered out of vogue. In particular, it assumes a great deal of human choice and 
                personal responsibility, in terms of outcomes. It has a fundamentally optimistic view of life.
                It is certainly idealistic. People are generally afraid of concepts of enlightenment, as 
                they associate these notions with death or the loss of selfhood. There are reasons that 
                the integral community is self-selecting. I truly have no time anymore for people who don't 
                get what I'm talking about here, and are upset with me about it.
            </p>
            <p>Most philosophies accept hidden assumptions: that truth must conform to what
                I'm aware of, to what I perceive, to the prejudices that I hold. These are categorized
                as First Tier, as they represent stages of consciousness that are not yet aware 
                of the starting point of their philosophy.
            </p>
            <p>As we see here already, whether you can accept or comprehend the truths presented
                here is a matter of your own development, as described by the model. The Second Tier 
                stages of consciousness are characterized by the apparent comprehension that reality 
                is dictated by personal and collective paradigms, and for First Tier values, beliefs,
                and worldviews, these paradigms are subconscious, hidden assumptions.
            </p>
            <p>Thus, the Second Tier stages reflect a capacity to define a starting point, and 
                to model and describe the nature of human development from prior to being conscious 
                of mental constructs, the stages representated by the adult population of Earth, to the 
                to the healthy Second Tier agent, which is extraordinarily rare. The Stein Unlimited
                brand and business are Turquoise in nature, and so we will provide materials here 
                to give basic outlines of Ken Wilber's Integral Theory, the AQALALATAS Map, and materials 
                relating Stein Unlimited to Second Tier motives, attitudes, approaches, and causes.
            </p>
            <p>As with all things Second Tier, this is considered open eneded and endlessly extensible.
                While I'm still basically saying the same thing Ken Wilber was saying in the 1970s, the way 
                it is being said may very well change from day to day, as will the nature of this business,
                and the nature of our personal and collective sense of identity. A process only needs to exist
                for the length of execution. This is a thing that can be, and will be, anything.
            </p>
        </template>
        <template v-else-if="Selected=='Quadrants'">
            <img src="@/assets/img/QuadrantsModel.svg" />
        </template>
        <template v-else-if="Selected=='Levels'">
            <img src="@/assets/img/AltitudesModel.svg" />
        </template>
        <template v-else-if="Selected=='Types'">
            <div class="types-model">
                <div class="btn-group">
                    <button v-for="tGet, index of AqalTypes" @click="chosenType=index" :key="index">{{ index }}</button>
                </div>
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
            <img src="@/assets/img/AltitudesModel.svg" />
        </template>
        <template v-else-if="Selected=='States'">
            <img src="@/assets/img/StatesModel.svg" />
        </template>

    </div>
</template>
<style lang="sass">
.integral-theory-div
    background-color: black
    color: white
.btn-group
    display: flex
.btn-group button:active
    color: red
</style>