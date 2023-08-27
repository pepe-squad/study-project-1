import React, { useCallback } from 'react';

import StyledAppointmentButton from './styled-appointment';

const Appointment = () => {
  const ololo = useCallback(() => {
    console.log('Filling is 300 bucks'); // ToDO добавить логику (напр. всплывающее окно)
  }, []);
  return <StyledAppointmentButton onClick={ololo}>Appointment</StyledAppointmentButton>;
};

export default Appointment;
