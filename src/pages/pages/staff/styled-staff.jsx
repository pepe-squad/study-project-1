import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaVk, FaTiktok } from 'react-icons/fa';

export const CommonDiv = styled.div``;

export const TopDiv = styled.div``;

export const BottomDiv = styled.div`
  box-sizing: border-box;
  display: block;
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

export const ProfileLinksDiv = styled.div`
  background-color: #eef9ff;
  z-index: 2;
  display: flex;
  padding: 0.5rem;
  margin-left: 17%;
  margin-top: -10%;
  margin-bottom: -10%;
  width: 65%;
  box-sizing: border-box;
`;

export const StyledTwitterIcon = styled(FaTwitter)`
  background-color: #06a3da;
  color: white;
  font-size: 24px;
  width: 36px;
  height: 36px;
`;

export const StyledInstaIcon = styled(FaInstagram)`
  background-color: #06a3da;
  color: white;
  font-size: 24px;
  width: 36px;
  height: 36px;
`;

export const StyledVkIcon = styled(FaVk)`
  background-color: #06a3da;
  color: white;
  font-size: 24px;
  width: 36px;
  height: 36px;
`;

export const StyledTiktokIcon = styled(FaTiktok)`
  background-color: #06a3da;
  color: white;
  font-size: 24px;
  width: 36px;
  height: 36px;
`;

export const ProfileLinksA = styled.a`
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  margin: 0.25rem;
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
