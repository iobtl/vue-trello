import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router/index';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  router,
});
