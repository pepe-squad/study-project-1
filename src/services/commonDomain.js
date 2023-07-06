import { createDomain } from 'effector';
import { pending } from 'patronum';

const commonDomain = createDomain('commonDomain');

export const docListStore = commonDomain.createStore([]);
export const specListStore = commonDomain.createStore([
  'Dentist-therapist',
  'Orthodontist',
  'Orthopedist',
  'Periodontist',
  'Surgeon',
  "Children's dentist",
  'Hygienist',
  'Dentist',
  'Technician',
  'Dental assistant'
]);

export const getDocListEvent = commonDomain.createEvent('getDocListEvent');

export const getDocListFx = commonDomain.createEffect(async () => {
  const doctors = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then(({ users }) => {
      return users.slice(0, 10);
    });
  return doctors;
});

export const getDocListStatusStore = pending({ effects: [getDocListFx] });

docListStore.on(getDocListFx.doneData, (state, payload) => payload);
