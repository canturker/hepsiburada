export const PRODUCTS = '[Products]';

export const FETCH_PRODUCTS = `${PRODUCTS} FETCH`;
export const SET_PRODUCTS = `${PRODUCTS} SET`;
export const CHANGE_FILTER = `${PRODUCTS} CHANGE FILTER`;
export const SET_FILTERS = `${PRODUCTS} SET FILTERS`;
export const CHANGE_SORT = `${PRODUCTS} CHANGE SORT`;
export const SET_SORT = `${PRODUCTS} SET SORT`;
export const CHANGE_SEARCH_TEXT = `${PRODUCTS} CHANGE SEARCH TEXT`;
export const SET_SEARCH_TEXT = `${PRODUCTS} SET SEARCH TEXT`;

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setProducts = ({ list, filterableFields, availableFilters }) => ({
  type: SET_PRODUCTS,
  payload: { list, filterableFields, availableFilters },
});

export const changeFilter = ({ filter }) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const setFilters = ({ filters }) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const changeSort = ({ sort }) => ({
  type: CHANGE_SORT,
  payload: sort,
});

export const setSort = ({ sort }) => ({
  type: SET_SORT,
  payload: sort,
});

export const changeSearchText = ({ text }) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text,
});

export const setSearchText = ({ text }) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});
