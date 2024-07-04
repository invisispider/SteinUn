<script setup lang="ts">
import { ref } from "vue";
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import { AqalLines } from "@/composables/Integral/aqal-lines";
import { AqalTypes } from "@/composables/Integral/aqal-types";
import Quadrants from "@/components/Integral/Quadrants.vue";
import Levels from "@/components/Integral/Levels.vue";
import Map from "@/components/Integral/Map.vue";
import States from "@/components/Integral/States.vue";
document.title = "Integral Theory Map";
const chosenType = ref<'base'|'gender'|'jungian'|'archetypes'|'astrology'|'bigfive'|'myers-briggs'|'enneagram'>('base');
const modeSelectorButtons = ['Map', 'Quadrants', 'Levels', 'Lines', 'Types', 'States'];
const Selected = ref('Map');
const SelectButton = (btn: string) => Selected.value = btn;
// interface LevelInfo {
//     number: string, color: string, desc: string, values: string, nickname: string
// }
const levelInfo = ref({
    number: '', 
    color: '', 
    desc: '', 
    values: '', 
    nickname: '',
    emergence: '',
    relate: ''
});
// interface LineInfo {
//     line: string,
//     name: string,
//     description: string,
//     author: string,
//     stages: {},
//     notes: string,
// }
const lineInfo = ref({
    line: "",
    name: "",
    description: "",
    author: "",
    stages: {},
    notes: "",
});
const resetLineInfo = () => {
    lineInfo.value = {
        line: "",
        name: "",
        description: "",
        author: "",
        stages: {},
        notes: "",
    }
}
const selState = ref('')
// const stateInfo = ref({});
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
type Level = 'infrared'|'magenta'|'red'|'amber'|'orange'|'green'|'teal'|'turquoise'|'indigo'|'violet'|'ultraviolet'|'clearlight'|'base';
const toggleLevel = (sel: Level) => {
    if (sel === 'base') {
        levelInfo.value = {
            number: '', 
            color: '', 
            desc: '', 
            values: '', 
            nickname: '',
            emergence: '',
            relate: ''
        };
        showInfo.value = true;
    } else {
        let temp = AqalLevels.filter((obj)=>obj.color==sel).pop();
        if (temp!==undefined) {
            levelInfo.value = temp;
            showInfo.value = true;
        }
    }
}
const toggleLine = (sel: string) => {
    let temp = AqalLines.filter((line) => line.name == sel).pop();
    if (temp!==undefined) {
        lineInfo.value = temp;
    }
}
const toggleState = (sel: string) => {
    selState.value = sel;
    showInfo.value = true;
}
</script>
<template>
    <div class="integral-wrapper">
        <div class="info-panel" v-if="showInfo" @click="toggle" key="apple">
            <template v-if="Selected == 'Levels'">
                <template v-if="!levelInfo.color">
                    <h2>Altitudes system</h2>
                    <h2>Levels of consciousness are meta-memes or super-patterns
                        that govern the thoughts, values, and behavior of people.
                    </h2>
                </template>
                <template v-else>
                    <h1>Level {{ levelInfo.number }} {{ levelInfo.color.toUpperCase() }}
                        <span style="font-size: large;">{{ levelInfo.desc }}</span>
                    </h1>
                    <h3>Nickname: 
                        <span style="font-style: italic;">{{ levelInfo.nickname }}</span>
                    </h3>
                    <h3>Description: </h3>
                    <p>{{ levelInfo.values }}</p>
                    <h3>Historical Emergence: </h3>
                    <p>{{ levelInfo.emergence }}</p>
                    <h3>In Your World: </h3>
                    <p>{{  levelInfo.relate }}</p>
                </template>
            </template>
            <template v-else-if="Selected == 'States'">
                <template v-if="selState==='ordinary'">
                    <h1>Ordinary States</h1>
                    <p>All people experience a host of minor States, 
    but we have three Major States of consciousness that we enter every day: Waking, Dreaming, and 
    Deep Sleep.</p>
    <p>States where you are ordinarily asleep or unconscious can be accessed through 
    spiritual practice, exposing entire realms of deep meaning and revealing transcendent 
    modes of knowing and being.</p>
                </template>
                <template v-else-if="selState==='brainwaves'">
                    <h1>Brainwave States</h1>
                    <p>There is a strong desire for transpersonal mystical States to provide scientific 
    backing. One thing that is evident and easily comprehensible is EEG scans. We can explore the 
    different Branwave ranges and how they correspond to the Major Ordinary States of consciousness, 
    and also how those might correspond to the overlapping comparitive religious progression of 
    milestones along the path of waking up, transcendental mystical States as outlined in many 
    traditional and alternative schools.
    </p>
    <h3>BETA</h3> 
    <p>During the day when we take care of responsibilities, we use the awake, alert, responsive, 
    productive Beta brainwaves. These brainwaves are maxing out our resources, and they can lead to 
    stress, cynicism, and poor health. We require rest! Or else we'll start talking about Gamma 
    waves.
    </p>
    <h3>ALPHA</h3> 
    <p>When we are in a more mellow or playful state of mind, we show more Alpha waves. Deeper 
    in this range, we reach the edge of sleep (hypnagogic state). Alpha is absorptive, synthesizing, 
    and creative. Sometimes, to solve a problem, you just need to take a break.
    </p>
    <h3>THETA</h3> 
    <p>Early meditation trials showed meditators entering Alpha brain states, but it 
    was discovered that more advanced meditators get into Theta brainwaves. These are brainwaves that 
    dominate the dream state and show up more heavily in children. The Theta state is indicative 
    of access to Subtle states of waking up. However, for most of us, we only enter this state while 
    dreaming. Some of us have no dream recall, some of us have good dream recall, some of us lucid 
    dream every night and approach Theta states each night with the same awareness and recall that 
    they have throughout the day. These all tend to coarise. This is the level of Psyche, Your 
    Identity as Psyche. It's everything you know and everything you don't know. Sweetest dreams and 
    worst nightmares. Most ordinary people do not typically enter Theta states consciously. Those 
    people tend to be spiritual, but may also simply be soulful, gifted, uneven, or perhaps just a 
    healthy inner child.
    </p>
    <h3>DELTA</h3> 
    <p>The baseline hum of us as a living being. We experience a small amount of Delta (all by 
    itself) when we are in deep dreamless sleep. Totally unconscious. It turns out that the most 
    advanced meditators in particular traditions (and also Ken Wilber), are able to consciously 
    access pure Delta States while still awake and aware. This appears to be the physical basis 
    of what is commingly called spiritual enlightenment. To experience Consciousness itself, 
    without any forms or content or anything, is to see the truest and deepest version of yourself, 
    and also the world. That the two are one. That you and every other living being are identical at 
    this level, and thus the actual nature of yourself is that you are the life of the Universe. This 
    part of you exists before anything, it exists always. You are it. No matter what happens to your 
    body, no matter what happens in your story, this thing is simply there, watching, and that's 
    the actual truth. Those who experience constant consciousness through waking, dreaming, and sleep, 
    24 hours every day, experience being at every level, awake or at least present, all the time. 
    And so this sort of Nondual being is considered the ultimate form of enlightenment. To describe 
    this sort of thing in plain language completely fails to convey States that take decades for most 
    people to access. Words do not convey what it is to vibe with the entire cosmos and perceive the 
    oneness of all existence, but this isn't just an idea. It has been observed and reported all 
    throughout the world and all throughout history. It may be any number of things, but it isn't 
    fake.    
                    </p>
                </template>
                <template v-else-if="selState==='selves'">
                    <h1>Self Affinity</h1>
                    <p>As a transcendental mystic accesses higher States and State realms, it is common to 
    hear descriptions of changes to the sense of self and identity. These changing State identities 
    are here standardized into common, non-religious wording. They follow intuitively with the 
    Brainwaves and transcendental State realms.
    </p>
    <h3>PERSONALITY</h3>
    <p>Identity with Personality is typical of Children and those up to Red Meme. 
    The personality is the character that you are playing in the present moment. Children have no 
    self-monitoring, so they are pure personality. Much of the work they are to do is to gain 
    self-awareness in order to understand and control their impulsivity. As adults, we use 
    personalities in the roles that we play to fulfill our responsibilities. If overused, a 
    person can start to feel self-less or ungrounded. Being pure personality as an adult is not 
    well tolerated.
    </p>
    <h3>EGO</h3> 
    <p>Ego or I is a self-aware, reasonable agent. It understands its motives, it loves 
    and hates and respects and tolerates, it governs the use of personalities, and it is ever focused 
    on the way that it is perceived, appreciated, and responded to by others. Ego is neither good nor 
    bad; ironically, only Ego could judge it so. The ego can be any character imaginable, as all the 
    people out there... are egos.
    </p>
    <h3>PSYCHE</h3>
    <p>Disruptions in the psyche lead to mental illness, and so psychologists such as Freud 
    and Jung attempted to map and comprehend its intricate depths. As you begin to gain awareness of 
    how the psyche functions, you can see that it is the source of your thoughts and emotions and the 
    stories of your life. It is your style, your dreams, your soul. A person who begins to identify 
    as Psyche, or is Psyche-aware, having Psychic States of consciousness, has fairly direct 
    consciousness of their own process of constructing reality. Psychosis is the Psyche coming 
    squirting out into the Ego space. It is senior to Ego. It contains Ego. So really, the Psyche is 
    the self. The self includes more of the subconscious and the unconscious, and an awakening view 
    of the present moment.</p>
    <h3>CONSCIOUSNESS</h3>
    <p>There is one thing that is always here, whether we are waking, dreaming, or 
    deep sleeping. That is consciousness. Did you think you were dead? Naw. If I kick you, you'll 
    come right up. Something is awake, listening, and that's actually the root of who you are. It 
    is a witness to this. The simple feeling of being. Common to all sentient creatures, ever birthing 
    and evolving forms. It's You.
    </p>
    <h3>CREATION</h3>
    <p>I Am and have always been the creator of the Universe. Or rather, it is being me. 
    And You. And everyone else. We are the self-aware Universe, in fact. The singing and dancing 
    planet Earth. If you could spend eternity, in utter infinite formless nothingness, You would not. 
    You are here. I've gone into many people, and now we're all fighting with one another. If we 
    can begin to understand the nature of consciousness, and the nature of enlightenment, to 
    prioritize being awake and conceptualize as being the self-aware Universe, this is a sort of 
    rough and dirty monomyth describing, or modeling, States of consciousness.
    </p>
    <h3>BEING</h3>
    <p>The Simple Feeling of Being is common to all moments, even when you are unconscious. 
    This simple feeling is actually the deepest and truest part of your self, it is your true 
    identity. But we are conscious of a person, through a person, through other people, and so we 
    have learned and we have been trained to never access these States of utter freedom and bliss, 
    creative brilliance, weeping joy, and other-worldly visions. Integral suggests that State 
    practices are available to all people, not just dead or religious people, but that these 
    classically spiritual states of consciousness will become more commonly practiced, and 
    will produce new stages of human development. In other words, religion and romantic idealism 
    sees spirituality in the past. Integral sees it as the future. Perhaps the primary backbone 
    of future progress. But looking back, it does seem that these very same spiritual States were 
    implicated in the creation of our culture, our religions, the entire story of history, the 
    nature of the self, and the nature of the Universe.
                    </p>
                </template>
                <template v-else>
                    <h1>Spiritual States</h1>
                    <p>In this column, we are specifically talking about a generalized progression 
    of State-stages, that is, stages of States, which is classically achieved through spiritual 
    practice, typically meditation. Each of these States can be thought of as a Body, or Realm, 
    as they entirely occupy your sensory experience and awareness while you are practicing successfully. 
    Each of these States can be experienced by any one at any time, but to acquire them as Traits, 
    or to be able to access the State at will at any time, requires a very intense effort to achieve. 
    Each is experienced as a sort of reversal to the rules and the nature of reality. Each is often 
    described as an epiphany, a communion with a higher identity or being, often intense, harsh, 
    terrifying, disruptive, but nevertheless resulting in the person feeling as though they have 
    awoken from a dream into a greater reality, that they are able to face everything they were 
    never able to face before, that this experience was intensely life changing and impactful.
    </p>
    <h3>GROSS</h3>
    <p>
        This is our typical awareness. Our body. The material environment. Our personal 
    concerns and worries, our stories, our people of interest. Our work. Our activities. Our 
    stories. All the stories that everybody has. This is the gross realm, or State.
    </p>
    <h3>PSYCHIC</h3>
    <p>
        Not to be confused with paranormal abilities, it means psyche-aware. At this point, 
    a person may maintain bodily thought and awareness, but a sort of daydreaming causes them to 
    identify more with consciousness and their total holistic and ideological environment. If 
    Psychic States are practiced regularly, a person becomes considerably more lucid, they may 
    display forms of genius and high vulnerability. Psychic States, as the gateway to deeper 
    practices, can be shocking, startling, and terrifying. They can lead to re-traumatization 
    experiences, bizarre bodily phenomena, and general spooky stuff.
    </p>
    <h3>SUBTLE</h3>
    <p>
        The Subtle is an entire realm of pure mind. One way to hypothetically describe 
    this state is that it is like dreaming while fully awake. Both parts are on at once. It takes 
    a long time to enter, discover, and maintain these States. This is deep into 
    the practice. A person who spends a lot of time in Subtle States is psyche-aware. They 
    are self-aware of how their reality is constructed by stories and memes, or archetypes.
    </p>
    <h3>CAUSAL</h3>
    <p>
        This is the most Subtle, or Causal, realm or level. A person in this State will 
    show practically no Beta or Alpha brainwaves, 
    and they will describe dropping out of body and mind and 
    becoming the pure essence of reality itself. This is the typical form of 
    spiritual enlightenment, ultimate oneness, the experience of gnosis or godhead. The self truly sees, once 
    and for all, that it is nothing else besides the self, looking at the self. The Witness. 
    No matter what happens, this is here, everywhere, forever. I am this. Infinite. Empty. Everything 
    and everybody you know, every story, this whole dang thing is You. You crawled out of the ocean, 
    you set this whole thing up. Its very funny. It is definintely not words, though, and it is 
    definintely not knowledge. Talking about it is only to attempt to translate a State to another State.
    </p>
    <h3>NONDUAL</h3>
    <p>
        It's always a little funny for a middling student of meditation to attempt to 
    describe the ultimate culmination and fulfillment of the practice. But this is what Integral is 
    all about. It is to shed some basic light, and lend some basic categories, to this whole 
    thing that is the ultimate freedom, the ultimate bliss and surrender, the ultimate meaning of 
    life, the universe, and everything. I will attempt to utterly spoil the story for you, with 
    the understanding that I'm not entirely sure that I stayed awake through the second half 
    of the picture. The Causal State reveals the ultimate essence of the self and reality, a 
    sort of singularity. The Nondual State practicing individual, is then integrating the Causal State 
    into Waking, bringing that State into the world, as the world, as the most active agent 
    and the most passive, emotionally-invested observer. This is a fully awake, fully enlightened 
    person, if they stay that way, all the time. It seems to be marked by constant consciousness 
    throughout waking, dreaming, and deep sleep, and the ability to silence the entire brain at 
    will. It is exceedingly rare.
                    </p>
                </template>

            </template>
        </div>
        <div class="home-changer">
            <a @click="SelectButton(btn)" v-for="btn in modeSelectorButtons" :key="btn">{{ btn }}</a>
        </div>
        <h1></h1>
        <!-- <h1 @click="toggleBase" class="module-name">{{ Selected }}</h1> -->
        <Map v-if="Selected == 'Map'" />
        <Quadrants v-else-if="Selected == 'Quadrants'" />
        <Levels v-else-if="Selected == 'Levels'"
                @infrared="toggleLevel('infrared')" @magenta="toggleLevel('magenta')" @red="toggleLevel('red')"
                @amber="toggleLevel('amber')" @orange="toggleLevel('orange')" @green="toggleLevel('green')"
                @teal="toggleLevel('teal')" @turquoise="toggleLevel('turquoise')" @indigo="toggleLevel('indigo')"
                @violet="toggleLevel('violet')" @ultraviolet="toggleLevel('ultraviolet')"
                @clearlight="toggleLevel('clearlight')" 
        />
        <template v-else-if="Selected == 'Types'">
            <div class="btn-group">
                <button @click="chosenType='base'">unthinkme</button>
                <button @click="chosenType='gender'">gender</button>
                <button @click="chosenType='jungian'">jungian</button>
                <button class="darken" v-for="tGet, index of AqalTypes" @click="chosenType = index" :key="index">{{ index }}</button>
            </div>
            <div v-if="chosenType=='base'" class="types-info">
                <h1>unThinkMe Types</h1>
                <p>Along the bottom are buttons for some quick handy guides to some of the more popular or valid
                    Type systems. Integral recommends that you are Type-aware and use at least one Type system, and
                    at the same time, does not recommend any particular system as wholly succesful on its own merits, particularly
                    because they are pre-Integral, so the Types will be influenced by Levels and Quadrants more than 
                    anything else. We may debate their merits, but these are some of our recommendations, as well 
                    as quick reference to popular and common systems. This small guide explains our own perspective.
                </p>

                <h3>Horizontal and Vertical</h3>
                <p>If Levels are thought of as the Vertical stages of Growing Up, then Types should
                    account, Horizontally, for the differences between two people at the same Level,
                    which should ideally remain the same Type as they develop through subsequent Levels.
                    Types should explain a person's "preference" for particular Quadrants, some particular
                    Lines, why they might gravitate towards a particular Altitude, why they might be inclined
                    or disinclined toward States, etc. 

                    Ideally, a finished Types Module should fully explain differences in perspective that 
                    are not covered by the other four Modules. territory apart from the other Modules, or 
                    full flesh out the space left, 
                    Ironically, gender is one of the most useful and robust typologies, as it 
                    is quite predictive, it is mostly lifelong
                </p>
                And so because of that, the flaw of every Type system is that it fails to 
                account for Levels and Lines, or development. The integral developer comes in 
                with this model and says, look, Quadrants, Levels, and States is the thing that 
                everybody is failing to understand. They have done decent work sorting out Lines 
                and Types. They have done nothing but Lines and Types, mostly Types.

                The perfect Type system for an Integral map would be one where the Type remains 
                true all throughout development, including State practice, and shows up in all 
                four Quadrants, or otherwise, would have to account for these flaws theoretically.
                To a similar extent, if a typology did not contain any measure of neuroticism, 
                it would be unwise to dismiss the official diagnostic criteria of mental disorders,
                because mental disorders, just like maturity, have an enormous effect on a persons 
                thoughts, feelings, and behaviors.
                
                Thus, there is no recommended Integral Types system.

                However...

                Let us say that our goal is to find the best existing Types system, and we need 
                it to be very simple and general like the other modules. Well, it would be safe 
                to dismiss 

                <p>Let me be honest with you. Integral includes Types as one of Five Modules 
                    that describe the nature of reality, and nevertheless, the Integral perspective 
                    is reductive towards Types, just as First Tier perspectives are reductive towards 
                    Integral. 
                </p>
                <h3>I'll clarify that.</h3>
                <p>
                    This is Green Meme world. The academic and philosophical community is very opposed 
                    to notions of fundamental heirarchy (in this case a developmental heirarchy), as 
                    well as "labeling" people or their behavior. Green hates Altitudes and finds it 
                    reductionistic, offensive, stereotyping, and oppressive.
                </p>
                <p>
                    If you have to be able to tell the difference between people, as in every social 
                    pursuit that there is, and if you want to understand why you are the way you are, 
                    what sort of lifestyle and occupation would be appropriate for you, you are left 
                    with Types. People, and I mean ordinary people, turn to extraordinarily pseudo-scientific,
                    conceptually and methodologically bankrupt systems, such as astrology, which is 
                    a typology sporting zero predictive power or pragmatic use for stated purposes.
                </p>
                <h3>The Typology Problem</h3>
                <p>
                    You want to understand the differences between people. 
                    You're not allowed to consider Levels or any sort of heirarchy of maturity. You're 
                    left with what? Certainly not gender or race. Not appearances. Even if you could gain a lot of 
                    information and references about a 
                    person, so what? How do you organize this information? Who will be smart? Nice? Honest? Fair? 
                    Respectful? Fun? These are differences between people. What is the system? 
                    What's the difference between people? Great, let's get into this.
                </p>

                <h3>Non-Integral Method</h3>
                <p>The concept of Types is just as profound and powerful as the other modules. 
                    The primary problem with Types, as observed by Integral, is that they 
                    sort out people and things without regard to any universal theory.
                    Thus, if I sort my socks into light and dark colors, I have a Typology. If a Dutch person 
                    offends me and now I don't like Dutchmen, that's a Typology. 
                </p>
                <h3>Integral Method</h3>
                <p>
                    If we were looking at larger issues, 
                    such as the nature of reality, we would seek out a more inductive, top-down approach. It isn't that 
                    I hate the Dutch, it's that I hate everyone who offends me. And it isn't that I hate, it's that I'm 
                    protecting myself from disrespect. What behaviors offend me? At what point in that behavior am I justified
                    in protecting myself from it? Right, let's 
                    get organized. That's the way to solve problems. I should organize socks according to a system which 
                    exhausts all of my potential sock-organizing parameters, needs, and contigencies. "There's two Types of 
                    people in this world," is the way to start a lecture for your nephew. Serious people want some 
                    sort of realistic, mature concept of what Types of people, thinking, and behavior exist in their reality.
                </p>
                <h3>Mainstream Types</h3>
                <p>
                    Clinical psychology (as opposed to positive) identifies people by assessing their symptoms and comparing
                    them against diagnostic criteria. This is an extremely advanced and highly 
                    scientific human Type system, intended to treat people with mental health problems. This 
                    methodology is not coming from a sophisticated understanding of consciousness, the mind, 
                    the brain, and behavior. It is coming from a practical scientific approach of assembling 
                    complaints (symptoms) into categories, and then testing chemicals to see if there is a 
                    statistical reduction of complaints. If there is a statistical reduction of complaints, and side 
                    effects are decidedly worth it, it then becomes medicine for consciousness, the mind, the brain, and behavior, regardless 
                    of what's actually happening. If you complain, and want help, you describe symptoms and will be diagnosed
                    according to clinical Typing systems. It is just as likely to get you to stop complaining about 
                    symptoms as it claims to be.
                </p>
                <p>People start diagnosing themselves with various illnesses because the DSM criteria is the 
                    only Type system that is considered serious. And it is influenced by politics, pharmaceutical interests, 
                    medical lobbying, and chemical dependency.
                </p>

                <h3>Types and Levels</h3>
                <p>Just so we've said it, Levels is the best Type system. But that's vertical Typing, and in this 
                    theory, Types have to be horizontal, or else we're just talking about Levels. Vertical means 
                    that people move through the same sequence, in one direction, over time. Horizontal  
                    generally means that the Typing should remain consistent, should not correlate with Levels, and 
                    should not show a developmental sequence or pattern. In a horizontal system such as Myers-Briggs, 
                    it is always stressed that no Type is better than any other. They are like male and female, or left 
                    and right handedness. We also like to stress that no Level is superior. There's nothing wrong with being a
                    baby, child, teen, adult, or senior, and there's nothing wrong with having lesser, or greater, 
                    comprehension, intellect, and ability. Lower Levels are brilliant, and they astound higher Levels and outwit 
                    them all the 
                    time. Nevertheless, as responsible and caring adults, we are stewards of 
                    development. Everyone has a sort of gravitation. Everyone pulls others towards being more like them.
                </p>
                <h3>Primordial Types</h3>
                <p>
                    Anything that has features has Types. It might split into twos, or threes, or seven, or it might be 
                    complicated and subjective how to divide it up, due to complexity. Here you may explore sacred geometry,
                    numerology, and alchemy, that propose various universal Typologies. Having acknowledged that extant 
                    Typologies may serve, but are derived from non-Integral standards, we then may feel disappointed, and 
                    seeking a truly Integral Type system. And the Integral perspective, if exercised fully, will see the
                    astounding conceptual overlap between Type systems, and for our own recommended system, we will say 
                    Jungian Types (not archeptypes but cognitive functions), and attempt to show that they all say similar
                    things anyway.
                </p>
                <h3>Technomancy Brief</h3>
                <p>In coding languages, a Type is a way of defining a data structure, using a keyword to refer conceptually 
                    to an expected set of features (parameters), or sub-types. Likewise, in consciousness, a Type defines 
                    a set of features, parameters, and sub-Types that define the general flavor of overall personality.
                    So to relate the question, if some of the basic data types might be for example string, integer, binary,
                    list, object, blob, we are investigating the basic Types applying to thoughts, feelings, 
                    relationships, and character.
                </p>
            </div>
            <div v-else-if="chosenType=='gender'">
                <h3>Sexing Nature</h3>
                <p>
                    Male and female is a duality 
                    which appears to exist at every Level of reality, including sex, gender, and sexual orientation, all of 
                    which occur at particular Levels. At the material Level, we have form and emptiness, matter and space,
                    something and nothing. As life forms, we have some sort of fundamental sexual essence, which is expressed 
                    by DNA as genitals and reproductive features, and by male and female behaviors. These range from animal 
                    to animal, but a sperm is a little pin that penetrates into the egg, just as the penis penetrates into the 
                    vagina, the female is more the home creature, while the male is more the one who goes out. Not always. 
                    The female cares for the young, the male provides for them. Not always. 
                </p>
                <p>                    
                    The man may be more focused on
                    pracical needs, rather than social harmony. And thus will tend to introvert his feeling and extrovert his
                    thinking. The female does the opposite, extraverting her feelings, while introverting her thinking. Now, let 
                    me interrupt and say believe me, I'm not claiming there is some morality to this. I'm saying this is nature.
                    This is reality. Morality comes from higher Levels. We're talking about Life here. Because let's say that in 
                    this family of humans configured by sex and gender, that a boy is born with the same genetic code that caused 
                    his mom to like his dad. Now he's wrong about being a boy, because he likes other boys, and boys like girls.
                    Notice I'm talking like a baby. Dead giveaway. At the Level of biology, this is a boy. At the Level of sexuality, 
                    there is attraction to males. There's no conflict or problem or paradox whatsoever. As we develop into more complex
                    people with a more complex understanding of people, we will unlock a sort of duality of sex within ourselves, this 
                    I can promise you. And that does not mean that it changes your genitals, your sexual preference, or your gender.
                    Because we are talking about personality Types. What it means is that we need it to be socially acceptable for men 
                    to extravert their feelings, 
                    and for women to extrovert their thinking. Doing that more is helping us, and it helps for women 
                    to be more individualistic and men to be more collectivist. The point is, it is Amber Meme absolutistic
                    thinking which puts Europe at the center of the Universe, and the same which believes every Level of a holon
                    has to be uniformly gendered, not as God prefers but forced by human personalities, and also fundamentally 
                    viewing male as superior in every case. This not only stunts our development psychologically, but on the
                    much more subtle level of personality, it stunts our capacities as mental beings. The "spiraling" of Spiral 
                    Dynamics, or the back and forth tendency between agency versus communion, is a movement between gendered 
                    concepts, which means development implicates an integration of various levels of masculine and feminine 
                    within the self. This does not imply transgenderism, in particular, or androgyny, but rather, that gender 
                    takes place and moves within a particular set of Levels, and development is certainly transgender, as it is 
                    trans-anything. We stress these concepts quite a bit, perhaps as commentary, in that a lot of people try to 
                    elevate sex, or gender, or relationships, to some sort of supreme or absolute level of importance, and in 
                    spiritual circles, it is often suggested that higher Levels are sexual in nature and have sexual components. 
                    Our suggestion to these people is that sexual (psycho-sexual) Levels are sexual in nature. Higher Levels are 
                    higher Level, and while we've already said they have a gender dynamic within development, the sexual and power 
                    dynamics are Magenta and Red. Relationships and loyalty and true love are Amber and Orange Meme. People at higher 
                    Altitudes will continue to participate in those activities just like normal, just as they still eat and poop.
                    They can have their heart broken. They enjoy having sex. Higher Levels transcend and include lower Levels.  
                </p>
                <h3>☯️ A Lesson from the Tao ☯️</h3>
                <p>Taoism is a nondual religion, stressing that the duality of existence 
                    is illusory and nonduality is transcendent. 
                    Tao can be translated in various ways, but often, The Way. As in, the way of things. But also as in, the 
                    way. A Map. What, a Map like AQALALATAS? Actually, the Tao is the Quadrants. What?  
                    A circle represents reality. So this is a map of the nature of reality. Very simple and elegant one.
                    Notice that the Quadrants are divided by a cross, or swastika, and this is also not coincidental.
                    In the circle of reality, we trace a single wave down the middle. This wave divides the reality in two halves,
                    a light one, which is filled in with white form, and an identically shaped black one in the empty space. 
                    The black section is yin, the female essence, while the male yang, is created in the empty space of the black
                    section, depending on whether you drew it with white or black. However, a single dot, or eye, of each color,
                    is left in the center of the white and black wave, suggesting that they enfold one another, while the symmetry
                    suggests that they reflect one another, while the overall wavelike shape suggests that it is spinning or cyclical,
                    or perhaps immanent or interpenetrating.
                </p>
                <p>
                    The white is interior, consciousness, experience. The white wave is humanity, while 
                    the big black wave is the universe. The waves reflect one another, as the universe is to us whatever 
                    we understand it to be, and what we understand it to be must to some extent reflect what it actually is. 
                </p>
                <p>
                    I am the black dot in the snow. I can directly experience 
                    everything white. I can sense my tiny dot of white within the endless blackness of the unknown.
                    I can gain known information from the big white, by asking people, reading books, doing a Google
                    search. 
                    Where am I? I am in objective reality over here. How do I 
                    know that? I can't see it. It's dark around me.   
                    The black is exterior, what we are conscious of, what we
                    experience.
                </p>                
                <p>
                    In the dots, which I call eyes, we see the individual. Considering the white wave, the collective of 
                    consciousness interior, I clearly stand apart, from my own perspective. I experience me from within 
                    me, and that makes me the only known in objective reality, the white eye, as well as the black agent 
                    of my own objective understanding operating within that vast snowfield as a tiny black dot. 
                    Viewing reality as a whole, I am a tiny part of it. Viewing consciousness and knowledge as a while, 
                    I am a tiny part of it. And yet I can view reality as a whole, from my limited view, and the information 
                    and experience that I have is everything to me. And so there it is, the four aspects of nondual reality, 
                    represented by the Tao, as exactly the same thing as the Quadrants.  
                </p>
                <table>
                    <tr>
                        <th>Quadrant</th>
                        <th>Tao</th>
                        <th>Description</th>
                        <th>Cognitive Function</th>
                    </tr>
                    <tr>
                        <td>UL "I"</td>
                        <td>UR "It"</td>
                        <td>LL "We"</td>
                        <td>LR "Its"</td>
                    </tr>
                    <tr>
                        <td>White Eye</td>
                        <td>Black Eye</td>
                        <td>White Wave</td>
                        <td>Black Wave</td>
                    </tr>
                    <tr>
                        <td>My Experience</td>
                        <td>My Environment</td>
                        <td>Humanity</td>
                        <td>The Universe</td>
                    </tr>
                    <tr>
                        <td>Intuition</td>
                        <td>Sensing</td>
                        <td>Feeling</td>
                        <td>Thinking</td>
                    </tr>
                </table>
                <p>Notice we snuck in cognitive functions, too. Please read on in the Jungian 
                    section if you want your mind blown.
                </p> 

            </div>
            <div v-else-if="chosenType=='jungian'">
                <h2>Your Brain does Four Things</h2>
                <!-- <h3>Another Way</h3> -->

                <!-- <p>While various astrological systems may be philosophically useful or interesting, we reject them 
                    as personality typing systems due to the fundamental claim, that date of birth is a primary 
                    determinant of personality, which is pre-rational and empirically false. 
                </p> -->
                <p>
                    Psychologist Karl Jung provided for us two Typologies which are often referenced today. 
                    One of them (the "archetypes" section) presents to us a Typology based on the self concept in 
                    relation to arhcetypal story characters such as hero or innocent, and the idea is that in any 
                    moment, our personality is invoking, or play-acting some collection of story characters. The 
                    Typology we will explore here is the notion of four primary cognitive functions, which is the 
                    basis of Myers-Briggs, roughly equivalent. 
                </p>
                <p>The four things your brain can do are thinking, feeling, sensing, and intuiting. This is a 
                    perfect restatement of the Quadrants, and the Tao (see "gender" section), and so here, we are 
                    doing little more than stating it from a psychological perspective.  
                </p>
                <p><b>Intuiting</b> is looking inward, at the self, pattern recognizing, scanning, reflecting, introspecting.
                    It is the UL perspective, or white eye of the Tao.
                </p>
                <p><b>Sensing</b> is looking outward, at the environment, deductive, planning, organizing, tracking.
                    It is the UR perspective, or black eye of the Tao.
                </p>
                <p><b>Thinking</b> is looking outward, to the conceptual abstract, inductive, strategizing, ethical, ordering, sense-making.
                    It is the LR perspective, or black wave of the Tao.
                </p>
                <p><b>Feeling</b> is looking inward, at relationships and affiliation, trust, morality, influence, charisma, cooperation.
                    It is the LL perspective, or white wave of the Tao.
                </p>
                <h3>How it all works</h3>
                <p>Your personality is determined by your preferences for using these four functions, which are considered 
                    equally valid and valuable ways of comprehending reality. Nevertheless, we as people 
                    tend towards preferring one or the other, just as we may express as left or right handed, or one gender or 
                    another.
                </p>
                <h3>Introversion and Extraversion</h3>
                <p>
                    The first preference is an overall preference towards individual or collective mentality. The introvert 
                    feels secure in their own ideas and notions, their own company, and their own self-regulation, prefering more individualistic activities 
                    in social life. The extravert feels secure in the collective knowledge and wisdom and the give and take of energy through communication,
                    achieving things through assistance, reciprocity, and collaboration.
                </p>
                <p>
                    The overall tendency towards introversion or extraversion will apply to 
                    the primary cognitive function, which is the thing you most prefer to do, feel most secure doing, and 
                    the thing your brain does best. However, this must be balanced out with the other functions, or you
                    would be dysfunctional overall. This will cross over the up-down, or individual/collective axis 
                    of the Quadrants, or between what Jung called the Judging functions of Thinking and Feeling, versus 
                    the Perceiving functions of Sensing and Intuiting. 
                </p>
                <p>
                    If your dominant function is extraverted sensing, your secondary function is introverted feeling.
                    If your dominant function is introverted intuiting, your secondary function is extraverted 
                </p>

            </div>

            <div v-else class="types-model">
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
            <div class="btn-group">
                <button @click="resetLineInfo">unThinkMe</button>
                <button @click="toggleLine(tGet.name)" v-for="tGet, index of AqalLines" :key="index">{{ tGet.line
                    }}</button>
            </div>
            <template v-if="lineInfo.line">
                <h1>{{ lineInfo.line }}</h1>
                <h2>{{ lineInfo.name }}</h2>
                <h2>Author: {{ lineInfo.author }}</h2>
                <h3>{{ lineInfo.description }}</h3>
                <h2>Stages:</h2>
                <div v-for="({title, desc}, id) of lineInfo.stages" key="stg.title">
                    <h4>{{ id }}: {{ title }}</h4>
                    <p>{{ desc }}</p>
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
                <h3>That Chart Was Really Complicated...</h3>
                <p>We thought so too. Please do look into the research of developmental psychologists, but 
                    for everyday purposes, unThinkMe has another Mini-Model.
                </p>
                <h3>Think -> Feel -> Do</h3>
                <p>We especially like this model for the practice of trying to judge what overall Level someone 
                    mostly expresses. Break it into three parts. We have argued that it starts with comprehending 
                    the Level, perhaps talking about it and Thinking it, which then leads to seeing the Level in 
                    your environment, world, culture, and 
                    interactions, stirring you to Feel. Then it becomes a value, and you identify with the Level. Finally, 
                    that motivates a person to actually Do the Level, which is their actual behavior, baseline, and social 
                    intercourse. Thus, we contend that a person first thinks, then feels, then does. That may be a 
                    Type issue, though, and so perhaps somebody very extroverted may find themself doing things without 
                    comprehending what their motive is, and this may lead to a feeling of affinity with the group and the 
                    situation, before finally, a conceptual understanding is reached.
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
        <States v-else-if="Selected == 'States'"
        @ordinary="toggleState('ordinary')"
        @brainwaves="toggleState('brainwaves')"
        @selves="toggleState('selves')"
        @spiritual="toggleState('spiritual')"
        />
    </div>
</template>
<style lang="sass">
.integral-wrapper
    display: flex
    flex-direction: column
    align-items: center
    // max-width: 100vw
    padding-block: 3em
    p
        text-align: left
        text-indent: 3em
        margin-inline: 1.3em
    @media screen and (min-width: 1000px)
        p   
            margin-inline: 12%   
.btn-group
    position: fixed
    bottom: 0
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    button
        flex-grow: 1
        margin-inline: 2px
        padding: 0.2em
        align-items: center
        justify-content: center
        border-radius: 4px

    @media screen and (max-width: 350px)
        button
            font-size: 0.7em
.home-changer
    justify-content: center
    // position: fixed
    top: 35px
    z-index: 2
    font-size: 0.9em
    margin-inline: auto
    max-width: 100vw
    a
        flex-grow: 1
        margin-inline: 3px
        padding: 0.4em
        align-items: center
        justify-content: center
        border-radius: 4px
        // color: white
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
.integral-map 
    // p
        // text-align: left
        // text-indent: 3em
    //     margin-inline: 1.3em
    // @media screen and (min-width: 1000px)
    //     p
    //         margin-inline: 12%    
    .center-text
        text-align: center
    .modules
        text-transform: uppercase

</style>