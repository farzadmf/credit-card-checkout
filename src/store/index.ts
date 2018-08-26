import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, MutationTypes } from './mutations';

export interface IProduct {
  description: string;
  imageUrl: string;
  title: string;
}

export interface IState {
  loggedIn: boolean;
  products: IProduct[];
}

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
  loggedIn: false,
  products: new Array(10).map((_, i) => ({
    description: descriptions[i],
    imageUrl: `./assets/p${i + 1}.jpg`,
    title: `Product ${i + 1}`,
  })),
};

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    logIn: context => context.commit(MutationTypes.LOG_IN),
    logOut: context => context.commit(MutationTypes.LOG_OUT),
  },
  getters: {
    getProducts: (state: IState) => state.products,
    isLoggedIn: (state: IState) => state.loggedIn,
  },
  mutations,
  state: initialState,
  strict: process.env.NODE_ENV !== 'production',
});
