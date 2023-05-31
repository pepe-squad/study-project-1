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
      <div className="profileCard">
        <img className="w-full" src={docProfile.image} alt="assets/images/doc-male.png" />
        <div className="bg-cyan-50 text-center">
          <h5 className="my-2  text-xl font-medium text-slate-950">{fullName}</h5>
          <h5 className="my-2 text-sm text-blue-500">Specialization: THIS IS DENTIST!</h5>
          <h5 className="my-2 text-sm text-blue-500">{`Phone number: ${docProfile.phone}`}</h5>
          <h5 className="my-2 text-sm text-blue-500">{`E-MAIL: ${docProfile.email}`}</h5>
          <span>Some info about doc</span>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
