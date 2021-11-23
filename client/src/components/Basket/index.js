import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBasketItem } from '../../redux/actions/basket.action';
import { setModal } from '../../redux/actions/ui.action';
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

  const removeBasketApprove = ({ item }) => {
    dispatch(
      setModal({
        modal: {
          isShown: true,
          title: 'Ürünü silmek istediğinize emin misiniz?',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....`,
          actions: [
            {
              text: 'EVET',
              color: 'green',
              onClick: () => {
                removeFromBasket({ item });
                closeApproveModal();
              },
            },
            {
              text: 'HAYIR',
              color: 'red',
              onClick: closeApproveModal,
            },
          ],
        },
      })
    );
  };

  const closeApproveModal = () => {
    dispatch(
      setModal({
        modal: {
          isShown: false,
        },
      })
    );
  };

  const removeFromBasket = ({ item }) => {
    dispatch(removeBasketItem({ item }));
  };

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
                    removeBasketApprove({ item });
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
