import { createDomain } from 'effector';
import { pending } from 'patronum';

const commonDomain = createDomain('commonDomain');

export const docListStore = commonDomain.createStore(null);

export const getDocProfileEvent = commonDomain.createEvent('getDocProfileEvent');
export const getDocListEvent = commonDomain.createEvent('getDocListEvent');
export const setSpecListEvent = commonDomain.createEvent('setSpecListEvent');

export const getDocListFx = commonDomain.createEffect(async () => {
  const docList = localStorage.getItem('docList');

  if (docList && docList.length > 0) {
    return JSON.parse(docList);
  }

  const doctors = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then(({ users }) => users.slice(0, 10));

  return doctors;
});

export const setDocListFx = commonDomain.createEffect((docList) => {
  localStorage.setItem('docList', JSON.stringify(docList));
});

export const getDocListStatusStore = pending({ effects: [getDocListFx] });

docListStore.on(getDocListFx.doneData, (_, payload) => payload);
// docListStore.watch((data) => console.log('store data', data));
