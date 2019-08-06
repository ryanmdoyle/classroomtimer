import React from 'react';

import TimerButtonStyled from '../components/styledComponents/TimerButtonStyled';

const SubMinButton = ({ subMinute, running }) => {
  return (
    <>
      {running ?
        <TimerButtonStyled red onClick={() => { subMinute() }}>-</TimerButtonStyled> :
        <TimerButtonStyled onClick={() => { subMinute() }}>-</TimerButtonStyled>
      }
    </>
  );
};

export default SubMinButton;