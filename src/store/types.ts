export interface IProduct {
  id: number;
  description: string;
  fileName: string;
  title: string;
}

export interface ICreditCard {
  expiryDate: string;
  name: string;
  number: string;
  type: 'Visa' | 'MasterCard';
}

export interface IState {
  creditCards: ICreditCard[];
  loggedIn: boolean;
  products: IProduct[];
  selectedProducts: number[];
}

export const Mutations = {
  ADD_CREDIT_CARD: 'ADD_CREDIT_CARD',
  ADD_TO_CART: 'ADD_TO_CART',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET_SELECTED_PRODUCTS: 'RESET_SELECTED_PRODUCTS',
};

export const Getters = {
  creditCards: 'creditCards',
  isLoggedIn: 'isLoggedIn',
  products: 'products',
  selectedProducts: 'selectedProducts',
};

export const descriptions = [
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

export const creditCards: ICreditCard[] = [
  {
    expiryDate: '06/21',
    name: 'John Doe',
    number: '1234-3475-3859-3845',
    type: 'MasterCard',
  },
  {
    expiryDate: '10/23',
    name: 'Jane Smith',
    number: '3853-3857-1823-3999',
    type: 'Visa',
  },
  {
    expiryDate: '01/19',
    name: 'Mary Poppins',
    number: '3851-3818-1840-2810',
    type: 'MasterCard',
  },
];
