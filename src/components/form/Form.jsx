import React from 'react';

import NameInput from '_components/name-input/NameInput';
import LastNameInput from '_components/lastName-input/LastNameInput';
import SurNameInput from '_components/surName-input/SurNameInput';
import InputDate from '_components/input-date/InputDate';
import inputNameId from '_consts/formIds';
import inputlastNameId from '_consts/lastNameId';
import inputsurNameId from '_consts/surNameid';
import inputDateId from '_consts/inputDateId';

const Form = () => {
  return (
    <main style={{ lineHeight: '30px' }} className="p-2">
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
          Midlename:
        </label>
        <SurNameInput />
      </form>
      <form>
        <label htmlFor={inputDateId} className="pr-2">
          Date of birth:
        </label>
        <InputDate />
      </form>
      <form>
        <button type="button" className="rounded-md shadow-md border border-rose-600 border-4">
          Send
        </button>
      </form>
    </main>
  );
};

export default Form;
