import React from 'react';

import CopyRight from './components/CopyRight';
import Pages from './components/NavBar';
import Subscribe from './components/subscription/Subscribe';

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 bg-slate-800">
      <div className="flex justify-around font-semibold text-slate-200">
        <CopyRight />
        <Pages />
        <Subscribe />
      </div>
    </footer>
  );
};

export default Footer;
