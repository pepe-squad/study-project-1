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
      <div className="flex flex-wrap gap-4 justify-between p-12">
        {docList.map((doc) => {
          const fullName = `${doc.firstName} ${doc.lastName}`;
          return (
            <Link key={doc.id} to={`${doc.id}`}>
              <div className="staffCards">
                <img className="w-28 h-28 mx-auto" src={doc.image} alt="assets/images/doc-male.png" />
                <div className="bg-cyan-50 text-center">
                  <h5 className="mt-8  text-xl font-medium text-slate-950">{fullName}</h5>
                  <span className="text-sm text-blue-500">
                    {`Specialization: ${specs[Math.floor(Math.random() * 10)]}`}
                  </span>
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
