import React, { Component } from 'react';
import styled from "styled-components";

import TimerDisplay from './TimerDisplay';
import ButtonsContianer from './ButtonsContainer';
import endGong from "../midGong.m4a";
import midGong from "../endGong.m4a";

const MainTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
`;

class MainTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: 0,
      running: false,
      halfway: 0,
      halfAlert: false, //add logic in for turning halfway gong  on/off
    }
  }

  adjustTimer = (seconds) => {
    if (!this.state.running) {
      this.setState({
        secondsLeft: seconds,
        halfway: seconds / 2,
      })
    }
  }

  addMinute = () => {
    const secLeft = this.state.secondsLeft;
    if (!this.state.running) {
      if (secLeft % 60 !== 0) {
        this.setState({
          secondsLeft: Math.ceil(secLeft / 60) * 60,
          halfway: (Math.ceil(secLeft / 60) * 60) / 2,
        })
      } else {
        this.setState({
          secondsLeft: secLeft + 60,
          halfway: (secLeft / 2) + 30,
        })
      }
    }
  }

  subMinute = () => {
    const secLeft = this.state.secondsLeft;
    if (!this.state.running && this.state.secondsLeft > 60) {
      if (secLeft % 60 !== 0) {
        this.setState({
          secondsLeft: Math.floor(secLeft / 60) * 60,
          halfway: (Math.floor(secLeft / 60) * 60) / 2,
        })
      } else {
        this.setState({
          secondsLeft: secLeft - 60,
          halfway: (secLeft / 2) - 30,
        })
      }
    }
  }

  runTimer = () => {
    if (this.state.running === true && this.state.secondsLeft > 0) {
      if (this.state.secondsLeft === this.state.halfway + 1) {
        const halfwaySound = new Audio(midGong);
        halfwaySound.play()
      }
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      })
    }
    if (this.state.secondsLeft === 0 && this.state.running === true) {
      this.setState({
        running: false
      })
      const endSound = new Audio(endGong);
      endSound.play()
      clearInterval(this.interval);
    }
  }

  startStop = () => {

    if (this.state.running) {
      this.setState({
        running: false
      })
      clearInterval(this.interval);
    }

    if (!this.state.running && this.state.secondsLeft !== 0) {
      this.setState({
        running: true,
        halfway: this.state.secondsLeft / 2
      })
      this.interval = setInterval(this.runTimer, 300) //change time to 1000 after dev
    }
  }

  render() {
    return (
      <MainTimerContainer>
        <TimerDisplay secondsLeft={this.state.secondsLeft} />
        <ButtonsContianer
          running={this.state.running}
          startStop={this.startStop}
          adjustTimer={this.adjustTimer}
          addMinute={this.addMinute}
          subMinute={this.subMinute}
        />
      </MainTimerContainer>
    );
  }
}

export default MainTimer;