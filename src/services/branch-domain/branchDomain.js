import { createDomain } from 'effector';

const branchDomain = createDomain('branchDomain')
const $branches = branchDomain.createStore({
  washingtonOffice: {
    id: 'washingtonOffice',
    image: 'assets/images/washington.png',
    name: 'Main',
    city: 'Washington',
    email: 'info@example.com',
    phone: '+1 202-873-2600',
    services: 'Cosmetic Dentistry, Dental Implants, Dental Bridges, Teeth Whitening',
    chiefPhysician: 'John Smith',
    area: 'Downtown',
    adress: '1430 K St NW #800',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.892957330591!2d-77.0372300355183!3d38.902118532018584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7958b0c7feb%3A0x462e580ea9466de5!2zMTQzMCBLIFN0IE5XICM4MDAsIFdhc2hpbmd0b24sIERDIDIwMDA1LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1689157390808!5m2!1sru!2sru',
    schedule: {
      Sunday: '9am-6pm',
      Monday: '9am-6pm',
      Tuesday: '9am-6pm',
      Wednesday: '9am-6pm',
      Thursday: '9am-6pm',
      Friday: '9am-3pm',
      Saturday: '9am-3pm'
    }
  },
  nyOffice: {
    id: 'nyOffice',
    image: 'assets/images/ny.png',
    name: 'East Office',
    city: 'New-York',
    email: 'east@example.com',
    phone: '212.838.0842',
    services: 'Cosmetic Dentistry, Teeth Whitening',
    chiefPhysician: 'Barbara Brown',
    area: 'Midtown East Manhattan',
    adress: '133 East 58th St., ste 409',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0031007126713!2d-73.97150752341143!3d40.76195653455492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e5a66f638f%3A0x4f9c91e71b92d9f9!2sNew%20York%20General%20Dentistry!5e0!3m2!1sru!2sru!4v1689158582660!5m2!1sru!2sru',
    schedule: {
      Sunday: '9am-6pm',
      Monday: '9am-6pm',
      Tuesday: '9am-6pm',
      Wednesday: '9am-6pm',
      Thursday: '9am-6pm',
      Friday: '9am-3pm',
      Saturday: '9am-3pm'
    }
  },
  seattleOffice: {
    id: 'seattleOffice',
    image: 'assets/images/seattle.png',
    name: 'West Office',
    city: 'Seattle',
    email: 'west@example.com',
    phone: '+1 206-962-2835',
    services: 'Cosmetic Dentistry, Dental Bridges, Teeth Whitening',
    chiefPhysician: 'Michel Greenwood',
    area: 'Qeen Ann Hill',
    adress: '620 1st Ave N',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.796941734997!2d-73.97507572341196!3d40.744493435624776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25905430706e3%3A0xc10b77a68f69f286!2zNjIwIDFzdCBBdmUuLCBOZXcgWW9yaywgTlkgMTAwMTYsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1689158733562!5m2!1sru!2sru',
    schedule: {
      Sunday: '9am-6pm',
      Monday: '9am-6pm',
      Tuesday: '9am-6pm',
      Wednesday: '9am-6pm',
      Thursday: '9am-6pm',
      Friday: '9am-3pm',
      Saturday: '9am-3pm'
    }
  }
})
// const getDirectionEvent = branchDomain.createEvent('getDirectionEvent')

export default $branches
