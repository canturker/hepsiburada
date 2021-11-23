import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryHeader from '../components/CategoryHeader';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import SideMenu from '../components/SideMenu';
import { initializeCategoryDetail } from '../redux/actions/initialize.action';
import {
  getAvailableFilters,
  getAvailableSorts,
  getFilterableFields,
  getProducts,
  getSearchText,
  getSelectedFilters,
  getSelectedSort,
} from '../redux/selectors/products.selector';

const CategoryDetail = () => {
  const dispatch = useDispatch();

  const list = useSelector(getProducts);
  const filterableFields = useSelector(getFilterableFields);
  const availableFilters = useSelector(getAvailableFilters);
  const selectedFilters = useSelector(getSelectedFilters);
  const availableSorts = useSelector(getAvailableSorts);
  const selectedSort = useSelector(getSelectedSort);
  const searchText = useSelector(getSearchText);

  useEffect(() => {
    dispatch(initializeCategoryDetail());
  }, [dispatch]);

  return (
    <Layout
      header={
        <CategoryHeader
          sorts={availableSorts}
          selectedSort={selectedSort}
          searchText={searchText}
        />
      }
    >
      <SideMenu
        fields={filterableFields}
        filters={availableFilters}
        selectedFilters={selectedFilters}
        sorts={availableSorts}
        selectedSort={selectedSort}
      />
      <ProductList products={list} />
    </Layout>
  );
};

export default CategoryDetail;
