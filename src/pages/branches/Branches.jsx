import React from 'react';

import Layout from '_components/layout/Layout';
import { useParams } from 'react-router-dom';
import branchesArray from './consts/branchesArray';

const Branches = () => {
  const params = useParams();
  const branchesId = params.id;
  return (
    <Layout title="Branches">
      <div>
        <div>
          <div>
            {branchesArray
              .filter((filtered) => {
                return filtered.id === Number(branchesId);
              })
              .map((item) => {
                return (
                  <div key={item.id}>
                    <div className="text-3xl font-bold text-cyan-600 text-center ">Our {item.city} City Office</div>
                    <div className="flex flex-row flex-wrap mt-20 gap-2 space-x-20 justify-center">
                      <div className="basis-1/3">123</div>
                      <div className="flex flex-col basis-1/3 h-full py-5 place-items-center">
                        <div className="font-medium text-cyan-600">{item.area}</div>
                        <div>Dr. {item.chiefPhysician}</div>
                        <button type="button"><div className="underline hover:no-underline">{item.phone}</div></button>
                        <div>{item.adress}</div>
                        <button type="button"><div className="underline hover:no-underline">Get Direction</div></button>
                        <div>{item.services}</div>
                        <div className="flex flex-col place-items-center">
                          <div className="text-cyan-600">Hours</div>
                          <div className="flex flex-col place-items-center">
                            <div>Sunday {item.schedule.Sunday}</div>
                            <div>Monday {item.schedule.Monday}</div>
                            <div>Tuesday {item.schedule.Tuesday}</div>
                            <div>Wednesday {item.schedule.Wednesday}</div>
                            <div>Thursday {item.schedule.Thursday}</div>
                            <div>Friday {item.schedule.Friday}</div>
                            <div>Saturday {item.schedule.Saturday}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Branches;
