import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '_pages/main/Main';
import About from '_pages/about/About';
import Service from '_pages/service/Service';
import Contact from '_pages/contact/Contact';
import Pages from '_pages/pages/Pages';
import Profile from '_pages/profile/Profile';

import Startup from './Startup';

const Root = () => {
  return (
    <Startup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="pages" element={<Pages />} />
          <Route path="pages/:id" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Startup>
  );
};

export default Root;
