import React from 'react';
import { faTwitter, faVk, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

import { FollowIcons, FollowLinksDiv } from './styled-followlinks';
import StyledHeader3 from '../StyledHeader3';

const FollowLinks = () => {
  return (
    <div>
      <StyledHeader3>Follow Us</StyledHeader3>
      <FollowLinksDiv>
        <FollowIcons>
          <FontAwesomeIcon icon={faTwitter} />
        </FollowIcons>
        <FollowIcons>
          <FontAwesomeIcon icon={faVk} />
        </FollowIcons>
        <FollowIcons>
          <FontAwesomeIcon icon={faInstagram} />
        </FollowIcons>
        <FollowIcons>
          <FontAwesomeIcon icon={faFacebook} />
        </FollowIcons>
      </FollowLinksDiv>
    </div>
  );
};

export default FollowLinks;
