import React, { useEffect, useState } from 'react';

import Layout from '_components/layout/Layout';
import { Link } from 'react-router-dom';

const Pages = () => {
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then(({ users }) => {
        setDocList(users);
      });
  }, []);

  return (
    <Layout title="Pages">
      {docList.map((doc) => {
        const fullName = `${doc.firstName} ${doc.lastName}`;
        return (
          <Link key={doc.id} to={`${doc.id}`}>
            <div>
              <div>{fullName}</div>
              <img src={doc.image} alt={fullName} />
            </div>
          </Link>
        );
      })}
    </Layout>
  );
};

export default Pages;
