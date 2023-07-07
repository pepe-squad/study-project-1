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
          className="rounded-md shadow-md border text-black"
          onChange={onChangeHandler}
          value={name}
        />
        <button className="subscribeButton" type="button">
          Подписаться
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
