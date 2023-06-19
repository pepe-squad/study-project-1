import { sample } from 'effector';

import { docListStore, getDocListEvent, getDocListFx, specListStore } from './commonDomain';

sample({
  clock: getDocListEvent,
  target: getDocListFx
});

sample({
  clock: getDocListFx.doneData,
  source: specListStore,
  fn: (specList, docList) => {
    return docList.map((doc) => {
      const specIndex = Math.trunc(Math.random() * (specList.length - 0) + 0);
      // console.log('SPECS', { ...doc, spec: specList[specIndex] });
      return { ...doc, spec: specList[specIndex] };
    });
  },
  target: docListStore
});
