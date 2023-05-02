import React, { useState } from 'react';

import inputLastNameId from '_components/form/consts/lastNameId';

const LastNameinput = () => {
  const [lastname, setlastName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 20);
    setlastName(cutValue);
  };

  return (
    <input id={inputLastNameId} className="rounded-md shadow-md border" onChange={onChangeHandler} value={lastname} />
  );
};

export default LastNameinput;
