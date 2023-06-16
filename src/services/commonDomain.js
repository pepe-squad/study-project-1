import { createDomain } from 'effector';
import { status } from 'patronum';

const commonDomain = createDomain('commonDomain');

export const $docList = commonDomain.createStore([]);
export const getDocListEvent = commonDomain.createEvent('getDocListEvent');
export const getDocListFx = commonDomain.createEffect(async () => {
  const doctors = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then(({ users }) => {
      return users.slice(0, 10);
    });
  return doctors;
});
