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
          <div className="flex flex-row flex-wrap mt-20 gap-2 justify-center ">
            {Object.values(branchMain).map((item) => {
              return (
                <Link key={item.id} to={`${item.id}`}>
                  <div className="border-[4px] border-gray-50 p-4 rounded-lg bg-gray-50 opacity-75 shadow-inner hover:shadow-2xl active:bg-gray-100">
                    <img src={`${item.image}`} alt="city" className="object-top " />
                    <div className="flex flex-col text-center mt-2 ">
                      <div className="font-medium text-cyan-600">{item.name}</div>
                      <div className="text-gray-500">{item.city}</div>
                      <div className="text-gray-500">{item.email}</div>
                      <div className="text-gray-500">{item.phone}</div>
                    </div>
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
