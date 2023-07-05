import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '_pages/main/Main';
import About from '_pages/about/About';
import Service from '_pages/service/Service';
import Contact from '_pages/contact/Contact';
import Branches from '_pages/contact/branches/Branches';

import Startup from './Startup';

const Root = () => {
  return (
    <Startup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:id" element={<Branches />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Startup>
  );
};

export default Root;
