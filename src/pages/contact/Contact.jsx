import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '_components/layout/Layout';

const Contact = () => {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    setBranches([
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
      }
    ]);
  }, []);
  const mainOffice = branches.filter((item) => {
    return item.city === 'Washington';
  });
  const eastOffice = branches.filter((item) => {
    return item.city === 'New-York';
  });
  const westOffice = branches.filter((item) => {
    return item.city === 'Seatle';
  });
  return (
    <Layout title="Contact">
      <div className="flex flex-row grid grid-cols-3 gap-20 items-stretch pl-20 py-5">
        {mainOffice.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div>{item.city}</div>
            </Link>
          );
        })}
        {eastOffice.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div>{item.city}</div>
            </Link>
          );
        })}
        {westOffice.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div>{item.city}</div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Contact;
