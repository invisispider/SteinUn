<script setup>
const props = defineProps(['showChart'])
</script>
<template>
	<div class="conversionTable">
		<table v-if="props.showChart=='time'">
			<tr>
				<th colSpan="4">zenTime</th>
			</tr>
			<tr>
				<th class="th">
					10.8 Sessions
				</th>
				<th class="th">
					Day
				</th>
			</tr>
			<tr>
				<th class="th">
					100 Moments
				</th>
				<th class="th">
					Session
				</th>
			</tr>
			<tr>
				<th class="th">
					10 Moments
				</th>
				<th class="th">
					While
				</th>
			</tr>
			<tr>
				<th class="th">
					80 Instants
				</th>
				<th class="th">
					Moment
				</th>
			</tr>
			<tr>
				<th class="th-blue">
					1 Instant
				</th>
				<th class="th-blue">
					Second
				</th>
			</tr>
		</table>
		<table v-if="props.showChart=='date'">
			<tr>
				<th colSpan="4">zenDate</th>
			</tr>
			<tr>
				<th class="th">
					10,000 BC
				</th>
				<th class="th">
					Historical Era
				</th>
			</tr>
			<tr>
				<th class="th">
					45 Days
				</th>
				<th class="th">
					Habit
				</th>
			</tr>
			<tr>
				<th class="th">
					8 Habits
				</th>
				<th class="th">
					Year
				</th>
			</tr>
			<tr>
				<th class="th">
					5 Days
				</th>
				<th class="th">
					Cycle
				</th>
			</tr>
			<tr>
				<th class="th-blue">
					360 Days
				</th>
				<th class="th-blue">
					Year
				</th>
			</tr>
		</table>
	</div>
</template>
