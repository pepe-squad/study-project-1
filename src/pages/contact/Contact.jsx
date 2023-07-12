import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';

import $branches from '_services/branch-domain/branchDomain';

const Contact = () => {
  const branchMain = useStore($branches);
  return (
    <Layout title="Contact">
      <div className="mx-5 mt-5 mb-20 h-full">
        <div className="m-5">
          <div className="text-3xl font-bold text-cyan-600 text-center">Choose Your Office</div>
          <div className="flex flex-row flex-wrap mt-20 gap-2 space-x-20 justify-center">
            {Object.values(branchMain).map((item) => {
              const container = {
                background: `url(${item.image})`,
                backgroundColor: 'rgba(218, 240, 245, alpha)'
              };
              return (
                <Link key={item.id} to={`${item.id}`}>
                  <div
                    style={container}
                    className="flex flex-col w-64 h-40 py-2 gap-4 rounded hover:bg-cyan-100 border place-items-center"
                  >
                    <div className="font-medium text-cyan-600">{item.name}</div>
                    <div className="text-gray-500">{item.city}</div>
                    <div className="text-gray-500">{item.email}</div>
                    <div className="text-gray-500">{item.phone}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
