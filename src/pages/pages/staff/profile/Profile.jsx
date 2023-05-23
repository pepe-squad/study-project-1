import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '_components/layout/Layout';

const Profile = () => {
  const { id } = useParams();
  const [docProfile, setDocProfile] = useState({});
  const fullName = `${docProfile.firstName} ${docProfile.lastName}`;

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((profile) => {
        setDocProfile(profile);
      });
  }, [id]);

  return (
    <Layout title="Profile">
      <div className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={docProfile.image} alt="No pics" />

        <div className="p-5 text-center bg-cyan-50">
          <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 dark:text-white">{fullName}</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">THIS IS DENTIST</p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
