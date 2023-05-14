import React from 'react';

import './style.scss';

const Spinner = () => {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
