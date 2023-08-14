import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 3rem;
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledLogo = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  font-weight: 900;
`;

export const StyledLogoTitle = styled.h1`
  color: #06a3da;
  margin: 0;
  font-weight: 700;
  font-size: 2.5rem;
`;

export const StyledTopDiv = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #eef9ff;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const StyledClockLogo = styled(FontAwesomeIcon)`
  color: #06a3da;
  margin-right: 0.5rem;
`;

export const StyledDateDiv = styled.div`
  display: flex-wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  width: 70%;
  margin-bottom: 0;
  display: inline-flex;
`;

export const StyledContactsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  padding-right: 3%;
  background-color: #06a3da;
  color: white;
  font-family: 'Open Sans', sans-serif;
`;

export const StyledMail = styled.p`
  padding-left: 0.5rem;
  padding-right: 1rem;
`;

export const StyledContactsLogo = styled(FontAwesomeIcon)``;

export const StyledPhone = styled.div`
  padding-left: 0.5rem;
  padding-right: 1rem;
`;
