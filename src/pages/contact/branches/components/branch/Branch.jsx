import React from 'react';

const Branch = ({ item }) => {
  if (typeof item === 'undefined') {
    return <div>404 | Not found</div>;
  }

  return (
    <div>
      <div className="text-3xl font-bold text-cyan-600 text-center ">Our {item.city} City Office</div>
      <div className="flex flex-row flex-wrap h-full my-20 justify-center items-center">
        <div>
          <iframe
            className="border-4 border-gray-200 rounded-lg"
            title="map"
            src={item.maps}
            width="500"
            height="352"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            null
          </iframe>
        </div>
        <div className="flex flex-col basis-1/3 place-items-center">
          <div className="font-medium text-cyan-600">{item.area}</div>
          <div>Dr. {item.chiefPhysician}</div>
          <button type="button">
            <div className="underline hover:no-underline">{item.phone}</div>
          </button>
          <div>{item.adress}</div>
          <div className="text-center">{item.services}</div>
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
};

export default Branch;
