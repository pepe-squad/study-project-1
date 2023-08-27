import React from 'react';
import { StyledLink } from './styled-navbar';

const NavBar = () => {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About us</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/staff">Staff</StyledLink>
      <StyledLink to="/service">Service</StyledLink>
    </div>
  );
};

export default NavBar;
