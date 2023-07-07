import React from 'react';
import { Link } from 'react-router-dom';

const KeepYourTeeth = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
      </ul>
    </div>
  );
};

export default KeepYourTeeth;
