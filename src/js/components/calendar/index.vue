<template>
  <div class="calendar">
		<calendar-view
			:show-date="showDate"
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
      showDate: new Date()
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
    clickDate: function(date) {
      this.$store.commit('modal');
    },
    clickEvent: function(event) {
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