import React from 'react';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import StyledHeader3 from '../StyledHeader3';
import { StyledIcon, StyledParagraph } from './styled-address';

const Address = () => {
  return (
    <div>
      <StyledHeader3>Get in touch</StyledHeader3>
      <StyledParagraph>
        <StyledIcon icon={faLocationDot} />
        123 Street, New York, USA
      </StyledParagraph>
      <StyledParagraph>
        <StyledIcon icon={faPhone} />
        info@example.com
      </StyledParagraph>
      <StyledParagraph>
        <StyledIcon icon={faEnvelope} />
        +012 345 67890
      </StyledParagraph>
    </div>
  );
};

export default Address;
