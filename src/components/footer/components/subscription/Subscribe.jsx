import React, { useState } from 'react';

const Subscribe = () => {
  const [name, setName] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    const cutValue = value.slice(0, 25);
    setName(cutValue);
  };
  return (
    <div>
      <form>
        <label htmlFor="usermail-sub" className="pr-2">
          Your email:
        </label>
        <input
          id="usermail-sub"
          placeholder="usermail@domain.com"
          className="rounded-md shadow-md border"
          onChange={onChangeHandler}
          value={name}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
          type="button"
        >
          Подписаться
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
