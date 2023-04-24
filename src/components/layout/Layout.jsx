import React from 'react';

import Head from '_components/head/Head';
import Header from '_components/header/Header';
import Footer from '_components/footer/Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
