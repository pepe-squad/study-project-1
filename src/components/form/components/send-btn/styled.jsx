import styled from 'styled-components';

const getAppearance = (color) => {
  switch (color) {
    case 'primary': {
      return 'red';
    }
    case 'outline': {
      return 'white';
    }
    default: {
      return 'yellow';
    }
  }
};

const getBackgroundColor = ({ disabled, appearance }) => {
  if (disabled) {
    return 'lightgray';
  }
  return getAppearance(appearance);
};

const StyledButton = styled.button`
  background-color: ${getBackgroundColor};
  border: 1 solid;
  border-radius: 4px;
  width: fit-content;
  height: 40px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
`;

export default StyledButton;
