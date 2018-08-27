import { IState, Mutations } from './types';

export const mutations = {
  [Mutations.LOG_IN](state: IState) {
    state.loggedIn = true;
  },
  [Mutations.LOG_OUT](state: IState) {
    state.loggedIn = false;
  },
  [Mutations.ADD_TO_CART](state: IState, payload: number) {
    if (state.selectedProducts.indexOf(payload) === -1) {
      state.selectedProducts.push(payload);
    }
  },
  [Mutations.REMOVE_FROM_CART](state: IState, payload: number) {
    if (state.selectedProducts.indexOf(payload) !== -1) {
      state.selectedProducts = state.selectedProducts.filter(i => i !== payload);
    }
  },
};
