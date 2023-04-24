import React, { useState } from 'react';

import inputsurNameId from '_consts/surNameid';

const SurNameinput = () => {
  const [surname, setSurName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 20);
    setSurName(cutValue);
  };

  return (
    <input id={inputsurNameId} className="rounded-md shadow-md border" onChange={onChangeHandler} value={surname} />
  );
};

export default SurNameinput;
