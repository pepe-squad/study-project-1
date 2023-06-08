import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '_components/layout/Layout';
import contactsArray from './consts/contactsArray';

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="m-5 h-full">
        <div className="m-5 flex flex-col">
          <div className="flex w-full h-full bg-cyan-50">
            <div className="basis-2/9 mr-40 text-cyan-600 text-2xl pl-20">CONTACT US</div>
            <div className="basis-7/9 text-4xl font-bold">Feel Free To Contact Us</div>
          </div>
          <div className="flex flex-row mt-20">
            {contactsArray.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${item.id}`}
                  className="w-1/4 pl-20 h-full flex-auto object-center bg-cyan-50 px-15 gap-4 hover:bg-orange-700"
                >
                  <div className="text-xl">{item.name}</div>
                  <div className="text-slate-400">{item.city}</div>
                  <div className="text-xl">Email Us</div>
                  <div className="text-slate-400">{item.email}</div>
                  <div className="text-xl">Call Us</div>
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
