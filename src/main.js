// import './assets/scss/index.scss';

import Vue from 'vue';

import './config';
import App from './App.vue';
import router from './router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
