import { IState } from './index';

export const MutationTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
};

export const mutations = {
  [MutationTypes.LOG_IN](state: IState) {
    state.loggedIn = true;
  },
  [MutationTypes.LOG_OUT](state: IState) {
    state.loggedIn = false;
  },
};
