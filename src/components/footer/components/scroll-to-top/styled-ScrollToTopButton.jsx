import styled from 'styled-components';

const ScrollUp = styled.button`
  position: fixed;
  right: 45px;
  bottom: 45px;
  z-index: 99;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #06a3da;
  border-color: #06a3da;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin: 0 0.4rem;
  text-decoration: none;
  transition: background-color 0.3s;
  scroll-behavior: smooth;

  &:hover {
    background-color: orange;
    color: black;
  }
`;
export default ScrollUp;
