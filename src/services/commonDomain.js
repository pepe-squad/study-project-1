import { createDomain } from 'effector';

import initialSpecList from '_services/initialSpecList';
// import { status } from 'patronum';

const commonDomain = createDomain('commonDomain');

export const docListStore = commonDomain.createStore([]);
export const specListStore = commonDomain.createStore(initialSpecList);

export const getDocListEvent = commonDomain.createEvent('getDocListEvent');

export const getDocListFx = commonDomain.createEffect(async () => {
  const doctors = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then(({ users }) => {
      return users.slice(0, 10);
    });
  return doctors;
});

docListStore.on(getDocListFx.doneData, (state, payload) => payload);
// docListStore.watch((data) => console.log('store data', data));
