import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addBasketItem } from '../../redux/actions/basket.action';
import Pagination from '../Pagination';
import Product from '../Product';
import { List, Container } from './styled';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const ITEM_PER_PAGE = 12;
  const [activePage, setActivePage] = useState(0);

  const list = useMemo(() => {
    const deepCopy = JSON.parse(JSON.stringify(products));
    return deepCopy.slice(
      ITEM_PER_PAGE * activePage,
      ITEM_PER_PAGE * (activePage + 1)
    );
  }, [products, activePage, ITEM_PER_PAGE]);

  return (
    <Container>
      <List>
        {list.map((product) => {
          const {
            id,
            title,
            thumbnail,
            color,
            brand,
            price,
            discountPercentage,
          } = product;
          return (
            <Product
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              color={color}
              brand={brand}
              price={price}
              percentage={discountPercentage}
              addToBasket={() => {
                dispatch(addBasketItem({ item: product }));
              }}
            />
          );
        })}
      </List>
      {products.length > ITEM_PER_PAGE && (
        <Pagination
          onChange={setActivePage}
          activePage={activePage}
          length={products.length}
          itemPerPage={ITEM_PER_PAGE}
        />
      )}
    </Container>
  );
};

export default ProductList;
