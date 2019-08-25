import React, { useState } from 'react';
import styled from 'styled-components';

const Clock = () => {
  const [hours, setHour] = useState(12);
  const [mins, setMin] = useState(0);
  const [hasTime, setHasTime] = useState(false);

  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    setHour(hour);
    setMin(minute);
    setHasTime(true);
  }, 1000);

  if (hasTime) {
    return (
      <ClockStyled>
        {`
        ${hours < 13 ? hours : hours - 12}:${mins > 9 ? mins : `0${mins}`} 
        ${(hours < 13 ? 'am' : 'pm')}
        `}
      </ClockStyled>
    );
  }
  return (
    <ClockStyled />
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
