import React, { memo, useCallback } from 'react';

import StyledButton from './styled';

const SendButton = (props) => {
  const clickHandler = useCallback(() => {
    if (!props.disabled) {
      console.log("I'm gay");
    }
  }, [props.disabled]);

  return (
    <StyledButton type="button" onClick={clickHandler} {...props}>
      Send from (styled-components)
    </StyledButton>
  );
};

export default memo(SendButton);
