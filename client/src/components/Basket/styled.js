import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  &:hover {
    > .basket-list {
      display: block;
    }
    > .basket-button {
      border-bottom-color: #ffffff;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
export const Button = styled.button`
  z-index: 2;
  position: relative;
  padding: 11px 30px;
  background-color: #ffffff;

  border: 1px solid #b0b0b0;
  border-radius: 4px;

  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #b0b0b0;

  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -9px;
  right: -9px;
  width: 18px;
  height: 18px;
  border-radius: 99px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6000;

  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
`;

export const BasketItemList = styled.div`
  display: none;

  position: absolute;
  top: 46.5px;
  right: 0;
  width: 360px;
  z-index: 1;

  padding: 10px 0;
  background: #ffffff;

  border: 1px solid #b0b0b0;
  border-radius: 4px 0 4px 4px;
`;

export const BasketItem = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 5px 6px;
`;
export const Image = styled.img`
  width: 40px;
  height: 60px;
  object-fit: contain;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  height: 72px;
`;

export const Title = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #484848;
`;

export const Delete = styled.div`
  padding: 0 12px;
  background: #ffffff;
  border: 1px solid #f90000;
  border-radius: 4px;

  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  color: #f90000;
  cursor: pointer;
`;
