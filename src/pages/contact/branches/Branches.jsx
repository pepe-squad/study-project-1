import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';

import Layout from '_components/layout/Layout';
import $branches from '_services/branch-domain/branchDomain';
import Branch from './components/branch/Branch';

const Branches = () => {
  const params = useParams();
  const branchesId = params.id;
  const branchInfo = useStore($branches)

  return (
    <Layout title="Branches">
      <Branch item={branchInfo[branchesId]} />
    </Layout>
  );
};

export default Branches;
