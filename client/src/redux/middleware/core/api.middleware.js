import { API_REQUEST, apiSuccess, apiError } from '../../actions/api.action';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      const { body, query } = action.payload;
      const { url, method, feature } = action.meta;
      let REQUEST_URL = BASE_URL + url;
      if (query) {
        REQUEST_URL += `?${query}`;
      }
      fetch(REQUEST_URL, { method })
        .then((res) => res.json())
        .then((data) => dispatch(apiSuccess({ response: data, feature })))
        .catch((error) => dispatch(apiError({ error, feature })));
    }
  };
