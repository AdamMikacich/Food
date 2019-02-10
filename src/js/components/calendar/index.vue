<template>
  <div class="calendar" :class="{animate: $store.state.view}">
		<calendar-view
			:show-date="showDate"
      :events="events"
			class="theme-default holiday-us-traditional holiday-us-official"
      @click-date="clickDate"
      @click-event="clickEvent"
    >
			<calendar-view-header
				slot="header"
				slot-scope="t"
				:header-props="convert(t.headerProps)"
				@input="setShowDate" />
		</calendar-view>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.js';

import {CalendarView} from 'vue-simple-calendar';
import CalendarViewHeader from './calendar-view-header';
import 'vue-simple-calendar/static/css/default.css';
// import 'vue-simple-calendar/static/css/holidays-us.css';

export default {
  data: function() {
    return {
      showDate: new Date(),
      events: [
        {
          id: 1,
          startDate: (new Date()).setDate((new Date()).getDate() - 1),
          title: 'Build 21',
          classes: 'past'
        },
        {
          id: 2,
          startDate: (new Date()).setDate((new Date()).getDate()),
          title: 'Build 22',
          classes: 'locked'
        },
        {
          id: 3,
          startDate: (new Date()).setDate((new Date()).getDate() + 1),
          title: 'Build 23',
          classes: 'normal'
        },
        {
          id: 4,
          startDate: (new Date()).setDate((new Date()).getDate() + 3),
          title: 'Build 24',
          classes: 'normal'
        },
        {
          id: 5,
          startDate: (new Date()).setDate((new Date()).getDate() + 5),
          title: 'Build 25',
          classes: 'signedup'
        },
      ]
    }
  },
  components: {
    CalendarView,
    CalendarViewHeader
  },
  methods: {
    setShowDate: function(date) {
      this.showDate = date;
    },
    clickDate: function(date) {},
    clickEvent: function(event) {
      this.$store.commit('modal');
    },
    convert: function(props) {
      props.previousYear = false;
      props.currentPeriodLabel = 'Jump to Today';
      return props;
    }
  }
}
</script>

<style>
.calendar {
  position: absolute;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s;
}

@media only screen and (min-width: 840px) {
  .calendar {
    width: 800px;
  }
}

.cv-header-nav button {
  color: #5F6B7A;
  font-weight: bold;
  background-color: #FFFFFF;
  border: solid 1px #CFD6DE;
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
  margin: 5px;
}

@media only screen and (max-width: 700px) {
  .cv-header-nav button {
    width: calc(100% - 10px);
  }
}
</style>