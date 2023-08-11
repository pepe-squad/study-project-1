import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #eef9ff;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

export const StyledArrow = styled(FaArrowRight)`
  display: inline-block;
  font-size: 12px;
  color: #06a3da;
  margin-right: 0.5rem;
`;
