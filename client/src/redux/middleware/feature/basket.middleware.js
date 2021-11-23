import {
  ADD_BASKET_ITEM,
  REMOVE_BASKET_ITEM,
  setBasketItems,
  updateBasketSuccess,
  UPDATE_BASKET_SUCCESS,
} from '../../actions/basket.action';
import {
  getBasketItemIndex,
  getDeepCopyOfBasketItems,
} from '../../selectors/basket.selector';

export const basketMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    const basketItems = getDeepCopyOfBasketItems(getState());

    switch (action.type) {
      case ADD_BASKET_ITEM:
        basketItems.push(action.payload);
        dispatch(
          updateBasketSuccess({
            items: basketItems,
          })
        );
        break;
      case REMOVE_BASKET_ITEM:
        const index = getBasketItemIndex(getState(), action.payload.id);
        basketItems.splice(index, 1);
        dispatch(
          updateBasketSuccess({
            items: basketItems,
          })
        );
        break;
      case UPDATE_BASKET_SUCCESS:
        window.localStorage.setItem('basket', JSON.stringify(action.payload));
        next(
          setBasketItems({
            items: action.payload,
          })
        );
        break;
      default:
        break;
    }
  };
