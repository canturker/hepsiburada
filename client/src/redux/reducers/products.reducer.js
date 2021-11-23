import {
  SET_PRODUCTS,
  SET_FILTERS,
  SET_SORT,
  SET_SEARCH_TEXT,
} from '../actions/products.action';

const initialState = {
  list: [],
  filterableFields: [],
  availableFilters: {},
  activeFilters: [],
  selectedFilters: {},
  availableSorts: [
    {
      text: 'En Düşük Fiyat',
      value: 'priceAsc',
    },
    {
      text: 'En Yüksek Fiyat',
      value: 'priceDesc',
    },
    {
      text: 'En Yeniler (A>Z)',
      value: 'titleAsc',
    },
    {
      text: 'En Yeniler (Z>A)',
      value: 'titleDesc',
    },
  ],
  sort: '',
  searchText: '',
};

export const productsReducer = (products = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...products, ...action.payload };
    case SET_FILTERS:
      return { ...products, selectedFilters: action.payload };
    case SET_SORT:
      return { ...products, sort: action.payload };
    case SET_SEARCH_TEXT:
      return { ...products, searchText: action.payload };
    default:
      return products;
  }
};
