import React from 'react';

import TimerButtonStyled from '../components/styledComponents/TimerButtonStyled';

const TimingButton = ({ min, adjustTimer, running }) => {
  return (
    <>
      {running ?
        <TimerButtonStyled red onClick={() => { adjustTimer(min * 60) }} >{min}</TimerButtonStyled> :
        <TimerButtonStyled onClick={() => { adjustTimer(min * 60) }} >{min}</TimerButtonStyled>
      }
    </>
  );
};

export default TimingButton;