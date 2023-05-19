import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyleClass =
    'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto">
            <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/" className={linkStyleClass}>
                Home
              </Link>
              <Link to="/about" className={linkStyleClass}>
                About us
              </Link>
              <Link to="/contact" className={linkStyleClass}>
                Contact
              </Link>
              <Link to="/staff" className={linkStyleClass}>
                Staff
              </Link>
              <Link to="/service" className={linkStyleClass}>
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
