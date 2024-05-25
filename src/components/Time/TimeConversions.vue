<script setup>
const props = defineProps(["showChart"]);
</script>
<template>
  <div class="conversion-table">
    <table v-if="props.showChart == 'clock'">
      <tr>
        <th colSpan="4">Clock Time</th>
      </tr>
      <tr>
        <th class="th-blue">Instant</th>
        <th class="th-blue">1 Second</th>
      </tr>
      <tr>
        <th class="th">Moment</th>
        <th class="th">80 Instants</th>
      </tr>
      <tr>
        <th class="th">While</th>
        <th class="th">10 Moments</th>
      </tr>
        <tr>
          <th class="th">Session</th>
          <th class="th">100 Moments</th>
        </tr>
        <tr>
          <th class="th">Day</th>
          <th class="th">10 Sessions</th>
        </tr>
        <tr>
          <th class="th">zen</th>
          <th class="th">0.8 Sessions</th>
        </tr>
    </table>
    <table v-if="props.showChart == 'habit'">
      <tr>
        <th colSpan="4">Calendar Date</th>
      </tr>
      <tr>
        <th class="th">newZen</th>
        <th class="th">~5 Days</th>
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
