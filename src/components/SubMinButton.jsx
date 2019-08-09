import React from 'react';
import PropTypes from 'prop-types';

import TimerButtonStyled from './styledComponents/TimerButtonStyled';

const SubMinButton = ({ subMinute, running }) => (
  <>
    {running
      ? <TimerButtonStyled red onClick={() => { subMinute(); }}>-</TimerButtonStyled>
      : <TimerButtonStyled onClick={() => { subMinute(); }}>-</TimerButtonStyled>
    }
  </>
);

SubMinButton.propTypes = {
  subMinute: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
};

export default SubMinButton;
