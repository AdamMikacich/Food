import 'babel-polyfill';

import Vue from 'vue/dist/vue.js';
import App from './app.vue';
import store from './store/index.js';

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