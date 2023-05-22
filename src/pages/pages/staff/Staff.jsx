import React, { useEffect, useState } from 'react';

import Layout from '_components/layout/Layout';
import { Link } from 'react-router-dom';

const Staff = () => {
  const [docList, setDocList] = useState([]);
  const specs = [
    'Dentist-therapist',
    'Orthodontist',
    'Orthopedist',
    'Periodontist',
    'Surgeon',
    "Children's dentist",
    'Hygienist',
    'Dentist',
    'Technician',
    'Dental assistant'
  ];

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then(({ users }) => {
        users.splice(20, 10);
        setDocList(users);
      });
  }, []);

  return (
    <Layout title="Staff">
      <div className="flex flex-wrap items-center  justify-around mx-10">
        {docList.map((doc) => {
          const fullName = `${doc.firstName} ${doc.lastName}`;
          return (
            <Link key={doc.id} to={`${doc.id}`} className="flex flex-col basis-1/12 m-4">
              <div>
                <div className="font-serif text-xl font-bold text-center">{fullName}</div>
                <img src={doc.image} alt={fullName} />
                <div className="font-serif text-center">
                  {`Specialization: ${specs[Math.floor(Math.random() * 10)]}`}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Staff;
