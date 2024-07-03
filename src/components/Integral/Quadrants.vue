<script setup lang="ts">
import {ref} from "vue"
type QuadRef = 'base'|'up-down'|'left-right'|'upper-left'|'upper-right'|'lower-left'|'lower-right'; 
const quadRef = ref('base')
const changeQuad = (sel: QuadRef) => quadRef.value=sel
</script>
<template>
    <div class="quads-container">
        <h1>Quadrants</h1>
        <p>Click a Quadrant or axis for more info.</p>
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
            <p class="desc">Quadrants are not a new concept to your 
                mind, but a lens you already use. What is breathtakingly beautiful about this model is 
                how we see the rainbow of Levels reflected across
                the four Quadrants, showing the emergence of similar structural and thematic patterns in self,
                culture, local and systemic nature. This is because Altitudes are the same memetic (or noetic) 
                structures, seen from four dialectical perspectives. These are the Altitudes of my brain, my 
                life, my interactions, and society itself, all at once, co-emerging.
            </p>
            <!-- <div class="stats"> -->
                <h3>Language Structures Our Thinking</h3>
                <p>The Quadrants are conjugated
                    outright in most languages, suggesting that an important distinction 
                    is reflected in perspectives: 
                    First, Second, and Third person, Singular and 
                    Plural. Classical milestones in human development include the formation of 
                    concepts of self, others, objectivity, and abstraction. In other words, 
                    the First Tier of Levels solidify consciousness into familiarity with the Quadrants.
                </p>
                <h4>A quick way to check which Quadrant: I, We, It, or Its? </h4>
                <p>
                    See, it's a subtle point, but my language forces me to assign everything into a 
                    Quadrant when I think, when I communicate, and I need to use this language to interface 
                    with everyone else, and all the communication I can receive is conjugated with 
                    Quadrants, thus it should be no surprise that we all might find it odd to suggest that 
                    they don't actually exist. I mean, look, they're conjugated right into human 
                    thought. It is literally a mental prison. Kind of the only one.
                </p>
                <p>
                    Speaking this language is one of many ways our social system causes us to think in this way, and so is partly to 
                    blame for me allowing us to be rational and communicate our thoughts
                    decently in the best of cases, but it also could be said that language imposes several 
                    forms of cognitive bias on the native speaker, and reinforces a 
                    seperation between the ways we might consider ourselves or our culture
                    versus others, whether we consider something conscious, what we consider ourselves 
                    a part of, the effects of systems on individuals, the relationship between culture and 
                    technology, that's just scratching the surface.
                </p>
                <p>The real point is not just that 
                    these four conjugations of reality are interconnected, but indeed they are four 
                    aspects of a singular reality. This recognition as a thought informs the Second Tier of 
                    Levels. However, as an 
                    experience of being, or State or even Level of consciousness, one will note that big 
                    words like "oneness", "union", and "nonduality" are all described conceptually as the 
                    suspension of Quadrants, the recognition 
                    that Quadrants are the mental constructs you awaken from seems, in our own opinion, 
                    synonymous with spiritual enlightenment.
                </p>
            
                <h2>Four Ways to Look At Everything</h2>
                <p>Each Quadrant can correctly answer the question, <b>"What is the nature
                    of reality?"</b>
                    A superior answer would thus include all four. 
                
                <p><b>Upper Left "I":</b> My present consciousness, memories, stories, sensations, feelings, thoughts.
                </p>
                <p><b>Reality: </b>I am this mind, aware of my thoughts and sensations, my story,
                and all the things I know of. This room, this world, and other people, all exist in my mind, as 
                information that I am aware of. I am reality.
                </p>
                <p><b>Lower Left "We":</b> The collective consensus which we develop through interpersonal communication.
                </p>
                <p><b>Reality: </b>Relationships define our nature by socializing us into notions of who we are and what we do. 
                We think the beliefs from our literature in the language of our culture, literally. I'm a name and address and a citizen 
                of political designations, a member
                of ideological movements, a reputation and social credit. I am my job, my family, my country, my khakis. 
                The only actions of moral value 
                are actions that positively affect people. That's our reality.</p>
                </p>
                <p><b>Lower Right "It":</b> The apparent physical environment, my brain, body, and physical senses.
                </p>
                <p><b>Reality: </b>This human brain interprets sense information into concepts so 
                that it can comprehend circumstances well enough to advantageously transform social and environmental 
                outcomes, with the biproduct that it imagines itself into the supposedly cohesive story of my  
                experience as a social being. I am a brainwave pattern, or a cognitive function. Everything that brain 
                can directly sense and be logically certain of, that must be reality.
                </p>
                <p><b>Upper Right "Its":</b> The dynamics of collective and social systems.
                </p>
                <p><b>Reality: </b>The Universe produces human civilization through a tendency towards 
                greater novelty and complexity called evolution. Civilization continues to evolve memetically, and I 
                will play the minute role of being carried along or participating in the unfolding of this 
                process, which is the nature of reality.
                </p>
                <h3>What Is The Nature of Reality?</h3>
                <p>Try asking the question yourself, but we find that people describe a systemic structure, 
                    an interactional concept, a hard facts approach, the ineffible experience of mind,  
                    some combination of those, or they fail to provide an adequate answer. 
                    Our conclusions are threefold:
                    <b>1)</b> That people answer a question firmly 
                    with one quarter of common knowledge and sleep like a baby.
                    <b>2)</b> That reality is four-dimensional according to itself.
                    <b>3)</b> That the word "reality" is highly problematic without
                    a Quadrants model.
                </p>
                <p> Reality always includes an individual with 
                    an interior and exterior, who belongs to a collective which also has an interior and exterior.
                    This description of the Quadrants Module may seem exotic at first, but keep it simple:
                    what reality is, is that reality has an inside and outside, and it occurs at an individual 
                    and collective level. When we conjugate our language, "I", "We", "It", and "Its", we again 
                    show that we know the Quadrants intuitively, if not explicitly. Those conjugated pronouns 
                    refer to the subject of each Quadrant. 
                </p>

                <p>Thus, in explaining reality in commonsense words, we must say that the nature of reality 
                    is that it occurs simultaneously to us as these four Quadrants. Language is structured very 
                    close to perception, so not surprising that we conjugate our language into "I," "We", 
                    "It", "Its" - 
                    first, second, and third person, singular and plural, the way we experience reality.
                </p>
                <p>
                    This also means that the four common answers given above are incomplete, unconsciously 
                    partial and limiting views of reality, and a full answer would include all four 
                    perspectives.
                    Integral is not inventing Quadrants and trying to convince you they exist, but rather 
                    revealing that we already use them unconsciously, and suggesting that they actually 
                    don't exist.😉
                </p>
                <h3>Using Quadrants</h3>
                <p>The main practical benefit of Quadrants is to recognize which are being focused on in 
                    a situation, and view it more holistically, using all four. 
                    In a particular sense - a kosmic evolutionary sense, the Quadrants 
                    are the metaphorical "dimensions" of reality. 
                </p>
                <h2>Second Tier Marketing: Who Is Integral For?</h2>
                <p>You may be tempted to think Integral is one thing, only to find that you  
                    are taking a narrow view. Here, we can illuminate the unfathomable scope of this model,
                    and give simple Quadrant-based values offered by the theory. 
                </p> 
                <p><b>Upper-Left "I":</b> Integral is a map for self help and personal development.
                    It explains how to improve one's moods, relationships, and lifestyle, how transcendental
                    states of consciousness work, what they reveal, and massively helps in the development 
                    of personal insight and mature self-concept.
                </p>
                <p><b>Lower-Left "We":</b> Integral is a subculture, a values paradigm, a worldview, aimed 
                    at reconcilliation and inclusion of those extant. According 
                to its own narrative, Integral is a Level, which 
                can also be called Second Tier or Teal Altitude. If all of
                this makes sense to you, to precisely that extent you are Integral.
                No Kool-Aid to drink. If a map of the way humankind understands reality is 
                recognizable, the Integral "We" includes you.</p>    
                <p><b>Upper-Right "It":</b> Ken Wilber provides a relatively simple, comprehensive philosophical orientation 
                    tool or ideological swiss army knife, enabling ready solutions to eternal problems. 
                    All extant concepts fit together in a single continuity, which applies very directly and progressively 
                    to every topic and field, including Wilber's work in philosophy, psychology, religion, 
                    spirituality, economics, sociology, anthropology, politics, history, business, sexuality, 
                    entertainment, literature, art, criticism, health, and lifestyle.
                </p>    
                <p><b>Lower-Right "Its":</b> Integral is like a Rosetta Stone for comprehending how fields and systems are inter-related
                    in the grandest scope. Embracing all of reality, it is applicable to every endeavor, and is best used as a universal 
                    translater, a way of reconciling disparate perspectives and checking in with every aspect of the big picture.
                </p>
                <h3>Holon: A 4-D Stack of Levels</h3>
                <p>
                 <b>A holon is a whole composed of parts, and also is itself a part of a greater whole. </b>The Quadrants illustrate
                how a singular "holonic" source unfolds in and expresses all four dimensions simultaneously, rendering all 
                four quadrants equally and entirely real. Everything certainly real exists in all four Quadrants and is 
                a holon.
                Everything not real, by debatable standards, exists in some Quadrants, but not all, and thus is not a holon 
                either.
                </p>
                <h3>Examples of Debatably Real Things</h3>
                <p><b>Buloney: </b>A lie is an exclusively LL reality that is unreal to the subjective teller of it, and is untrue 
                    in physical reality. This would result in a misunderstanding where if you believed the lie, it would 
                    then be true only in the UL, so ultimately false.
                </p>
                <p><b>Divination: </b>Astrology exists in the interior Quadrants as a way of determining a person's overall character based 
                    on their date of birth. It exists in the Left Hand Quadrants because we know of it and some of us 
                    believe in it. Since there is no logical causative mechanism, astrological typing is a mythological system 
                    in the LR, 
                    and false in UR objective reality as scientific investigation has revealed no merit to astrological 
                    personality assessment.
                </p>
                <p><b>Ghosties: </b>An imaginary friend or hallucinated entity has a false existence in the interior Quadrants, existing 
                    as a projection of the personality of the subject, incorrectly appearing to exist in objective reality.
                    This entity is not objectively or inter-subjectively real.
                </p>
                <p><b>Unsolved: </b>A person dies with a secret they never told anyone. The secret is entirely true, but nobody will 
                    ever find out, and it will never have any affect on anyone. Thus, it makes no difference whether you 
                    consider it real or not.
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
                <h3>More of Reality in Fewer Words</h3>
                <p>
                At a deeper level, Integral post-metaphysics reveals that probably the most accurate generalization 
                    that can be made about reality, nature, the self, or society, is that it's an evolutionary system unfolding 
                    holonic Levels across simultaneous interior, exterior, individual and collective dimensions. But you don't 
                    just go around saying things like that.
                </p>
                <p>A word of caution. As we walk around looking at things in real life and trying to understand how 
                they are holons, we may have to introduce two further terms in order to comprehensively include all 
                of reality without confusion. This is entirely due to us referencing things according to a non-holonic 
                comprehension of nature.
                </p>
                <p>  
                A <b>heap</b> is a coincidental collective grouped by arbitrary subjective distinction, like if 
                I said
                "all the birds on your lawn." There is no cohesive internal to that reference, it is not a proper
                collective, it is just a coincidence whether some of the birds of various flocks and species 
                happen to be inside your property lines. So it is not an organized collective holon of birds, 
                but rather an arbitrary collection grouped by the unrelated properties of being a bird, and being 
                in this yard.  
                </p>
                <p>An <b>artifact</b> is a collective deliberately assembled by a social holon. A pencil, for example,
                    has fallen very far from the tree that produced its wood. There is nothing in the nature of a tree 
                    or a forest that would suggest it would ever become a pencil, unless there were industrial peoples
                    with sophisticated tools, rubber, and graphite. Likewise, a beehive would never arise naturally from 
                    its component substances, but is rather constructed by the instincts of bee colonies.  
                </p>
                <p>All of reality is holons, but much of our conceptual awareness and the language we use 
                    focuses heavily on heaps and artifacts as well, which are contextual and subjective realities. You 
                    should now be able to identify everything in existence as a holon, a heap, or an artifact.  
                </p>
                <h3>Quadrants within Quadrants</h3>
                <p>Nearly all perspectives
                        we encounter are compound views. For example, if I describe my car 
                        to you, I'm describing an UR machine from my perspective, which is 
                        UL, but I'm trying to convey things of interest to you, implying a 
                        shared LL between us, and we may talk vehicle makes and models 
                        and market prices, all LR. Anyways, the perspective that you yourself 
                        would end up with would be a LL view, shared between us, of the car 
                        existing in the UR. This issue becomes central in describing the Levels.
                        Every Level can be described in each Quadrant, and each of these can be
                        seen from each quadrant, for a total of 16 basic descriptive perspectives.

                </p>
                <h3>Levels and Quadrants</h3>
                <p>The most fascinating aspect of Altitudes, and it is easy to miss at first, is that 
                    they emerge in all four Quadrants. These same general patterns, these underlying 
                    memetic holons, the core patterns of humanity, the spectrum or visible light range 
                    of history, occur in myself, in my own thoughts and feelings. They also will dictate 
                    the way that stories are told, and critiqued, whether they are permissable, and they 
                    determine our technological base. These thoughts and feelings I might have are the 
                    foundation of civilization itself in a certain era of history. There is an enormous
                    global community of people who share an overall conception of the nature of reality 
                    with me, all throughout history. A baby born now begins fundamentally the same as 
                    the early hominids of the upper paleolithic, and will proceed to develop through each 
                    of the Levels that society itself developed through. All of the great art and literature
                    were expressions of Levels, sometimes challenging contemporary Levels, and again, some of
                    these being foundational to Levels of society and technology and governance. We observe with 
                    each Level an overall general reversal to the relationship with Quadrants; each move up a Level 
                    seems to reflect a change in style across each axis of the Quadrants. For example, Red, Orange, Teal,
                    Indigo, and Ultraviolet stress forms of objectivity and individualism or agency, while Magenta, Amber,  
                    Green, Green, Turquoise, Violet, and Clearlight stress subjectivity and collectivism or communion.
                    This is not some magic spell built into the fabric of evolution, it is rather just the effect of a 
                    seasonal style of pattern, where in development we cycle between extremes of thought, feeling, and 
                    action in an effort to synthesize or inhabit both sides of the duality. Just as the planet traverses 
                    the Universe within the orbit of the sun experience the dualistic cycle of seasons, we develop generally 
                    up the Levels within the maturity cycle of our human life and make progress by bringing our new development
                    across the Quadrants and ultimately transcending the duality of the Quadrant perspective of that pair of Levels. 
                </p>
                <h3>Lines and Quadrants</h3>
                <p>In nearly every case, a particular Line will only study or observe a single 
                    Quadrant. Thus, advances in medicine, psychology, social sciences, and economics appear 
                    to exist each in their own domain while of course they are all naturally implicated
                    in one another. An Integral Thinker would want to find the overlap in these four 
                    perspectives, which is what Altitudes is.
                </p>
                <h3>Types and Quadrants</h3>
                <p>It would not be novel at all to say that many, perhaps the majority, of 
                    personality typologies, are based on the medieval four classical elements (earth, air,
                    water, and fire) which correspond to the four seasons and formerly dominated type theory in 
                    systems Eastern and Western, as well as medicine 
                    in the theory of sanguine, phlegmatic, melancholic, and choleric temperaments and many aspects of esoteric 
                    philosophy and alchemy. It should be noted that these medieval spiritual pseudo science concepts helped 
                    Karl Jung to develop his own typology, which entirely informed the development of the 
                    Myers-Briggs system. Thus, small world, there really aren't a lot of typologies in common 
                    usage, other than colloquial observational truisms of the nature, "You know Julie, there's 
                    two types of people in this world, XXXXXers, and XXXXers." And it should be observed, particularly 
                    in the writings of Jung, that this elemental typology is equivalent to one's relationship 
                    to the Quadrants. 
                    The duality, or Tao, which exists on every Level of nature is expressed on Earth as seasons, in life as birth and 
                    death, in animals as sex and in culture as gender. In personality, the duality is expressed as extroversion or 
                    objectivity attitude towards the left and right Quadrants, as well as affinity with individuality or collectivism.
                    These four functional types (Quadrants) were called by Jung intuition, sensing, thinking, and feeling. Here is a 
                    table expressing the relationships between these. 
                </p>
                <table>
                    <tr>
                        <th>UL: Intuition</th>
                        <th>UR: Sensing</th>
                    </tr>
                    <tr>
                        <th>LL: Feeling</th>
                        <th>LR: Thinking</th>                        
                    </tr>
                </table>
                <p>As we observe repeatedly, each Quadrant can be viewed through a Quadrant, which 
                    results in the compounded multiplicity of perspectives we encounter in Jungian types as well 
                    as Quadrant reality itself. Thus, the extraversion attitude and superiority parameter
                    of a cognitive function 
                    give us Quadrants to view these Quadrants through. This is to say that many, or most,
                    Typologies, or the Types module itself, can largely be seen as another way of expressing 
                    the Quadrants, this case in human personality. The Big Five traits correlate with 
                    these types, except for neuroticism. Many systems such as the enneagram use 
                    divisions of three to express fundamentally similar personality factors, most typically accomplished 
                    by squishing the right quadrants together, or by defining the intersection of Quadrants as 
                    points of reference.   
                </p>
                <h3>States and Quadrants</h3>
                <p>
                    Most descriptions of transcendental or spiritualized states of consciousness 
                    are described in terms of the dissolution of Quadrants. The enlightened being 
                    has gone beyond the self, become one with all of existence, experiences a deep and 
                    interpenetrating communion with all sentient beings, dissolves into the unbounded
                    infinite void of the kosmos, understands itself to be nothing but the eternal 
                    conscious awareness of material reality, feels the world and people around themself
                    as their own skin, expresses radical loving compassion that sees deeper into you than you do, 
                    is radiantly annointed with the light of creation. Sound familiar? 
                    Nearly all descriptions of spirituality across time and tradition involve transcending 
                    the mentally constructed boundaries of the Quadrants. In other words, nondual enlightenment 
                    can be expressed as the experience of being entirely I, We, It, and Its all at once.
                    You are just as much the story of your life as you are the Big Bang, just as much the 
                    developmental efforts of sentient beings throughout history as you are the systems 
                    and infrastructure which organize it. Truly, you are a stack of Levels in four Quadrants.
                    Everyone and everything is this, reality is this, it is all You, it is all not-You, it is 
                    nondual, there is
                    no You, only this, a stack of Levels in four Quadrants, which I'm saying is You.
                    And me. And everything.
                </p>
            <!-- </div>
            <div class="panel">
            </div>
            <div class="section"> -->
            <!-- </div> -->
        </template>
        <template v-else-if="quadRef==='left-right'">
            <h1>Internal and External</h1>
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

            <h3>We Live Within A Dream</h3>
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
                activity tells itself a story about a person over time.
            </p>
            <h3>We Live in Reality?</h3>
            <p>I have made two classical, dualistic, seemingly contradictory, and yet both compelling,
                arguments for the nature of reality. You could call them Interior or Exterior fundamentalism.
                Though our conditioning experience as people causes the apparent paradox that the only thing 
                we know is an illusion generating itself for no reason, the integration of these two opposing
                perspectives seems to result in the reality that we experience. Because I want to be here, 
                my brain generates thoughts and feelings in response to signals I recognize as patterns, and 
                I choose between patterns to generate motivated thought, and this provokes the physical body 
                of a person in an environment to do actions that will impact the interior thoughts and feelings
                of others. Lots of insides, lots of outsides, no actual boundaries, but that is the reality that 
                we experience. It is nondual, but as we imagine it now, it is imagined as dualistic, with simultaneous
                Quadrant perspectives experienced as "in here" and "out there", but this is only an interface or 
                framework. Prior to introducing such an interface, reality is experienced as a fusion of self and 
                environment, and the baby is useless. Mastering the interface, Quadrants, tends to mark milestones 
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
                symbol with an "eye" of each side of duality existing within the other, it is worth 
                observing that objective reality is in fact imagined by a mind and not directly experienced,
                while subjective experience is itself in fact merely the virtualized experience of
                an entirely physical, material objective brain system.  
            </p>
            <p>
                This is no paradox or riddle, just Quadrants. Free will and 
                determinism are both entirely, perfectly true. They are internal and external 
                perspectives on the unfolding of events. Every internal choice that you make was 
                calculated by the external events leading up to it, it was exactly the choice you would end 
                up making, and you could have made the 
                other choice but you didn't end up doing that in reality. When you make a choice, it does not create 
                a parallel universe in which you made the other choice. That's silly. What it does do,
                plainly and self-evidently, is demonstrate that you are consciously participating
                in objective reality. 
            </p>
            <h3>Conscious participation is a force of nature.</h3>
            <p>
                Your choices 
                are just as real and causative as any natural 
                force. It isn't the case that your choices don't "matter" because your destiny is
                calculated by physics. That's like saying love is boring because it's calculated by 
                reproduction. Category error. That your choices matter is an aspect of nature, it's 
                a part of the entire physics of the kosmos. You are a being that makes choices. 
                From my perspective, from yours, and objectively. It kind of depends on how you measure,
                but it could be argued that human choice is the most powerful force in the known 
                universe. Again, depends on how you measure. 
            </p>
            <h3>What is power?</h3>
            <p> A quasar has no desire to 
                do anything and must fall and dissipate forever. I can smush an ant, but I can also not 
                smush an ant. That's true power. I can say mean things to you and hurt your feelings, but 
                anything I could think to do with a quasar, if it were even possible, would annihilate 
                myself as well. And, to cap this one off, if anything were capable of getting a quasar 
                to harm you without harming me, I would have to imagine human choice would be involved.
                Only human choice has the physical ability to accomplish physical things like that.
                Physically purposeful things.
            </p>

            <h3>Quantumization of Philosophy</h3>
            <p>As a culture, we seem to be falling deeper and deeper into utter denial of 
                the only thing that surely exists, consciousness. The only 
                answers that we trust come from the material sciences, dealing with a world we 
                do not experience, typically at a scale we do not experience. We wonder if science can discover the nature of mind in the 
                mathematical abstractions suggested by the behavior of things so tiny 
                that the notion of observation becomes nonsensical.
                Scientists can study the brain, and microcosmic, but there's no profit in the nature of mind. You are the nature of mind.
                We are the nature of mind.
            </p>
            <h3>The Universe is the nature of mind.</h3>
            <p> Scientists don't 
                waste their time on dime bag crap like this. Literally, the Universe is 
                this big factory that transforms matter into mind, according to me, itself.
                I wouldn't be here if it didn't do that. Why does it do that? Does it like 
                doing that? Yeah, I like being alive, so yeah. The Universe likes generating 
                consciousness according to itself. There really is no problem here, philosophically.
                I'm just trying to avoid death.
            </p>
            <h3>Consciousness Today</h3>
            <p>The average educated person has a very limited understanding of 
                the nature of what we tend to call consciousness - which is strange, as it is 
                the nature of what we all are. We lend a lot of credence 
                to scientific approaches, and the methodologies of science have told us 
                many things about how brains work, but they leave the nature of consciousnessness
                to philosophy, the psyche to psychology, and the mind to literature.
            </p>
            <h3>Science and Consciousness</h3>
            <p> 
                Science concerns itself with nature and the causative forces of reality. The mind is real, 
                and supremely causative, of course. If you consider it 
                carefully, a mental science is literally just abstract analytical logic
                applied introspectively, as in the Integral model, or it would otherwise 
                more practically be a system of practices for developing insight, which comprise 
                the States aspect of Integral Theory.
            </p>
            <h3>Am I brainwaves or am I this experience?</h3>
            <p>Here's what the Quadrants mean: you're both. The answer is yes. Consciousness and those brainwaves 
                are no coincidence. They are one and the same, viewed from inside and outside. 
                Neither could exist without the other, as they are two perspectives 
                on a single phenomenon. Without your brain, you wouldn't be here. If you weren't here, 
                your brain couldn't be doing the same thing it's doing right now. 
                As you see directly right now, reality as you know it can be described as
                a relationship between an objective, external world out there, and beings 
                of that world experiencing it internally, in here where we are right now. 
            </p>
            <h3>The Fundamental Split</h3>
            <p>One of the first cognitive stage developments of an infant can 
                be described as going from an animal-like state of fusion consciousness to differentiating self from 
                environment. Very useful, but it must truly be comprehended that this is only an 
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
                Okay, let's actually get weird now. Expand your notion of the universe to include 
                this notion of consciousness, of holon interiority, and you start to see the Integral 
                kosmos. Do you think it's a coincidence that you're who you are, that you live on this 
                planet in this time, that you are interacting with me right now? Do you think 
                that it's some sort of absurd, ridiculous coincidence or comedy of errors that produced 
                intelligent life on the planet Earth? I mean, don't most of us actually think that?
                And of course, the reason most of us think that is that we used to say this really, really 
                big dude controls everything that happens, and we like, killed everyone that didn't 
                believe that. So now it all happens just because. Net improvement.
            </p>
            <h3>A New Genesis Hypothesis</h3>
            <p>
               In general, a theory that is absurdly improbable and lacking coherence in terms of 
               the causal connection between its component parts should be rejected. And instead, you 
               might take the given nature of reality which presents itself as the nature of reality. What does that 
               mean? It means that we are then to gather that what is happening here, where I'm
               explaining what's happening here, is utterly typical. This is exactly what I would do, as a 
               normal person, if given the opportunity, as biological planets tend to become self aware, and 
               they act as us people to spread self awareness around via communication. I'm not
               saying there's a Creator, I'm saying that the Universe is in fact our Creator,
               that this is the character of reality itself, that it Creates us mental beings, as seen 
               here. 
            </p>
            <h3>An Evolutionary Impulse in Nature</h3>
            <p>The Universe tends, or leans, 
               towards higher Levels of consciousness. As seen here. Just due to the nature of reality, a planet like Earth would 
               fall into having life, and eventually, that life would very likely fall into self awareness 
               and civilization. The prevailing scientific perspective that the origin of 
               life on Earth, the evolution of that life progressing towards more complex forms, 
               that life becoming self aware, the self awareness forming civilization, all happens on accident 
               for no reason just because. All of this 
               occurs in a Universe that is cold, dead, empty, remote, lifeless, unconscious, probabilistic - 
               we are a miracle! A
               total accident, huge fluke. A coincidence which comes but once in billions of years 
               of billions of galaxies. What a huge mindblow it would be if we were to 
               discover that this is precisely what the universe does, what it is for, 
               that this is the nature of reality, that it wakes up and grows up.
            </p>
            <h3>Evolutionary Reality</h3>
            <p>Let's take everything that seems like a great eternal unsolved mystery: why 
                did the big bang happen? Why did Earth chemicals come to life? Why did life become self conscious?
                What is the point of what is happening in the Universe? Why am I experiencing this 
                person that I apparently am? And let's answer all of them at once. The structural 
                nature of reality is that holons organize into higher Level holons. A higher Level 
                holon means that it is constructed of lower Level holons. As these holons organize 
                or evolve over the history of the universe into conscious organism-Level creatures, and 
                those creatures internally organize into sentient mental beings, exeriencing reality 
                as internal and external Quadrant perspectives. 
            </p>
            <h3>The Consciousness of Atoms</h3>
            <p>
                In order to understand the evolutionary nature of the Quadrants, it is essential 
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
                must be more of the "soul" or consciousness, within the experience of being a plant, 
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
                    <td>The Future</td>
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
                    <td>Sun</td>
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
            <p>And let's construct a narrative based on the assumption that what is happening is 
                just naturally, simply how the kosmos works, which of course would be the case:
                it is amazing that we know anything about the origin of the galaxy, let alone the 
                Universe. At any rate, what we can observe is that this was a process that differentiated 
                some sort of primordial singularity into molecules that would ultimately 
                form galaxies with stellar and planetary systems.
            </p>
            <p>Okay, stop right there. Why did we make this Earth planet that would produce life?
                That doesn't make any sense.
            </p>
            <p>But remember, this is ordinary. Any planet would produce life. Molecules will tend to
                become organic molecules if given the opportunity. It is not that Earth is particularly
                special, it is that molecules are special, that the universe is special, that it falls 
                towards consciousness over time. This is just another mysterious piece of how it works, 
                just like how all matter attracts all other matter and how going fast makes time 
                slow down, how matter seems to be the vibrations of hyper-dimensional nano-strings 
                from a mathematical perspective. So, you can accept all that. Why not accept then, 
                that these fundamental mysteries, are actually the basis upon which to hypothesize 
                that the kosmos is mental in nature. It has a mental dimension. You are not some weird 
                crazy mutant. You are the mental dimension of the universe. You are the world's molecules 
                that wake up and come to life, because that is what planets do. See, we have been created 
                in the image of our Creator. See, the Big Bang and ourselves have in common that we are 
                learning. That isn't a coincidence. It's a reflection. As representatives of the universe,
                we are here learning about ourself, because that's what matter would do if it were smart, which 
                it will be, like clockwork.
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
            <p>
                The Creation myths, and the Big Bang theory, are all rather true.
                They are the internal and external of the collective quadrants. They 
                complement one another. Integral prefers the more direct approach.
                Really try to take this literally. You are a stack of Levels in four
                Quadrants. Reality and the kosmos are a stack of Levels in four 
                Quadrants. Quarks seem to be some kind of informational vectors which
                assemble into the general vibe of a subatomic particle, whose interactions
                are atoms, which interact to form molecules. We have already traversed an 
                incomprehensible scale, but molecules can be assembled into organic forms, 
                which can be cells, such as the cells of your body, your brain cells, even.
                And it just so happens that the stuff of the universe at each of these scales
                is able to interact at these utterly different Levels, each with different rules.
                Each Level, from atoms to cells to molecules, includes the previous Level into a
                greater system of order. If you move your hand, you move the atoms of your hand,
                you make it the case that Earth produces people who move their hand, and you change 
                the entire Universe into one in which a person moves their hand. All at once. No 
                trick. We are a stack of Levels in four Quadrants.
            </p> 
        </template>
        <template v-else-if="quadRef==='up-down'">
            <h1>Individual and Collective</h1>
            <p>
                It is easy to miss or overlook the fundamental tendency of reality to 
                express itself in terms of pattern repetition. There are countless molecules, 
                countless stars, countless people, countless perspectives, countless 
                brain states. Each will have statistical differences, but each conforms 
                to the general rules that define it: every star is different, but every star 
                is a star. This is the <b>Individual</b> and <b>Collective</b> dynamic of 
                nature, found in every instance of reality, on every occasion. Every horse is 
                unique, but is a horse. Every feeling is unique, but is that feeling. Everything 
                belongs to categories, and every category generates instances. There is nothing in 
                reality that doesn't have a collective and individual aspect. 
            </p>
            <h3>Systems and Collectives</h3>
            <p>A crowd can be said to rush towards a location as the majority of 
                individuals move in that direction. A flock of birds illustrates collective 
                movement as individual birds adapt to one another's motions. Rocks can form mountains.
                Water can flow as rivers. Air can move as winds. A tree participates in a forest.
                Earth flows in a solar system which flows in a galaxy. My work participates in the 
                Integral Theory movement, as does your opinion of it. We as individuals participate 
                in one another's lives. As you and I experience an event together, an interesting 
                thing happens. I have a mental experience of it, you have a mental experience of it.
                We each have a different mental experience of it, and so thus, the collective total 
                of our experience of it, explored through our communication, reveals <em>more</em>
                of reality, potentially, than the individuals each experience. I learn about reality 
                by reading books and being educated by people, in their language and with their 
                technology and style, and only then can I apply that abstract understanding to my 
                own personal cases and instances and develop my own divergent aesthetic. Thus, 
                there are aspects
                of reality that are not revealed to the individual, other than through the collective.
                Our collective consciousness, though it is abstract conceptually, is actually our only 
                reasonable route to knowledge and awareness, inhibited only by our ability to 
                communicate. This is why the cultural experience of "we," and the systemic comprehension
                of the "its," are considered the lower half of reality. In order for us to reflect upon 
                nature mentally, we must exist in a universe and world that produces advanced brain functions, 
                and then socially teaches those brains how to reflect upon nature mentally. Everything 
                that a mental being can think, feel, or do is an expression of a pattern, or meme, ideal, 
                or archetype, and this is simply because a mental being is limited to executing only 
                those functions that exist in its mental reality. It should be remarked that both nature,
                and the mind, are astoundingly, incredibly, utterly incapable of creativity in a genuine 
                sense, and said creativity appears to be expressed over time entirely in the form of 
                the evolutionary, holonic development or unfolding of Levels towards greater novelty, 
                complexity, intelligence, inclusion, and awareness.
            </p>
            <h3>Consider a Molecule</h3>
            <p>
                We can consider a molecule in terms of its individual structure, or in terms of 
                its relationship with other molecules. Here, we can point out a key subtle misunderstanding 
                of integral theory. The molecule, like everything, has a holonic nature. There is a 
                special sort of "collective" formed by atoms grouping together into molecules, and these 
                molecules form a sort of collective to make substances. In the integral view, these are 
                <em>not</em> the Quadrants. These are Levels. Atoms, molecules, and substances are Levels 
                of material reality that compose themselves holonically, by including parts into wholes that 
                themselves becomes parts of greater wholes. Instead, at the Level of molecules, we can 
                see that molecules exert forces and have interactions with one another, they can align into 
                magnetic or chrystalline configurations, they may collectively have a net charge, mass, 
                alkalinity, they exhibit material states and flow dynamics. 
            </p>
            <h3>What is a Man?</h3>
            <p>
                A similar temptation occurs to identify the collective of myself as the Earth, or the 
                Universe, or to identify the biosphere as the collective of civilization. Silly notions 
                like that. Let us break this down. The Earth and myself have Levels. The Earth does not 
                think, feel, or commit conscious actions, other than through human beings. 
                There are two types of whole-part relationships in nature. One is the relationship 
                between Individual and Collective at a given Level, and the other is the organization 
                of Individuals and Collectives into holonic Levels. Warning: this will reverse a 
                conventional understanding of reality. We are not a Collective of atoms. I am an 
                individual mind. We are a Collective of minds. I'm a person, we're people. Those our 
                Quadrants at our Level.  
                Atoms are a holon of us, not a Collective of us. Atoms are Levels 
                of people, and people are potentially Levels of atoms. Collective people 
                is society and culture. Collective atoms are the universe. The atoms of my body 
                are Individual pieces of universe, and are also a holonic Level of myself. 
                My molecules are Individual bits of the planet Earth, or a chemical configuration,
                and also a holonic Level of myself. My cells are Individuals within the 
                biosphere of life on Earth, also a holonic Level of me. My body is part of the 
                animal Kingdom, also a Level of me. My advanced self-aware human brain puts me at 
                an extremely rare, advanced Level that is not found elsewhere in the Universe, 
                elsewhere in chemistry, or elsewhere in the animal Kingdom. The holonic Levels 
                of mind, or the Altitudes, only occur in mental beings, which is only human being 
                people as far as we know thus far. Thus, the collective of me is us, not Earth, not 
                the universe. The collective of us, civilization or humanity, is not Earth or the 
                Universe, instead, that <em>is</em> the collective of people, or collective consciousness.
            </p>
            <h3>A Key Subtle Misunderstanding</h3>
            <p></p>
            <p>
                There is a natural tendency of the mind to make comparisons between 
                the individual and the collective, and this betrays the nature of Quadrants.
            </p>

            <p>Here we find the chicken and the egg. And as usual, the answer is yes. 
                These are Quadrant views. You may think of yourself as an individual, 
                isolated self, however, the way you think of yourself was taught to you 
                by others. You learned to be by imitating others. Your concepts come from 
                our literature and media, from your family and peers, from our traditions 
                and our education system. The language you think and communicate in was taught 
                to you. You are a continuation of the story of your family, of your country, of the 
                people of the world, a representative of consciousness and reality itself.
                From the perspective of everyone else in the world, your interior is nothing more 
                than an abstract assumption. Something which is only real to you and nobody else 
                would seem to be the least real thing there could be, and so the internal experience 
                of being an individual that we consider "my reality" is in fact the only thing that 
                could possibly not be reality - but of course, here You are, and so of course this 
                is reality.  
            </p>
        </template>
        <template v-else-if="quadRef==='upper-left'">
            <h1>Upper Left: Interior Individual</h1>
            <p>Your thoughts, feelings, physical sensations, the experience of being the inside of an 
                individual person, is the upper left. The Upper Left can only be truly known by the 
                individual, and is composed of things that are directly experiential in nature, so cannot
                be communicated or conveyed in an absolute sense. Upper Left has no physical existence, 
                as identity, concepts, values, dreams, aesthetics, and guesses, for example, are mental, cerebral, 
                abstract, or experiential in nature. 
            </p>
            <h3>UL Applications</h3>
            <p>
                The Upper Left can be developed through meditation, contemplation, introspection, and thinking.
                Psychology offers us pathways to insight, as spiritual disciplines reveal astounding domains of 
                the subconscious. Our general personal style, tone, temperament, type, mood, or feel are all 
                aspects of our Upper Left that spill across into the Lower Left cultural domain and become 
                descriptive of our individual character. Our experience is the Upper Left of our Upper Right body, 
                or our brain functions if you prefer. 
            </p>
            <h3>UL Health</h3>
            <p>A person's capacity for self-honesty forms the basis of their self worth and personal integrity. 
                We must always be attentive to our needs and desires, and ever exploring the 
                subconscious truths of our personal nature. The intuitive function of the mind is simply to 
                experience mental content without a goal in mind, and thus we gain familiarity, coordination, 
                and depth in the intellectual realm. 
            </p>
            <h3>UL Pathology</h3>
            <p>
                An overly strong preference for the Upper Left may result in narcissism, isolation, being socially 
                perceived as strange, overly cerebral, or unmannered. Reflection and introspection can result in a 
                melancholic disposition, worsened by having a strong sense of personal morality that is misunderstood 
                as suspicious because it is well constructed and considered and thought out. A lack of 
                focus on external and collective Quadrants can result in 
                a lack of personal success and interpersonal connection.
            </p>
            <h3>Stages in the UL</h3>
            <p>
                The interior individual consciousness of a person develops through a holonic progression of 
                stages of self conceptualization. Each stage builds upon the previous self concept by integrating
                it with its previous self. We can visualize it like zooming out a perspective. Our subjective
                perspective transforms by zooming out to see competing perspectives, forming a new subjective 
                perspective which now sees the previous perspective as one among several objects. We can then 
                integrate those perspectives into a meta-perspective which transcends, but includes, the previous
                perspective. Each Level creates a new subjective reality by including the previous subjective
                realities as objects of awareness.
            </p>
            <h3>The Evolving Interior Self</h3>
            <p>
                All Altitudes unfold according to this holonic, or dialectic, pattern, but as you can see, this 
                is complicated, so in our simplified mini-model, we can say that lower Levels experience Upper
                Left as a Personality in response, or reaction, to reality in the present. Through experience, the 
                Personality creature develops a cohesion of realizing its range of moods and tones, gains some awareness of 
                the mechanisms of the objective world, and begins to see themselves as an Ego: a rational agent 
                telling a personal story over the course of a lifetime in relationship with others and with history.
                This Ego begins to gain awareness of fundamental uniting truths, and the invisible forces underlying 
                the mental activities, and so starts the course of developing towards a total Psyche, or psychic 
                being. This can then proceed through transcendental state practice into an affinity with the entire 
                kosmic interior itself, or pure Consciousness without subject or object. In each case, it is a matter
                of healing the cognitive dissonance of a fundamental split in reality, or duality of the mind, by embracing 
                and integrating the supposed opposite side.
            </p>
        </template>
        <template v-else-if="quadRef==='lower-left'">
            <h1>Lower Left: Interior Collective</h1>
            <p>
                This is the domain of culture and interpersonal relationships. 
                Every person is taught how to be a person by their parents, their peers, and their educators
                and guardians. A large part of the personality and the self concept is not a unique creation, but a 
                system of mimmicked habits, or memes, consciously and unconsciously taught to us by culture. 
                The heros and villains, celebrities, and important individuals 
                in our lives become a sort of collective story, an overall narrative involving a team of relevant
                characters, the "we". The we ultimate "writes the history books", or decides what is important, 
                what is moral, what is a true accomplishment, and what is worthy of looking at. Through the lens of 
                the Lower Left Quadrant, we see that reality is a network of relationships, and we aim to maximize 
                our role in that network. Thus, feeling is the cognitive function of the lower left.
            </p>
            <p>If we consider for a moment the extraverted individual in relationship, we see that they have 
                less of a preference, perhaps even a fear, of their own isolated depths, and instead, they 
                experience reality through communicating with others, and conceptualizing themselves as part of 
                a group, rather than an individual, achieving their goals through persuasion of the group rather 
                than personally confronting the problem. While the 
                introvert experiences the UL as freedom, the extravert
                experiences the LL as fullness. The introvert only feels complete or real in a group because their 
                self concept is collective. In the case of the dependent, the beaurocratic tool, the cultist zealot,
                the collective identity is seen as preferable to the personal, but a LL preference is also 
                expressed by socialite, philanthropists, managers, teachers, and artists.
            </p>
            <h3>LL Applications</h3>
            <p>
                The collective interior is the domain of social and literary criticism, politics, motivation, persuasion,
                sales, marketing, and being an overall cool, interesting, appropriate and likable person. 
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
                A person fixated on LL may feel lost in relationship, false or phoney, lacking in genuine 
                ability or insight, or lacking in personal identity. The need for social stimulation may result 
                in an inability to focus or accomplish goals independently without extrinsic reward. A lack of 
                grounding in positive self-appraisal may cause a person to seem needy or dependent, and may 
                result in dishonest, unethical behaviors for the sake of superficial approval.
            </p>
        </template>
        <template v-else-if="quadRef==='upper-right'">
            <h1>Upper Right: Exterior Individual</h1>
            <p>Regardless of what you believe is happening, we can all agree objectively that experience  
                occurs when a physically material human body with an advanced primate brain generates 
                a characteristic waking brainwave pattern. Whatever happens to that brain directly produces
                the experience that you experience. In common speech, we use the word "I" to refer to both our 
                mind, and our body. We don't call the body "It" because we understand ourself to be that body, 
                as well as also being the mind.
            </p>
            <p>
                However, the brain really isn't the "I", from the experience of the UL mind. This is to say, we 
                did not even realize that awareness was generated by the brain until fairly recent, historically.
                At present, even the best expert in the world would have a tough time making any sense out of
                the relationship between the physics and chemistry of the brain and the subtle operations of the mind.
                Nobody looks at your physical brain to understand what you are thinking. The upper right perspective 
                concerns itself with the cognitive function of sensing, or directly experiencing physical 
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
                absolute certainty to the solidity of the desk 
                in front of me. The UR is both concrete and certain, so for the more extraverted and cerebral, 
                it may be beneficial to take a moment and simply sense the reality occuring in this present environment 
                and body, and to celebrate the power we have as physical entities to build, design, destroy, and 
                optimize the objects surrounding us.  
            </p>
            <h3>UR Pathology</h3>
            <p>The key pathology is alienation. Both individualistic and materialistic, the UR perspective can result
                in exclusive interest in apparent material reality, as other perspectives may seem overly abstract or
                conformist. The isolation of lacking interpersonal connection and intimacy may lead to 
                addictive and compulsive patterns unconsciously attempting to hack the physical chemistry 
                of the body, and the disinterest in larger and grander narratives may result in superficial or 
                transactional role relationships lacking in intimacy.  
            </p>
        </template>
        <template v-else-if="quadRef==='lower-right'">
            <h1>Lower Right: Exterior Collective</h1>
            <p>The exterior collective perspective sees reality in terms of physically real systems.
                The cognitive function associated with the lower right is thinking, or finding conceptual
                patterns in the relationships between natural phenomena. This is typically the most difficult 
                Quadrant to grasp, but it is
                a primary point of focus for Second Tier thinkers, as when reality is understood to be the holonic 
                development of a stack of Levels in four Quadrants, the LR is understood to reveal nothing less than 
                the functional meaning and purpose of the physical universe, and its dynamics, at least according to
                one idiot named Albert Einstein, can be understood to be "the mind of God."
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
                of the Second Tier collective of consciousness, by the act of understanding and caring about Integral
                Theory, and that then motivates me to behavioral teach it to others.
            </p>
            <p> Each Altitude meme built technology, 
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
                 manifests a sort of mastermind or executive character, the medieval Choleric temperament.
                 This person is ideally suited for playing high stakes roles and making difficult decisions,
                 as they are less influenceable and sensitive to interpersonal outcomes due to their objectivity and 
                 understanding of the occasion's ultimate insignificance. For more introverted LR expressions, 
                 complicated and multifaceted occupations like software coding, law, medicine, economics and 
                 statistical analysis may be more suited.
            </p>
            <h3>LR Health</h3>
            <p>
                While we pressure ourselves to improve in the UL, we feel peer pressure in the LL, and we 
                have material and bodily needs in the UR, the LR motivates our desire to improve career and
                finances, and to participate in history. 
            </p>
            <h3>LR Pathology</h3>
            <p>
                A fixation in LR can lead to a person seeming to lack personal sentiment or 
                grounding in social and immediate physical reality. This person may be viewed as lacking 
                personal identity beyond their social role or occupation, and no interest in other people 
                beyond advancing the position of their eternal unspoken chess game. Objectification and
                commodification of people can become antisocial or manipulative at the extremes. 
            </p>
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