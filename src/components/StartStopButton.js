import React from 'react';

import TimerButtonStyled from '../components/styledComponents/TimerButtonStyled';

const StartStopButton = ({ startStop, running }) => {
  return (
    <TimerButtonStyled onClick={() => { startStop() }}>
      {running ? "Stop" : "Start"}
    </TimerButtonStyled>
  );
};

export default StartStopButton;