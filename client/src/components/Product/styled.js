import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid transparent;
  border-radius: 6px;

  margin-bottom: 17px !important;

  &:hover {
    border: 1px solid #cdcdcd;
    > figure {
      border-color: transparent;
    }
    .price-field {
      display: none;
    }
    .addtocart-button {
      display: block !important;
    }
  }
`;

export const ImageWrapper = styled.figure`
  display: flex;
  justify-content: center;

  border: 1px solid #e5e5e5;
  border-radius: 6px;

  padding: 2px 14px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: auto;
  height: 332px;

  margin: 0;
  object-fit: contain;
`;

export const Details = styled.div`
  padding: 9px 15px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #484848;

  height: 36px;
`;

export const Information = styled.div`
  margin-top: 10px;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #484848;
  > b {
    font-weight: 700;
  }
`;

export const Price = styled.div`
  margin-top: 13px;
  > b {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
  > .actual-price {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #9b9b9b;
  }
  > .discount-percentage {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #f90000;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: rgba(255, 96, 0, 0.11);
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ff6000;
  text-align: center;

  padding: 6px 0;
  width: 100%;
  cursor: pointer;

  margin-top: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: #b0b0b0;
    background-color: rgba(126, 126, 126, 0.11);
    cursor: not-allowed;
    &:hover {
      opacity: 1;
    }
  }
  &.addtocart-button {
    display: none;
  }
`;
