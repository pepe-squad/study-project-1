import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '_components/layout/Layout';

import branches from '_pages/contact/consts/branches';

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="m-5 h-full">
        <div className="m-5">
          <div className="text-3xl font-bold text-cyan-600 text-center">Choose Your Office</div>
          <div className="flex flex-row flex-wrap mt-20 gap-2 space-x-20 justify-center">
            {Object.values(branches).map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${item.id}`}
                  className="flex flex-col w-64 h-40 py-2 bg-cyan-50 gap-4 rounded hover:bg-cyan-200 border place-items-center"
                >
                  <div className="font-medium text-cyan-600">{item.name}</div>
                  <div className="text-slate-400">{item.city}</div>
                  <div className="text-slate-400">{item.email}</div>
                  <div className="text-slate-400">{item.phone}</div>
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
