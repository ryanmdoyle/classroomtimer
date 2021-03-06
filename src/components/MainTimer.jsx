import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import TimerDisplay from './TimerDisplay';
import ButtonsContianer from './ButtonsContainer';
import endGong from '../midGong.m4a';
import midGong from '../endGong.m4a';

class MainTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 0,
      running: false,
      halfway: 0,
    };
  }

  adjustTimer = (seconds) => {
    const { running } = this.state;
    if (!running) {
      this.setState({
        secondsLeft: seconds,
        halfway: seconds / 2,
      });
    }
  }

  addMinute = () => {
    const { running, secondsLeft } = this.state;
    const secLeft = secondsLeft;
    if (!running) {
      if (secLeft % 60 !== 0) {
        this.setState({
          secondsLeft: Math.ceil(secLeft / 60) * 60,
          halfway: (Math.ceil(secLeft / 60) * 60) / 2,
        });
      } else {
        this.setState({
          secondsLeft: secLeft + 60,
          halfway: (secLeft / 2) + 30,
        });
      }
    }
  }

  subMinute = () => {
    const { running, secondsLeft } = this.state;
    const secLeft = secondsLeft;
    if (!running && secondsLeft > 60) {
      if (secLeft % 60 !== 0) {
        this.setState({
          secondsLeft: Math.floor(secLeft / 60) * 60,
          halfway: (Math.floor(secLeft / 60) * 60) / 2,
        });
      } else {
        this.setState({
          secondsLeft: secLeft - 60,
          halfway: (secLeft / 2) - 30,
        });
      }
    }
  }

  runTimer = () => {
    const { running, secondsLeft, halfway } = this.state;
    if (running === true && secondsLeft > 0) {
      if (secondsLeft === halfway + 1) {
        const halfwaySound = new Audio(midGong);
        if (this.props.isSoundOn) halfwaySound.play();
      }
      this.setState((prevState) => ({ secondsLeft: prevState.secondsLeft - 1 }));
    }
    if (secondsLeft === 1 && running === true) {
      const endSound = new Audio(endGong);
      if (this.props.isSoundOn) endSound.play();
    }
    if (secondsLeft === 0 && running === true) {
      this.setState({
        running: false,
      });
      clearInterval(this.interval);
    }
  }

  startStop = () => {
    const { running, secondsLeft } = this.state;
    if (running) {
      this.setState({
        running: false,
      });
      clearInterval(this.interval);
    }

    if (!running && secondsLeft !== 0) {
      this.setState((prevState) => (
        {
          running: true,
          halfway: prevState.secondsLeft / 2,
        }));
      this.interval = setInterval(this.runTimer, 1000);
    }
  }

  render() {
    const { running, secondsLeft } = this.state;
    return (
      <MainTimerContainer>
        <TimerDisplay secondsLeft={secondsLeft} />
        <ButtonsContianer
          running={running}
          startStop={this.startStop}
          adjustTimer={this.adjustTimer}
          addMinute={this.addMinute}
          subMinute={this.subMinute}
        />
      </MainTimerContainer>
    );
  }
}

const TimerKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MainTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  position: relative;

  animation-name: ${TimerKeyframes};
  animation-duration: 1.5s;
  animation-fill-mode: backwards;
  animation-delay: 0.3s;
  animation-timing-function: ease-out;
`;

MainTimer.propTypes = {
  isSoundOn: PropTypes.bool.isRequired,
};

export default MainTimer;
