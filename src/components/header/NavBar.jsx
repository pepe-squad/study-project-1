import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto">
            <div className="headerLink">
              <Link to="/" className="navLink">
                Home
              </Link>
              <Link to="/about" className="navLink">
                About us
              </Link>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
              <Link to="/staff" className="navLink">
                Staff
              </Link>
              <Link to="/service" className="navLink">
                Service
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
