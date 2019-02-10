import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    view: true,
    modal: {
      view: false,
      registered: false,
      attendees: []
    }
  },
  mutations: {
    modal: function(state) {
      state.view = !state.view;
    },
    assign: function(state, value) {
      state[value.target][value.key] = value.value;
    },
    invert: function(state, value) {
      state[value.target][value.key] = !state[value.target][value.key];
    },
    changeView: function(state) {
      state.modal.view = !state.modal.view;
    },
    changeRegister: function(state) {
      state.modal.registered = !state.modal.registered;
    },
    addAttendee: function(state, value) {
      state.modal.attendees.push(value);
    }
  }
});

const lorem = 'Bacon ipsum dolor amet sausage pork pork belly, drumstick flank ham biltong picanha landjaeger prosciutto jowl andouille pork chop kielbasa. Hamburger tail pork belly ground round ribeye pig shankle tenderloin chicken tri-tip burgdoggen meatball. Shoulder meatloaf bacon andouille swine, rump hamburger chuck cow bresaola. Landjaeger burgdoggen andouille jowl beef ribs. Ham hock pork flank tongue biltong turducken fatback.'.split('.').join();

for (let name of lorem.split(' ')) {
  store.commit('addAttendee', {
    name: name,
    gf: false,
    v: false
  });
}

export default store;