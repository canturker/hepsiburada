export const getBasketItems = (state) => state.basket.items;
export const getDeepCopyOfBasketItems = (state) =>
  JSON.parse(JSON.stringify(state.basket.items));

export const getBasketItemsCount = (state) => state.basket.items.length;

export const isBasketIncludesProduct = (state, productId) => {
  const basketItems = getBasketItems(state);
  if (basketItems.find((bi) => bi.id === productId)) return true;
  return false;
};

export const getBasketItemIndex = (state, productId) => {
  const basketItems = getBasketItems(state);
  return basketItems.findIndex((bi) => bi.id === productId);
};
