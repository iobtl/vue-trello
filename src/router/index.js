import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import Boards from '../components/Boards';
import BoardDetails from '../components/BoardDetails.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/:user', component: Boards },
    { path: '/:user/boards/:name', component: BoardDetails },
  ],
  mode: 'history',
});
