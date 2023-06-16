import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '_pages/main/Main';
import About from '_pages/about/About';
import Service from '_pages/service/Service';
import Staff from '_pages/pages/staff/Staff';
import Profile from '_pages/pages/staff/profile/Profile';
import Contact from '_pages/contact/Contact';

import Startup from './Startup';

const Root = () => {
  return (
    <Startup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/:id" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Startup>
  );
};

export default Root;
