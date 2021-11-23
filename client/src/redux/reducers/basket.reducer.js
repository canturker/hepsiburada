import { SET_BASKET_ITEMS } from '../actions/basket.action';

const initialState = {
  items: [],
};

export const basketReducer = (basket = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_ITEMS:
      return { ...basket, items: action.payload };

    default:
      return basket;
  }
};
