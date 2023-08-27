import styled from 'styled-components';

export const FollowLinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const FollowIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #06a3da;
  border-color: #06a3da;
  color: white;
  cursor: pointer;
  font-size: 24px;
  height: 48px;
  margin: 0 0.4rem;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 48px;

  &:hover {
    background-color: orange;
    color: black;
  }
`;
