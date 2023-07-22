import React from 'react';
import { Link } from 'react-router-dom';

import { StyledNavBar, DivForFooter, StyledList } from '../footer-styled';

const NavBar = () => {
  return (
    <div>
      <StyledNavBar>Quick Links</StyledNavBar>
      <DivForFooter>
        <StyledList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Our Services</Link>
          </li>
          <li>
            <Link to="/contacts">Latest Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </StyledList>
      </DivForFooter>
    </div>
  );
};

export default NavBar;
