import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled.li`
  float: left;
  margin-right: 13px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;

  padding: 0;

  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  color: #646464;

  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: #00000010;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #ffffff;
    }
  }

  ${({ isActive }) =>
    isActive &&
    `
        background-color: #FF6000;
        font-weight: 500;
        color: #ffffff;
        cursor: not-allowed;
        &:hover {
            background-color: #FF6000;
        }
    `}
`;
