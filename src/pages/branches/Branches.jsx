import React from 'react';

import Layout from '_components/layout/Layout';
import { useParams } from 'react-router-dom';
import branchesArray from './consts/branchesArray';

const Branches = () => {
  const params = useParams();
  const branchesId = params.id;
  return (
    <Layout title="Branches">
      {branchesArray
        .filter((filtered) => {
          return filtered.id === Number(branchesId);
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.city}</div>
              <div>Email Us</div>
              <div>{item.email}</div>
              <div>Call Us</div>
              <div>{item.phone}</div>
              <div>Services</div>
              <div>{item.services}</div>
              <div>{item.chiefPhysician}</div>
              <ul>
                <li>Schedule</li>
                <li>{item.schedule.Sunday}</li>
                <li>{item.schedule.Monday}</li>
                <li>{item.schedule.Tuesday}</li>
                <li>{item.schedule.Wednesday}</li>
                <li>{item.schedule.Thursday}</li>
                <li>{item.schedule.Friday}</li>
                <li>{item.schedule.Saturday}</li>
              </ul>
            </div>
          );
        })}
    </Layout>
  );
};

export default Branches;
