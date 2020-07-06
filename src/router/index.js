import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import Boards from '../components/Boards';
import BoardDetails from '../components/BoardDetails.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Login', component: Home },
    {
      path: '/:user',
      name: 'UserBoards',
      component: Boards,
      meta: { requiresAuth: true },
    },
    {
      path: '/:user/boards/:name',
      name: 'Board',
      component: BoardDetails,
      meta: { requiresAuth: true },
    },
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Login required
    if (!window.localStorage.getItem('loggedInUser')) {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
