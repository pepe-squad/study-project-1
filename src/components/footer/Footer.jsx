import React from 'react';

import Address from './components/Address';
import NavBar from './components/NavBar';
import Subscribe from './components/subscription/Subscribe';

const Footer = () => {
  return (
    <footer className="bg-blue-900 fixed inset-x-0 bottom-0">
      <div className="font-semibold text-slate-200 flex flex-wrap justify-around  p-4 text-white ">
        <NavBar />
        <Address />
        <Subscribe />
      </div>
    </footer>
  );
};

export default Footer;
