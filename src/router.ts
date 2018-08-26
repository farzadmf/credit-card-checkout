import AppHome from './views/Home.vue';
import AppLogin from './views/Login.vue';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
  ],
});
