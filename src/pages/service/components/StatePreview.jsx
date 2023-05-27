import React, { useState } from 'react';

const StatePreview = () => {
  const [value, setValue] = useState(0);

  const clickHandler = (n) => {
    setValue((prevValue) => {
      const updatedValue = prevValue + n;
      sessionStorage.setItem('value', updatedValue);
      return updatedValue;
    });
  };

  return (
    <div className="bg-yellow-200">
      <div>Count: {value}</div>
      <button type="button" onClick={() => clickHandler(1)} className="border-2 p-4">
        Inc
      </button>
      <button type="button" onClick={() => clickHandler(-1)} className="border-2 p-4">
        Dec
      </button>
    </div>
  );
};

export default StatePreview;
