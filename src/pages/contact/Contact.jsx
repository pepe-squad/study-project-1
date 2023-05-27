import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '_components/layout/Layout';

const branches = [
  {
    id: 0,
    name: 'Main Office',
    city: 'Washington',
    email: 'info@example.com',
    phone: '+012 345 6789'
  },
  {
    id: 1,
    name: 'East Office',
    city: 'New-York',
    email: 'east@example.com',
    phone: '+012 345 6790'
  },
  {
    id: 2,
    name: 'West Office',
    city: 'Seatle',
    email: 'west@example.com',
    phone: '+012 345 6791'
  },
  {
    id: 3,
    name: 'West Office',
    city: 'Washington',
    email: 'west@example.com',
    phone: '+012 345 6791'
  }
];

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="flex flex-row gap-20 items-stretch pl-20 py-5">
        {branches.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <div>
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.phone}</div>
                <div>{item.city}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Contact;
