import React from 'react';

import TimerButtonStyled from '../components/styledComponents/TimerButtonStyled';

const AddMinButton = ({ addMinute, running }) => {
  return (
    <>
      {running ?
        <TimerButtonStyled red onClick={() => { addMinute() }}>+</TimerButtonStyled> :
        <TimerButtonStyled onClick={() => { addMinute() }}>+</TimerButtonStyled>
      }

    </>
  );
};

export default AddMinButton;