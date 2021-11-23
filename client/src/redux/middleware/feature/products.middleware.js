import { apiRequest, API_ERROR, API_SUCCESS } from '../../actions/api.action';
import {
  CHANGE_FILTER,
  CHANGE_SEARCH_TEXT,
  CHANGE_SORT,
  fetchProducts,
  FETCH_PRODUCTS,
  PRODUCTS,
  setFilters,
  setProducts,
  setSearchText,
  setSort,
} from '../../actions/products.action';
import {
  getDeepCopyOfSelectedFilters,
  getSearchText,
  getSelectedFilters,
  getSelectedSort,
} from '../../selectors/products.selector';

const PRODUCTS_URL = '/products';

export const productsMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
      case FETCH_PRODUCTS:
        let query = '';

        const filters = getSelectedFilters(getState());
        const filterQuery = Object.keys(filters)
          .reduce((string, key) => {
            string += `;${key}:${filters[key].join(',')}`;
            return string;
          }, '')
          .substring(1);
        if (filterQuery) {
          query += `&filter=${filterQuery}`;
        }

        const sort = getSelectedSort(getState());
        if (sort) {
          query += `&sort=${sort}`;
        }

        const searchText = getSearchText(getState());
        if (searchText) {
          query += `&search=${searchText}`;
        }

        next(
          apiRequest({
            method: 'GET',
            url: PRODUCTS_URL,
            query: query,
            feature: PRODUCTS,
          })
        );
        break;
      case `${PRODUCTS} ${API_SUCCESS}`:
        const { content } = action.payload;
        // TODO: filterable fields may come from api
        const filterableFields = [
          { title: 'Renk', key: 'color' },
          { title: 'Marka', key: 'brand' },
        ];

        const availableFilters = content.reduce((filters, contentItem) => {
          filterableFields.forEach((filterField) => {
            const { key } = filterField;
            if (!filters[key]) {
              filters[key] = { [contentItem[key]]: 1 };
            } else {
              if (filters[key][contentItem[key]]) {
                filters[key][contentItem[key]] += 1;
              } else {
                filters[key][contentItem[key]] = 1;
              }
            }
          });
          return filters;
        }, {});

        next(
          setProducts({
            list: action.payload.content,
            filterableFields,
            availableFilters,
          })
        );
        break;
      case `${PRODUCTS} ${API_ERROR}`:
        //   TODO: add notification
        break;
      case CHANGE_FILTER:
        const selectedFilters = getDeepCopyOfSelectedFilters(getState());
        const { key, value } = action.payload;
        const selectedValues = selectedFilters[key];
        const indexOfValue = selectedValues?.indexOf(value);

        if (indexOfValue >= 0) {
          if (selectedFilters[key].length === 1) delete selectedFilters[key];
          else selectedFilters[key].splice(indexOfValue, 1);
        } else {
          if (selectedFilters[key]) {
            selectedFilters[key].push(value);
          } else {
            selectedFilters[key] = [value];
          }
        }
        next(
          setFilters({
            filters: selectedFilters,
          })
        );
        dispatch(fetchProducts());
        break;
      case CHANGE_SORT:
        next(
          setSort({
            sort: action.payload,
          })
        );
        dispatch(fetchProducts());
        break;
      case CHANGE_SEARCH_TEXT:
        next(
          setSearchText({
            text: action.payload,
          })
        );
        dispatch(fetchProducts());
        break;
      default:
        break;
    }
  };
