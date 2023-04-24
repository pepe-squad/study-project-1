import React from 'react';

import NameInput from '_components/name-input/NameInput';
import LastNameInput from '_components/lastName-input/LastNameInput';
import SurNameInput from '_components/surName-input/SurNameInput';
import inputNameId from '_consts/formIds';
import inputlastNameId from '_consts/lastNameId';
import inputsurNameId from '_consts/surNameid';

const Form = () => {
  return (
    <main className="p-2">
      <form>
        <label htmlFor={inputNameId} className="pr-2">
          Firstname:
        </label>
        <NameInput />
      </form>
      <form>
        <label htmlFor={inputlastNameId} className="pr-2">
          Lastname:
        </label>
        <LastNameInput />
      </form>
      <form>
        <label htmlFor={inputsurNameId} className="pr-2">
          Surname:
        </label>
        <SurNameInput />
      </form>
    </main>
  );
};

export default Form;
