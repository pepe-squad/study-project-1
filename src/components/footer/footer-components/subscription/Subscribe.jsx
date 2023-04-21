import React from 'react';

import UserMailInput from './UserMailInput';

const Subscribe = () => {
  return (
    <div>
      <form>
        <label htmlFor="your-email" className="pr-2">
          Your email:
        </label>
        <UserMailInput />
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
