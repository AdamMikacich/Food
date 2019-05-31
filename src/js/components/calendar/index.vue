<template>
  <div class="calendar" :class="{animate: $store.state.modalActive}">
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
  computed: {
    events: function() {
      return this.$store.state.events;
    }
  },
  methods: {
    setShowDate: function(date) {
      this.showDate = date;
    },
    clickDate: function(date) {},
    clickEvent: function(event) {
      this.$store.commit('modalActive', event.id);
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
@import 'vue-simple-calendar/static/css/default.css';
@import 'vue-simple-calendar/static/css/holidays-us.css';

.calendar {
  position: absolute;
  width: calc(100vw - 40px);
  height: calc(100vh - 100px);
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

.cv-event {
  cursor: pointer;
}

.unregistered {
  background-color: #e7e7ff !important;
  color: #8895A7 !important;
  border-color: #e0e0f0 !important;
}

.registered {
  background-color: #a4e49a !important;
  color: #44bd32 !important;
  border-color: #80da72 !important;
}

.locked {
  background-color: #e7e7ff !important;
  color: #8895A7 !important;
  border-color: #e0e0f0 !important;
  filter: brightness(80%);
}

.over {
  filter: brightness(60%);
}
</style>