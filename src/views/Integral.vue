<script setup lang="ts">
import { ref, watch } from "vue";
import { AqalLevels } from "@/composables/Integral/aqal-levels";
import { AqalLines } from "@/composables/Integral/aqal-lines";
import { AqalTypes } from "@/composables/Integral/aqal-types";
import Quadrants from "@/components/Integral/Quadrants.vue";
import Levels from "@/components/Integral/Levels.vue";
import Map from "@/components/Integral/Map.vue";
import States from "@/components/Integral/States.vue";
document.title = "Integral Theory Map";
const chosenType = ref<'base'|'gender'|'jungian'|'Archetypes'|'Astrology'|'Big Five'|'Myers-Briggs'|'Enneagram'>('base');
watch(chosenType, () => {
    window.scrollTo(0,0);
})
const modeSelectorButtons = ['Map', 'Quadrants', 'Levels', 'Lines', 'Types', 'States'];
const Selected = ref('Map');
const SelectButton = (btn: string) => {
    Selected.value = btn;
    window.scrollTo(0,0);
// interface LevelInfo {
//     number: string, color: string, desc: string, values: string, nickname: string
}
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
const showInfo = ref(false);
const toggle = () => {
    showInfo.value = !showInfo.value
};
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
watch(lineInfo, ()=>{
    window.scrollTo(0,0);
})
const toggleState = (sel: string) => {
    selState.value = sel;
    showInfo.value = true;
}
</script>
<template>
    <div class="integral-wrapper">
        <div class="info-panel" v-if="showInfo" @click="toggle" key="apple">
            <template v-if="Selected == 'Levels'">
                <div class="btn-group-int">
                <button v-for="{color, number} of AqalLevels" @click.stop="toggleLevel(color)">{{number}}</button>
                </div>
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
                <div class="btn-group-int">
                <button v-for="st of ['ordinary', 'brainwaves', 'selves', 'spiritual']" @click.stop="selState=st">{{st}}</button>
                </div>
                <br>
                <template v-if="selState==='ordinary'">
                    <h1>Ordinary States</h1>
                    <p>All people experience a host of minor States, 
    but we have three Major States of consciousness that we enter every day: Waking, Dreaming, and 
    Deep Sleep.</p>
    <p>States where you are ordinarily unconscious can be accessed through 
    spiritual practice, exposing entire realms of deep meaning and revealing transcendent 
    modes of knowing and being.</p>
   <p>
        We can generalize electrical brainwave activity 
        into bands of frequency, with the Beta band characteristic of alert, high energy activity, 
        Alpha more relaxed, able to step back and look at the bigger 
        picture, calm and ambivalent. Most of us are only conscious of this waking Gross realm, where we develop 
        the Levels stack in four Quadrants.
        It's very important and good. With Alpha and Beta waves, we act as Ego and Personality 
        and we make the dream work. Great job, 
        everyone!
    </p>
                </template>
                <template v-else-if="selState==='brainwaves'">
                    <h1>Brainwave States</h1>
                    <p>There is a strong desire for transpersonal mystical States to provide scientific 
    backing. One measure which is evident and easily comprehensible is EEG (electroencephalography). We can explore  
    Branwave ranges and how they correspond to Major Ordinary States of consciousness, 
    and also how those might correspond to an overlapping comparitive religious progression of 
    milestones along the path of Waking Up, or transcendental mystical States as outlined in many 
    traditional and alternative schools.
    </p>
    <h3>BETA</h3> 
    <p>During the day when we take care of responsibilities, we use the awake, alert, responsive, 
    productive Beta range. These brainwaves consume high energy, and can lead to 
    stress, depletion, and poor health. We require rest! Or else we'll start talking about Gamma 
    waves.
    </p>
    <h3>ALPHA</h3> 
    <p>When we are in a more mellow or playful state of mind, we show more Alpha range. Deeper 
    in this range, we reach the edge of sleep (hypnagogic state). Alpha is absorptive, synthesizing, 
    and creative. Sometimes, to solve a problem, you just need to take a break.
    </p>
    <h3>THETA</h3> 
    <p>Early meditation trials showed meditators entering Alpha brain states, but it 
    was discovered that more advanced meditators get into Theta ranges. These are brainwaves that 
    dominate the dream state and show up more heavily in children. The Theta state is indicative 
    of access to Subtle states of waking up. However, for most of us, we only enter this state while 
    dreaming. Some of us have no dream recall, most of us have scant dream recall, some of us lucid 
    dream every night and approach Theta states each night with the same awareness and recall that 
    we have throughout the day. These features tend to coarise. This is the Level of Identity as Psyche. 
    It's the ultimate character of the relationshp between everything Ego does and doesn't know. 
    Sweetest dreams and 
    worst nightmares, treasures and dragons. Most people do not ordinarily enter Theta states consciously. 
    Those who do can be called spiritual, and usual will identify as such. They may express Personality 
    and Ego coordinations as soulful, gifted, uneven, perhaps eccentric, healthy inner child and intuitive 
    creative vision. In these individuals, neglect of Personality and Ego (Shadow) are also common.
    </p>
    <h3>DELTA</h3> 
    <p>The baseline hum of sentient living being. We experience a small amount of Delta (all by 
    itself) when we are in deep dreamless sleep. Totally unconscious. The most 
    advanced meditators in particular traditions (and also Ken Wilber) can display the ability to consciously 
    access pure Delta States while still awake and aware. This appears to be the physical basis 
    of what is commonly called spiritual enlightenment, nondual union, or transcendence. To experience Consciousness itself, 
    without any forms or content or anything, is to see the truest and deepest version of yourself, 
    and also the world, as One. You and every other living being are identical at 
    this level, thus the actual nature of yourself is that you are the Universe. This 
    core exists before anything, always, no matter what happens to a person, or everyone, no matter 
    what happens in the story, this thing is simply here, watching. 
    Those who experience constant consciousness through waking, dreaming, and deep sleep, 
    every day, realize every Level, awake or at least present, all the time. 
    This Nondual being is considered full enlightenment, or the "fourth state", turiyatita. 
    To describe this sort of thing in plain language completely fails to convey States that 
    take decades for very dedicated experts with help to access if they are lucky. Words do not impart what it is to vibe with the 
    entire cosmos and perceive the oneness of all existence, but what we hope to convey is that 
    this is not mere mystical speculation. 
    It has been observed and reported all 
    throughout the world, throughout history. It may be interpreted countless ways, but this is real.    
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
    <p>Identity with Personality is typical of Children and those up to Amber Meme. 
    The personality is the character that you are playing in the present moment. Children have no 
    self-monitoring, so they are pure personality. Much of their work is to gain 
    self-awareness in order to understand and control their impulsivity. As adults, we use 
    personalities in the roles that we play to fulfill our responsibilities. If overused, a 
    person can start to feel self-less or ungrounded. Being pure personality as an adult is not 
    well tolerated, generally considered regressed development or personality disorder.
    </p>
    <h3>EGO</h3> 
    <p>Ego or I is a self-aware, reasonable agent. It understands its motives, it loves 
    and hates and respects and tolerates, it governs the use of personalities, and it is ever focused 
    on the way that it is perceived, appreciated, and responded to by others. Ego is neither good nor 
    bad. Ironically, Ego is the judge of it. Ego is the controller of Personality. Our concept 
    of adulthood generally describes prevalent, healthy ego.
    </p>
    <h3>PSYCHE</h3>
    <p>Disruptions in the psyche lead to mental illness, and so psychologists such as Freud 
    and Jung attempted to map and comprehend its intricate depths. As you begin to gain awareness of 
    how the Psyche functions, you can see that it is the source of concepts and feelings and the 
    stories of your life. It is your style, your dreams, your soul. A person who begins to identify 
    as Psyche, or is Psyche-aware, having Psychic States of consciousness, has fairly direct 
    consciousness of their own process of constructing reality. Psychosis is the Psyche coming 
    squirting out into the Ego space. It is senior to Ego. It contains Ego. So really, the Psyche is 
    the self. The self includes more of the subconscious and the unconscious, and an awakened holistic view 
    of the present moment.</p>
    <h3>CONSCIOUSNESS</h3>
    <p>There is one thing that is always here, whether we are waking, dreaming, or 
    sleeping. That is consciousness. How do you know to wake up when someone kicks you? 
    Something is awake, listening, and that's actually you. A witness to this everything. 
    Witnessing the simple nondual feeling of being. Common to all sentient creatures, 
    ever birthing and evolving forms.
    <!-- </p> -->
    <!-- <p> -->
        I Am, you are, and we have always been the creator of the Universe. 
        It is being us, you, and I. 
        We are the self-aware physical matter of Big Bang, the singing and dancing 
        planet Earth, the history of Mind. If you could spend eternity in utter infinite formless nothingness, 
        You would come to be and live and evolve and think and develop and Wake Up this. 
    <!-- You are here. I've gone into many people, and now we're all fighting with one another. If we 
    can begin to understand the nature of consciousness, and the nature of enlightenment, to 
    prioritize being awake and conceptualize as being the self-aware Universe, this is a sort of 
    rough and dirty monomyth describing, or modeling, States of consciousness. -->
    The Simple Feeling of Being is common to all moments, even unconscious. 
    This is the deepest core of yourself and everything, your true 
    identity. 
    </p>
    <h3>WAKING UP</h3>
    <p>
    We cannot access these higher affinities or coordinations of the mind as long as we 
    continue to construct the lower. We are conscious of a person, constructed
    into a person, viewing through a person, through other people. We 
    have learned and coordinated through training to never access these States of utter freedom and bliss, 
    creative brilliance, weeping joy, and other-worldly visions. Society continues to 
    reinforce this. 
    </p>
    <h3>RATIONAL MYSTICISM</h3>
    <p>
        Integral suggests this mono-mythic, universal donor theory of spiritual and transcendal
        State affinities and recommends meditation for the practice of Waking Up. State 
    practices are available to all people, not just dead or religious people. These 
    classically spiritual states of consciousness will become more commonplace as spirit unfolds, and 
    will produce new stages of human development. Religion and romantic idealism 
    view spirituality as a thing of the past that we have lost through corrupting development. 
    Integral sees the past for what it was, barbaric, and enlightenment as a future evolutionary potential. 
    Perhaps the backbone of progress. Looking back at history, it seems these very spiritual States were 
    are implicated in the major evolution of culture, religion, history, intellect, and the self.
                    </p>
                </template>
                <template v-else>
                    <h1>Spiritual States</h1>
                    <p>In this model, we are specifically talking about a generalized progression 
    of State-stages, that is, stages of States, classically achieved through spiritual 
    practice, typically meditation. Each of these States can be thought of as a Body, or Realm, 
    as they entirely occupy your sensory experience and awareness while you are practicing successfully. 
    Transcendental States can be experienced by anyone at any time, but to acquire them as Traits, 
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
        This is the most-Subtle, or Causal, body or State realm. A person in this State will 
    show practically no Beta or Alpha brainwaves, 
    and they will describe dropping out of body and mind and 
    becoming the pure essence of reality itself. This is the typical form of 
    spiritual enlightenment, ultimate oneness, gnosis, or godhead. The self truly sees, once 
    and for all, that it is nothing else besides the self, looking at the self. The Witness. 
    No matter what happens, this is here, everywhere, forever. I am this. Infinite. Empty. Everything 
    and everybody you know, every story, this whole dang thing is You. You crawled out of the ocean, 
    you set this whole thing up. Its very funny. It is definintely not words, though, and it is 
    definintely not knowledge. Talking about it is only an attempt to point out, or translate, one 
    State from within another.
    </p>
    <h3>NONDUAL</h3>
    <p>
        It's always a little funny for a middling student of meditation to attempt to 
    describe the ultimate culmination and fulfillment of the practice. But this is what Integral is 
    all about. It is to shed some basic light, and lend some basic categories, to this whole 
    thing that is the ultimate freedom, the ultimate bliss and surrender, the ultimate meaning of 
    life, the universe, and everything. I will attempt to spoil the ending for both of us, with 
    the understanding that I'm not entirely sure that I stayed awake through the second half 
    of the picture. The Causal State reveals the ultimate essence of the self and reality, a 
    sort of singularity. The Nondual State is then integrating Causal 
    into Waking, bringing that State into the world, as the world, as the most active agent 
    and the most passive, emotionally-invested observer. This is a fully awake and enlightened 
    person, if they stay that way, all the time. Constant consciousness 
    through waking, dreaming, and deep sleep, and the ability to silence the entire brain at 
    will. Exceedingly rare, also everpresent and always already realized. 🫥
                    </p>
                </template>

            </template>
        </div>
        <div class="home-changer home-changer-int">
            <a @click="SelectButton(btn)" v-for="btn in modeSelectorButtons" :key="btn">{{ btn }}</a>
        </div>
        <h1></h1>
        <!-- <h1 @click="toggleBase" class="module-name">{{ Selected }}</h1> -->
        <Map @next="SelectButton('Quadrants')" v-if="Selected == 'Map'" />
        <Quadrants @next="SelectButton('Levels')" v-else-if="Selected == 'Quadrants'" />
        <Levels v-else-if="Selected == 'Levels'"
                @infrared="toggleLevel('infrared')" @magenta="toggleLevel('magenta')" @red="toggleLevel('red')"
                @amber="toggleLevel('amber')" @orange="toggleLevel('orange')" @green="toggleLevel('green')"
                @teal="toggleLevel('teal')" @turquoise="toggleLevel('turquoise')" @indigo="toggleLevel('indigo')"
                @violet="toggleLevel('violet')" @ultraviolet="toggleLevel('ultraviolet')"
                @clearlight="toggleLevel('clearlight')" @next="SelectButton('Lines')"
        />
        <template v-else-if="Selected == 'Types'">
            <div class="btn-group">
                <button @click="chosenType='base'">unThinkMe</button>
                <button @click="chosenType='gender'">Gender</button>
                <button @click="chosenType='jungian'">Jungian</button>
                <button class="darken" v-for="tGet, index of AqalTypes" 
                @click="chosenType = index" :key="index">{{ index }}</button>
            </div>
            <div v-if="chosenType=='base'" class="types-info">
                <h1>Types</h1>
                <img alt="Types elemental tarot Mini-Model" class="square-banner" src="@/assets/img/TypesModel.png" />
                <p>If Levels are thought of as <b>Vertical</b> stages of Growing Up, then Types should
                    account for the things about a person that never change, the <b>Horizontal</b> aspects.
                    The prime differences between people at the same Level. What aspects
                    of human expression never change?
                </p>
                <p> Integral recommends Type-awareness and familiarity,
                    but there is no system to recommend wholly on Integral merits.
                    Extant typologies are pre-Integral, so their Types mostly correlate with unseen Levels and Quadrants more than 
                    anything else. Ironically, gender defaults as one of the more useful and robust typologies, as it 
                    is somewhat predictive, and mostly permanent. ♀️♂️
                </p>
                <p class="pedantic">Click below for overviews of popular and relevant
                    Type systems.
                </p>
                <!-- <h3>Business Opportunity</h3>
                <p> 
                    An ideal Types Module would fully explain differences in perspective that 
                    are not covered by the other four Modules. 
                    Types should explain a person's Quadrant "preference", some particular
                    Lines, why they might gravitate towards a particular Altitude, why they might be inclined
                    or disinclined toward States.
                </p> -->
                <h3>Typology Flaws</h3>
                <p>
                Type systems either deliberately ignore or entirely fail to 
                account for Levels, Lines, States, and Quadrants. 
                Integral Types should hopefully remain 
                constant throughout development, State practice, and even better if it shows up in all 
                four Quadrants. Otherwise, account for these flaws theoretically.
                If a typology contains no measure of neuroticism, Integral would recommend passing the 
                sample through the official diagnostic criteria. 
                Otherwise, mental health disorders would completely throw off any attempt 
                to find healthy human Types.
                Mental health, just like maturity and physical health, has enormous impact on a person's 
                thoughts, feelings, and behaviors. 
                </p>
                <h3>Types Are Green Meme</h3>
                <p>
                In other words, the fundamental law of typology, 
                that Types must be equally valuable, examined in isolation, and caused by nothing
                (even if that isn't true), causes us to desire an Integral Type system, or to dismiss Types 
                from Integral Theory. 
                Types are not rejected, but included as one of Five Modules 
                that describe the nature of reality. Integral may seem 
                reductive towards first tier typologies, just as First Tier perspectives are 
                reductive towards Integral. 
                </p>
                <h3>Green World 🟩</h3>
                <p>
                    Academic and philosophical communities are very opposed 
                    to notions of growth heirarchy, as 
                    well as "labeling" people or their behavior. Green dismisses Integral as 
                    reductionistic, offensive, stereotyping, and oppressive.
                    If you have to be able to tell the difference between people, as in every 
                    pursuit, and if you want to understand why you are the way you are, 
                    what sort of lifestyle and occupation would be appropriate for you, you are left 
                    with Types. Ordinary people turn to extraordinary pseudo-scientific,
                    conceptually and methodologically bankrupt systems, such as astrology, 
                    a typology sporting zero predictive power or pragmatic use for stated purposes.
                </p>
                <!-- <h3>Sorting Hat</h3> 
                <p>You study one thousand people, asking 
                them questions about how they comprehend reality, with the intent of sorting them into 
                groups. Examining your experiment responses, you manage to organize everyone into very clear and well-defined 
                groups. Clearly, you have discovered the Types of consciousness.                
                </p>
                <p>Excitedly, you bring them all back, they fill up a gym, and everyone sits together 
                in the group they have been sorted into. And you see that all the fat people are sitting 
                together, all the old people are sitting together, the people of various races sit together,
                the women all sit together, rich people sit together, gay men with gay men.
                </p>
                <p> 
                The question: Is this why we resist sorting people? We're worried that the actual 
                truth is superficial bigotry? 
                How would that gym be organized, not based on identity status, but based on character? 
                Who would sit by who in real life, if the survey was perfect? Our opinion is that other 
                Modules map the gym better than Types so far.
                </p> -->
                <!-- <p>
                We may debate their merits, but Typologies dominate the discussion because they 
                    are non-heirarchical and all Types are considered equal, as they do not track Levels. 
                </p> -->
                <h3>Primordial Types</h3>
                <p>
                    Anything that has features has Types. It might split into twos, or threes, or seven, or it might be 
                    complicated and subjective how to divide it up. Here you may explore sacred geometry,
                    numerology, and alchemy, that propose various Typologies of the kosmos. The Integral perspective acknowledges
                    the astounding conceptual overlap between Type systems, and for our own system, we 
                    recommend Jungian Types (not archetypes but cognitive functions), but also that they all 
                    hone in on the same traits: extraversion, collectivism, abstraction, coherence.
                </p>


                <h3>Types and Integral</h3>
                <p>Levels are perhaps more descriptive of people overall than any Type system. 
                    With vertical Levels, 
                    consciousness moves through the same sequence, in one direction, slowly and unevenly, without skipping,
                    over time. Horizontal  
                    means that Type should not show a developmental sequence or pattern. In general, 
                    Levels can be thought to change by traversing Types. Developmental 
                    sequences in Types are commonplace, but these often become impractical or pseudo-scientific.
                    Quadrant preference creates an implied Typology. Line preferences imply Types.
                    And of course, States are a galaxy of Types that constantly change.
                    <!-- In a horizontal system 
                    such as Myers-Briggs, 
                    it is always stressed that no Type is better than any other. They are like male and female, or left 
                    and right handedness. We also like to stress that no Level is superior. There's nothing wrong with being a
                    baby, child, teen, adult, or senior, and there's nothing wrong with having lesser, or greater, 
                    comprehension, intellect, and ability. Lower Levels are brilliant, and they astound higher Levels and outwit 
                    them all the 
                    time. Nevertheless, as responsible and caring adults, we are stewards of 
                    development. Everyone has a sort of gravitation. Everyone pulls others towards being more like them. -->
                </p>
                <h3>Illness Types</h3>
                <p>
                    Clinical psychology (as opposed to positive) identifies people by assessing their symptoms and comparing
                    them against diagnostic criteria. This is an extremely advanced and highly 
                    scientific human Type system, intended to treat people with mental health problems. The 
                    methodology is not coming from a sophisticated understanding of consciousness, the mind, 
                    the brain, and behavior. It is coming from a practical scientific approach of assembling 
                    complaints (symptoms) into categories, and then testing treatments to see if there is a 
                    statistical reduction of complaints. If there is a statistical reduction of complaints, and side 
                    effects are decidedly worth it, it then becomes medicine for consciousness, the mind, the brain, and behavior, regardless 
                    of what's actually happening. If you complain, and want help, you describe symptoms and will be diagnosed
                    according to clinical Typing. It's as likely to get you to stop complaining about 
                    symptoms as it claims to be.
                </p>
                <h3>Integral Medicine</h3>
                <p>People start diagnosing themselves with various illnesses because the DSM criteria is the 
                    only Type system that is considered serious. And it is influenced by politics, big pharma, 
                    medical lobbying, and chemical dependency. Integral includes Types of clinical pathology, 
                    suggests new mental health concepts, and offers tools to help conceptualize the various conditions.
                </p>
                <!-- <h3>The Typology Problem</h3>
                <p>
                    You want to understand the differences between people. 
                    You're not allowed to consider Levels or any sort of heirarchy of maturity. You're 
                    left with what? Certainly not gender or race. Not appearances. Even if you could gain a lot of 
                    information and references about a 
                    person, so what? How do you organize this information? Who will be smart? Nice? Honest? Fair? 
                    Respectful? Fun? These are differences between people. What is the system? 
                    What's the difference between people? Great, let's get into this.
                </p> -->

                <!-- <h3>Non-Integral Method</h3>
                <p>The concept of Types is just as profound and powerful as the other modules. 
                    The primary problem with Types, as observed by Integral, is that they 
                    sort out people and things without regard to any universal theory.
                    Thus, if I sort my socks into light and dark colors, I have a Typology. If a Dutch person 
                    offends me and now I don't like Dutchmen, that's a Typology. 
                </p> -->
                <!-- <h3>Integral Method</h3>
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
                </p> -->
                <h5 class="pedantic" style="cursor: pointer;" @click="chosenType='gender'">GENDER</h5>
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
                <h3>Agency and Communion</h3>
                <p>                    
                    <!-- The man may be more focused on
                    practical needs, rather than social harmony. And thus will tend to introvert his feeling and extrovert his
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
                    much more subtle level of personality, it stunts our capacities as mental beings.  -->
                    The "spiraling" of Spiral 
                    Dynamics, or the back and forth tendency of each Level, is a movement between gendered 
                    concepts of agency ♂️ and communion ♀️. Development implicates an integration of various Levels of masculine and feminine 
                    projection, or animus and anima (quite literally at Level 9). This does not imply transgenderism or androgyny, 
                    particularly. Rather, that genitals come from the biological Life Level of Infrared instinct, gender forms 
                    atop sex through Magenta ♀️ and Red ♂️ Personality concepts, sexual relationships and family form atop gender 
                    and relate to Amber ♀️ and Orange ♂️ needs and interests. Gender and sexual experimentation and questioning 
                    are often Green ♀️. Cognitive and character ambidextrousness is Second Tier.
                </p>
                <!-- <h3></h3> -->
                <!-- <p> -->
                    <!-- gender, and sometimes it will be into the other as your gender. Development is certainly transgender, as it is 
                    trans-anything.  -->
                    <!-- We stress these concepts, as perhaps commentary, in that spiritual legend may try to 
                    elevate sex, or gender, or relationships, to some sort of supreme or absolute level of importance.
                    In these legends, romantic love is enlightenment, higher Levels are sexual in nature 
                    and grant sexual abilities. Likewise, Amber religion sees cis gender and nuclear family as holy and sacred.
                    Our suggestion to these people is that sexual (psycho-sexual) Levels are sexual in nature. Higher Levels are 
                    higher Level, and while we've already said they have a gender dynamic within development, the sexual and power 
                    dynamics are Magenta and Red. Relationships and loyalty and true love are Amber and Orange Meme. People at higher 
                    Altitudes will continue to participate in those activities just like normal, just as they still eat and poop.
                    They can have their heart broken. They enjoy having sex. Higher Levels transcend and include lower Levels.  
                </p> -->
                <h3>☯️ Taoism ☯️</h3>
                <p>
                    Taoism is a religion of simple, elegant transcendent nonduality. 
                    Tao translates in various ways, but often, the Way. 
                    As in, the Way of things.
                    A balance of opposing dualistic principles (Yin and Yang) is the Way to enlightenment. 
                    But also, a Map shows the Way. A Map like AQALALATAS? Yeah,
                    a map of the nature of reality. 
                    <!-- Notice that the Quadrants are divided by a cross, or swastika, and this is also not coincidental. -->
                </p>
                <p>
                    What is so special about this symbol of quaternity (and Quadrants, mandala, cross, and swastika),
                    is that it applies to every Level. As we said, the Levels 
                    all have their own sense of "sex," "gender," and "orientation," or simply duality in 
                    successive Levels.
                </p>
                <p>
                    A circle is reality. In the circle of reality, a wave cuts through the middle. This wave divides 
                    reality in half,
                    a light half, filled in with white form, and an identical black half is reflected in the 
                    symmetrical empty space. 
                    The white section is male yang, opposed to female yin. 
                    A single dot, or eye, of each color,
                    penetrates the center of each wave, suggesting they enfold and reflect 
                    one another, perhaps immanent or interpenetrating, or simply, they 
                    two are One. The overall wavelike shape suggests spinning, mixing, or a cycle.
                </p>
                <h3>Tao Quadrants</h3>
                <p>
                    White is interior, the light of consciousness, experience. 
                    Everything the whole world is conscious of is white, LL. 
                    Everything I'm conscious of is the tiny white dot, UL.
                    The ultimate nature of existence is unkown, the black wave, LR.
                    The ultimate nature of me is unkown, my black dot, UR.
                <!-- </p> -->
                <!-- <p> -->
                    The waves reflect one another, as reality appears to be whatever 
                    we understand it to be. What we understand it to be must reflect (increasingly) 
                    what it actually is. As society brings light to nature,
                    my little light goes into my work.
                    </p>
                <h3>I Made This All Up 🤣</h3>
                <p>
                    I experience myself (white dot) as separate from culture (white wave) and 
                    environment (black dot), but directly experience myself as white dot, and my 
                    abstract conception of reality (black wave). 
                    I can gain known information from the big white, by asking people, reading books, 
                    Google search. I can't see. It's dark around me. I'm alone.   
                    The black is exterior, what we are conscious of, what we
                    experience.
                </p>                
                <p>
                    And I am aware that the collective (white wave LL) can see my body and environment 
                    (black eye UR) directly, and I see that I punch a hole in their conformity from my own perspective 
                    by experiencing myself. 
                    None of them are like me. I'm only this one. 
                    I'm a tiny part of their world, a tiny informatino source (White Wave LL), and a 
                    tiny part of reality (Black Wave LR). 
                    And yet I can view reality as a whole, and the information 
                    and experience that I have (Tao) is all of reality from anyone's perspective.   
                </p>
                <table class="work-schedules">
                    <tr>
                        <th>Quadrant</th>
                        <td>UL "I"</td>
                        <td>UR "It"</td>
                        <td>LL "We"</td>
                        <td>LR "Its"</td>
                    </tr>
                    <tr>
                        <th>Tao</th>
                        <td>White Eye</td>
                        <td>Black Eye</td>
                        <td>White Wave</td>
                        <td>Black Wave</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>My Experience</td>
                        <td>My Environment</td>
                        <td>Humanity</td>
                        <td>The Universe</td>
                    </tr>
                    <tr>
                        <th>Jung Function</th>
                        <td>Intuition</td>
                        <td>Sensing</td>
                        <td>Feeling</td>
                        <td>Thinking</td>
                    </tr>
                </table>
                <!-- <p>Notice we snuck in cognitive functions, too. Please read on in the Jungian 
                    section if you want your mind blown.
                </p>  -->
                <h5 class="pedantic" style="cursor: pointer;" @click="chosenType='jungian'">JUNGIAN</h5>
            </div>
            <div v-else-if="chosenType=='jungian'">
                <h2>Your Brain does Four Things</h2>
                <!-- <h3>Another Way</h3> -->

                <!-- <p>While various astrological systems may be philosophically useful or interesting, we reject them 
                    as personality typing systems due to the fundamental claim, that date of birth is a primary 
                    determinant of personality, which is pre-rational and empirically false. 
                </p> -->
                <p>
                    Psychologist Carl Jung provided for us two Typologies which are often referenced today. 
                    One of them ("archetypes" section) presents a Typology based on self concept  
                    role playing archetypal built-in story character myths. In any 
                    moment, our personality is invoking, or play-acting some collection of story characters. The 
                    Typology we will explore here is the notion of four primary cognitive functions, and is the 
                    basis of Myers-Briggs, roughly equivalent. 
                </p>
                <p>The four things your brain can do are thinking, feeling, sensing, and intuiting. This 
                    theory restates Quadrants and Tao ("gender" section), but in terms of what the 
                    Mind is doing in these four perspectives.  
                </p>
                <p><b>Intuiting</b> is looking inward, to the mystery, pattern recognizing, scanning, introspecting,
                    creativity, thrill-seeking, asserting, facing things.
                    It is the UL perspective, white eye of Tao.
                </p>
                <p><b>Sensing</b> is looking outward, at the environment, deductive, planning, organizing, tracking.
                    It is the UR perspective, black eye of Tao.
                </p>
                <p><b>Thinking</b> is looking outward, to the conceptual abstract, inductive, strategizing, ordering, sense-making.
                    It is the LR perspective, black wave of Tao.
                </p>
                <p><b>Feeling</b> is looking inward, at relationships and affiliation, trust, morality, influence, charisma, cooperation.
                    It is the LL perspective, white wave of Tao.
                </p>
                <h3>How They Work</h3>
                <p>The functions are considered 
                    equally valid and valuable ways to comprehend reality, and may suggest 
                    attachment and safety dynamics in early development, or simply native traits. 
                    Your personality is shaped by preference between these four functions, just as we may express 
                    left or right handed, or male or female gender. 
                </p>
                <h3>Introversion and Extraversion</h3>
                <p>
                    The introvert 
                    feels secure in their own ideas and notions, their own company, their own self-regulation, prefering more individualistic activities 
                    in social life. The extravert feels secure in the collective knowledge and wisdom and the give and take of energy through communication,
                    working through community, reciprocity, and collaboration.
                    <!-- This primary preference is an overall disposition towards individual (Upper, Male, white) 
                     or collective (Lower, Female, black) functioning.  -->
                </p>
                <h3>Dominant Cognitive Function</h3>
                <p>
                    This introversion or extraversion tendency applies to 
                    the primary or dominant function (sensing, intuiting, feeling, or thinking). 
                    This is what your brain does best, what 
                    you prefer and feel secure doing. This is balanced out with 
                    the other functions, or you
                    would be dysfunctional overall. 
                </p>
                <h3>Secondary Function</h3>
                <p>
                    The secondary cognitive function provides the balance of an inverse to the extraversion 
                    or introversion of the dominant. It will also cross the up-down, or individual/collective axis 
                    of the Quadrants, between the Judging functions of Thinking and Feeling, versus 
                    the Perceiving functions of Sensing and Intuiting. 
                </p>
                <p>ESxP:
                    If your dominant function is extraverted sensing (Se), your secondary function is 
                    introverted feeling (Fi) or thinking (Ti). 
                </p>
                <p>IxTP:
                    If your dominant function is introverted thinking (Ti), your secondary function 
                    is extraverted sensing (Se) or intuiting (Ie). 
                </p>
                <p>In whatever case, the two functions left out are your tertiary and inferior functions.
                    Your brain prefers the dominant function and its compensatory secondary, supplemented with 
                    the tertiary and its compliment. The remaining eight combinations are possibilities 
                    atypical of your 
                    personality. These sixteen possibilities are also Quadrants within Quadrants,
                    or aspects of Tao in relation to one another.                    
                </p>
                <h3>Are Types Integral?</h3>
                <p> One point we're 
                    trying to nail down here, all these Typologies seem to largely point out 
                    the same traits, suggesting that they are either copying one another, or pointing to 
                    universal truths. Further, as illustrated, these concepts are nearly covered by 
                    Quadrants, or an expanded notion of Quadrants. 
                </p>
                <table class="work-schedules">
                  <tr>
                    <th>Quadrants</th>
                    <th class="border-blue">UL</th>
                    <th class="border-pink">UR</th>
                    <th class="border-blue">LL</th>
                    <th class="border-pink">LR</th>
                  </tr>		
                  <tr>
                    <th>Tao Symbol</th>
                    <td class="border-blue">White Eye</td>
                    <td class="border-pink">Black Eye</td>
                    <td class="border-blue">White Wave</td>
                    <td class="border-pink">Black Wave</td>
                  </tr> 		
                  <tr>
                    <th>Functions</th>
                    <td>Intuiting</td>
                    <td>Sensing</td>
                    <td>Feeling</td>
                    <td>Thinking</td>
                  </tr>		
                  <!-- <tr>
                    <th>Big Five</th>
                    <td>C</td>
                    <td>C</td>
                    <td>O/A/C/E</td>
                    <td>O</td>
                  </tr> -->
                  <!-- <tr>
                    <th>Enneagram</th>
                    <td>7 8</td>
                    <td>5 6</td>
                    <td>2 3 4</td>
                    <td>9 1</td>
                  </tr> 	 -->
                  <tr>
                    <th>Elements</th>
                    <td class="border-blue">Fire</td>
                    <td class="border-pink">Earth</td>
                    <td class="border-pink">Water</td>
                    <td class="border-blue">Air</td>
                  </tr> 	
                  <!-- <tr>
                    <th>Gender</th>
                    <td>M/F</td>
                    <td>F/M</td>
                    <td>F</td>
                    <td>M</td>
                  </tr>	 -->
                  <!-- <tr>
                    <th>Material State</th>
                    <td>Plasma</td>
                    <td>Solid</td>
                    <td>Liquid</td>
                    <td>Gas</td>
                </tr> 		 -->
                    <tr>
                    <th>Tarot Cards</th>
                    <td class="border-blue">Wands</td>
                    <td class="border-pink">Pentacles</td>
                    <td class="border-pink">Cups</td>
                    <td class="border-blue">Swords</td>
                </tr> 		
                <tr>
                    <th>Card-ass Cards</th>
                    <td class="border-black">Clubs</td>
                    <td class="border-red">Diamonds</td>
                    <td class="border-red">Hearts</td>
                    <td class="border-black">Spades</td>
                    </tr> 					
                  <tr>
                    <th>Sorting Hat</th>
                    <td>Gryffindor</td>
                    <td>Slytherin</td>
                    <td>Hufflepuff</td>
                    <td>Ravenclaw</td>
                  </tr> 		
                  <!-- <tr>
                    <th>I</th>
                    <td>Don't</td>
                    <td>Have</td>
                    <td>A</td>
                    <td>Girlfriend</td>
                  </tr> 		 -->
                  <!-- <tr>
                    <th>Temperament</th>
                    <td>Choleric</td>
                    <td>Melancholic</td>
                    <td>Phlegmatic</td>
                    <td>Sanguine</td>
                  </tr> 		 -->
                  <!-- <tr>
                    <th>Seasons</th>
                    <td>Summer</td>
                    <td>Autumn</td>
                    <td>Winter</td>
                    <td>Spring</td>
                  </tr> -->
                </table>
                <p class="pedantic">Please correct me if I'm certainly wrong about these 
                    mythological associations.  
                    There will always be debate because 
                    these are imaginary and there are multiple correct solutions.
                </p>
                <p>We must conclude for now that many typologies are redundant and correlated with Integral 
                    Theory, and too flawed to adopt as primary Integral vocabulary. However, like Lines, Types are a lens, or way of slicing reality and consciousness 
                    up to examine them and make them more comprehensible. If Lines take the 
                    whole of reality and tear it into vertical strips of various length, Types can then 
                    organize those according to patterns which collectively emerge in the lengths of slices.
                    It is a powerful and unique mechanic in theory. In the case of diagnosis,
                    Types can devise thresholds and parameters for health and sickness. We could cover 
                    various relevant popular theories like Adult Attachment Styles, Love Language, 
                    and things like that. Among these, the Integral mind again seeks to find how they relate 
                    to one another, and which covers and includes the most reality in the least space.
                </p>
                <h3>Integral Typology</h3>
                <p>
                    Nevertheless, it is hard to believe that the uniqueness of a self, 
                    any old person, that stays with them their whole life, can not be more 
                    easily categorized in terms of commonality and difference with large 
                    percentages of the population in terms of the most salient factors,
                    and one would assume this would lead to enormous mechanical insights 
                    into the nature of Mind and Personality. 
                    For now, Integral Typology consists of 
                    using these various unrelated systems and being aware of them, while also 
                    drawing attention to a critical appreciation of the problem.
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
            <h5 class="pedantic" @click="SelectButton('States')" style="cursor: pointer;">STATES</h5>

        </template>
        <template v-else-if="Selected == 'Lines'">
            <div class="btn-group">
                <button @click="resetLineInfo">unThinkMe</button>
                <button @click="toggleLine(tGet.name)" v-for="tGet, index of AqalLines" :key="index">{{ tGet.line
                    }}</button>
            </div>
            <template v-if="lineInfo.line">
                <h2>{{ lineInfo.line }}</h2>
                <h3>{{ lineInfo.name }}</h3>
                <h3>Author: {{ lineInfo.author }}</h3>
                <p>{{ lineInfo.description }}</p>
                <h2>Stages:</h2>
                <div v-for="({title, desc}, id) of lineInfo.stages" key="stg.title">
                    <h4>{{ id }}: {{ title }}</h4>
                    <p>{{ desc }}</p>
                </div>
                <h2>Notes:</h2>
                <p>{{ lineInfo.notes }}</p>
            </template>
            <template v-else>
                <h1>Lines</h1>
                <p class="pedantic">Buttons along the bottom outline some prominent
                    Line systems.
                </p>
                <p>Particular aspects of people develop somewhat independently.<br>
                    These can be called developmental Lines, multiple intelligences,  
                    or Streams. Streams never caught on, but it 
                    emphasizes that these all flow together as the overall self or Mind, 
                    and what you consider to be the subdivisions of that flow are arbitrary 
                    to the given context or application. It's all water running downhill.
                </p>
                <h3>The Nature of Intelligence</h3>
                <p>
                    IQ is only an attempt to proxy overall cognitive aptitude, as is Altitudes.
                    We commonly understand intelligence and ability 
                    to refer to several inter-related aspects of a person. Lines are different types of intelligence, maturity, complexity, sensitivity, 
                    awareness, or development. 
                </p>
                <h3>Anything that Develops is a Line</h3> 
                <p>
                   We often use Emotional Intelligence Quotient, EQ, alongside IQ. 
                   This allows us to view cognitive development in terms of two factors, or Lines, 
                   rather than just one. Levels can be represented as one Line, two Lines, or any 
                   number of Lines, and the granularity of each scope yields application-specific insights. 
                    Psychologist <b>Howard Gardner</b> popularized the concept of <b>Multiple Intelligences,</b>
                    and proposed <b>eight of them:</b>
                </p>
                <!-- <h3>Gardner Multiple Intelligences</h3> -->
                <div style="list-style-type: none;"><b>
                    Visual-spatial<br>
                    Linguistic-verbal<br>
                    Logical-mathematical<br>
                    Body-kinesthetic<br>
                    Musical<br>
                    Interpersonal<br>
                    Intrapersonal<br>
                    Naturalistic</b>
                </div>

                <h3>Flavors of Mind</h3>
                <p>
                    Theoretically, we could consider Lines an inexaustible ocean of highly 
                    specific memetic talents (like the Badges you get in Cub Scouts), and that could 
                    yield a very interesting analysis. The opposite of that would be something like IQ or 
                    Altitudes, which attempt to generalize mental ability into a single parameter. Specific tests are common, of course, and every 
                    school child that gets an A, every karate student that gets a belt, can consider that a Line development. In terms 
                    of comprehending reality and consciousness, particular Lines and 
                    milestones are more fundamental, holistic, or essential than others. This calls for refinement of 
                    orthodox approaches, which has not been accomplished because Integral Theory is not 
                    well known.
                </p>
                <h3>Smarty Pants 👖</h3>
                <p>
                    You 
                    may call someone "smart" because they are socially adept, technically 
                    proficient, intellectually profound, considerate, inventive, 
                    witty, detail-oriented, on top of practical matters, ahead of the game, or because 
                    their pants look nice.  
                    On the other hand, people who clearly display outstanding cognitive intelligence may 
                    potentially be socially inept, absent-minded, irresponsible, morally despicable, or 
                    wear cargo shorts unironically. 
                </p>
                <h3>Lines are Not Created Equal</h3>
                <p>
                    The ability to speak clearly is more essential than the 
                    ability to tie a cherry stem inside your mouth with your tongue. Being in excellent 
                    overall physical health, body awareness, sensitivity, and control, are more essential 
                    to your humanity than specifically how well you tap dance. At the same time, in order 
                    to get to the highest Levels of tap, you would certainly require both the specific 
                    methods of the tap practice, as well as development of more general kinesthetic, musical, 
                    and physical bodily Lines. 
                </p>
                <h3>We Are Islands 🏝️</h3>
                <p>
                    While it may 
                    feel that we have strayed from the topic of comprehending reality into personality 
                    profiling, the Integral theorist must take care to observe the philosophical gravity 
                    of this concept - that a practice of developing particular abilities (practically everything 
                    a person deliberately does) results in different conceptions of reality. No matter 
                    what overall Level I believe I'm expressing, I can only comprehend this with my dominant 
                    Lines, and I probably will not comprehend advanced expressions of other Lines, communicated 
                    by others.
                </p>
               
                <h3>How Many Lines Are There?</h3>
                <p>
                    Ken Wilber names anywhere 
                    from a handful to ten of these more central or pertinent Lines, and over a hundred that have 
                    been studied overall. 
                    The grain level (how specific or general) of the Line system you use should reflect 
                    the task. An academic or scientist needs to clearly define their Line and its particular 
                    context in human development. We philosophical generalists do not require expertise 
                    in the work of numerous developmental psychologists, but the notion of independent developmental 
                    Lines recapitulating Level patterns expressed by social holons is one of Integral Theory's five 
                    central mechanics. 
                </p>
                <h3>Levels of Lines</h3>
                <p>Altitudes are a system of archetypal 
                    meta-meme Levels 
                    which all Lines develop through. To illustrate this, we turn to the work of
                    many of the major names in developmental psychology, 
                    and we can see in the Integral Psychograph image that all of these independent 
                    stage theories of various Lines of development have an unmistakable overlap.
                </p>
                <img alt="Integral Psychograph" class="stu-banner" src="@/assets/img/kwlines.jpg" />
                <p>(This image originally from Integral Life resources.)</p>
                <p>The Altitudes system characterizes these core patterns and enables
                    developmentalists (which is everyone who learns or teaches) to compare 
                    across Lines and see the overlap and appreciate the true urgency of the fact 
                    that self, culture, and nature are all generated by these underlying holonic 
                    stacks of knowing, feeling, and being.
                </p>
               
                <!-- <h3>That Chart Was Really Complicated...</h3>
                <p>We thought so too. Please do look into the philosophy of developmental psychology, but 
                    for everyday purposes, we use a Mini-Model.
                </p> -->
                
                <h3>Home Cookin 🍳</h3>
                <p>
                    For the utmost simplicity and comprehension, we encourage a <b>3-Line Mini-Model:
                    Think -> Feel -> Do. Think</b> is a proxy for various cognitive and conceptual Lines, 
                    <b>Feel</b> reflects values, 
                    self sense, affect, and affinity Lines, and <b>Do</b> generalizes Lines that measure 
                    behavior, lifestyle, and social acumen. 
                </p>
                <img alt="Lines Mini-Model Think Feel Do" class="square-banner" src="@/assets/img/LinesModel.png" />

                <!-- <h3>Think -> Feel -> Do</h3> -->
                <p>We especially like this model for the practice of trying to judge what overall Level someone 
                    mostly expresses. We have argued that it starts with comprehending 
                    the Level, perhaps talking about it and Thinking it, which then leads to seeing the Level in 
                    your environment, world, culture, and 
                    interactions, stirring you to Feel. Then it becomes a value, and you identify with the Level. Finally, 
                    that motivates a person to actually Do the Level, which is their actual behavior, baseline, and social 
                    intercourse. We believe a person first thinks, then feels, then does. That may be a 
                    Type preference, and perhaps somebody very extroverted may find themself doing things without 
                    comprehending what their motive is, and this may lead to a feeling of affinity with the group and the 
                    situation, before finally, a conceptual understanding is reached. 🤷🏿‍♀️
                </p>
                <h3>Uneven Development</h3>
                <p>
                    It is possible to be at advanced Levels in 
                    some Lines, and underdeveloped in others, allowing people to specialize in 
                    certain Lines. An athlete is clearly developing <em>something</em> about their 
                    person or intelligence, as is a salesman, a clergywoman, a navy seal, a chessmaster, 
                    or musical artist. In all of these cases, it is not particularly IQ that is  
                    developed. 
                </p>
                <h3>Hero Worship</h3>
                <p>
                    It is often safe to assume as a rule of thumb that a person's strongest talent indicates 
                    their highest-Level Line, and doesn't indicate that they are equally advanced 
                    at everything. Thus, take care in selecting teachers and role models. A 
                    movie star got there by being great at acting. A cult guru might be charismatic 
                    and persuasive above all. A comedian is quite funny. A politician is diplomatic. 
                    There is no reason to assume any 
                    of these people are safe to be around, based on their primary specialization in life.
                </p>
                <h3>Shadow of Excellence</h3>
                <p>The hallowing reminder of Lines is that a role model or hero is probably advanced 
                    in some particular Line you value, such as charisma, abilities, genius intellect, or 
                    spirituality. The Shadow side of that hero figure which is being 
                    compensated for may potentially be 
                    underdeveloped moral values, regressed psychosexual development, or pathology concerning
                    interpersonal power and control. Some of them are monsters. Most heroes turn out to be 
                    utterly normal, flawed, unimpressive people <em>other than</em> the thing they do 
                    extremely well. People 
                    can also have a lot of major Lines at very high Levels, too. This is the explicit goal 
                    of Level 7 integral developer.
                </p>
                <!-- <p>                    
                    Developmental theorists consider one specific measurable aspect 
                    of a person, for the sake of theoretical simplicity and scientific rigor, 
                    as contrasted with our project of building a holistic theory of consciousness.
                </p> -->
                
                <h3>⚔️ Integral Dungeons & Dragons 🛡️
                </h3>
                <p>Consider 
                    an RPG stat sheet. Your individual stats are your Lines, and while you yourself 
                    Level up as a whole character (Altitudes) your individual attribute stats will 
                    also develop <em>somewhat</em> independently. A min-maxed character is 
                    advanced in some Lines, with other Lines at low stages. This allows 
                    low-level characters to be OP in specialized circumstances. 😋
                </p>
                <img alt="video game character stats" class="invert stu-banner" src="@/assets/img/sotnsheet.gif" />
                <!-- <img alt="Integral Psychograph" class="stu-banner" src="@/assets/img/kwaqal.jpg" /> -->
                <h3>Integral Lines</h3>
                <p>While Lines are a methodologically superb way of analyzing specific strengths of 
                    a human being, including moral, cognitive, care and concern, self sense, 
                    and worldview, Integral does not currently recognize a satisfactory standard
                    set of Lines. Typically, these researchers set out to measure their Line in 
                    isolation, without regard for consistency within a parent structure. The Integral 
                    Psychograph chart is not intended to be comprehensive, 
                    exhaustive, or anything more than an essay. It is simply to set major important 
                    Line research side by side and see the overlap as Altitude Levels. 
                </p>
                <p>
                    It is not entirely 
                    necessary to study developmental psychology. You can get away with a Mini-Model, 
                    Spiral Dynamics, or any major Line, as long as you bear in mind
                    that various aspects of individuals show up at different Altitudes, and nobody yet 
                    has made a great case for an exhaustive, minimal, and empirically verified set of 
                    developmental Lines.
                </p>
                <p>While the examples of IQ/EQ and Multiple Intelligences propose  
                    systems of Lines, the examples below are pioneering attempts at universal 
                    Levels systems, and can be seen as roughly equivalent to Altitudes, but the key distinction 
                    between Levels and a very major Line (such as Cognition or Worldview), is that Levels occur 
                    in all four Quadrants and apply to every Line, while for the sake of scientific rigor, as 
                    opposed to philosophical completeness, a Line theorist researches and analyzes specific 
                    criteria concerning a particular aspect of a person.  
                    <h5 class="pedantic" @click="toggleLine('Worldview Structures')" style="cursor: pointer;">NEXT</h5>
                    <h5 class="pedantic" @click="SelectButton('Types')" style="cursor: pointer;">TYPES</h5>
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
.integral-wrapper
    display: flex
    flex-direction: column
    align-items: center
    // max-width: 100vw
    padding-block: 3em
    p
        margin-inline: 1.3em
        max-width: 85ch
        text-align: justify
        text-justify: inter-word
        text-indent: 3em
    // @media screen and (min-width: 1000px)
        // p   
            // margin-inline: 12% 
.home-changer
    justify-content: center
    // position: fixed
    top: 40px
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
// .home-changer-int

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
.square-banner
    max-height: 40vh
    border-radius: 10%
    max-width: 80vw
.invert
    filter: invert(1)
    max-height: 400px

.btn-group-int
    position: fixed
    display: flex
    flex-direction: row
    flex-wrap: wrap
    grid-template-columns: repeat(10, 10%)
    margin-block: 3px
    padding-inline: 1em
    // width: auto
    *
        // flex-shrink: 1
        margin: 0em 0.1em
        font-size: medium
        padding: 0.3em 0.5em


</style>