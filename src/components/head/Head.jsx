import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Study Project #1 - ${title}`}</title>
    </Helmet>
  );
};

Head.defaultProps = {
  title: `${window.location.host}`,
};

export default Head;
