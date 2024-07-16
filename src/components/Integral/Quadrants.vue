<script setup lang="ts">
import {ref} from "vue"
type QuadRef = 'base'|'up-down'|'left-right'|'upper-left'|'upper-right'|'lower-left'|'lower-right'; 
const quadRef = ref('base')
const changeQuad = (sel: QuadRef) => {
    quadRef.value=sel
    // let tempEl = document.getElementById(sel);
    // if (tempEl) tempEl.scrollIntoView();
    // if (tempEl) 
    window.scrollTo(0, 300);
}
const emit = defineEmits('next')
</script>
<template>
    <div class="quads-container">
        <h1 id="base">Quadrants</h1>
        <p><span class="pedantic">Click a Quadrant or axis for more info.</span></p>
        <svg class="quadrants-svg"
            width="757.66882"
            height="766.45337"
            viewBox="0 0 757.66882 766.45337"
            version="1.1"
            id="svg1"
            inkscape:version="1.3.2 (091e20ef0f, 2023-11-25, custom)"
            sodipodi:docname="QuadrantsModel2.svg"
            inkscape:export-filename="../../../../../Videos/QuadrantsModel2.png"
            inkscape:export-xdpi="200"
            inkscape:export-ydpi="200"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs id="defs1" />
            <g
                inkscape:label="Layer 1"
                inkscape:groupmode="layer"
                id="layer1"
                transform="translate(-340.40192,0.39228249)"
                style="display:inline">
                <rect @click="changeQuad('base')"
                style="fill:#000000; cursor: pointer;"
                id="rect1"
                width="753.27649"
                height="766.45337"
                x="342.59808"
                y="-0.39228249"
                sodipodi:insensitive="true" />
                <g
                    class="circles"
                    id="g8"
                    sodipodi:insensitive="true">
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="320"
                        fill="#ffffff"
                        id="circle1"
                        style="fill:#ffffff;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="280"
                        fill="#800080"
                        id="circle2"
                        style="fill:#800080;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="240"
                        fill="#4b0082"
                        id="circle3"
                        style="fill:#4b0082;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="200"
                        fill="#008080"
                        id="circle4"
                        style="fill:#008080;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="160"
                        fill="#008000"
                        id="circle5"
                        style="fill:#008000;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="120"
                        fill="#ffa500"
                        id="circle6"
                        style="fill:#ffa500;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="80"
                        fill="#ff0000"
                        id="circle7"
                        style="fill:#ff0000;fill-opacity:0.6" />
                    <circle
                        opacity="0.7"
                        cx="720"
                        cy="377"
                        r="40"
                        fill="#808080"
                        id="circle8"
                        style="fill:#808080;fill-opacity:0.598715" 
                    />
                </g>
                <rect
                style="fill:#002525;fill-opacity:1;stroke-width:0.919193"
                id="rect2"
                width="640.1665"
                height="17.569132"
                x="399.7363"
                y="366.75562"
                sodipodi:insensitive="true" />
                <rect
                style="fill:#001c1c;fill-opacity:0.60766423;stroke-width:0.919017"
                id="rect3"
                width="639.92004"
                height="17.569132"
                x="-697.06543"
                y="710.45178"
                transform="rotate(-90)" />
                <text
                @click="changeQuad('up-down')"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#ffffff;fill-opacity:1"
                x="614.91962"
                y="740.09967"
                id="text4"
                sodipodi:insensitive="true"><tspan
                    class="quadrant-text"
                    sodipodi:role="line"
                    id="tspan4"
                    x="614.91962"
                    y="740.09967"
                    style="font-size:37.3333px;fill:#ffffff;fill-opacity:1">COLLECTIVE</tspan></text>
                <text
                @click="changeQuad('left-right')"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#ffffff;fill-opacity:1"
                x="-469.67712"
                y="390.17166"
                id="text5"
                transform="rotate(-90)"
                sodipodi:insensitive="true"><tspan
                    class="quadrant-text"
                    sodipodi:role="line"
                    id="tspan5"
                    x="-469.67712"
                    y="390.17166"
                    style="font-size:37.3333px;fill:#ffffff;fill-opacity:1">INTERNAL</tspan></text>
                <text
                @click="changeQuad('left-right')"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#ffffff;fill-opacity:1"
                x="289.78571"
                y="-1050.3049"
                id="text6"
                transform="rotate(90)"
                sodipodi:insensitive="true"><tspan
                    class="quadrant-text"
                    sodipodi:role="line"
                    id="tspan6"
                    x="289.78571"
                    y="-1050.3049"
                    style="font-size:37.3333px;fill:#ffffff;fill-opacity:1">EXTERNAL</tspan></text>
                <text
                @click="changeQuad('up-down')"
                xml:space="preserve"
                style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill:#ffffff;fill-opacity:1"
                x="614.91962"
                y="50.51125"
                id="text3"
                sodipodi:insensitive="true"><tspan
                    class="quadrant-text"
                    sodipodi:role="line"
                    id="tspan3"
                    x="614.91962"
                    y="50.51125"
                    style="font-size:37.3333px;fill:#ffffff;fill-opacity:1">INDIVIDUAL</tspan></text>
                <g @click="changeQuad('upper-left')">
                    <title>Internal Individual UPPER LEFT "I/Me": 1-p singular</title>
                    <rect
                    x="380"
                    y="100"
                    width="300"
                    height="160"
                    rx="20"
                    ry="20"
                    fill="#008080"
                    opacity="0.8"
                    class="shadow-box"
                    id="rect8"
                    style="display:inline;opacity:0.899441;fill:#008080;fill-opacity:1;stroke:none;stroke-width:0;stroke-dasharray:none" />
                    <text
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="477.10272"
                y="190.27974"
                id="text7"><tspan
                    sodipodi:role="line"
                    id="tspan7"
                    x="477.10272"
                    y="190.27974">UL</tspan></text>
                    <text
                    @click="changeQuad('upper-left')"
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="438.8801"
                y="231.37941"
                id="text11"><tspan
                    sodipodi:role="line"
                    id="tspan11"
                    x="438.8801"
                    y="231.37941">1st person &quot;I&quot;</tspan></text>

                </g>
                <g @click="changeQuad('lower-left')">
                <title>Internal Collective LOWER LEFT "You/We": second-person plural</title>
                <rect
                x="380"
                y="510"
                width="300"
                height="160"
                rx="20"
                ry="20"
                fill="#008080"
                opacity="0.8"
                class="shadow-box"
                id="rect9"
                style="opacity:0.899441;fill:#008080;fill-opacity:1" />
                <text
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="423.10818"
                y="639.66559"
                id="text13"><tspan
                    sodipodi:role="line"
                    id="tspan13"
                    x="423.10818"
                    y="639.66559">2-p plural &quot;We&quot;</tspan></text>                    
                    <text
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="483.28934"
                y="598.01611"
                id="text10"><tspan
                    sodipodi:role="line"
                    id="tspan10"
                    x="483.28934"
                    y="598.01611">LL</tspan></text>

                </g>
                <g @click="changeQuad('upper-right')">
                <title>External Individual UPPER RIGHT "It": third-person singular</title>
                <rect
                x="755"
                y="100"
                width="300"
                height="160"
                rx="20"
                ry="20"
                fill="#008080"
                opacity="0.8"
                class="shadow-box"
                id="rect10"
                style="opacity:0.899441;fill:#008080;fill-opacity:1" />
                <text
                    @click="changeQuad('upper-right')"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="847.49469"
                y="188.0836"
                id="text8"><tspan
                    sodipodi:role="line"
                    id="tspan8"
                    x="847.49469"
                    y="188.0836">UR</tspan></text>
                    <text
                @click="changeQuad('upper-right')"
                class="fill-text"
                xml:space="preserve"
                style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;display:inline;fill-opacity:1"
                x="803.87213"
                y="233.37941"
                id="text12"><tspan
                    sodipodi:role="line"
                    id="tspan12"
                    x="803.87213"
                    y="233.37941">3rd person &quot;It&quot;</tspan></text>

                </g>
                <g @click="changeQuad('lower-right')">
                <title>External Collective LOWER RIGHT "Its/They": third-person plural</title>
                <rect
                x="755"
                y="510"
                width="300"
                height="160"
                rx="20"
                ry="20"
                fill="#008080"
                opacity="0.8"
                class="shadow-box"
                id="rect11"
                style="opacity:0.899441;fill:#008080;fill-opacity:1" />
                <text
                    @click="changeQuad('lower-right')"
                class="fill-text"
                xml:space="preserve"
                style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                x="853.68134"
                y="600.21222"
                id="text9"><tspan
                    sodipodi:role="line"
                    id="tspan9"
                    x="853.68134"
                    y="600.21222">LR</tspan></text>
                    <text
                    @click="changeQuad('lower-right')"
                    class="fill-text"
                    xml:space="preserve"
                    style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill-opacity:1"
                    x="803.23615"
                    y="639.66559"
                    id="text14"><tspan
                        sodipodi:role="line"
                        id="tspan14"
                        x="803.23615"
                        y="639.66559">3-p plural &quot;Its&quot;</tspan></text>
                </g>
            </g>
        </svg>
        <template v-if="quadRef==='base'">
            <h2>Overview</h2>
            <p class="desc">
                Quadrants are not a new concept, 
                but hidden lenses we already use. The left side is subjectivity, the right is objectivity,
                bottom is collective, top is individual. A rainbow of Levels reflects across
                "I", "We", "It", and "Its", illustrating the emergence of the same fundamental structural themes 
                in the four simultaneous perspectives of self, culture, local and systemic nature. 
                <!-- They intersect our brains, our 
                lives, our interactions, and society itself. -->
            </p>
            <h2>Four Ways to Look At Everything</h2>
            <p> Reality has interiors and exteriors, and it occurs as groups and instances.
                    This description may seem exotic, but only because Quadrants are so elementary.
                    You're here, world is out there, you're one person in a social system. 
                    When we conjugate our language, "I", "We", "It", and "Its", language structures 
                    our thinking into Quadrants.
                </p>

                <p>Each Quadrant can correctly, but partially, answer the question, <b>"What is the nature
                    of reality?"</b>
                    A superior answer would thus include all four. 
                </p>
                <p><b>Upper Left "I" interior individual:</b> My present consciousness, memories, stories, sensations, feelings, thoughts.
                <br><b>Reality: </b>I am this mind, aware of my thoughts and sensations, my story,
                and all the things I know of. This room, this world, and other people, all exist in my mind, as 
                information that I am aware of. I am reality.
                </p>
                <p><b>Lower Left "We" interior collective:</b> The collective consensus which we develop through interpersonal communication.
                <br><b>Reality: </b>We are the social animal. No person starts life with the assumption that critical 
                thinking is worthwhile. We must be 
                taught both language and cooperation, which is traumatic to our instinctual and individualistic nature.  
                Our thoughts are synthesized by imitating what is available in the language of our culture. 
                <!-- I'm a name and address and citizen of political designations, a member
                of ideological movements, a reputation and social credit.  -->
                <!-- I am my job, my family, my country, my khakis.  -->
                <!-- Moral actions are actions that positively affect people.  -->
                As individuals, we only choose between collective 
                options, based on socialized notions of who we are and what we should do.
                That's our reality.
                </p>
                <p><b>Upper Right "It" exterior individual:</b> The apparent physical environment, my brain, body, and physical senses.
                <br><b>Reality: </b>This brain interprets sense information into concepts so 
                it can comprehend circumstances well enough to advantageously transform social and environmental 
                outcomes, with the byproduct that it imagines itself into a supposedly cohesive story of my  
                experience as a social being. I am chemicals, brainwaves, and cognitive functions. Everything this brain 
                can directly sense and be logically certain of, that must be reality.
                </p>
                <p><b>Lower Right "Its" exterior collective:</b> The dynamics of collective and social systems.
                <br><b>Reality: </b>The Universe produces human civilization through a tendency towards 
                greater novelty and complexity called evolution. Civilization continues to evolve memetically, and I 
                will play the minute role of being carried along or participating in the unfolding of this 
                process, which is the nature of reality.
                </p>
                <h3>What Is The Nature of Reality?</h3>
                <!-- <p>Try asking people this question. They may describe a systemic structure, 
                    an interactional concept, a hard facts approach, the ineffible experience of mind,  
                    some combination of those, but mostly they disapprove of the question.  -->
                    <!-- Our conclusions are threefold:
                    <br><b>1)</b> People tend to dismiss this question with a limited answer.
                    <br><b>2)</b> Reality offers four views and people tend to select one as fundamental.
                    <br><b>3)</b> The term "reality" is problematic without a Quadrants model. -->
                <!-- </p> -->

                <!-- <p> -->
                    <!-- In explaining reality in commonsense words, we must say that the nature of reality  -->
                    <!-- is that it occurs simultaneously to us as these four Quadrants. Language is structured very 
                    close to perception, so not surprising that we conjugate our language into "I," "We", 
                    "It", "Its" - 
                    first, second, and third person, singular and plural, the way we experience reality. -->
                <!-- </p> -->
                <p>
                    The four common answers given above are incomplete, unconsciously 
                    partial and limiting views of reality, and a full answer would include all four 
                    perspectives.
                    Integral is not inventing Quadrants and trying to convince you they exist, but rather 
                    revealing that we already use them, mostly to exclude perspectives, and suggesting they 
                    actually don't exist.😉 By attempting to view a given scenario from all four Quadrants, 
                    you can at least ensure you're covering <em>the fundamental</em> blind spots.  
                </p>
                <h3>Quadrant Fundamentalism</h3>
                <p>
                    As you examine philosophy and thought, take care to observe 
                    positions that are in denail of, or firmly rooted in, particular Quadrants. Allergies and fixations. <em>Only consciousness and 
                    the mind exist. Only material reality exists. The self is unreal. The Universe is a simulation or illusion. God rights 
                    all wrongs. It doesn't matter what anyone thinks.
                    </em>Recognize how these positions all express resistance to a major given aspect of reality. 
                    Though they may superficially sound like the 
                    dissolution of Quadrants of higher Levels and deeper States, <em>denial</em> of perspectives is the 
                    key discernment. Quadrant fundamentalism and denial are indicators
                    of mental pathology. Not surprisingly, a moderate bias is typical of human personality.
                </p>
            <!-- <div class="stats"> -->
                <h3>Language Structures Thought</h3>
                <p>The Quadrants are conjugated
                    outright in most languages, suggesting that an important distinction 
                    is reflected in perspectives: 
                    First, Second, and Third person, Singular and 
                    Plural. Classical milestones in human development include the formation of 
                    concepts of self, others, objectivity, and abstraction. In other words, 
                    the First Tier of Levels solidify consciousness into Quadrants.
                </p>
                <p>
                    The four conjugations of reality are not only interconnected, but indeed are four 
                    aspects of singular reality. This recognition informs Second Tier 
                    Levels. However, as an 
                    experience of being, or State or even Level of consciousness, key 
                    terms like "oneness", "union", and "nondual" are all defined in terms of a 
                    transcendence of Quadrants. Awakening from the Quadrants is perhaps 
                    synonymous with spiritual enlightenment.
                </p>
                <h4>I, We, It, or Its? </h4>
                <p>
                    It's a subtle point, but language forces us to interface by assigning everything into a 
                    Quadrant when we think and communicate. It might seem odd to suggest that 
                    these perspectives are imaginary mental constructs, when they are entirely basic to our comprehension. 
                    Language is the primary mental prison. When there is nothing desirable outside of a prison, and 
                    everything desirable within, this 
                    becomes a blatantly bad analogy. 
                    I belabor this argument because it also applies to Integral Theory.
                </p>
                <!-- <p>
                    Speaking this language is one of many ways our social system causes us to think in Quadrants. 
                    It allows us to communicate rational thoughts
                    decently in the best of cases, but it also could be said that language imposes several 
                    forms of cognitive bias on the native speaker, and reinforces 
                    separation between the ways we might consider ourselves or our culture
                    versus others, whether we consider something conscious, what we consider ourselves 
                    a part of, the effects of systems on individuals, the relationship between culture and 
                    technology, just scratching the surface.
                </p> -->
            
                <h3>Using Quadrants</h3>
                <p>The main practical benefit is to recognize which Quadrants are focused on in 
                    a situation or approach, and to zoom out holistically and utilize all four.
                    Most problems and pursuits, including philosophy itself, benefit from 
                    acknowledging and including all four metaphorical "dimensions" of reality. 
                </p>
                <h3>Second Tier Marketing: Who Is Integral For?</h3>
                <p><b>Upper-Left "I":</b> Integral is a guide to healthy life and personal development.
                    It explains how to improve one's moods, relationships, and lifestyle, how transcendental
                    states of consciousness work, what they reveal, and massively helps in the development 
                    of personal insight, spirituality, and maturity.
                </p>
                <p><b>Lower-Left "We":</b> Integral is a community, or shared worldview meme, aimed 
                    at reconcilliation and inclusion of those extant. According 
                to itself, Integral is a natural Level of consciousness based around shared recognition 
                of evolutionary structures and heirarchies of growth and inclusion. 
                It is the next major wave, or Level, emerging in society currently. 
                If all of
                this makes sense to you, you're a part of this wave to precisely that extent.
                No Kool-Aid to drink. If a map of the way humankind understands reality is 
                recognizable and desired, the Integral "We" includes you.</p>    
                <p><b>Upper-Right "It":</b> Ken Wilber provides a relatively simple, comprehensive philosophical orientation 
                    tool or ideological swiss army knife, enabling ready solutions to eternal problems. 
                    All extant concepts fit together in a single continuity, which applies very directly and progressively 
                    to every topic and field, including Wilber's work in philosophy, psychology, religion, 
                    spirituality, sociology, anthropology, politics, history, science,
                    critical theory, arts, entertainment, health, and lifestyle.
                </p>    
                <p><b>Lower-Right "Its":</b> Integral is like a Rosetta Stone for comprehending how fields and systems are inter-related
                    in the grandest scope. Embracing all of reality, it is applicable to every endeavor, and is best used as a universal 
                    translater, a way of reconciling disparate perspectives and checking in with every aspect of the big picture.
                </p>
                <h2>Social Holon: A Stack of Four-Quadrant Levels </h2>
                <p>
                 <b>A holon is a whole composed of parts, which also is itself part of a greater whole. </b>The Quadrants illustrate
                how a singular "holonic" source unfolds in and expresses all four dimensions simultaneously, rendering all 
                equally and entirely real. Everything certainly real exists in all four Quadrants and is 
                a holon.
                Everything not real, by debatable standards, exists in some Quadrants, but not all, and thus is not a holon 
                either.
                </p>
                <h3>Examples of Debatably Real Things</h3>
                <p><b>😡 Buloney: </b>A lie is an exclusively LL reality that is unreal to the subjective teller of it, and is untrue 
                    in physical reality UR. This would result in a misunderstanding where if you believed the lie, it would 
                    then be true only in the UL, so ultimately false.
                </p>
                <p><b>🔮 Divination: </b>Astrology exists in the interior Quadrants as a way of determining a person's overall character based 
                    on their date of birth. It exists in the Left Hand Quadrants because we know of it and some of us 
                    believe in it. Since there is no logical causative mechanism, astrological typing is a mythological system 
                    in the LR, 
                    and false in UR objective reality as scientific investigation has revealed no merit to astrological 
                    personality assessment.
                </p>
                <p><b>👻 Ghosties: </b>An imaginary friend or hallucinated entity has a false status in the interior Quadrants, existing 
                    as a projection of the personality of the subject, incorrectly appearing to exist in objective reality.
                    This entity is not objectively or inter-subjectively real. Near Death Experiences are entirely subjective by nature, so 
                    the best we can say is not that they are "real" or true, but they seem to be somewhat universal in the human experience 
                    of death.
                </p>
                <p><b>🌲😉 Unsolved: </b>A person dies with a secret they never told anyone. The secret is entirely true, but nobody will 
                    ever find out, and it will never have any effect on anyone. Thus, it makes no difference whether you 
                    consider it real or not. Trees fall in the forest all the time. 
                </p>
                <!-- People understand reality to be the <b>interior subjective</b> experience of "I",
                    in relation to an <b>external objective</b> reality "It". A human is both a physical body with 
                a brain emitting waves,
                and the ongoing story of a self having awareness, thoughts, friends and enemies, and dreams. These can be considered 
                the "two sides" of reality, or interior and exterior dimensions. Reality is the interaction between them. -->
                
                <!-- The "It" realm is composed
                of systems and groups of "Its." A human is both an individual, and a member
                of <b>collective external</b> civilization. Both are correct. Every human is an example of a human, and this is true
                of everything. Instances are produced by systems, and arise as groups. No person 
                could exist without the civilization that produced and raised them. Returning to the 
                internal, we recognize that nearly everything we know was taught to us. We speak, and 
                think, in a language that we learned as toddlers. There is also a "we" nature to reality, 
                for example, consider the difference between what "I" know and what I can look up on the 
                internet. The knowledge, thoughts, opinions, perspectives of others is a large part of reality 
                for everyone, and so we consider this the <b>collective internal</b> part of reality, the "we."
                </p> -->
                <h3>Quadrants within Quadrants</h3>
                <p>Nearly all perspectives
                        we encounter are compound views. For example, if I describe my car 
                        to you, I'm describing an UR machine from my perspective, which is 
                        UL, but I'm trying to convey things of interest to you, implying a 
                        shared LL between us, and we may talk vehicle makes and models 
                        and market prices, all LR. The perspective you 
                        would end up with would be a LL view, shared between us, of the car 
                        existing in the UR. 
                        
                </p>
                <p>
                    Compound Quadrants become problematic in describing Levels,
                        which express distinctively in all four Quadrants. These can each be
                        seen <em>from</em> each Quadrant, for a total of 16 basic descriptive perspectives.
                    For example, if I consider Level 2 Magenta, I may take a LL view and consider 
                    all of the ways Magenta values, ideas, and notions are expressed in our cultural surroundings. 
                    I may look at this from my personal perspective, UL, from a practical perspective, UR, 
                    I may look at it morally and critically, LL, or I may consider the abstract structural function
                    of the meme, LR. 
                </p>
                <h3>More of Reality in Fewer Words</h3>
                <p>
                At a deeper level, Integral post-metaphysics reveals probably the most accurate generalization 
                    that can be made about reality, nature, the self, and society: it's an evolutionary system unfolding 
                    holonic Levels across simultaneous interior, exterior, individual and collective perspectives. 
                    You can't just go around saying things like that without explaining yourself.
                </p>
                <h3>Everything Is Holons</h3>
                <p>A word of caution. As we walk around looking at things in real life and trying to understand how 
                they are holons, we may have to introduce some further terms in order to comprehensively include all 
                of reality without confusion. This is entirely due to us referencing things with a non-holonic 
                linguistic comprehension of nature. Many of our verbal concepts refer to <b>heaps</b> and <b>artifacts.</b>
                </p>
                <p>  
                🗻 A <b>heap</b> is a collective grouped by coincidental, arbitrary, or subjective distinction, 
                such as a sand dune, the hundreds of words for "snow" arctic natives may use, or for example, 
                "the birds on the lawn." Those references are not proper collectives (holons/Quadrants), as their 
                group cohesion is not structural, but linguistic and contextual. 
                The birds in the yard may exhibit collective behaviors, like if a horn honks, 
                they all scatter, and they have come here because of the types of trees you have, eg.
                But the birds are a heap, not a holon, because they are grouped by the unrelated properties 
                of being a bird, and being in this yard.
                </p>
                <p>
                Your memory is somewhat of a "heap" of human experience, just a 
                collection of human events happening mostly at random, by coincidence, and due to 
                circumstances largely outside of individual awareness or control, which unconscious 
                processes selected to either remember or forget. It becomes easy to see 
                how most of the concepts we work with are deeply-layered abstractions that we assume to 
                be just as "real" as the social holons which are reality.
                This sort of holonic confusion results from a human perspective comprehending 
                reality based on mental, linguistic, and social constructs.
                </p>
                <p>✏️ An <b>artifact</b> is a collective assembled by a higher Level social holon. A pencil, for example,
                    has fallen very far from the tree that produced its wood. There is nothing in the nature of a tree 
                    or a forest that would suggest it would ever become a pencil, unless there were industrial peoples
                    with sophisticated tools, rubber, graphite, and technological memes. Likewise, a beehive would never arise naturally from 
                    its component substances, but is rather constructed by the instincts of bee colonies.
                </p><p>
                    Again, reflecting the inevitable bias of the human condition, most of our vocabulary refers to 
                    deliberate practical assemblies of substances and technological memes: chair, car, meal, 
                    garden, house, downtown, schedule, outfit, internet, story, disposition. The fabric that 
                    yoga pants are made out of does not arise substantially in nature. It doesn't grow on trees. 
                    So, we, these apes of the Earth, might call synthetic fabrics "unnatural" (or GMOs, detergents, 
                    plastics, airplanes, nukes, etc.). Well, it's quite natural for conscious human 
                    civilizations to reorder molecules in this way to show off their butts, or 
                    mutually assure the destruction of civilization, whatever 🤷🏿‍♂️.
                </p>
                <p> 
                    Artifacts have a 
                    special status, in that they somewhat distort the integral perspective. Our mental world is a 
                    world of practical and social, as opposed to natural (holonic) concepts. 
                    This is a main reason that holonic or Integral Theory may seem abstract or cerebral to newcomers,
                    precisely <em>because</em> it is the opposite!
                    All of reality is holons, but our awareness and the language we use 
                    necessarily surrounds us with heaps and artifacts, and that's great for everyday 
                    functions, but psychologically, it obscures the profound 
                    clarity that this grand symphony could be as simple as Levels and Quadrants. 
                </p>
                <P>
                    You should now be able to identify everything in existence as social holon, heap, or artifact.  
                </p>
                <h3>Levels and Quadrants</h3>
                <p>A most fascinating aspect of Altitudes that it is easy to miss, is that 
                    they emerge in all four Quadrants. These underlying 
                    memetic holons, the core patterns of humanity, the spectrum or visible light range 
                    of history, occur in myself, in my own thoughts and feelings. They dictate 
                    the way stories are told, and critiqued, whether they are permissable. They 
                    deliver our tech base. These thoughts and feelings I have are the 
                    foundation of civilization in certain eras of history. There is an enormous
                    global community sharing overall conceptions of the nature of reality 
                    with me, all throughout history.
                </p><p>
                    🧬 A baby born now begins fundamentally the same as 
                    early hominids of the upper paleolithic, Level 1 Infrared instinctual, and will proceed through each 
                    of the Levels that society itself developed through. All great art and literature
                    are expressions of Levels, sometimes challenging contemporary Levels, and sometimes
                    contributing to emergent Levels. 
                </p>
                <p>
                    In each Level we observe somewhat of a reversal of Quadrant perspectives. The odd numbered 
                    Altitudes of Red, Orange, Teal,
                    Indigo, and Ultraviolet stress forms of objectivity and individualism or agency, while Magenta, Amber,  
                    Green, Turquoise, Violet, and Clearlight stress subjectivity and collectivism or communion.
                    This classically male/female dualism is not some magic spell built into the fabric of evolution, it is rather just the effect of a 
                    season-style pattern. In development, we cycle between extremes of thought, feeling, and 
                    action in an effort to synthesize or inhabit both sides of duality. The developmental path 
                    is a process of integrating cognitive dissonance.
                </p>
                <h3>Lines and Quadrants</h3>
                <p>In nearly every case, a particular developmental Line only studies or observes a single 
                    Quadrant. Thus, advances in medicine, psychology, social sciences, and economics appear 
                    to exist each in their own domain while of course they are all naturally implicated
                    in one another. Integral portrays the overlap in these four 
                    perspectives, and in individual Lines, as Altitudes Levels.
                </p>
                <h3>Types and Quadrants</h3>
                <p>It would not be novel at all to say that many, perhaps the majority, of 
                    personality typologies, are descended from medieval alchemy (earth, air,
                    water, and fire) which correspond to the four secular seasons and formerly dominated type theory in 
                    systems East and West, as well as medicine, referring to the four humors (bodily fluids) and temperaments. 
                </p><p>These obscure antiquities foreshadow our current understanding. 
                    Alchemical mythology helped 
                    Carl Jung to develop his own typology, which entirely informed the development of the 
                    Myers-Briggs system. Small world. There aren't a lot of accepted typologies in common 
                    usage, other than colloquial observational truisms of the nature, "You know, there's 
                    two types of people in this world, _____s, and _____s." 
                </p>
                <p>
                    Observe particularly 
                    in the writings of Jung that this elemental typology, or the four cognitive functions, is equivalent to one's relationship 
                    with Quadrants. 
                    Meanwhile, we see exactly the same thing expressed in the East as Taoism. 
                </p>
                <h3>☯️</h3>
                <p>
                    The duality which exists on every Level of nature is expressed on Earth as seasons, in life as birth and 
                    death, in animals as sex and in people as gender. In personality, duality is expressed as extroversion and 
                    introversion. This primary preference is expressed through the duality of Judging and Perceiving. Judging makes 
                    conclusions with known information, Perceiving gathers new information. Judging has subjective and objective versions, which 
                    Jung called Feeling (based on subjective factors) and Thinking (based on abstract logic). Perceiving 
                    also has subjective and objective versions, where iNtuition works with the self abstraction and the unconscious, 
                    and Sensing gathers hard facts and data about the environment and social events. These three layers of duality 
                    generate Jung's Four Cognitive Functions, which each can be extraverted, expressed outwardly, or introverted,
                    experienced internally. The table below shows the cognitive functions as equivalent to Quadrant preference. 
                </p>
                <table>
                    <tr>
                        <th>UL: iNtuition</th>
                        <th>UR: Sensing</th>
                    </tr>
                    <tr>
                        <th>LL: Feeling</th>
                        <th>LR: Thinking</th>                        
                    </tr>
                </table>
                <p>As we observe repeatedly, each Quadrant can be viewed through a Quadrant, which 
                    results in the compounded multiplicity of perspectives we encounter in Jungian types as well 
                    as Quadrants. Thus, extraversion and superiority of cognitive functions 
                    give us Quadrants to view these Quadrants through. This is to say that many, or most,
                    Typologies, or the Types module itself, can largely be seen as another way of expressing 
                    Quadrants, this case in human personality. 
                </p><p>
                    The Big Five traits (Types) correlate with 
                    Quadrants, except for neuroticism. Many systems such as the enneagram use 
                    divisions of three to express fundamentally similar personality factors, most typically accomplished 
                    by squishing the right quadrants together, or by defining the intersection of Quadrants as 
                    points of reference.   
                </p>
                <h3>States and Quadrants</h3>
                <p>
                    Most descriptions of transcendental or spiritualized states of consciousness 
                    seem to relate a sort of dissolution of Quadrants. The enlightened being 
                    has gone beyond self, become one with all of existence, experiences deep 
                    interpenetrating communion with all sentient beings, dissolves into the unbounded
                    infinite void of the kosmos, understands itself to be nothing but the eternal 
                    conscious awareness of material reality, feels the world and people around itself
                    as its own skin, expresses radical loving compassion that sees deeper into you than you do, 
                    is radiantly annointed with the light of creation. <b>Sound familiar?</b>
                </p>
                <p> 
                    Nearly all descriptions of spirituality across time and tradition involve transcending 
                    the mentally constructed boundaries of Quadrants. In other words, nondual enlightenment 
                    can be expressed as the experience of being entirely I, We, It, and Its, at once.
                    You are just as much the story of your life as you are a speck of Universe, just as much a 
                    representative of humanity as you are a detatched observer. This is all One thing. 🍣 You.
                    <!-- Truly, you are a stack of Levels in Quadrants. -->
                    <!-- Everyone and everything is this, reality is this, it is all You, it is all not-You, it is 
                    nondual, there is
                    no You, only this, a stack of Levels in Quadrants, which I'm saying is You.
                    And me. And everything. -->
                </p>
                <h5 class="pedantic" @click="changeQuad('left-right')" style="cursor: pointer;">NEXT</h5>

            <!-- </div>
            <div class="panel">
            </div>
            <div class="section"> -->
            <!-- </div> -->
        </template>
        <template v-else-if="quadRef==='left-right'">
            <h1 id="left-right">Internal and External</h1>
            <p>The <b>Internal</b> of reality is everything mental or subjective in nature, while 
                the <b>External</b> refers to the objective and material. As we hope to demonstrate, 
                it is easy to define this duality at the extremes, but the boundary is more elusive.
                And this is because there is no boundary. Even though we conceptualize in Quadrants 
                before we learn the Quadrants, they are actually unreal. Internal and External,
                subject and object, are two ways of looking at the same thing. Ways of looking, in this 
                sense, could mean interface, lens, or paradigm. However, the subject/object split 
                is among perhaps the most basic universal concepts of the human mind, among the most 
                foundational to human thinking, and so not surprising that we assume it to be an 
                aspect of consciousness or reality, as opposed to a mental construct.
            </p>

            <h3>We Live In A Dream</h3>
            <p>
                It should be noted
                that the apparent environment surrounding you is not the actual physical
                environment surrounding you. It is a mental construction based 
                off of sense information, memory, and assumption, catering to what you 
                focus on and are aware of. We as minds never experience anything but mind. 
                Our stories are the only sense that is made of reality, our understanding 
                is the only knowledge in existence. The material world is a sort of mental 
                abstraction that we deduce from experience, organized entirely by the history 
                and priorities of the development of human thought through Levels (Altitudes).
            </p>
            <h3>We Live in a Simulation</h3>
            <p>
                I can make the opposite point. As a matter of fact, your 
                apparent subjective consciousness is not the mind of any person at all.
                You don't exist. This environment produced people, your family produced 
                your body and named you this name and raised the person to believe they 
                exist and are real, this room has your brain in it and your brain is detecting 
                sensory information and supplying you with memories and assumptions, all 
                in service of generating this illusion that you exist and are experiencing 
                this body and this environment and this story of your life. It's just electrical
                activity in a homo sapiens brain, yo. That's what you are. The electrical 
                activity tells itself a story about a person over the course of the body's run.
            </p>
            <h3>We Live in Reality?</h3>
            <p>I have made two classical, dualistic, seemingly contradictory yet both compelling
                arguments for the nature of reality. You could call them Interior and Exterior fundamentalism.
                Our mental conditioning as people causes the apparent paradox that the only thing 
                we know is an illusion generating itself for no reason.
            </p>
            <p> Integration of these opposing
                perspectives seems to result in the reality that we experience. Because I want to be here, 
                my brain generates thoughts and feelings in response to signals I recognize as patterns, and 
                I choose between patterns to generate motivated thought, and this provokes the physical body 
                of a person in an environment to do actions that will impact the interior thoughts and feelings
                of others. 
            </p><p>
                Lots of insides, lots of outsides, no actual boundaries, but that is the reality that 
                we experience. It is nondual, but as we imagine it now, it is dualistic, with simultaneous
                Quadrants experienced as "in here" and "out there". This is an interface, or 
                framework, which structures our experience. Prior to introducing such an interface, reality is experienced as a fusion of self and 
                environment, and the baby is useless. 
            </p>
            <p>
                Mastering the interface, Quadrants, tends to mark milestones 
                of maturity in Levels. In the Third Tier Levels or spiritual States, nondual, union, or oneness, a 
                deeper, higher, more supreme or true or absolute reality is discovered which is either described in 
                terms of some poem about an owl covered in snow, or in a way that can be paraphrased as transcending
                the Quadrants. I and the father are one, etc. 
            </p>
            <h3 style="font-size: xxx-large;">☯️</h3>
            <p>
                <!-- As I will point out, the division is actually imaginary. Rather, to point out the 
                true boundary of internal and external is that we only actually experience Internal, 
                and we interact with External reality only in the abstract.  -->
                Mirroring the Tao 
                symbol with an "eye" of each side of duality existing within the other,  
                objective reality is in fact imagined by a mind and not directly experienced.
                Subjectivity or consciousness is itself merely the virtualized experience of
                an entirely physical, material brain system.  
            </p>
            <p>
                This is no paradox or riddle, just Quadrants. Free will and 
                determinism are both perfectly true. They are internal and external 
                perspectives on the unfolding of events. Every internal choice that you make was 
                calculated by causative external events. It was the only choice you could end 
                up making. Though you could have made the 
                other choice, you didn't. When you make a choice, it doesn't create 
                parallel universes in which you made other choices. If it did, we wouldn't know. 
                What it does do,
                plainly, is demonstrate that you consciously participate in objective reality. 
            </p>
            <h3>Conscious Participation Is a Force of Nature</h3>
            <p>
                Your choices 
                are just as real and causative as any natural 
                force. It isn't the case that your choices don't "matter" because your destiny is
                calculated by physics. That's like saying love is boring because it's calculated by 
                reproduction. Category error. That your choices matter is an aspect of nature, 
                a part of the entire physics of the kosmos, if you care, and if you say so. 
                You're the sole being that certainly makes choices, you're the closest thing 
                to certainty there could be. 
                From this perspective, and objectively, human choice is the most powerful force 
                in the known universe in terms of its capabilities. 
            </p>
            <h3>What is Power?</h3>
            <p> A quasar is a truly incomprehensible matter-consuming entity that is unfathomably 
                large, but has no desire to 
                do anything and must fall and dissipate forever. An ant can lift fifty times its own 
                weight, but it can't stop a human toddler from mangling it. I can smush the ant, but I can also not 
                smush it. That's power. I can say mean things to you and hurt your feelings, but 
                anything I could think to do with a quasar, if it were even possible, would annihilate 
                myself as well. If anything were capable of getting a quasar 
                to harm you without harming me, I have to imagine human choice would be involved.
                Only human choice has the physical ability to accomplish purposeful things.
            </p>
            <h3>Quantumization of Philosophy</h3>
            <p>As a culture, we seem to fall deeper and deeper into denial of 
                the only thing that surely exists, consciousness. The only 
                answers we trust come from the material sciences, dealing with a world we 
                do not know, at a scale we do not experience. We wonder if science can discover the nature of mind in the 
                mathematical abstractions suggested by the behavior of things so tiny 
                that the notion of observation becomes nonsensical.
                Scientists can study the brain, and the microcosmic, but there's no profit in the nature 
                of mind. That's not science's role. It's ours. Scientists don't 
                waste their time on dimebag crap like this. 
            </p>
            <h3>The Universe is the Nature of Mind</h3>
            <p> Literally, the Universe is 
                this big factory that transforms matter into mind, according to me, itself.
                I wouldn't be here if it didn't do that. Why does it do that? Does it like 
                doing that? Ask me. I'm some Universe. I'm glad to be alive, 
                so yeah, the Universe likes generating 
                consciousness according to itself. There really is no problem here, philosophically.
                We have no choice but to voluntarily, gladly participate in the Universe's evolution 
                from matter to life to mind and onward.
            </p>
            <h3>Consciousness Today</h3>
            <p>The average educated person has a limited understanding of 
                consciousness - which is strange, as it is 
                what we are. We lend credence 
                to scientific approaches, and the methodologies of science have told us 
                many things about how brains work, but they leave the nature of consciousnessness
                to philosophy, the psyche to psychology, and the mind to literature.
            </p>
            <h3>Science and Consciousness</h3>
            <p> 
                Science concerns itself with nature and the causative forces of reality. The mind is real, 
                and supremely causative. If you consider it 
                carefully, a mental science is literally just abstract analytical logic
                applied introspectively, as in Integral Theory, or it would otherwise 
                more practically be a system for developing insight, also Integral Theory.
            </p>
            <h3>Am I Brainwaves or Experience?</h3>
            <p>Yes. The Quadrants mean you're both. Consciousness and brainwaves 
                are not coincidental. They are one and the same, viewed from inside and outside. 
                Neither could exist without the other. Two perspectives 
                on a single phenomenon. Without your brain, you wouldn't be here. If you weren't here, 
                your brain can't be doing what it's doing right now. 
                As you see directly right now, reality is
                a relationship between an objective, external world out there, and beings 
                of that world experiencing it internally, in here. 
            </p>
            <h3>The Fundamental Split</h3>
            <p>One of the first cognitive stages of an infant can 
                be described as going from an animal-like state of fusion consciousness to differentiating self from 
                environment. Very pivotal and useful, but it must truly be comprehended that this is only an 
                interface. It's so entrenched that you probably think I'm crazy, but truly, our 
                sensory experience does not naturally differentiate self from environment. We sort that 
                out mentally, and we do it so fast and so habitually and perhaps even instinctually, 
                that we are unaware of it. And in this moment, this sense of you subjectively being in here, 
                facing an objective world out there, forms the vertical axis of the Quadrants. Your 
                experience is the Upper Left, "I" Quadrant. Your environment, which you only experience 
                in an abstract sense, through processing sensory information and recognizing patterns
                in it, is the Right or external Quadrants, or objective reality. 
                </p>
            <h3>The Conscious Kosmos</h3>
            <p>
                Expand your notion of the universe to include 
                this notion of consciousness, of holon interiority, and you start to see the Integral 
                kosmos. Just simply, you're the kosmos, all of it. Do you think it's a coincidence 
                that you're you, on this planet, in this time, interacting with me right now? Do you think 
                it's some sort of absurd, ridiculous comedy of errors that produced 
                intelligent life on Earth? Don't most of us actually think that?
                Well, of course, the reason most of us think that is that we used to say this really, really 
                big dude controls everything that happens, and we killed everyone that didn't 
                believe that. So now it all happens just because. Net improvement. If we can salvage 
                one thing, though, maybe to remind ourselves that I'm the animate, moral kosmos.
            </p>
            <h3>A New Genesis Hypothesis</h3>
            <p>
               In general, a theory that is absurdly improbable and lacking coherence in terms of 
               the causal connection between its component parts should be rejected. Instead, you 
               might take the given nature of reality which presents itself as the nature of reality. 
               We're left to gather that what's happening here, where I'm
               explaining what's happening here, is as usual, utterly typical. This is exactly what I would do, as a 
               normal person, if given the opportunity, as biological planets tend to become self aware, and 
               they act as us people to spread awareness via communication. 
               The universe is a creator, that's its actual character, and thus our character. It creates mental beings out 
               of nothing, as we observe. Watch what it does next. I'm watching. Go.
            </p>
            <h3>Evolutionary Impulse</h3>
            <p>The universe tends, or leans, 
               towards higher Levels. As seen here. Just due to the nature of reality, a planet like Earth would 
               fall into having life, and eventually life would very likely fall into sentience 
               and civilization. Why would a universe or planet act this way?
            </p><p>
               The prevailing scientific perspective that the origin of 
               life on Earth, the evolution of life towards more progressive forms, 
               life becoming self aware, self awareness forming civilization - all happen on accident 
               for no reason just because. This all 
               occurs in a cold, dead, empty, remote, lifeless, unconscious, probabilistic universe - 
               it's a miracle! A
               total accident, huge fluke. A coincidence which comes but once in billions of years 
               of billions of galaxies. 
            </p><p>
                What a disappointment it would be to learn that there is no miracle, 
               that everything happening is precisely what a functional universe does mechanically, 
               that the kosmic absolute, the central organizing law, is unfolding Levels 
               of social holons whose only commonality is an innate tendency to evolve. In other 
               words, it's all about love.
               There's no scientific reason to believe that whatsoever other than everything in 
               existence.
            </p>
            <p>And you may feel frustrated or confused. You may ask why, why does the kosmos 
                always do this? Where are the tiny, oh so tiny building blocks and imaginary waves 
                that prove this true or false? I'm some idiot, I don't know. But let's have a look. 
                You have all the Levels. Atoms. Molecules. Cells. Mind. So you tell us. Why are you doing this?
            </p>
            <h3>Developmental Reality</h3>
            <p>Let's take every great eternal unsolved mystery: Why 
                did the Big Bang happen? Why did Earth chemicals come to life? Why did life become self conscious?
                Why did Jennifer dump me? What is the point of what is happening? Why am I experiencing this 
                person that I apparently am? 
            </p><p>
                Let's answer all of them. The structural 
                nature of reality is that holons organize into higher Level holons. A higher Level 
                holon means it is constructed of lower holons. As these holons organize 
                or evolve over the history of the universe into conscious organisms, 
                those creatures internally organize into sentient mental beings, experiencing individuality
                within a collective from internal and external perspectives. If those individuals aren't 
                treating one another right, maybe they ought to aim higher.
            </p>
            <h3>Consciousness of Atoms</h3>
            <p>
                To illustrate the evolutionary nature of the Quadrants, it is essential 
                that we understand that the interiority of Quadrants goes <em>all the way down.</em>
                This is not to suggest that atoms are conscious like we are. The nature of what should 
                be considered "consciousness" is a matter of Levels. As complex mental beings, our 
                interiority is readily self-apparent. I think therefore I am. What about a cat?
                A cat doesn't think, but it lives, and it has a personality of sorts. Does the cat 
                have no soul? Is it just anthropomorphic fallacy to think that a cat has interiority?
                Of course not. We know that we share the brain functions of emotions and instinctual 
                response with animals, so as we climb down the kosmic evolutionary ladder, we find 
                that cats are conscious, but in a categorically different way than humans are.
                What about plants? Do plants experience in some way? Well, they respond to stimuli.
                They respirate. Is there a sort of soul in all of life? Well, we can say that there 
                must be more "soul" or consciousness, within the experience of being a plant, 
                than there is in the experience of being a rock or a molecule. And finally, I must 
                insist that while a rock, or a molecule, shows nothing resembling what we would consider 
                consciousness, would you not accept that the material existence of a thing lends it
                more of a sense of informational existence than nothing at all? And so, the truly 
                holistic, Turquoise, or ultimately Integral view of reality is illustrated below.
                A stack of Levels in four Quadrants.
            </p>
            <h3>Levels of Quadrants</h3>
            <table>
                <tr>
                    <th>Analogy</th>
                    <th>Level</th>
                    <th>Bands</th>
                    <th>UL</th>
                    <th>UR</th>
                    <th>LL</th>
                    <th>LR</th>
                </tr>
                <tr class="cosmic-rays">
                    <td>Cosmic Rays</td>
                    <td>?</td>
                    <td></td>
                    <td colspan=4></td>
                </tr>
                <tr class="cosmic-rays">
                    <td>UV Range</td>
                    <td>Enlightenment</td>
                    <td>States</td>
                    <td colspan=4></td>
                </tr>
                <tr class="rainbow-me">
                    <td>Visible Light</td>
                    <td>Civilization</td>
                    <td>Altitudes</td>
                    <td>Me</td>
                    <td>This</td>
                    <td>Us</td>
                    <td>Everything</td>
                </tr>
                <tr>
                    <td>Infrared</td>
                    <td>Life</td>
                    <td>Phylogeny</td>
                    <td>Instinct</td>
                    <td>Creature</td>
                    <td>Life</td>
                    <td>Earth</td>
                </tr>
                <tr>
                    <td>Microwave</td>
                    <td>Substance</td>
                    <td>Chemistry</td>
                    <td rowspan="2">Existence</td>
                    <td>Molecule</td>
                    <td rowspan="2">Forces</td>
                    <td>Star System</td>
                </tr>
                <tr>
                    <td>Radio</td>
                    <td>Matter</td>
                    <td>Physics</td>
                    <td>Atom</td>
                    <td>Universe</td>
                </tr>
            </table>
            <h3>The Visible Spectrum</h3>
            <table>
                <tr>
                    <th>Analogy</th>
                    <th>Level</th>
                    <th>UL</th>
                    <th>UR</th>
                    <th>LL</th>
                    <th>LR</th>
                    <!-- <th></th> -->
                </tr>
                <tr class="cosmic-rays">
                    <td>Clearlight</td>
                    <td>12</td>
                    <td colspan=4>Nondual Unity</td>
                    <!-- <th rowspan=4>Third Tier</th> -->
                </tr>
                <tr class="t-ultraviolet">
                    <td>Ultraviolet</td>
                    <td>11</td>
                    <td>Witness</td>
                    <td>Consciousness</td>
                    <td>Oneness</td>
                    <td>Emptiness</td>
                </tr>
                <tr class="t-violet">
                    <td>Violet</td>
                    <td>10</td>
                    <td>Subtle</td>
                    <td>Psyche-Consciousness</td>
                    <td>Communion</td>
                    <td>Vision</td>
                </tr>
                <tr class="t-indigo">
                    <td>Indigo</td>
                    <td>9</td>
                    <td>Psychic</td>
                    <td>Psyche</td>
                    <td>Affinity</td>
                    <td>Intuition</td>
                </tr>
                <tr class="t-turquoise">
                    <td>Turquoise</td>
                    <td>8</td>
                    <td>Centauric</td>
                    <td>Psyche-Ego</td>
                    <td>Holonic</td>
                    <td>Holistic Mesh</td>
                    <!-- <th rowspan=2>Second Tier</th> -->
                </tr>
                <tr class="t-teal">
                    <td>Teal</td>
                    <td>7</td>
                    <td>Developer</td>
                    <td>Stage-Aware Ego</td>
                    <td>Integral</td>
                    <td>Growth Networks</td>
                </tr>
                <tr class="t-green">
                    <td>Green</td>
                    <td>6</td>
                    <td>Sensitive</td>
                    <td>Ironic Ego</td>
                    <td>Pluralistic Inclusion</td>
                    <td>Value Communities</td>
                    <!-- <th rowspan=6>First Tier</th> -->
                </tr>
                <tr class="t-orange">
                    <td>Orange</td>
                    <td>5</td>
                    <td>Rational Achiever</td>
                    <td>Earnest Ego</td>
                    <td>Contractual Order</td>
                    <td>Corporate States</td>
                </tr>
                <tr class="t-amber">
                    <td>Amber</td>
                    <td>4</td>
                    <td>Absolutist Myth</td>
                    <td>Conformist Personality</td>
                    <td>Dogma</td>
                    <td>Early Nations</td>
                </tr>
                <tr class="t-red">
                    <td>Red</td>
                    <td>3</td>
                    <td>Impulsive Opportunist</td>
                    <td>Selfish Personality</td>
                    <td>Legend</td>
                    <td>Feudal Empires</td>
                </tr>
                <tr class="t-magenta">
                    <td>Magenta</td>
                    <td>2</td>
                    <td>Magical Fantasy</td>
                    <td>Dependent Personality</td>
                    <td>Lore</td>
                    <td>Ethnic Tribes</td>
                </tr>
                <tr class="t-infrared">
                    <td>Infrared</td>
                    <td>1</td>
                    <td>Fusion of Quadrants</td>
                    <td>Genetic Default Personality</td>
                    <td>Interaction</td>
                    <td>Survival Clans</td>
                </tr>
            </table>
            <h3>Developer Kosmos</h3>
            <p>Carrying this narrative forward, we're assuming that what is happening here is in every 
                respect just naturally how the kosmos works. We don't live in a kosmos that works 
                some other way where this defies reason. 
                <!-- it is amazing that we know anything about the origin of the galaxy, let alone the  -->
                <!-- Universe. At any rate, what we can observe is that  -->
                The Big Bang was a process that differentiated 
                some sort of primordial singularity into molecules that would ultimately 
                form galaxies with stellar and planetary systems. We can assume this is normal.
            </p>
            <p>Any planet would produce life. Molecules will tend to
                become organic molecules if given the opportunity. It is not that Earth is particularly
                special, it is that molecules are special, that the universe is special, that it falls 
                towards consciousness over time. This is just another fundamental dynamic of how it works, 
                just like how all matter attracts all other matter and how going fast makes time 
                slow down, how matter seems to be vibrations of hyper-dimensional nano-strings 
                from a mathematical perspective. People find that easy to accept. 
            </p>
            <p>
                These fundamental mysteries are actually the basis upon which to hypothesize 
                that the kosmos has a sort of meta-magnetic nature, or morphogenetic field. It tends up Levels. 
                It gets off on it or something.
                You are not some weird 
                crazy mutant. You are the mental being that kosmic code generates from nothing. You are the 
                world's molecules 
                that wake up and come to life, because that is what planets do, because you want to. 
                Creation myths and Big Bang science are all true enough. We are created 
                in the image of a creator. The Big Bang and ourselves have everything in common. 
                It's not coincidence, it's mutual expression. As kosmos representatives,
                we're here learning about reality, because that's what matter would do if it 
                were smart, which it will be eventually. Like clockwork. 😶‍🌫️                
                </p>
            <!-- <p>
                For example, let's say you're angry at someone for being mean. It is easy 
                to identify the Interiority of that feeling of anger, and the Exteriority 
                of that person's behavior. And so you might say that this event has driven 
                a wedge between you and this person. But what is the nature of this wedge?
                You spend your time thinking about this person, this event, having intense 
                emotions, constructing mental arguments against them, you can't get them out
                of your head, it's like they are controlling you, it's like you're obsessed
                with them, so by being angry with this person,
                you have made them the most intensely intimate, passionate, and commited 
                relationship imaginable. You've given them your full attention.
            </p>
            <p>
                The other way is empathy. This is a person who says mean things sometimes.
                They don't want to change, they see it as just who they are. They did not 
                want to anger you. They want you to like, or at least tolerate, them. 
                It just makes them angry that you are angry about some 
                stupid thing they said that they don't care about. That might not sound 
                empathetic, but it is to realistically assess the situation the way the 
                other person would. Now, having allowed that perspective into my own interior,
                rather than try and push it away, out of my reality, to the exterior, the whole 
                thing just doesn't bother me now. And ironically, by not trying to win this 
                person over, or change their perspective or attitude, but rather, just take them 
                and their relationship exactly as seriously as they do, I find that we thrive
                harmoniously as a collective. 
                
            </p> -->
            <h3>Really Literally</h3>
            <p>
                <!-- They are the internal and external of the collective quadrants. They  -->
                <!-- complement one another. Integral prefers the more direct approach. -->
                You're a stack of Levels in four
                Quadrants. Reality and the kosmos are Levels in 
                Quadrants. Quarks seem to be some kind of informational vectors which
                assemble into the general vibe of a subatomic particle, whose interactions
                are atoms, which interact to form molecules. We have already traversed an 
                incomprehensible scale, but molecules can be assembled into organic forms, 
                which can be cells, such as the cells of your body, your brain cells, even.
                <!-- And it just so happens that the stuff of the universe at each of these scales
                is able to interact at these utterly different Levels, each with different rules. -->
                Each Level includes the previous Level into a
                greater system of order. Instinct Leveled towards more complex, self-aware organisms. 
                Awareness Leveled towards communication. Communication Leveled towards social organization. 
            </p><p>
                If you move your hand, you move the atoms of your hand,
                you make it the case that Earth produces people who move their hand, and you change 
                the entire universe into one in which a person moved their hand there. All at once. No 
                trick. We're a stack of Levels in four Quadrants.
            </p> 
            <h5 class="pedantic" @click="changeQuad('up-down')" style="cursor: pointer;">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='up-down'">
            <h1 id="up-down">Individual and Collective</h1>
            <p>
                It's easy to overlook the fundamental tendency of reality to 
                express pattern repetition. There are countless molecules, 
                countless stars, countless people, countless perspectives, countless 
                brain states. Each has statistical differences, but each conforms 
                to the general rules that define it: every star is different, but every star 
                is similar enough to be called a star. This is the <b>Individual</b> and <b>Collective</b> of 
                nature, found in every instance of reality, on every occasion. Every horse is 
                unique, but is also just a horse. Every feeling is unique, but can be named. It's not 
                that everything belongs to categories, but that category patterns (memes/archetypes/ideals) generate the instances 
                which are apparent. There is nothing in 
                reality that doesn't have a collective and individual aspect. There is no plant 
                without a species, no person that isn't a primate, no house that's safe from planetary 
                annihilation. Everything in reality is 
                self-evidently unique, and uniqueness of course can't exist within the generative 
                constraints. Quadrants create these 
                apparent "paradoxes." There is no spoon. 
            </p>
            <h3>External Collectives: Lower Right</h3>
            <p>
                The Earth atom assembly flows in a solar system which flows in a galaxy. 
                Molecules can form mountains,
                flow as rivers, move as winds. A tree participates in a forest.
                A flock of birds illustrates collective 
                movement as they each adapt to one another's motions. 
                A species can thrive or become extinct.
                An angry mob rushes to Frankenstein's castle as the majority of 
                individuals move in that direction. I owe work and taxes because 
                I was born.
            </p>
            <h3>Internal Collectives: Lower Left</h3>
            <p>
                I participate in  
                Integral Theory, as does your opinion. We are presently participating 
                in one another's lives. As we experience events together, we each have 
                separate mental experiences, and the collective total 
                of our experience, through communication, reveals <em>more</em>
                reality, potentially, than each individual's experience. The sum 
                total of human knowledge and perspective is infinitely superior to that of the 
                individual, but unfortunately, communication greatly limits our ability to share, 
                and to receive. We each walk around with a tiny, hazy pinhole sliver of the collective comprehension.
            </p><p>
                Extraversion and introversion outcomes demonstrate 
                that the communicated views of an incidental collective are neither clearly superior nor 
                inferior to that individual's own native capacities. The integrated 
                mind is ambidextrous; the individual and collective supplement one another.
                To be smarter, be easier. To be easier, be smarter.
            </p>
            <h3>I Am The Collective</h3>
            <p>
                I learn by reading books and being educated through relationships, and commercial and public interests, 
                in their 
                language, with their politics, technology, and style. Only then can I apply that 
                abstract understanding to my 
                own personal use cases and develop my own divergent aesthetic, and that is only 
                received well if my divergence reflects a collective trend. About half of reality
                is governed by the collective. Language, 
                for example. Nobody came up with it, everybody learned it.
                Our collective consciousness, though it is abstract conceptually, is actually the only 
                route to high-Level knowledge and awareness, such as we all have. 
                In order for us to think with linguistic concepts, 
                we must exist in a universe and world that produces advanced brain functions, 
                and then socially teaches those brains how to reflect upon nature mentally. 
            </p>
            <p>Knowing this, it makes you wonder what you might be missing out on.</p>
            <!-- <p>Does society make you go to work, or do you choose to? Another paradox. Individual and 
                collective, two sides of a coin. Your work or non-work is society.
            </p> -->
            <p>
                <!-- This is why the cultural experience of "we," and the systemic comprehension
                of the "its," are considered the lower half of reality.  -->
                Everything 
                that a mental being can think, feel, or do is an expression of one or many synthesized patterns, memes, 
                ideals, or archetypes. This is simply because a mental being is limited to executing only 
                those functions that exist in its mental reality. It should be remarked that both nature,
                and the mind, are astoundingly, incredibly, utterly incapable of creativity in a genuine 
                sense, and said creativity appears to be expressed over time entirely in the form of 
                the evolutionary, holonic development or unfolding of Levels towards greater emergent novelty, 
                complexity, awareness, intelligence, sensitivity, and inclusion.
            </p>
            <h3>Consider a Molecule</h3>
            <p>
                A molecule can be seen in terms of its individual structure, or in terms of 
                its relationship with other molecules. Here, we can point out a subtle misunderstanding 
                which is common. The molecule, like everything, has a holonic nature. There is a 
                special sort of "collective" (social holon) formed by atoms grouping together into molecules, and these 
                molecules form a sort of collective to make substances. In the Integral view, these are 
                Levels, <em>not</em> Quadrants. The Lower Right quadrant of an Upper Right atom is not a molecule
                or a chair or everything inside the planet's atmosphere,
                but the universe itself, or whatever you consider the entire collective of atoms.
            </p>
            <h3>Social Holons at Every Level</h3>
            <p>
                Atoms, molecules, substances, cells, thought patterns, are Levels 
                of material reality that compose themselves holonically - by including individual wholes as parts into 
                individual wholes which each themselves have collective social dynamics at each Level.
                At the Level of molecules, we can 
                see that molecules exert forces and have interactions with one another, they can align into 
                magnetic or chrystalline configurations, they may collectively have a net charge, mass, 
                alkalinity, they exhibit material states and flow dynamics. At the Life Levels, we 
                may observe that matter has evolved this special band of Levels that behave utterly 
                different from how other substances behave - <em>it's alive!</em> Every creature has organic structures, and indeed, consciousness, 
                catering to its role in a web of life or food chain. Creatures behave according to 
                instincts, which are granted by genes, which result from web of life and 
                food chain dynamics. At the Mind Levels, we see how genetic instinct delivered the material 
                molecules of Earth through Life Levels, up to this point where we talk and scheme.
            </p>
            <h3>What is a Man?</h3>
            <p>
                A similar temptation is to identify the collective of an individual as the Earth, or the 
                Universe, because it's bigger and it contains me, or to identify the biosphere as the collective of civilization. Silly notions 
                like that.
            </p>
            <h3>Let's Break This Down</h3>
            <p>
                The Earth and myself have Levels. I'm a social holon, Earth is a heap (the molecules
                which fell into this orbital band of the sun after much smashing around.) 
                Earth is a rare planet, extremely rare, possibly unique at this moment, in that it has Life and Mind 
                Levels right now. 
                We know of countless other planets, but none which think, feel, or commit conscious actions
                through people and creatures.

            </p><p>
                Other than that, utterly typical planet on an unremarkable star in a random 
                galaxy, far as we know. 
                When molecules 
                fall into planets, they don't typically have Life and Mind Levels. Thinking of what's 
                happening here (Mind and Life) as geological or astronomical is somewhat category error, 
                as we know ourselves to be an extreme outlier as a planet, and as molecules. This is 
                how higher Levels look from lower Levels. They are rare and strange, alien pioneers in 
                a savage frontier. Yang penetrating the sacred heart of yin. Hero in the labyrinth where 
                the snake encircles the treasure. Social holons.
            </p>
            <h3>Fleeting Glimpse</h3>
            <p>
                The higher the Level, the more logarithmically rare and brief.  
                Earth is ordinary, but planetary Life is highly uncommon. In the context of Earth, Life is 
                commonplace, and Mind is exceedingly brief and rare and small in comparison. It should be 
                noted that nondual enlightenment is about as frequent among people today as this trend suggests, 
                being the highest Level. Since higher 
                Levels are literally composed of special configurations (social holons) of lower Levels, there 
                will always be infinitely more low-Level holons than high, at scales of extraordinary magnitude.
                It's a pyramid scheme. 👁️  
            </p>
            <h3>🌍 You're not my collective. 😿</h3>
            <p>
                While it is 
                intuitive to think of Earth as our collective, in fact, it is an utter, 
                total coincidence to everyone but the molecule pioneer forefathers who long ago somehow became proteins, 
                and those proteins which learned to use fire to cook food,
                that I and my collective are  
                 on the surface of this planet heap. Likewise, it seems to me from my perspective utter coincidence 
                who I am and when and where I'm living. It has nothing to do with anything which one I am. 
                Oh, sure it does. As molecules, I'm one with everything. The Mind is the one I refer to. It 
                has learned Quadrants from social communication, and now it wonders why it is this one.
            </p>
            <h3>Because This One Is Perfect 🫶🏿</h3>
                <!-- There are two types of whole-part relationships in nature. One is the relationship 
                between Individual and Collective at a given Level, and the other is the organization 
                of Individuals and Collectives into holonic Levels. Warning: this will reverse a 
                conventional understanding of reality. We are not a Collective of atoms. I am an 
                individual mind. We are a Collective of minds. I'm a person, we're people.  -->
            <p>
                <!-- Those our  -->
                <!-- Quadrants at our Level.   -->
                You're the product of deliberate 
                intentions of your cultural and social system. The way you see the world is what  
                systems taught you, what's been curated, because anyone cared enough to do that for us. Your entire knowledge is only what <em>this</em> person 
                has been exposed to since infancy. These stories of your life are the love you can feel, and you can feel 
                it because it was modeled for you. What you know creates you. It isn't a coincidence to you that 
                you're this one. It's very special and important to be the one you are, unless you think it isn't. 
                You're The One who acts out your perspective and values in real life. You're the response 
                to the injustice you see. You're the only possible solution. You're our only hope. That's 
                the most important and meaningful thing in existence, so far.
            </p>
            <h3>Ad Nauseum: thank me later</h3>
            <p>
                Collective atoms are the universe. Earth is a coincidental molecular heap 
                in the solar system, coincidentally heaped into 
                the Milky Way 🍫. That's just apparently what molecules do. I'm not part of Earth, 
                my molecules are part of Earth. I'm an ego person, whose collective is society and culture. 
                I'm not a Collective 
                of my cells (the cell collective is the biosphere), I'm a Level of my 
                cells. Atoms, molecules, and cells are Levels 
                of people, and likewise people are extremely rare potential Levels for atoms, molecules, and cells. 
                 
            </p><p>
                The atoms of my body 
                are Individual pieces of universe, and are also a holonic Level of myself. 
                My molecules are Individual bits of the planet Earth, or a chemical configuration,
                and also a holonic Level of myself. My cells are Individuals within the 
                biosphere of life on Earth, also a holonic Level of my tissues and organs and brain and me. 
                My body is part of the 
                animal kingdom, which is a Level of evolution in my genes.
            </p><p>
                My self-aware human brain puts me at 
                an extremely rare, advanced Level that is not found elsewhere in the Universe, 
                in chemistry, or in animals. The holonic Levels 
                of Mind, or Altitudes, only occur in human 
                people as far as we know. The collective of me is us, not Earth, not 
                the universe. The collective of us, humanity, is not Earth or the 
                Universe, but rather, that <em>is</em> the people collective, or collective consciousness.
            </p>
            <h3>The Chicken and the Egg</h3>
            <p>A question that insists on the discernment of Upper and Lower:
                they came together. It started laying and in that moment became "chicken".
            </p>
            <p>
                You may think of yourself as an individual, 
                isolated self. This way of self-conceptualizing was taught to you 
                by others. You learned by imitation. Your concepts come from 
                literature and media, from family and peers, from traditions 
                and education systems, from brain chemistry, resulting in personality. The language you think and communicate in was taught 
                to you. You continue the story of your family, your country, the 
                people of the world, you represent the nature of consciousness itself.
                From the perspective of everyone else in the world, your interior is nothing more 
                than an abstract assumption. Something which is real to you and nobody else 
                would seem to be the least real thing there could be, and so the internal experience 
                we call "my reality" is in fact the only thing that 
                could possibly <em>not</em> be real.
                But of course, here you are, and it has four Quadrants.  
            </p>
            <h5 class="pedantic" @click="changeQuad('upper-left')" style="cursor: pointer;">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='upper-left'">
            <h1 id="upper-left">Upper Left: Interior Individual</h1>
            <p>Your thoughts, feelings, physical sensations, the experience of being an 
                individual person. The Upper Left can only be known by the 
                individual, and is composed of things that are directly experiential in nature, so cannot
                be communicated or conveyed in an absolute sense. Upper Left has no physical existence, 
                as identity, concepts, values, dreams, aesthetics, and guesses, for example, are mental, cerebral, 
                abstract, or experiential in nature. 
            </p>
            <h3>UL Applications</h3>
            <p>
                The Upper Left can be developed through meditation, contemplation, introspection, and self-reflection.
                Psychology offers us pathways to insight, as spiritual disciplines reveal astounding domains of 
                the unconscious. Our general personal style, tone, temperament, type, mood, or feel are all 
                aspects of our Upper Left that spill across into the Lower Left cultural domain and become 
                descriptive of our individual character. Experience is the Upper Left of our Upper Right brain 
                functions. 
            </p>
            <h3>UL Health</h3>
            <p>A person's capacity for self-honesty forms the basis of their self worth and personal integrity. 
                We must always be attentive to our needs and desires and self-opinion, and exploring 
                subconscious depths of our personal nature. The intuitive function of the mind is simply to 
                experience mental content without a goal in mind, and thus we gain familiarity, coordination, 
                and depth in the intellectual realm. 
            </p>
            <h3>UL Pathology</h3>
            <p>
                An overly strong preference for the Upper Left may result in narcissism, isolation, being socially 
                perceived as strange, overly cerebral, or unmannered. Reflection and introspection can result in  
                depression, worsened by having a strong sense of personal morality that is misunderstood 
                as suspicious because it is well constructed and considered and thought out. A lack of 
                focus on external and collective Quadrants can result in 
                a lack of personal success and interpersonal connection.
            </p>
            <h3>Stages in the UL</h3>
            <p>
                Interior individual consciousness develops through a holonic progression of 
                stages of self conceptualization. Each stage builds upon the previous self concept via integration
                of prior assumptions into a new pattern. We can visualize it like zooming out a perspective. Our subjective
                perspective transforms by zooming out to see competing perspectives, forming a new 
                perspective which now sees the previous perspectives as existing among many. We can then 
                integrate those perspectives into a meta-perspective which transcends, but includes, the previous
                perspective. Each Level creates a new subjective reality by including the previous subjective
                realities as objects of awareness.
            </p>
            <h3>Evolving Four Selves</h3>
            <p>
                All Altitudes unfold according to this holonic, or dialectic, pattern, but as you can see, this 
                is complicated, so in our simplified mini-model, we can say that lower Levels experience Upper
                Left as a Personality in response, or reaction, to reality in the present. Through experience, the 
                Personality develops a cohesion of its range of moods and tones, some awareness of 
                the mechanisms of the objective world, and begins to see themselves as an Ego: a rational agent 
                telling a personal story over the course of a lifetime in relationship with others and with history.
                This Ego begins to gain awareness of fundamental uniting truths, and the invisible forces underlying 
                the mental activities, and so starts the course of developing towards a total Psyche, or psychic 
                being. This can then proceed through transcendental state practice into an affinity with the entire 
                kosmic interior itself, or pure Consciousness without subject or object. In each case, it is a matter
                of healing the cognitive dissonance of a fundamental split in reality, or duality of the mind, by embracing 
                and integrating the supposed opposing side. The Tao is just all four at once.
            </p>
            <h5 class="pedantic" @click="changeQuad('lower-left')" style="cursor: pointer;">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='lower-left'">
            <h1 id="lower-left">Lower Left: Interior Collective</h1>
            <p>
                This is the domain of culture and interpersonal relationships. 
                Every person is taught to be a person by their parents, their peers, their educators
                and guardians. A large part of the personality and self concept is not a unique creation, but a 
                system of mimmicked habits, or memes, consciously and unconsciously taught to us by culture. 
                The heros and villains, celebrities, and important individuals 
                in our lives become a sort of collective story, an overall narrative involving a team of relevant
                characters, the "We". The We ultimately "writes the history books", or decides what is important, 
                what is moral, what is a true accomplishment, and what is worthy of looking at. Through the lens of 
                the Lower Left Quadrant, we see that reality is a network of relationships, and we aim to maximize 
                our role in that network. Thus, feeling is the cognitive function of the lower left.
            </p>
            <p>If we consider for a moment the extraverted individual in relationship, we see that they have 
                less of a preference, perhaps even a fear, of their own isolated depths, and instead, they 
                experience reality through communicating with others, and conceptualizing themselves as part of 
                a group, rather than an individual, achieving their goals through persuasion of the group rather 
                than personally confronting the problem. While the 
                introvert experiences the UL as freedom and LL as constraint, the extravert
                experiences the LL as fullness and UL as loneliness. The extravert feels more whole or real in a group because their 
                mental self is collective. In the case of a dependent relationship, a beaurocratic pawn, a cultish zealot,
                the collective identity is seen as preferable to the personal, but a LL preference is also 
                expressed by socialites, philanthropists, managers, teachers, and artists.
            </p>
            <h3>LL Applications</h3>
            <p>
                The collective interior is the domain of communication, conflict resolution, public relations, social and literary criticism, politics, motivation, persuasion,
                sales, marketing, and being an overall cool, interesting, appropriate and likable person. LL is often 
                synonymous with "people skills" or "soft skills". 
            </p>
            <h3>LL Health</h3>
            <p>
                A preference for the LL perspective will result in a sense of connectedness, and a tendency 
                to attract opportunities, praise, acknowledgement, and consideration. Focusing on cultural 
                realities and engaging interpersonally may help a person get out of their own head and feel 
                like a part of something greater, as well as offering great diversity of perspectives.
            </p>
            <h3>LL Pathology</h3>
            <p>
                A person fixated on LL may feel lost in relationships, subsumed in community, hollow, 
                phony, lacking genuine 
                ability or insight, or lacking personal agency, preference, or identity. The need for social stimulation may result 
                in an inability to focus or accomplish goals independently without extrinsic reward. A lack of 
                grounding in positive self-appraisal may cause a person to seem needy or dependent, and may 
                result in dishonest, unethical behaviors for the sake of superficial approval.
            </p>
            <h5 class="pedantic" @click="changeQuad('upper-right')" style="cursor: pointer;">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='upper-right'">
            <h1 id="upper-right">Upper Right: Exterior Individual</h1>
            <p>Regardless of what you believe is happening, we can all agree objectively that experience  
                occurs when a physically material human body with an advanced primate brain generates 
                a characteristic waking brainwave pattern. Whatever happens to that brain directly produces
                the experience that you experience. In common speech, we use the word "I" to refer to both our 
                mind, and our body. We don't call the body "It" because we understand ourself to be that body, 
                as well as also being the mind.
            </p>
            <p>
                However, the brain really isn't the "I", from the experience of the UL mind. This is to say, we 
                did not even realize that awareness was generated by the brain until relatively recent.
                At present, even the best expert in the world would have a tough time making any sense out of
                the relationship between the physics and chemistry of the brain and the subtle operations of the psyche.
                Nobody looks at your physical brain to understand what you are thinking. The UR perspective 
                prioritizes the sensing cognitive function, or directly experiencing physical 
                reality through the senses. 
            </p>
            <p>
                For the sake of simplicity, I refer to the UR brain functioning structures by vocabulary that 
                comes more from UL self concepts like Personality, Ego, Psyche, and Consciousness. In this sense, 
                I mean these structures as the brainwave patterns that generate these internal structures, and since
                we have no vocabulary for generalizing brainwave states into apparent structural social entities,
                I find that these terms suffice to account for the material, physical, structural reality of
                neuro-cognitive functions.
            </p>
            <p>
                A person who prefers the UR will be practical, logical, handy, reasonable, detailed, simple, and 
                objective. They might be socially aloof, lacking personal insight or depth, and not very intellectual 
                or abstract, but their rooting and groundedness in the Earthly realm of the material makes 
                them sturdy, technical, and dependable.                
            </p>
            <h3>UR Applications</h3>
            <p>Grounded in the UR, a person will prefer clear objective facts and tasks that allow them to 
                physically manipulate reality. They may express that they don't feel like they are accomplishing 
                anything by talking or moving data points, but they see results when the rubber hits the road.
                The upper right is the domain of skilled trades, mathematics and physical sciences, construction, 
                engineering, architecture, deductive
                logic and procedural reasoning. The UR is often procedural, more comfortable working within standard
                logical roles, rules, and methods. 
            </p>
            <h3>UR Health</h3>
            <p>While much of the information that reaches our consciousness may be ethereal abstractions, colored
                perceptions, deliberate misrepresentations, misunderstandings, or falsehoods, there is an 
                absolute certainty in the solidity of the desk 
                in front of me. The UR is both concrete and certain, so for the more extraverted and cerebral, 
                it may be beneficial to take a moment and simply sense the reality occuring in this present environment 
                and body, and to celebrate the power we have as physical entities to build, design, destroy, and 
                optimize the objects surrounding us.  
            </p>
            <h3>UR Pathology</h3>
            <p>The key pathology is alienation. Both individualistic and materialistic, the UR perspective can result
                in exclusive interest in apparent material reality, as other perspectives may seem overly abstract or
                vain. The isolation of lacking interpersonal connection and intimacy may lead to 
                addictive and compulsive patterns unconsciously attempting to hack the physical chemistry 
                of the body, and the disinterest in larger and grander narratives may result in superficial or 
                transactional role relationships lacking in intimacy.  
            </p>
            <h5 class="pedantic" @click="changeQuad('lower-right')" style="cursor: pointer;">NEXT</h5>

        </template>
        <template v-else-if="quadRef==='lower-right'">
            <h1 id="lower-right">Lower Right: Exterior Collective</h1>
            <p>The exterior collective perspective views reality in terms of abstract but physically real systems.
                The lower right cognitive function is thinking, or using inductive 
                reasoning to conceptualize organizational patterns in phenomena. This is typically the most difficult 
                Quadrant to grasp, but 
                a primary point of interest for Second Tier. When reality is conceptualized as holonic, 
                the LR reveals nothing less than 
                the functional meaning and purpose of the universe, and these dynamics, 
                at least according to
                some idiot named Einstein, can be understood to reveal "the thoughts of God."
            </p>
            <p>From the LR perspective, I am most appropriately an instance of my highest self-recognized Level 
                of consciousness. I continue to exist at all other LR Levels, of course,
                thus the atoms of me are part of the universe's physical system. The molecules of my body are part of the substance 
                of Earth. As an animal, my body is part of the web of life. As a primate, my collective is the human species. 
                As Magenta, my linguistic archetypes derive from the ancient lore of oral tradition. As Red, my concept of 
                personal pride and glory come from legends of outstanding hero figures. As Amber, I was
                indoctrinated with part of the Western Judeo-Christian tradition and European colonialism against my will. 
                As Orange, I have a liberal education and am part of the continuing American democratic revolution, 
                participating in reasonable, procedural transactions between other free citizens. As Green, 
                I participate in the Meme of ironic self-deconstruction typical of sensitivity 
                and pluralistically inclusive systems of critical thought. I am an expression 
                of the Second Tier collective, by the act of understanding and caring about Integral
                Theory, and that then motivates me to behaviorally teach it to others.
            </p>
            <p> Each Altitude Level builds technology, 
                systems of organization, physical and political infrastructure, and the next meme simply builds on top of it. 
                Our network of communications technology,
                including internet, web, mobile, and social media emerged as the technological base of the 
                Green Meme. A Level of the LR will be recognized as a fundamental shift in the technological paradigm.
                Thus, Orange introduced technologies that help us to measure and calculate the physical world, a democratic
                social system that maximizes personal liberty and responsibility, and enormous innovations to increase 
                productivity, scale, scope, and efficiency of industry. Green brings us technology to 
                communicate and connect globally, to express, to judge, to influence. The technology of Teal meme should
                be expected to emerge as tools, infrastructure, and organizational frameworks that reflect an awareness 
                of Levels of development, such as perhaps a non-commercial web site that teaches Integral Theory.
            </p>
            <h3>LR Applications</h3>
            <p>
                 The LR orientation is suited to inductive reasoning, or Jung's thinking function. It thus 
                 manifests a sort of mastermind, diplomat, or executive character.
                 This person is ideally suited for playing high stakes roles and making difficult decisions,
                 as they are less influenceable and sensitive to interpersonal outcomes due to their objectivity and 
                 understanding of the occasion's ultimate insignificance. For more introverted LR expressions, 
                 complicated and multifaceted occupations like software coding, law, medicine, economics and 
                 statistical analysis may be more suited.
            </p>
            <h3>LR Health</h3>
            <p>
                While we pressure ourselves to improve in the UL, we feel peer pressure in the LL, and we 
                have material and bodily needs in the UR, the LR motivates our desire 
                to participate in the progress of history. 
            </p>
            <h3>LR Pathology</h3>
            <p>
                A fixation in LR can lead to a person lacking personal sentiment or 
                grounding in social and immediate physical reality. This person may be viewed as lacking 
                personality beyond their social role or occupation, and no interest in other people 
                beyond advancing the position of their eternal unspoken chess game. Objectification and
                commodification of people can become antisocial or manipulative at the extremes. 
            </p>
            <h5 class="pedantic" @click="emit('next')" style="cursor: pointer;">LEVELS</h5>

        </template>
    </div>
</template>
<style lang="sass" scoped>
table
    margin: auto
    td, th
        padding: 3px
        border: 1px solid white

.fill-text, .shadow-box, .quadrant-text
    cursor: pointer
.quadrant-text
    fill: white
.quadrant-text:hover
    fill: gray

.quads-container
    // display: grid
    grid-template-columns: 1fr
    // grid-auto-rows: 1fr
    p
        text-align: center
    .quadrants-svg
        grid-area: quads
        max-width: 90vw
        max-height: 90vw
@media screen and (min-width: 700px)
    .quads-container
        // display: grid
        grid-template-areas: 'quads title' 'quads stats' 'quads desc' 'panel section'
        // grid-template-columns: 1fr 1fr
        grid-auto-flow: column
        .quadrants-svg            
            max-height: 50vw
            max-width: 50vw
            background: black
        .panel
            grid-area: panel
        .section
            grid-area: section
        h1
            grid-area: title
        .desc
            grid-area: desc
        // p, h1, h3, h4
            // display: block
            // margin: 0
.rainbow-me td
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 0, 255, 0.5), rgba(0, 0, 255, 0.5), rgba(0, 255, 0, 0.5), rgba(150, 40, 40, 0.5), rgba(255, 0, 0, 0.5), rgba(200, 50, 50, 0.5))
    // text-shadow: 1px 1px white, -1px -1px white
    // color: black
.cosmic-rays td
    background-color: white
    color: black
.t-ultraviolet
    background-color: rgb(213 181 255 / 50%)
    color: black
.t-violet
    background-color: rgb(168 102 255 / 50%)
    color: black
.t-indigo
    background-color: rgb(122 106 255 / 50%)
    color: black
.t-turquoise
    background-color: rgb(111 162 255 / 50%)
    color: black
.t-teal
    background-color: rgb(0 255 243 / 50%)
    color: black
.t-green
    background-color: rgba(0, 255, 0, 0.5)
    color: black
.t-orange
    background-color: rgb(255 155 84 / 50%)
    color: black
.t-amber
    background-color: rgb(251 186 66 / 50%)
    color: black
.t-red
    background-color: rgba(255, 100, 100, 0.5)
    color: black
.t-magenta
    background-color: rgb(255 90 242 / 50%)
    color: black
.t-infrared
    background-color: rgb(247 166 166 / 50%)
    color: black

</style>