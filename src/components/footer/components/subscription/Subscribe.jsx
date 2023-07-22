import React, { useState } from 'react';

import { StyledNavBar, StyledInput, StyledButton } from '_components/footer/footer-styled';

const Subscribe = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 25);
    setName(cutValue);
  };

  const onClickHandler = () => {
    alert('You have been subscribed!');
    setName('');
  };

  return (
    <div>
      <form>
        <StyledNavBar>Follow Us</StyledNavBar>

        <label htmlFor="usermail-sub">Your email:</label>
        <StyledInput id="usermail-sub" placeholder="usermail@domain.com" onChange={onChangeHandler} value={name} />
        <StyledButton onClick={onClickHandler} type="button">
          Подписаться
        </StyledButton>
      </form>
    </div>
  );
};

export default Subscribe;
