import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '_components/layout/Layout';
import Spinner from '_components/spinner/Spinner';

const Profile = () => {
  const { id } = useParams();
  const [docProfile, setDocProfile] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((profile) => {
        setDocProfile(profile);
      });
  }, [id]);

  return <Layout title="Profile">{!docProfile ? <Spinner /> : JSON.stringify(docProfile, 2, 2)}</Layout>;
};

export default Profile;
