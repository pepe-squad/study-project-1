import React from 'react';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

import Address from './components/address/Address';
import NavBar from './components/navbar/NavBar';
import Subscribe from './components/subscription/Subscribe';
import { StyledFooter, FooterDiv, BottomDiv, TradeMark, DesignedBy, ScrollUp } from './styled-footer';
import FollowLinks from './components/followlinks/FollowLinks';

const Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
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
      <BottomDiv>
        <TradeMark>© Children by Oris. All Right Reserved.</TradeMark>
        <DesignedBy>Designed by Kim.</DesignedBy>
        <ScrollUp onClick={ScrollToTop}>
          <FontAwesomeIcon icon={faCircleUp} />
        </ScrollUp>
      </BottomDiv>
    </div>
  );
};

export default Footer;
