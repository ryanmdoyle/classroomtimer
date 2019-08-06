import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import MainTimer from './components/MainTimer'

const MainTimerHolder = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 600,
      running: false,
      halfway: 300
    }

    // this.formatMinutes = this.formatMinutes.bind(this);
    // this.changeTimer = this.changeTimer.bind(this);
    // this.startStop = this.startStop.bind(this);
    // this.runTimer = this.runTimer.bind(this);
  }

  // changeTimer = (min) => {
  //   this.setState({
  //     secondsLeft: min * 60
  //   })
  // }

  // runTimer = () => {
  //   if (this.state.running === true && this.state.secondsLeft > 0) {
  //     if (this.state.secondsLeft === this.state.halfway + 1) {
  //       const halfwaySound = new Audio(midGong);
  //       halfwaySound.play()
  //     }
  //     this.setState({
  //       secondsLeft: this.state.secondsLeft - 1
  //     })
  //   }
  //   if (this.state.secondsLeft === 0 && this.state.running === true) {
  //     this.setState({
  //       running: false
  //     })
  //     const endSound = new Audio(endGong);
  //     endSound.play()
  //     clearInterval(this.interval);
  //   }
  // }

  // startStop = () => {

  //   if (this.state.running) {
  //     this.setState({
  //       running: false
  //     })
  //     clearInterval(this.interval);
  //   }

  //   if (!this.state.running && this.state.secondsLeft !== 0) {
  //     this.setState({
  //       running: true,
  //       halfway: this.state.secondsLeft / 2
  //     })
  //     this.interval = setInterval(this.runTimer, 1000)
  //   }
  // }

  // singleChange(value) {
  //   if (value > 0) {
  //     if (!this.state.running) {
  //       this.setState({
  //         secondsLeft: this.state.secondsLeft + value
  //       })
  //     }
  //   }

  //   if (value < 0) {
  //     if (!this.state.running && this.state.secondsLeft > 60) {
  //       this.setState({
  //         secondsLeft: this.state.secondsLeft + value
  //       })
  //     }
  //   }
  // }


  render() {
    return (
      <>
        <MainTimerHolder>

          <MainTimer />
        </MainTimerHolder>
      </>
    );
  }
}

export default App;
