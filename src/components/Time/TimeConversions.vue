<script setup>
const props = defineProps(["showChart"]);
</script>
<template>
  <div class="conversion-table">
    <table v-if="props.showChart == 'time'">
      <tr>
        <th colSpan="4">unLimited Time</th>
      </tr>
      <tr>
        <th class="th">Day</th>
        <th class="th">10 Sessions</th>
      </tr>
      <tr>
        <th class="th">Session</th>
        <th class="th">100 Moments</th>
      </tr>
      <tr>
        <th class="th">While</th>
        <th class="th">10 Moments</th>
      </tr>
      <tr>
        <th class="th">Moment</th>
        <th class="th">80 Instants</th>
      </tr>
      <tr>
        <th class="th-blue">Second</th>
        <th class="th-blue">1 Instant</th>
      </tr>
    </table>
    <table v-if="props.showChart == 'date'">
      <tr>
        <th colSpan="4">unLimited Date</th>
      </tr>
      <tr>
        <th class="th">Historical Era</th>
        <th class="th">10,000 BC</th>
      </tr>
      <tr>
        <th class="th">Year</th>
        <th class="th">8 Habits</th>
      </tr>
      <tr>
        <th class="th">Habit</th>
        <th class="th">45 Days</th>
      </tr>
      <tr>
        <th class="th">Cycle</th>
        <th class="th">5 Days</th>
      </tr>
      <tr>
        <th class="th-blue">Year</th>
        <th class="th-blue">360 Days</th>
      </tr>
    </table>
  </div>
</template>
