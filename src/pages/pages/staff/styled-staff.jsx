import styled from 'styled-components';

export const CommonDiv = styled.div``;

export const BottomDiv = styled.div`
  box-sizing: border-box;
  display: block;
  padding-bottom: 10rem;
`;

export const StaffGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProfileContainerDiv = styled.div`
  display: block;
  box-sizing: border-box;
  flex-shrink: 1;
  padding: 0 2rem;
  margin-top: 1.5rem;
`;

export const ProfileImageDiv = styled.div`
  z-index: -1;
`;

export const ProfileImage = styled.img`
  z-index: 1;
  box-sizing: border-box;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const ProfileNameDiv = styled.div`
  background-color: #eef9ff;
  padding: 2rem;
`;

export const ProfileNameH4 = styled.h4`
  font-family: 'Jost', sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 600;
  color: #091e3e;
  text-align: center;
`;

export const ProfileSpec = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #06a3da;
  text-align: center;
  margin-top: 0.5rem;
`;
