import React from 'react';
import { Link } from 'react-router-dom';
import { faTooth, faClock, faEnvelopeOpen, faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/index';

import Appointment from './components/appointment/Appointment';
import NavBar from './components/navbar/NavBar';
import {
  StyledClockLogo,
  StyledContactsDiv,
  StyledContactsLogo,
  StyledDateDiv,
  StyledHeader,
  StyledLogo,
  StyledLogoDiv,
  StyledLogoTitle,
  StyledPhone,
  StyledTopDiv,
  StyledMail
} from './styled-header';
import { StyledNavbar } from './components/navbar/styled-navbar';

const Header = () => {
  return (
    <div>
      <StyledTopDiv>
        <StyledDateDiv>
          <StyledClockLogo icon={faClock} />
          Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed{' '}
        </StyledDateDiv>
        <StyledContactsDiv>
          <StyledContactsLogo icon={faEnvelopeOpen} />
          <StyledMail>gachi-squad@mail.ru</StyledMail>
          <StyledContactsLogo icon={faPhone} />
          <StyledPhone>+8 800 9379992</StyledPhone>
        </StyledContactsDiv>
      </StyledTopDiv>
      <StyledHeader>
        <StyledLogoDiv>
          <Link to="/">
            <StyledLogoTitle>
              <StyledLogo icon={faTooth} />
              DentCare
            </StyledLogoTitle>
          </Link>
        </StyledLogoDiv>
        <StyledNavbar>
          <NavBar />
          <StyledLogo icon={faMagnifyingGlass} />
          <Appointment />
        </StyledNavbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
