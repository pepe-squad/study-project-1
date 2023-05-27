import React from 'react';
import Layout from '_components/layout/Layout';
import { useParams } from 'react-router-dom';

const Branches = () => {
  const { id } = useParams;
  const mainInfo = [
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
  ];
  const branchesInfo = { id };
  return <Layout title="Branches">{JSON.stringify(mainInfo[Number(branchesInfo)], 2, 2)}</Layout>;
};

export default Branches;
