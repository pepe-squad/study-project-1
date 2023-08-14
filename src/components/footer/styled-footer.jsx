import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #091e3e;
  color: #eef9ff;
  margin-top: -55px;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 100px;
  padding-bottom: 3rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background: #051225;
  color: #eef9ff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1.5rem;
`;

export const TradeMark = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  width: 50%;
`;

export const DesignedBy = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  width: 50%;
`;

export const ScrollUp = styled.button`
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
