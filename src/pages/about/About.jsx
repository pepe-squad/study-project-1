import React from 'react';

import Layout from '_components/layout/Layout';

import Appointment from './components/Appontment';

const About = () => {
  return (
    <Layout title="About Us">
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-1 w-3/5">
          <div className="grid grid-cols-3">
            <div className="font-serif col-span-2">
              <h5>About Us</h5>
              <h1 className="inline-block text-6xl my-3  font-bold">
                The World&apos;s Best Dental Clinic That You Can Trust
              </h1>
              <h4 className="inline-block text-2xl italic font-bold text-gray-500 my-3">
                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
              </h4>
              <p className="inline-block text-xl text-gray-500 my-3">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor eirmod magna dolore erat amet
              </p>
              <div className="grid grid-rows-1 text-2xl my-3">
                <div className="grid grid-cols-2">
                  <div>
                    <h5>Award winning</h5>
                    <h5>Professional staff</h5>
                  </div>
                  <div>
                    <h5>24/7 Opened</h5>
                    <h5>Fair prices</h5>
                  </div>
                  <div>
                    <Appointment />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="../assets/images/about.jpg" alt="Nothing to depict" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
