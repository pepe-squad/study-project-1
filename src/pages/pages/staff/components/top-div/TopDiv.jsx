import React from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

import { StyledTopDiv, StyledHeader, StyledLink, StyledIcon } from './styled-top-div';

const TopDiv = () => {
  return (
    <StyledTopDiv>
      <StyledHeader>Dentist</StyledHeader>

      <StyledLink to="/">Home</StyledLink>
      <StyledIcon>
        <FontAwesomeIcon icon={faCircle} />
      </StyledIcon>
      <StyledLink to="/staff">Staff</StyledLink>
    </StyledTopDiv>
  );
};

export default TopDiv;
