import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * The Vuex store maintains the state of the application and is used throughout different components
 * The state can only be changed via mutators. The getters allow for additional calculations on values
 * before returning their state.
 */
const store = new Vuex.Store({
  strict: true,
  state: {
    modalActive: false,
    modalListActive: false,
    selectedEvent: null,
    events: []
  },
  mutations: {
    modalActive: function(state, value) {
      // Open or close the modal
      if (value) state.selectedEvent = value;
      state.modalActive = !state.modalActive;
      if (!state.modalActive) state.modalListActive = false; // Reset the modal for the next time it is opened
    },
    modalListActive: function(state) {
      // Change the page (info page or list page) in the modal
      state.modalListActive = !state.modalListActive;
    },
    changeRegister: function(state) {
      // Register or deregister from the current event
      if (state.selectedEvent == null) return;
      const registered = state.events[state.selectedEvent].registered;
      const classes = state.events[state.selectedEvent].classes;

      // Remove registered and unregistered state from the event for the calendar
      const index = classes.indexOf(registered ? 'registered' : 'unregistered');
      if (index !== -1) classes.splice(index, 1);
      classes.push(!registered ? 'registered' : 'unregistered'); // Add the current state to the calendar

      // Set the Vuex state to the new registered status
      state.events[state.selectedEvent].registered = !registered;
    },
    addEvent: function(state, value) {
      // Add an event to the calendar
      value.id = state.events.length; // Add unique ID for event (events will not be removed)
      value.classes = []; // Add classes key
      const difference = Math.round(((value.startDate - new Date()) / (1000 * 60 * 60 * 24))); // Find difference in days from today
      if (difference < 3) value.classes.push('locked'); // If the date is within two days, lock the event
      if (difference < 0) value.classes.push('over'); // If the event has passed, signify it's over
      value.classes.push(value.registered ? 'registered' : 'unregistered'); // Signify whether the user is registered or not
      state.events.push(value); // Add the event to the state
    }
  },
  getters: {
    countGF() {
      let count = 0;
      for (const attendee of store.getters.currentEvent.attendees) {
        if (attendee.gf) count++;
      }
      return count; // The number of gluten free signups in the currently opened event visibly in the modal
    },
    countV() {
      let count = 0;
      for (const attendee of store.getters.currentEvent.attendees) {
        if (attendee.v) count++;
      }
      return count; // The number of vegetarian signups in the currently opened event visibly in the modal
    },
    currentEvent() {
      if (store.state.selectedEvent == null) return null;
      return store.state.events[store.state.selectedEvent];
    }
  }
});

export default store;

// The following code creates dummy data for this demo

function generateDummyData() {
  // Randomly return true or false, but heavily biased towards returning false
  function randomBoolean() {
    return Math.random() < 0.3;
  }

  // Placeholder will be split into names based on spaces
  const placeholder = 'Bacon ipsum dolor amet sausage pork pork belly, drumstick flank ham biltong picanha landjaeger prosciutto jowl andouille pork chop kielbasa. Hamburger tail pork belly ground round ribeye pig shankle tenderloin chicken tri-tip burgdoggen meatball. Shoulder meatloaf bacon andouille swine, rump hamburger chuck cow bresaola. Landjaeger burgdoggen andouille jowl beef ribs. Ham hock pork flank tongue biltong turducken fatback.'.split('.').join();

  // Fill the attendees with names and randomly assign people to be either gluten free, vegetarian, neither, or both
  const attendees = [];
  for (let name of placeholder.split(' ')) {
    attendees.push({
      name: name,
      gf: randomBoolean(),
      v: randomBoolean()
    });
  }

  // Randomly create events between 30 days ago and 30 days into the future
  let nextBuildID = 1;
  for (let i = -30; i < 30; i++) {
    if (randomBoolean()) { // Randomly choose whether or not to create an event today
      store.commit('addEvent', {
        startDate: (new Date()).setDate((new Date()).getDate() + i),
        title: `Build ${nextBuildID}`,
        buildNum: nextBuildID,
        registered: randomBoolean(),
        attendees: attendees,
        time: '6:00pm - 9:00pm',
        provider: 'Adam Mikacich',
        type: 'Italian'
      });
      nextBuildID++;
    }
  }
}

generateDummyData();