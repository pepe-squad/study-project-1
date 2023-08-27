import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledTopDiv = styled.div`
  background-size: cover;
  background-position: center;
  background: linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)),
    url('/assets//images/dentists-top-div.jpg') center center no-repeat;

  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

export const StyledHeader = styled.h1`
  animation-name: zoomIn;
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  margin-left: 10px;
  margin-right: 10px;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`;

export const StyledIcon = styled.div`
  color: #fff;
  display: inline-block;
`;
