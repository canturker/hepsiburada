import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isBasketIncludesProduct } from '../../redux/selectors/basket.selector';
import {
  Container,
  ImageWrapper,
  Image,
  Details,
  Title,
  Information,
  Price,
  Button,
} from './styled';

const Product = ({
  id,
  title,
  thumbnail,
  color,
  brand,
  price,
  addToBasket,
}) => {
  const isAlreadyAdded = useSelector((state) =>
    isBasketIncludesProduct(state, id)
  );

  return (
    <Container>
      <ImageWrapper>
        <Image src={thumbnail} />
      </ImageWrapper>
      <Details>
        <Title>{title}</Title>
        <Information>
          <b>Marka:</b> {brand} <br />
          <b>Renk:</b> {color}
        </Information>
        {isAlreadyAdded ? (
          <Button disabled>Bu ürünü sepete ekleyemezsiniz.</Button>
        ) : (
          <>
            <Price className='price-field'>
              <b>90,85 TL</b>
              <br />
              <span className='actual-price'>{price} TL</span>{' '}
              <span className='discount-percentage'>12%</span>
            </Price>
            <Button className='addtocart-button' onClick={addToBasket}>
              Sepete Ekle
            </Button>
          </>
        )}
      </Details>
    </Container>
  );
};

export default Product;
