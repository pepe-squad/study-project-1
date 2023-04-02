import React from 'react';

import NameInput from '_components/name-input/NameInput';
import inputNameId from '_consts/formIds';

const Form = () => {
  return (
    <main className="p-2">
      <form>
        <label htmlFor={inputNameId} className="pr-2">
          Your name:
        </label>
        <NameInput />
      </form>
    </main>
  );
};

export default Form;
