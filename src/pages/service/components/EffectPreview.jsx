import React, { useEffect, useState } from 'react';

const EffectPreview = () => {
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([]);

  const clickHandler = (n) => {
    setValue((prevValue) => prevValue + n);
  };

  useEffect(() => {
    sessionStorage.setItem('effectValue', value);
    setUserId(value);
  }, [value]);

  useEffect(() => {
    const foundUser = userList.find(({ id }) => id === userId);
    setUser(foundUser);
  }, [userId, userList]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then(setUserList);
  }, []);

  return (
    <div className="bg-red-200">
      <div>Count: {value}</div>
      <button type="button" onClick={() => clickHandler(1)} className="border-2 p-4">
        Inc
      </button>
      <button type="button" onClick={() => clickHandler(-1)} className="border-2 p-4">
        Dec
      </button>
      <div>User: {userId}</div>
      <div>{user && user.name}</div>
    </div>
  );
};

export default EffectPreview;
