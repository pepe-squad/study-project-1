import React, { useState } from 'react';

import inputNameId from '_consts/formIds';

const NameInput = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 15);
    setName(cutValue);
  };

  return <input id={inputNameId} className="rounded-md shadow-md border" onChange={onChangeHandler} value={name} />;
};

export default NameInput;
