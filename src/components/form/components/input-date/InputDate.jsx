import React, { useState } from 'react';

import InputDateId from '_components/form/consts/inputDateId';

const InputDate = () => {
  const [date, setDate] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 15);
    setDate(cutValue);
  };

  return (
    <input
      type="date"
      id={InputDateId}
      className="pl-14 pr-12 rounded-md shadow-md border "
      onChange={onChangeHandler}
      value={date}
    />
  );
};

export default InputDate;
