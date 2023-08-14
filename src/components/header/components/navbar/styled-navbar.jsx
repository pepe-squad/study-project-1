import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 35px 15px;
  font-size: 18px;
  font-weight: 500;
  transition: 0.5s;
  &:hover {
    color: #06a3da;
  }
`;
