import React from 'react';
import PropTypes from 'prop-types';

import TimerButtonStyled from './styledComponents/TimerButtonStyled';

const AddMinButton = ({ addMinute, running }) => (
  <>
    {running
      ? <TimerButtonStyled red onClick={() => { addMinute(); }}>+</TimerButtonStyled>
      : <TimerButtonStyled onClick={() => { addMinute(); }}>+</TimerButtonStyled>
    }

  </>
);

AddMinButton.propTypes = {
  addMinute: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
};

export default AddMinButton;
