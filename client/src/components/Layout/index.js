import React from 'react';
import Navbar from '../Navbar';
import { Container } from './styled';

const Layout = ({ header, children }) => {
  return (
    <>
      <Navbar />
      {header}
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
