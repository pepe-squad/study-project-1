import React from 'react';

import { FooterDiv1, FooterDiv2, FooterDiv3 } from './footer-styled';
import Address from './components/Address';
import NavBar from './components/NavBar';
import FollowUs from './components/FollowUs';
import Subscribe from './components/subscription/Subscribe';
import BottomFooter from './BottomFooter';

// import Subscribe from './components/subscription/Subscribe';

const Footer = () => {
  return (
    <div>
      <Subscribe />
      <FooterDiv1>
        <FooterDiv2>
          <FooterDiv3>
            <NavBar />
            <Address />
            <FollowUs />
          </FooterDiv3>
        </FooterDiv2>
      </FooterDiv1>
      <BottomFooter />
    </div>
  );
};

export default Footer;
