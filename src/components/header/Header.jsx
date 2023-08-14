import React from 'react';

import Appointment from './Appointment';

import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50  shadow-md mb-10">
      <div className="font-semibold text-slate-200 bg-white flex flex-wrap justify-between  p-4">
        <div className="flex justify-start" />
        <div className="flex justify-end">
          <NavBar />
          <Appointment />
        </div>
      </div>
    </header>
  );
};

export default Header;
