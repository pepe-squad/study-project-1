import React from 'react';
import { Link } from 'react-router-dom';

import { StyledNavBar, StyledList, StyledListElements, StyledH3 } from '../footer-styled';

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledH3>Quick Links</StyledH3>

      <StyledList>
        <StyledListElements>
          <Link to="/">Home</Link>
        </StyledListElements>
        <StyledListElements>
          <Link to="/about">About Us</Link>
        </StyledListElements>
        <StyledListElements>
          <Link to="/contacts">Our Services</Link>
        </StyledListElements>
        <StyledListElements>
          <Link to="/contacts">Latest Blog</Link>
        </StyledListElements>
        <StyledListElements>
          <Link to="/contact">Contact Us</Link>
        </StyledListElements>
      </StyledList>
    </StyledNavBar>
  );
};

export default NavBar;
