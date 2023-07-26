import styled from 'styled-components';

export const StyledInputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6b6a75;
`;

export const StyledInput = styled.input`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  padding: 1rem !important;
  border-color: #fff !important;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6B6A75;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  margin: 0;
}`;

export const StyledButton = styled.button`
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  z-index: 2;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  transition: 0.5s;
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
  color: #fff;
  background-color: #091e3e;
  border-color: #091e3e;
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 2px;
`;

export const SubscribeDiv1 = styled.div`
  z-index: 1;
  visibility: visible;
  animation-delay: 0.1s;
  animation-name: fadeInUp;
  padding-top: 3rem !important;
  position: relative !important;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  margin: 0;
  box-sizing: border-box;
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6b6a75;
`;

export const SubscribeDiv2 = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: block;
`;

export const SubscribeDiv3 = styled.div`
  box-sizing: border-box;
  display: block;
  background-color: #06a3da !important;
  padding: 3rem !important;
`;

export const StyledForm = styled.form`
  max-width: 600px;
  margin-right: auto !important;
  margin-left: auto !important;
  display: block;
  margin-top: 0em;
  box-sizing: border-box;
`;
