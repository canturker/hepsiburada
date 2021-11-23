export const BASKET = '[Basket]';

export const ADD_BASKET_ITEM = `${BASKET} ADD ITEM`;
export const REMOVE_BASKET_ITEM = `${BASKET} REMOVE ITEM`;
export const UPDATE_BASKET_SUCCESS = `${BASKET} UPDATE SUCCESS`;
export const SET_BASKET_ITEMS = `${BASKET} SET`;

export const addBasketItem = ({ item }) => ({
  type: ADD_BASKET_ITEM,
  payload: item,
});

export const removeBasketItem = ({ item }) => ({
  type: REMOVE_BASKET_ITEM,
  payload: item,
});

export const updateBasketSuccess = ({ items }) => ({
  type: UPDATE_BASKET_SUCCESS,
  payload: items,
});

export const setBasketItems = ({ items }) => ({
  type: SET_BASKET_ITEMS,
  payload: items,
});
