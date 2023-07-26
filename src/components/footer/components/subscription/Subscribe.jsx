import React, { useState } from 'react';

import {
  SubscribeDiv1,
  SubscribeDiv2,
  SubscribeDiv3,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledInputGroup
} from './subscription-styled';

const Subscribe = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 25);
    setName(cutValue);
  };

  const onClickHandler = () => {
    setName('');
  };

  return (
    <SubscribeDiv1>
      <SubscribeDiv2>
        <SubscribeDiv3>
          <StyledForm>
            <StyledInputGroup>
              <StyledInput
                id="usermail-sub"
                placeholder="Your Email: usermail@domain.com"
                onChange={onChangeHandler}
                value={name}
              />
              <StyledButton onClick={onClickHandler} type="button">
                Подписаться
              </StyledButton>
            </StyledInputGroup>
          </StyledForm>
        </SubscribeDiv3>
      </SubscribeDiv2>
    </SubscribeDiv1>
  );
};

export default Subscribe;
