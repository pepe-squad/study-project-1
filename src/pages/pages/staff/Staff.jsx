import React, { useEffect, useState } from 'react';

import Layout from '_components/layout/Layout';

const Staff = () => {
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then(({ users }) => setDocList(users));
  }, []);
  return (
    <Layout title="Staff">
      {docList.map((doc) => {
        const fullName = `${doc.firstName} ${doc.lastName}`;
        return (
          <div key={doc.id}>
            <div>{fullName}</div>
            <img src={doc.image} alt={fullName} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Staff;
