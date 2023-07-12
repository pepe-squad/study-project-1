import React from 'react';

import Layout from '_components/layout/Layout';

const Service = () => {
  return (
    <Layout title="Service">
      <h1 className="text-2xl">Service</h1>
      <div>Hello! This is Service page!</div>
      <div>Have a nice day! :</div>
      <div className="bg-white rounded-lg shadow-md px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Отделение №123</h2>
          <span className="bg-green-500 text-white rounded-full py-1 px-3">Открыто</span>
        </div>
        <div className="mt-4">
          <p className="text-gray-500">
            <span className="font-bold">Адрес:</span> ул. Ленина 10
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Режим работы:</span> Пн-Пт: 8:00-20:00, Сб: 9:00-18:00, Вс: выходной
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Телефон:</span> +7 (123) 456-78-90
          </p>
          <p className="text-gray-500">
            <span className="font-bold">E-mail:</span> example@example.com
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Подробнее
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
