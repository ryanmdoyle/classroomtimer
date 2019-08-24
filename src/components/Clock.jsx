import React, { useState } from 'react';
import styled from 'styled-components';

const Clock = () => {
  const [hours, setHour] = useState(0);
  const [mins, setMin] = useState(0);

  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    setHour(hour);
    setMin(minute);
  }, 1000);

  return (
    <ClockStyled>
      {`${hours}:${mins}`}
    </ClockStyled>
  );
};

const ClockStyled = styled.div`
  position: fixed;
  top: 2rem;
  right: 3rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export default Clock;
