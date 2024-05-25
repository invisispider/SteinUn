<script setup lang="ts">
import {ref} from "vue";
const clockUnits = ref(['Instant', 'Moment', 'While', 'Session']);
const calendarUnits = ref(['Day', 'Cycle', 'Habit', 'Year']);
</script>
<template>
    <div>
        <h3>Time is limited.<br />Why not make it <router-link to="/Time" class="time-link">unLimited?</router-link></h3>
        <div class="flex-container">
            <div v-for="unit of calendarUnits" :key="unit" class="flex-item">{{ unit }}</div>
        </div>
        <div class="flex-container">
            <div v-for="unit of clockUnits" :key="unit" class="flex-item">{{ unit }}</div>
        </div>
        <!-- <p>Questioning the basic assumptions of our current clock and calendar resulted in greatly simplifying it.</p> -->
        <!-- <p>Instead of 24 of 60 of 60 units not corresponding to how we perceive time, how about Instants, Moments, and Whiles, which are based in powers of ten?</p> -->
        <h2><RouterLink to="/Time">unLimited Time:</RouterLink>
        A revolutionary and logical new way of knowing when it is.</h2>
        <h3>
            A clock and calendar framework designed to be simple, elegant, and supportive of the mental and physical health of contemporary free people.<br><br>
            It simplifies the way we perceive events and the relationships between them.<br>
            It improves memory and planning.<br>
            It speaks our language.
        </h3>
        <h2>Features:</h2>
        <h4>
        Eliminate the days we don't like from the work week.<br>
        Unit names are derived from ways we naturally describe and conceptualize time.<br>
        Holidays and period changes align predictably with consistent natural events.<br>
        Base-10 units designed for easy comprehension and arithmetic.<br>
        Cultural bias leans away from Greek and Roman sources, embracing global and postmodern values.<br>
        Open-source and fully compatible with standard system clocks and calendars.
        </h4>
        <h3><RouterLink to="/Time">View a working demo.</RouterLink></h3>
        <!-- <p>How about simply counting in your head how many days since any other day?</p> -->
        <!-- <p>Here is a working demo <router-link to="/UnTimeMe">Stein Time</router-link></p> -->
    </div>
</template>
<style lang="sass" scoped>
.flex-container
    display: flex
    flex-direction: row-reverse
    justify-content: space-around
    text-align: center
    flex-wrap: wrap
    .flex-item
        text-shadow: 1px 1px 1px red, 0 0 4px white, 0 0 0.1em blue 
        flex-grow: 1
        padding: 1em
        justify-content: center
        box-shadow: 1px 1px 1px black
</style>