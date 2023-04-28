import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '_pages/main/Main';
import About from '_pages/about/About';

import Startup from './Startup';

const Root = () => {
  return (
    <Startup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Startup>
  );
};

export default Root;
