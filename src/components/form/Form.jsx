import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import NameInput from '_components/form/components/name-input/NameInput';
import LastNameInput from '_components/form/components/last-name-input/LastNameInput';
import MiddleNameInput from '_components/form/components/middle-name-input/MiddleNameInput';
import InputDate from '_components/form/components/input-date/InputDate';
import inputNameId from '_components/form/consts/formIds';
import inputlastNameId from '_components/form/consts/lastNameId';
import inputMiddleNameId from '_components/form/consts/middleNameId';
import inputDateId from '_components/form/consts/inputDateId';

import SendButton from './components/send-btn/SendButton';

const Form = () => {
  const [checked, setChecked] = useState(false);

  const onChangeHandler = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return (
    <main className="p-2">
      <form>
        <label htmlFor={inputNameId} className="pr-6">
          Firstname:
        </label>
        <NameInput />
      </form>
      <form>
        <label htmlFor={inputlastNameId} className="pr-7">
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
        <label htmlFor={inputDateId} className="pr-6">
          Birth Date:
        </label>
        <InputDate />
      </form>
      <form>
        <div className="flex flex-col w-64">
          <button
            type="button"
            className={cn({
              'text-white px-7 py-4 m-4 bg-slate-800 hover:bg-slate-500 rounded-md': checked,
              'text-white px-7 py-4 m-4 bg-red-800 hover:bg-red-500 rounded-md': !checked
            })}
          >
            Send
          </button>
          <input type="checkbox" onChange={onChangeHandler} checked={checked} />I am hungry
          <SendButton appearance="outline" disabled={!checked}>
            Send form
          </SendButton>
        </div>
      </form>
    </main>
  );
};

export default Form;
