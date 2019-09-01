import React from 'react';
import styled from 'styled-components';

import formatMinutes from '../utils/formatMinutes';

const Display = styled.div`
  color: white;
  text-align: center;
  h1 {
    font-size: 12rem;
    margin: 2rem;
  }
`;

const TimerDisplay = ({ secondsLeft }) => (
  <Display>
    <h1>{formatMinutes(secondsLeft)}</h1>
  </Display>
);

export default TimerDisplay;
