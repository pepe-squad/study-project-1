import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import { docListStore, getDocListEvent } from '_services/commonDomain';

const Profile = () => {
  const { id } = useParams();
  const docList = useStore(docListStore);
  const docProfile = docList.find((item) => {
    console.log(item.id);
    return item.id === id;
  });
  console.log('WHHHAAAT', docProfile);

  // const fullName = `${docProfile.firstName} ${docProfile.lastName}`;

  useEffect(() => {
    getDocListEvent();
  }, []);

  return (
    <Layout title="Profile">
      <div className="profileCard">
        {/* <img className="w-full" src={docProfile.image} alt="assets/images/doc-male.png" /> */}
        <div className="bg-cyan-50 text-center">
          {/* <h5 className="my-2  text-xl font-medium text-slate-950">{fullName}</h5> */}
          <h5 className="my-2 text-sm text-blue-500">Specialization: THIS IS DENTIST!</h5>
          {/* <h5 className="my-2 text-sm text-blue-500">{`Phone number: ${docProfile.phone}`}</h5>
          <h5 className="my-2 text-sm text-blue-500">{`E-MAIL: ${docProfile.email}`}</h5>
          <span>Some info about doc</span> */}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
