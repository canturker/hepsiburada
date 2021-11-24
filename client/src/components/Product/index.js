import React from 'react';
import { useSelector } from 'react-redux';
import { priceFixer } from '../../helpers/priceFixer';
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
  discountPrice,
  percentage,
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
              <b>{priceFixer(discountPrice)}</b>
              <br />
              <span className='actual-price'>{priceFixer(price)}</span>{' '}
              <span className='discount-percentage'>{percentage}%</span>
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
