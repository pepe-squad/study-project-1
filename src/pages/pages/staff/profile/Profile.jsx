import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import { docListStore, getDocListEvent, getDocListStatusStore } from '_services/commonDomain';
import Spinner from '_components/spinner/Spinner';

const Profile = () => {
  const { id } = useParams();
  const docList = useStore(docListStore);
  const docProfile = useMemo(() => {
    return docList.find(({ id: userId }) => String(userId) === id);
  }, [id, docList]);
  const isPending = useStore(getDocListStatusStore);

  const fName = docProfile?.firstName?.replace(/"/g, '');
  const lName = docProfile?.lastName?.replace(/"/g, '');
  const fullName = `${fName} ${lName}`;

  useEffect(() => {
    getDocListEvent();
  }, []);

  return (
    <Layout title="Profile">
      {isPending ? (
        <Spinner />
      ) : (
        <div className="profileCard">
          <img className="w-full" src={docProfile?.image} alt="assets/images/doc-male.png" />
          <div className="bg-cyan-50 text-center">
            <h5 className="my-2  text-xl font-medium text-slate-950">{fullName}</h5>
            <h5 className="my-2 text-sm text-blue-500">{`Specialization: ${docProfile?.spec}`}</h5>
            <h5 className="my-2 text-sm text-blue-500">{`Phone number: ${docProfile?.phone}`}</h5>
            <h5 className="my-2 text-sm text-blue-500">{`E-MAIL: ${docProfile?.email}`}</h5>
            <span>Some info about doc</span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
