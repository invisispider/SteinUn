<script setup lang="ts">
const emit = defineEmits(['upper-left', 'upper-right', 'lower-left', 'lower-right']);
</script>
<template>
    <svg
        viewBox="320 0 800 1100"
        width="1366"
        height="768"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
            id="defs1" />
        <g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <rect
            style="fill:#000000"
            id="rect1"
            width="753.27649"
            height="766.45337"
            x="342.59808"
            y="-0.39228249"
            sodipodi:insensitive="true" />
            <rect
            style="fill:#002525;fill-opacity:1"
            id="rect2"
            width="757.66882"
            height="17.569132"
            x="340.40192"
            y="366.75562"
            sodipodi:insensitive="true" />
            <rect
            style="fill:#002525;fill-opacity:1"
            id="rect3"
            width="757.66882"
            height="17.569132"
            x="-762.37457"
            y="710.45178"
            transform="rotate(-90)"
            sodipodi:insensitive="true" />
            <text
            xml:space="preserve"
            style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#00ffff"
            x="614.91962"
            y="740.09967"
            id="text4"
            sodipodi:insensitive="true"><tspan
                sodipodi:role="line"
                id="tspan4"
                x="614.91962"
                y="740.09967"
                style="font-size:37.3333px;fill:#ffffff">COLLECTIVE</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#00ffff"
            x="-469.67712"
            y="390.17166"
            id="text5"
            transform="rotate(-90)"
            sodipodi:insensitive="true"><tspan
                sodipodi:role="line"
                id="tspan5"
                x="-469.67712"
                y="390.17166"
                style="font-size:37.3333px;fill:#ffffff">INTERNAL</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#00ffff"
            x="289.78571"
            y="-1050.3049"
            id="text6"
            transform="rotate(90)"
            sodipodi:insensitive="true"><tspan
                sodipodi:role="line"
                id="tspan6"
                x="289.78571"
                y="-1050.3049"
                style="font-size:37.3333px;fill:#ffffff">EXTERNAL</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:37.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#ffffff"
            x="614.91962"
            y="50.51125"
            id="text3"
            sodipodi:insensitive="true"><tspan
                sodipodi:role="line"
                id="tspan3"
                x="614.91962"
                y="50.51125"
                style="font-size:37.3333px">INDIVIDUAL</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="390.09003"
            y="645.66559"
            id="text13"><tspan
                sodipodi:role="line"
                id="tspan13"
                x="390.09003"
                y="645.66559">2nd person: &quot;Us/We&quot;</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="799.39545"
            y="645.66559"
            id="text14"><tspan
                sodipodi:role="line"
                id="tspan14"
                x="799.39545"
                y="645.66559">3rt person: &quot;Its&quot;</tspan></text>
            <text class="quadrant-text" @click="emit('lower-right')"
            xml:space="preserve"
            style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="861.47589"
            y="594.21222"
            id="lower-right"><tspan
                sodipodi:role="line"
                id="tspan9"
                x="861.47589"
                y="594.21222">LR</tspan></text>
            <text class="quadrant-text" @click="emit('lower-left')"
            xml:space="preserve"
            style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="479.93567"
            y="592.01611"
            id="text10"><tspan
                sodipodi:role="line"
                id="tspan10"
                x="479.93567"
                y="592.01611">LL</tspan></text>
            <text class="quadrant-text" @click="emit('upper-left')"
            xml:space="preserve"
            style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="477.93567"
            y="182.27974"
            id="text7"><tspan
                sodipodi:role="line"
                id="tspan7"
                x="477.93567"
                y="182.27974">UL</tspan></text>
            <text class="quadrant-text" @click="emit('upper-right')"
            xml:space="preserve"
            style="font-size:85.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="854.29901"
            y="180.0836"
            id="text8"><tspan
                sodipodi:role="line"
                id="tspan8"
                x="854.29901"
                y="180.0836">UR</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="396.09003"
            y="239.37941"
            id="text11"><tspan
                sodipodi:role="line"
                id="tspan11"
                x="396.09003"
                y="239.37941">1st person: &quot;I/Me&quot;</tspan></text>
            <text
            xml:space="preserve"
            style="font-size:29.3333px;line-height:1.6;font-family:Cantarell;-inkscape-font-specification:Cantarell;letter-spacing:0.92px;fill:#008080;fill-opacity:1"
            x="810.37622"
            y="239.37941"
            id="text12"><tspan
                sodipodi:role="line"
                id="tspan12"
                x="810.37622"
                y="239.37941">3rt person: &quot;It&quot;</tspan></text>
        </g>
    </svg>
</template>
<style lang="sass" scoped>
svg
    max-width: 90vw
    max-height: 90vh
.quadrant-text:hover
    fill: white
.quadrant-text
    cursor: pointer
// @media screen and (min-width: 300px)
//     svg
//         max-width: 300px
//         max-height: 300px

</style>