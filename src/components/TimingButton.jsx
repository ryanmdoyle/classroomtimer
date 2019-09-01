import React from 'react';
import PropTypes from 'prop-types';

import TimerButtonStyled from './styledComponents/TimerButtonStyled';

const TimingButton = ({ min, adjustTimer, running }) => (
  <>
    {running
      ? <TimerButtonStyled red onClick={() => { adjustTimer(min * 60); }}>{min}</TimerButtonStyled>
      : <TimerButtonStyled onClick={() => { adjustTimer(min * 60); }}>{min}</TimerButtonStyled>
    }
  </>
);

TimingButton.propTypes = {
  min: PropTypes.number.isRequired,
  adjustTimer: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
};

export default TimingButton;
