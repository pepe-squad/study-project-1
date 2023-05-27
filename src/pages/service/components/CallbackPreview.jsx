import React, { useCallback, useState } from 'react';

const CallbackPreview = () => {
  const [value, setValue] = useState(0);

  const clickHandler = useCallback(
    (n) => () => {
      setValue((prevValue) => prevValue + n);
    },
    []
  );

  return (
    <div className="bg-blue-200">
      <div>Count: {value}</div>
      <button type="button" onClick={clickHandler(1)} className="border-2 p-4">
        Inc
      </button>
      <button type="button" onClick={clickHandler(-1)} className="border-2 p-4">
        Dec
      </button>
    </div>
  );
};

export default CallbackPreview;
