import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '_components/layout/Layout';

import BranchesFn from './BranchesFn';

const Branches = () => {
  const params = useParams();
  const branchesId = params.id;
  return (
    <Layout title="Branches">
      <BranchesFn items={branchesId} />
    </Layout>
  );
};

export default Branches;
