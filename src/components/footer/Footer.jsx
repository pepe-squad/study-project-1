import React from 'react';
import inputNameId from '_consts/formIds';
import NameInput from '_components/name-input/NameInput';

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 bg-slate-800">
      <div className="flex justify-around font-semibold text-slate-200">
        <div>
          <ul>
            <li>Главная</li>
            <li>О нас </li>
            <li>Контакты</li>
          </ul>
        </div>
        <div>© Pepe squad project 2023</div>
        <div>
          <form>
            <label htmlFor={inputNameId} className="pr-2">
              Your email:
            </label>
            <NameInput />
            <button
              className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
