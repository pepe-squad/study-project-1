import React from 'react';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import { docListStore } from '_services/commonDomain';

const Contact = () => {
  const docList = useStore(docListStore);
  return (
    <Layout title="Contact">
      <h1 className="text-2xl">Contact</h1>
      <div>Hello! This is Contact page!</div>
      <div>Have a nice day! :</div>
      {docList.map((doc) => {
        return (
          <div key={doc.id}>
            {doc.lastName} - {doc.spec}
          </div>
        );
      })}
    </Layout>
  );
};

export default Contact;
