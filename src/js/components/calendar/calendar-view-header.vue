<template>
	<div class="calendarHeader">
		<div class="calendarHeaderSelect">
      <!-- Previous month button -->
			<button
				:disabled="!headerProps.previousPeriod"
        class="btn"
				@click.prevent="onInput(headerProps.previousPeriod)"
			>
				&lt;
			</button>
      <!-- Jump to the current month button-->
			<button
        class="btn"
				@click.prevent="onInput(headerProps.currentPeriod)"
			>
				{{ headerProps.currentPeriodLabel }}
			</button>
      <!-- Next month button -->
			<button
				:disabled="!headerProps.nextPeriod"
        class="btn"
				@click.prevent="onInput(headerProps.nextPeriod)"
			>
				&gt;
			</button>
		</div>
    <!-- Display the current month and year the user is viewing -->
		<div class="calendarHeaderDate">{{ headerProps.periodLabel }}</div>
	</div>
</template>

<script>
export default {
	name: 'CalendarViewHeader',
	props: {
		headerProps: { // Get the header properties from the main calendar component
			type: Object,
			required: true,
		},
	},
	methods: {
		onInput(d) {
      // Notify the main calendar to set the new date when a button is clicked
			this.$emit('input', d)
		},
	},
}
</script>

<style>
.calendarHeader {
  height: 50px;
  background-color: #007bff;
}

.calendarHeaderSelect {
  margin: 10px;
  position: absolute;
}

.calendarHeaderSelect button {
  height: 30px;
  padding: 0 10px;
  font-weight: normal;
  background-color: #56a7ff;
  border: none;
  color: #EFF8FF;
}

.calendarHeaderDate {
  margin: 15px 0;
  position: absolute;
  height: 20px;
  right: 10px;
  color: white;
  line-height: 20px !important;
}
</style>
