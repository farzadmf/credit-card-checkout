import App from './App.vue';
import router from './router';
import store from '@/store';
import Vue from 'vue';
import Vuex from 'vuex';
import './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
