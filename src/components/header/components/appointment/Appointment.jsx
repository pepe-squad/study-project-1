import React from 'react';

import StyledAppointmentButton from './styled-appointment';

const Appointment = () => {
  const ololo = () => {
    alert('Filling is 300 bucks');
  };
  return <StyledAppointmentButton onClick={ololo}>Appointment</StyledAppointmentButton>;
};

export default Appointment;
