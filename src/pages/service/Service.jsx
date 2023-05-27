import React from 'react';

import Layout from '_components/layout/Layout';

import StatePreview from './components/StatePreview';
import EffectPreview from './components/EffectPreview';
import CallbackPreview from './components/CallbackPreview';

const Service = () => {
  return (
    <Layout title="Service">
      <h1 className="text-2xl">Service</h1>
      <StatePreview />
      <EffectPreview />
      <CallbackPreview />
    </Layout>
  );
};

export default Service;
