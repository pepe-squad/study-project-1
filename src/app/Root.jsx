import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '_components/main/Main';

import Startup from './Startup';

const Root = () => {
  return (
    <Startup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Startup>
  );
};

export default Root;
