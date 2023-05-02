import React, { useState } from 'react';

import inputMiddleNameId from '_components/form/consts/middleNameId';

const MiddleNameinput = () => {
  const [middlename, setMiddleName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 20);
    setMiddleName(cutValue);
  };

  return (
    <input
      id={inputMiddleNameId}
      className="rounded-md shadow-md border"
      onChange={onChangeHandler}
      value={middlename}
    />
  );
};

export default MiddleNameinput;
