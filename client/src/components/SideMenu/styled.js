import styled from 'styled-components';

export const Container = styled.div``;
export const FilterWrapper = styled.div``;
export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #484848;
  margin: 20px 0;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 14px;
  max-height: 250px;
  overflow-y: auto;
`;
export const ListItem = styled.li``;

export const ListButton = styled.button`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: #ff6000;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    color: #ff6000;
    font-weight: 700;
  `}
`;
