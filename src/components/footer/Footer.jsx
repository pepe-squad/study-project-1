import React from 'react';

import Address from './components/address/Address';
import NavBar from './components/navbar/NavBar';
import Subscribe from './components/subscription/Subscribe';
import { StyledFooter, FooterDiv } from './styled-footer';
import FollowLinks from './components/followlinks/FollowLinks';

const Footer = () => {
  return (
    <div>
      <Subscribe />
      <StyledFooter>
        <FooterDiv>
          <NavBar />
          <Address />
          <FollowLinks />
        </FooterDiv>
      </StyledFooter>
    </div>
  );
};

export default Footer;
