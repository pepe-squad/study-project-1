import { createDomain } from 'effector';
import { status } from 'patronum';

const commonDomain = createDomain('commonDomain');

const initialSpecList = ['dantist', 'proctolog', 'urology'];

export const docListStore = commonDomain.createStore([]);
export const specListStore = commonDomain.createStore(initialSpecList);

export const getDocListEvent = commonDomain.createEvent('getDocListEvent');
export const updateDocListEvent = commonDomain.createEvent('updateDocListEvent');

export const getDocListFx = commonDomain.createEffect(async () => {
  const doctors = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then(({ users }) => {
      return users.slice(0, 10);
    });

  return doctors;
});

export const statusGetDocList = status({ effect: getDocListFx });
