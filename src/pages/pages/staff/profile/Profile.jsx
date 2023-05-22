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
    <Layout title="Profile" className="content-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img src={docProfile.image} alt="No pics" />
        </div>
        <div>{fullName}</div>
      </div>
    </Layout>
  );
};

export default Profile;
