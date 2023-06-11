import { useEffect } from 'react';

import { getDocListEvent } from '_services/commonDomain';

const Startup = (props) => {
  useEffect(() => {
    getDocListEvent();
  }, []);
  return props.children;
};

export default Startup;
