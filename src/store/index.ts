import Vue from 'vue';
import Vuex from 'vuex';
import { IState } from '@/store/types';
import { mutations } from './mutations';
import * as types from './types';

const initialState: IState = {
  creditCards: types.creditCards,
  loggedIn: false,
  products: types.descriptions.map((desc, i) => ({
    id: i + 1,
    description: desc,
    fileName: `p${i + 1}`,
    title: `Product ${i + 1}`,
  })),
  selectedProducts: [],
};

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    [types.Mutations.ADD_TO_CART]: (context, payload) => context.commit(types.Mutations.ADD_TO_CART, payload),
    [types.Mutations.LOG_IN]: context => context.commit(types.Mutations.LOG_IN),
    [types.Mutations.LOG_OUT]: context => context.commit(types.Mutations.LOG_OUT),
    [types.Mutations.REMOVE_FROM_CART]: (context, payload) => context.commit(types.Mutations.REMOVE_FROM_CART, payload),
    [types.Mutations.ADD_CREDIT_CARD]: (context, payload) => context.commit(types.Mutations.ADD_CREDIT_CARD, payload),
  },
  getters: {
    [types.Getters.products]: (state: IState) => state.products,
    [types.Getters.selectedProducts]: (state: IState) => state.selectedProducts,
    [types.Getters.isLoggedIn]: (state: IState) => state.loggedIn,
    [types.Getters.creditCards]: (state: IState) => state.creditCards,
  },
  mutations,
  state: initialState,
  strict: process.env.NODE_ENV !== 'production',
});

export * from './types';
