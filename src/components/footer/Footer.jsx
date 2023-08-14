import React from 'react';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

import Address from './components/address/Address';
import NavBar from './components/navbar/NavBar';
import Subscribe from './components/subscription/Subscribe';
import { StyledFooter, FooterDiv, BottomDiv, TradeMark, DesignedBy } from './styled-footer';
import ScrollUp from './components/scroll-to-top/styled-ScrollToTopButton';
import FollowLinks from './components/followlinks/FollowLinks';
import ScrollToTopButton from './components/scroll-to-top/ScrollToTopButton';

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
      <BottomDiv>
        <TradeMark>© Children by Oris. All Right Reserved.</TradeMark>
        <DesignedBy>Designed by Kim.</DesignedBy>
        <ScrollUp onClick={ScrollToTopButton}>
          <FontAwesomeIcon icon={faCircleUp} />
        </ScrollUp>
      </BottomDiv>
    </div>
  );
};

export default Footer;
