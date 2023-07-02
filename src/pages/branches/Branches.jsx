import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '_components/layout/Layout';

import Branch from './components/branch/Branch';
import branches from './consts/branches';

const Branches = () => {
  const params = useParams();
  const branchesId = params.id;

  return (
    <Layout title="Branches">
      <Branch item={branches[branchesId]} />
    </Layout>
  );
};

export default Branches;
