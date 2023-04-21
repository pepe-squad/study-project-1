import React, { useState } from 'react';

const UserMailInput = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 15);
    setName(cutValue);
  };

  return (
    <input
      id="your-email"
      placeholder="usermail@domain.com"
      className="rounded-md shadow-md border"
      onChange={onChangeHandler}
      value={name}
    />
  );
};

export default UserMailInput;
