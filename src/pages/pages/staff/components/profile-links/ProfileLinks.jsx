import React from 'react';
import { faTwitter, faVk, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

import { ProfileLinksDiv, StyledIcon } from './styled-profile-links';

const ProfileLinks = () => {
  return (
    <ProfileLinksDiv>
      <StyledIcon>
        <FontAwesomeIcon icon={faTwitter} />
      </StyledIcon>
      <StyledIcon>
        <FontAwesomeIcon icon={faVk} />
      </StyledIcon>
      <StyledIcon>
        <FontAwesomeIcon icon={faInstagram} />
      </StyledIcon>
      <StyledIcon>
        <FontAwesomeIcon icon={faFacebook} />
      </StyledIcon>
    </ProfileLinksDiv>
  );
};

export default ProfileLinks;
