export const getProducts = (state) => state.products.list;
export const getFilterableFields = (state) => state.products.filterableFields;
export const getAvailableFilters = (state) => state.products.availableFilters;
export const getSelectedFilters = (state) => state.products.selectedFilters;
export const getDeepCopyOfSelectedFilters = (state) =>
  JSON.parse(JSON.stringify(state.products.selectedFilters));
export const getAvailableSorts = (state) => state.products.availableSorts;
export const getSelectedSort = (state) => state.products.sort;
export const getSearchText = (state) => state.products.searchText;
