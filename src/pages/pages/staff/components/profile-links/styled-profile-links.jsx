import styled from 'styled-components';

export const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  background-color: #06a3da;
  border-color: #06a3da;
  border-radius: 5px;
  height: 36px;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 36px;

  &:hover {
    background-color: orange;
    color: black;
  }
`;

export const ProfileLinksDiv = styled.div`
  align-items: center;
  background-color: #eef9ff;
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: -10%;
  margin-bottom: -10%;
  opacity: 1;
  padding: 0.5rem;
  position: relative;
  width: 60%;
  z-index: 2;
`;
