import React from 'react';

import StyledHeader3 from '../StyledHeader3';
import { NavBarDiv, StyledLink, StyledArrow } from './styled-navbar';

const NavBar = () => {
  return (
    <NavBarDiv>
      <StyledHeader3>Quick Links</StyledHeader3>
      <StyledLink to="/">
        <StyledArrow />
        Home
      </StyledLink>
      <StyledLink to="/about">
        <StyledArrow />
        About Us
      </StyledLink>
      <StyledLink to="/contacts">
        <StyledArrow />
        Our Services
      </StyledLink>
      <StyledLink to="/contacts">
        <StyledArrow />
        Latest Blog
      </StyledLink>
      <StyledLink to="/contact">
        <StyledArrow />
        Contact Us
      </StyledLink>
    </NavBarDiv>
  );
};

export default NavBar;
