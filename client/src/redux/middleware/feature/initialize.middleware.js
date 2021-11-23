import { setBasketItems } from '../../actions/basket.action';
import { INITIALIZE_CATEGORY_DETAIL } from '../../actions/initialize.action';
import { fetchProducts } from '../../actions/products.action';

export const initializeMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {
    case INITIALIZE_CATEGORY_DETAIL:
      const storedBasketItems = localStorage.getItem('basket');
      if (storedBasketItems) {
        next(
          setBasketItems({
            items: JSON.parse(storedBasketItems),
          })
        );
      }
      next(fetchProducts({}));
      break;
    default:
      break;
  }
};
