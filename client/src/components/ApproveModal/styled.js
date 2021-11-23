import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00000040;
`;

export const Content = styled.div`
  max-width: 400px;

  background-color: #ffffff;
  box-shadow: 0px 6px 12px rgba(50, 50, 71, 0.07);
  border: 1px solid rgba(228, 228, 228, 0.6);
  border-radius: 4px;
`;

export const Title = styled.div`
  padding: 20px;

  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #484848;

  border-bottom: 1px solid #cdcdcd;
`;

export const Body = styled.div`
  padding: 10px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #484848;
`;

export const Footer = styled.div`
  padding: 10px 20px 20px 20px;

  text-align: right;
`;

const buttonColors = {
  green: '#90D659',
  red: '#D65959',
};
export const Button = styled.button`
  padding: 5px;
  margin-right: 10px;
  min-width: 70px;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  ${({ color }) => `
  background-color: ${buttonColors[color]};
  `}

  &:last-child {
    margin-right: 0;
  }
`;
