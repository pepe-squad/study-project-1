import React from 'react';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import { docListStore, statusGetDocList } from '_services/commonDomain';

const Service = () => {
  const docList = useStore(docListStore);
  const isPending = useStore(statusGetDocList);

  return (
    <Layout title="Service">
      <h1 className="text-2xl">Service</h1>
      <div>Hello! This is Service page!</div>
      <div>Have a nice day! :</div>
      {isPending === 'pending' ? (
        <h1 className="text-2xl">SOME LOADING TEXT</h1>
      ) : (
        <div>
          {docList.map((doc) => {
            return <div key={doc.id}>{`${doc.lastName} ${doc.firstName}`}</div>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default Service;
