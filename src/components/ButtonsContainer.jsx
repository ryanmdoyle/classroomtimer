import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TimingButton from './TimingButton';
import SubMinButton from './SubMinButton';
import AddMinButton from './AddMinButton';
import StartStopButton from './StartStopButton';

const ButtonsRowStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  opacity: 0.1;
  transition: opacity 0.5s;
  :hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
`;

const ButtonsContainer = (props) => {
  const {
    adjustTimer, subMinute, addMinute, startStop, running,
  } = props;
  return (
    <ButtonsRowStyled>
      <StartStopButton startStop={startStop} running={running} />
      <TimingButton min={3} adjustTimer={adjustTimer} running={running} />
      <TimingButton min={5} adjustTimer={adjustTimer} running={running} />
      <TimingButton min={10} adjustTimer={adjustTimer} running={running} />
      <TimingButton min={15} adjustTimer={adjustTimer} running={running} />
      <TimingButton min={20} adjustTimer={adjustTimer} running={running} />
      <SubMinButton subMinute={subMinute} running={running} />
      <AddMinButton addMinute={addMinute} running={running} />
    </ButtonsRowStyled>
  );
};

ButtonsContainer.propTypes = {
  adjustTimer: PropTypes.func.isRequired,
  subMinute: PropTypes.func.isRequired,
  addMinute: PropTypes.func.isRequired,
  startStop: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
};

export default ButtonsContainer;
