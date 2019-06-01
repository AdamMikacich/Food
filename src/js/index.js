import 'babel-polyfill';

import Vue from 'vue/dist/vue.js';
import App from './app.vue';
import store from './store/index.js';

/**
 * This immediately invoked function expression initiates the application by defining the
 * root element id, store, the root component, and the implementation of the root component
 */
(function() {
  Vue.config.productionTip = true;
  Vue.config.devtools = true;

  new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
  });
})();