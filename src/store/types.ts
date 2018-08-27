export interface IProduct {
  id: number;
  description: string;
  fileName: string;
  title: string;
}

export interface IState {
  loggedIn: boolean;
  products: IProduct[];
  selectedProducts: number[];
}

export const Mutations = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export const Getters = {
  products: 'products',
  selectedProducts: 'selectedProducts',
  isLoggedIn: 'isLoggedIn',
};
