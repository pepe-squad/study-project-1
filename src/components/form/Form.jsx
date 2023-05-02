import React from 'react';

import NameInput from '_components/form/components/name-input/NameInput';
import LastNameInput from '_components/form/components/last-name-input/LastNameInput';
import MiddleNameInput from '_components/form/components/middle-name-input/MiddleNameInput';
import InputDate from '_components/form/components/input-date/InputDate';
import inputNameId from '_components/form/consts/formIds';
import inputlastNameId from '_components/form/consts/lastNameId';
import inputMiddleNameId from '_components/form/consts/middleNameId';
import inputDateId from '_components/form/consts/inputDateId';

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
        <label htmlFor={inputMiddleNameId} className="pr-2">
          Middlename:
        </label>
        <MiddleNameInput />
      </form>
      <form>
        <label htmlFor={inputDateId} className="pr-2">
          Birth Date:
        </label>
        <InputDate />
      </form>
      <form>
        <button type="button" className="pr-2 rounded-md shadow-md border border-rose-600 border-4">
          Send
        </button>
      </form>
    </main>
  );
};

export default Form;
