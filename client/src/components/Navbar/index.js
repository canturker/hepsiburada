import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/img/logo.svg';
import { changeSearchText } from '../../redux/actions/products.action';
import Basket from '../Basket';
import Input from '../Input';
import { Container, Image } from './styled';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTimeout, setSearchTimeout] = useState(null);

  const changeSearch = (e) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (e.target.value.length === 0 || e.target.value.length >= 2) {
      setSearchTimeout(
        setTimeout(() => {
          dispatch(changeSearchText({ text: e.target.value }));
        }, 400)
      );
    }
  };

  return (
    <Container>
      <Image height='35' width='212' src={Logo} />
      <Input
        type='text'
        onChange={changeSearch}
        placeholder='25 milyon’dan fazla ürün içerisinde ara'
      />
      <Basket />
    </Container>
  );
};

export default Navbar;
