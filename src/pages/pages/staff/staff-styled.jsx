import styled from 'styled-components';

export const StyledStaffGridDiv1 = styled.div`
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: block;
`;

export const StyledStaffGridDiv2 = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: block;
`;

export const StyledStaffGridDiv3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
  --bs-gutter-x: 3rem;
  --bs-gutter-y: 3rem;
  box-sizing: border-box;
`;

export const StyledProfileDiv1 = styled.div`
  visibility: visible;
  animation-delay: 0.3s;
  animation-name: slideInUp;
  flex: 0 0 auto;
  width: 33.33333%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
  box-sizing: border-box;
  display: block;
`;

export const StyledProfileDiv2 = styled.div`
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
  position: relative !important;
  box-sizing: border-box;
  display: block;
`;

export const StyledProfileDiv3 = styled.div`
  transition: 0.5s;
  border-bottom-right-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
  background-color: #eef9ff !important;
  text-align: center !important;
  padding-top: 3rem !important;
  padding: 1.5rem !important;
  position: relative !important;
  box-sizing: border-box;
  display: block;
`;

export const StyledProfileDiv4 = styled.div`
border-radius: 2px !important;
background-color: #EEF9FF !important;
padding: 0.5rem !important;
transform: translate(-50%, -50%) !important;
left: 50% !important;
top: 100% !important;
position: absolute !important;
display: flex !important
box-sizing: border-box;
`;

export const StyledProfileDiv5 = styled.div`
  transition: 0.5s;
  border-bottom-right-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
  background-color: #eef9ff !important;
  text-align: center !important;
  padding-top: 3rem !important;
  padding: 1.5rem !important;
  position: relative !important;
  display: block;
  box-sizing: border-box;
`;

export const StyledProfileImg = styled.img`
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
  width: 100% !important;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  box-sizing: border-box;
`;

export const StyledProfileAnchor = styled.a`
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  width: 36px;
  height: 36px;
  color: #ffffff;
  font-family: 'Jost', sans-serif;
  transition: 0.5s;
  margin: 0.25rem !important;
  background-color: #06a3da;
  border-color: #06a3da;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 2px;
  text-decoration: none;
  box-sizing: border-box;
`;

export const StyledProfileH4 = styled.h4`
  margin-bottom: 0.5rem !important;
  font-weight: 600 !important;
  font-size: 1.5rem;
  margin-top: 0;
  font-family: 'Jost', sans-serif;
  line-height: 1.2;
  color: #091e3e;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const StyledProfileParagraph = styled.p`
  color: #06a3da !important;
  margin-bottom: 0 !important;
  margin-top: 0;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
