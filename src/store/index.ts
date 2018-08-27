import Vue from 'vue';
import Vuex from 'vuex';
import { IState } from '@/store/types';
import { mutations } from './mutations';
import { Mutations, Getters } from './types';

const descriptions = [
  'Do dolore veniam qui ea labore enim dolore cupidatat aliqua deserunt pariatur sint velit.',
  'Ut minim irure minim cupidatat ex.',
  'Aliqua deserunt deserunt anim labore aliquip.',
  'Qui id qui ad est in qui consequat fugiat sint esse.',
  'Adipisicing proident ut irure in exercitation qui pariatur nulla anim adipisicing dolor aliqua.',
  'Incididunt laborum nostrud nisi elit magna.',
  'Minim quis eiusmod elit nulla adipisicing.',
  'In pariatur amet sit proident labore aliqua elit proident veniam tempor dolor adipisicing.',
  'Irure ullamco elit eu consectetur aute cillum elit ut eiusmod nulla magna reprehenderit.',
  'Enim et officia minim incididunt.',
];

const initialState: IState = {
  loggedIn: true,
  products: descriptions.map((desc, i) => ({
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
    [Mutations.LOG_IN]: context => context.commit(Mutations.LOG_IN),
    [Mutations.LOG_OUT]: context => context.commit(Mutations.LOG_OUT),
    [Mutations.ADD_TO_CART]: (context, payload) => context.commit(Mutations.ADD_TO_CART, payload),
    [Mutations.REMOVE_FROM_CART]: (context, payload) => context.commit(Mutations.REMOVE_FROM_CART, payload),
  },
  getters: {
    [Getters.products]: (state: IState) => state.products,
    [Getters.selectedProducts]: (state: IState) => state.selectedProducts,
    [Getters.isLoggedIn]: (state: IState) => state.loggedIn,
  },
  mutations,
  state: initialState,
  strict: process.env.NODE_ENV !== 'production',
});

export * from './types';
