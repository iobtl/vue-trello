import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import Boards from '../components/Boards';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/boards', component: Boards },
  ],
});
