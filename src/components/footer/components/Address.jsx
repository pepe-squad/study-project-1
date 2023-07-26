import React from 'react';

import { StyledH3, StyledParagraph, StyledNavBar } from '../footer-styled';

const Address = () => {
  return (
    <StyledNavBar>
      <StyledH3>Get in touch</StyledH3>
      <StyledParagraph>123 Street, New York, USA</StyledParagraph>
      <StyledParagraph>info@example.com</StyledParagraph>
      <StyledParagraph>+012 345 67890</StyledParagraph>
    </StyledNavBar>
  );
};

export default Address;
