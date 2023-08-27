import React, { useState } from 'react';

import {
  StyledButton,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
  StyledSubscribeDiv,
  StyledSubscribeForm
} from './styled-subscribe';

const Subscribe = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 25);
    setName(cutValue);
  };
  return (
    <StyledSubscribeDiv>
      <StyledSubscribeForm>
        <StyledInputGroup>
          <StyledLabel htmlFor="usermail-sub">Your email:</StyledLabel>
          <StyledInput id="usermail-sub" placeholder="usermail@domain.com" onChange={onChangeHandler} value={name} />
          <StyledButton type="button">Подписаться</StyledButton>
        </StyledInputGroup>
      </StyledSubscribeForm>
    </StyledSubscribeDiv>
  );
};

export default Subscribe;
