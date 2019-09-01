import React from 'react';
import PropTypes from 'prop-types';

import TimerButtonStyled from './styledComponents/TimerButtonStyled';

const StartStopButton = ({ startStop, running }) => (
  <TimerButtonStyled onClick={() => { startStop(); }}>
    {running ? 'Stop' : 'Start'}
  </TimerButtonStyled>
);

StartStopButton.propTypes = {
  startStop: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
};

export default StartStopButton;
