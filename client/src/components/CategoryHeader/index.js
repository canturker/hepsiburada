import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSort } from '../../redux/actions/products.action';
import { Container, Details, Title, SearchText, SortSelect } from './styled';

const CategoryHeader = ({ sorts, selectedSort, searchText }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Details>
        <Title>iPhone iOS cep telefonu</Title>
        {searchText.length >= 2 && (
          <SearchText>
            Aranan Kelime: <span>{searchText}</span>
          </SearchText>
        )}
      </Details>
      <SortSelect
        value={selectedSort}
        onChange={(e) => dispatch(changeSort({ sort: e.target.value }))}
      >
        <option value='' disabled>
          Sıralama
        </option>
        {sorts.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.text}
          </option>
        ))}
      </SortSelect>
    </Container>
  );
};

export default CategoryHeader;
