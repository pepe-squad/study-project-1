import { sample } from 'effector';

import { specList } from '_consts/specList';

import { docListStore, getDocListFx, getDocListEvent } from './commonDomain';

sample({
  clock: getDocListEvent,
  target: getDocListFx
});

sample({
  clock: getDocListFx.doneData,
  fn: (docList) => {
    return docList.map((doc) => {
      if (doc?.spec) {
        return doc;
      }

      const specIndex = Math.trunc(Math.random() * (specList.length - 0) + 0);

      return { ...doc, spec: specList[specIndex] };
    });
  },
  target: docListStore
});
