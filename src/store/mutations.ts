import { IState, Mutations, ICreditCard } from './types';

export const mutations = {
  [Mutations.ADD_CREDIT_CARD](state: IState, payload: ICreditCard) {
    if (!state.creditCards.find(c => c.number === payload.number)) {
      state.creditCards.push(payload);
    }
  },
  [Mutations.ADD_TO_CART](state: IState, payload: number) {
    if (state.selectedProducts.indexOf(payload) === -1) {
      state.selectedProducts.push(payload);
    }
  },
  [Mutations.LOG_IN](state: IState) {
    state.loggedIn = true;
  },
  [Mutations.LOG_OUT](state: IState) {
    state.loggedIn = false;
  },
  [Mutations.REMOVE_FROM_CART](state: IState, payload: number) {
    if (state.selectedProducts.indexOf(payload) !== -1) {
      state.selectedProducts = state.selectedProducts.filter(i => i !== payload);
    }
  },
  [Mutations.RESET_SELECTED_PRODUCTS](state: IState) {
    state.selectedProducts = [];
  },
  [Mutations.SET_CURRENT_CARD](state: IState, payload: number) {
    state.currentCard = payload;
  },
};
