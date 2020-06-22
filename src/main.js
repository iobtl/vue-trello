import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
});
