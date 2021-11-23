import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './reducers/products.reducer';
import { basketReducer } from './reducers/basket.reducer';

import { initializeMiddleware } from './middleware/feature/initialize.middleware';
import { productsMiddleware } from './middleware/feature/products.middleware';
import { basketMiddleware } from './middleware/feature/basket.middleware';
import { apiMiddleware } from './middleware/core/api.middleware';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

const featureMiddlewares = [
  initializeMiddleware,
  productsMiddleware,
  basketMiddleware,
];

const coreMiddlewares = [apiMiddleware];

const enhancer = composeWithDevTools(
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares)
);

export const store = createStore(rootReducer, {}, enhancer);
