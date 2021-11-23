import styled from 'styled-components';

export const Container = styled.div`
  margin: 17px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: #484848;
  margin: 0;
`;
export const SearchText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #b0b0b0;
  margin: 0;

  > span {
    color: #000000;
  }
`;

export const SortSelect = styled.select`
  font-weight: 400;
  font-size: 17px;
  color: #b0b0b0;

  padding: 12px 25px 12px 16px;

  border: 1px solid #b4b4bb;
  border-radius: 4px;
  -webkit-appearance: none;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg width='11' height='5' viewBox='0 0 11 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.34375 0L5.34375 5L10.3438 0L0.34375 0Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 10px auto;
`;
