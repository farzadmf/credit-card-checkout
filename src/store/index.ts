import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, MutationTypes } from './mutations';

export interface IState {
  loggedIn: boolean;
}

const initialState: IState = {
  loggedIn: true,
};

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    logIn: context => context.commit(MutationTypes.LOG_IN),
    logOut: context => context.commit(MutationTypes.LOG_OUT),
  },
  getters: {
    isLoggedIn: (store: IState) => store.loggedIn,
  },
  mutations,
  state: initialState,
  strict: process.env.NODE_ENV !== 'production',
});
