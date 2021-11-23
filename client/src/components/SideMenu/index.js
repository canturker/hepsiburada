import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter, changeSort } from '../../redux/actions/products.action';
import {
  Container,
  FilterWrapper,
  Title,
  List,
  ListItem,
  ListButton,
} from './styled';

const SideMenu = ({
  fields,
  filters,
  selectedFilters,
  sorts,
  selectedSort,
}) => {
  const dispatch = useDispatch();

  const filterOnClick = (key, value) => {
    dispatch(changeFilter({ filter: { key, value } }));
  };

  const sortOnClick = (value) => {
    dispatch(changeSort({ sort: value }));
  };

  return (
    <Container>
      {fields.map((field) => {
        const { key, title } = field;
        if (filters[key])
          return (
            <FilterWrapper key={key}>
              <Title>{title}</Title>
              <List>
                {Object.keys(filters[key]).map((filterName) => (
                  <ListItem key={filterName}>
                    <ListButton
                      isSelected={selectedFilters[key]?.includes(filterName)}
                      onClick={() => filterOnClick(key, filterName)}
                    >
                      {filterName} ({filters[key][filterName]})
                    </ListButton>
                  </ListItem>
                ))}
              </List>
            </FilterWrapper>
          );
        return null;
      })}
      <FilterWrapper>
        <Title>Sıralama</Title>
        <List>
          {sorts.map((sort) => (
            <ListItem key={sort.value}>
              <ListButton
                isSelected={selectedSort === sort.value}
                disabled={selectedSort === sort.value}
                onClick={() => sortOnClick(sort.value)}
              >
                {sort.text}
              </ListButton>
            </ListItem>
          ))}
        </List>
      </FilterWrapper>
    </Container>
  );
};

export default SideMenu;
