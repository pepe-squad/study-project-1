import React, { useEffect, useState } from 'react';

import Layout from '_components/layout/Layout';

const Contact = () => {
  const [branch, setBranch] = useState([]);

  useEffect(() => {
    setBranch([
      {
        id: 0,
        name: 'Main Office',
        email: 'info@example.com',
        phone: '+012 345 6789'
      },
      {
        id: 1,
        name: 'East Office',
        email: 'east@example.com',
        phone: '+012 345 6790'
      },
      {
        id: 2,
        name: 'West Office',
        email: 'west@example.com',
        phone: '+012 345 6791'
      }
    ]);
  }, []);
  return (
    <Layout title="Contact">
      {branch.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </Layout>
  );
};

export default Contact;
