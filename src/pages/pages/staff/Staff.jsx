import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import Spinner from '_components/spinner/Spinner';
import { docListStore, getDocListEvent, getDocListStatusStore } from '_services/commonDomain';

const Staff = () => {
  const docList = useStore(docListStore);
  const isPending = useStore(getDocListStatusStore);

  useEffect(() => {
    getDocListEvent();
  }, []);

  return (
    <Layout title="Staff">
      {isPending ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-4 justify-between p-12">
          {docList?.map((doc) => {
            const fullName = `${doc.firstName} ${doc.lastName}`;
            return (
              <Link key={doc.id} to={`${doc.id}`}>
                <div className="staffCards">
                  <img className="w-28 h-28 mx-auto" src={doc.image} alt="assets/images/doc-male.png" />
                  <div className="bg-cyan-50 text-center">
                    <h5 className="mt-8  text-xl font-medium text-slate-950">{fullName}</h5>
                    <span className="text-sm text-blue-500">{`Specialization: ${doc.spec}`}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default Staff;
