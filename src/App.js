import React, { Component } from 'react';
import beep from "./timerBeep.wav";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 600,
      running: false 
    }

    this.formatMinutes = this.formatMinutes.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
    this.startStop = this.startStop.bind(this);
    this.runTimer = this.runTimer.bind(this)
  }

  formatMinutes(time) { //time is in seconds remaining
    let seconds = time;
    const minutes = (seconds % 60 === 0 ) ? ((seconds/60) < 10 ? "0" + seconds/60 : seconds/60): (Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60));
    seconds = (seconds % 60 === 0 ) ? "00" : ((seconds % 60 < 10) ? "0"+ (seconds % 60) : seconds % 60)
    console.log(minutes + ":" + seconds);
    return minutes + ":" + seconds;
  }

  changeTimer(min) {
    this.setState({
      secondsLeft: min * 60
    })
  }

  runTimer() {
    if (this.state.running === true && this.state.secondsLeft > 0) {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      })
    }
    if (this.state.secondsLeft === 0) {
      this.setState({
        running: false
      })
      const audio = new Audio(beep);
      audio.play()
      clearInterval(this.interval);
    }
  }

  startStop() {

    if (this.state.running) {
      this.setState ({
        running: false
      })
      clearInterval(this.interval);
    } 

    if (!this.state.running) {
      this.setState ({
        running: true
      })
      this.interval = setInterval(this.runTimer, 1000)
    }
  }

  singleChange(value) {
    if (value > 0) {
      if (!this.state.running) {
        this.setState({
          secondsLeft: this.state.secondsLeft + value
        })
      }
    }
    
    if (value < 0) {
      if (!this.state.running && this.state.secondsLeft > 60) {
        this.setState({
          secondsLeft: this.state.secondsLeft + value
        })
      }
    }
  }
  
  
  render() {
    return (
      <div id="screen">
        <div id="timer">
          <div id="display" className="timer-division">{this.formatMinutes(this.state.secondsLeft)}</div>
          <div id="controls" className="timer-division">
          <button onClick={() => {this.startStop()}}><i class="material-icons">{this.state.running ? "pause" : "play_arrow"}</i></button>
          <button onClick={() => {this.singleChange(-60)}}><i class="material-icons">remove</i></button>
          <button onClick={() => {this.singleChange(60)}}><i class="material-icons">add</i></button>
          <button onClick={() => {this.changeTimer(5)}}>5</button>
          <button onClick={() => {this.changeTimer(10)}}>10</button>
          <button onClick={() => {this.changeTimer(15)}}>15</button>
          <button onClick={() => {this.changeTimer(20)}}>20</button>
          <button onClick={() => {this.changeTimer(25)}}>25</button>
          <button onClick={() => {this.changeTimer(30)}}>30</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
