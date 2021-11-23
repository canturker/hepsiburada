import React from 'react';
import { Container, InputElement } from './styled';

const Input = ({ type, onChange, placeholder }) => {
  return (
    <Container>
      <InputElement type={type} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
