import React from 'react';

import { Div1, Div2, Div3 } from './footer-styled';
import Address from './components/Address';
import NavBar from './components/NavBar';
import Subscribe from './components/subscription/Subscribe';

const Footer = () => {
  return (
    <Div1>
      <Div2>
        <Div3>
          <NavBar />
          <Address />
          <Subscribe />
        </Div3>
      </Div2>
    </Div1>
  );
};

export default Footer;
