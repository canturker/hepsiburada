import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBasketItem } from '../../redux/actions/basket.action';
import {
  getBasketItems,
  getBasketItemsCount,
} from '../../redux/selectors/basket.selector';
import {
  Container,
  Button,
  ItemCount,
  BasketItemList,
  BasketItem,
  ImageWrapper,
  Image,
  Details,
  Title,
  Delete,
} from './styled';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector(getBasketItems);
  const basketItemCount = useSelector(getBasketItemsCount);

  return (
    <Container>
      <Button className='basket-button'>
        Sepetim
        {basketItemCount > 0 && <ItemCount>{basketItemCount}</ItemCount>}
      </Button>
      <BasketItemList className='basket-list'>
        {basketItems.map((item) => {
          return (
            <BasketItem key={item.id}>
              <ImageWrapper>
                <Image src={item.thumbnail}></Image>
              </ImageWrapper>
              <Details>
                <Title>
                  {item.title} <br />
                  {item.category}
                </Title>
                <Delete
                  onClick={() => {
                    dispatch(removeBasketItem({ item }));
                  }}
                >
                  Kaldır
                </Delete>
              </Details>
            </BasketItem>
          );
        })}
      </BasketItemList>
    </Container>
  );
};

export default Basket;
