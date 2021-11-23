import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -7px;
  > div {
    width: calc(25% - 14px);
    margin: 0 7px;
  }
`;
