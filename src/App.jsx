import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import MainTimer from './components/MainTimer';
import SettingsButton from './components/SettingsButton';
import SettingsPanel from './components/SettingsPanel';
import Clock from './components/Clock';

const MainTimerHolder = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${(props) => props.backgroundColors});
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
      showClock: false,
      primaryColor: '#23ce7f',
      secondaryColor: '#a451c8',
    };
  }

  toggleSettings = () => {
    this.setState((prevState) => ({ showSettings: !prevState.showSettings }));
  }

  toggleClock = () => {
    this.setState(((prevState) => ({ showClock: !prevState.showClock })));
  }

  render() {
    const {
      showSettings, showClock, primaryColor, secondaryColor,
    } = this.state;

    const backgroundColors = `112deg, ${primaryColor} 9%, ${secondaryColor} 100%`;

    return (
      <>
        {/* ADD SPRING HERE FOR SETTINGS DISPLAY */}
        {showSettings
          && (
          <SettingsPanel
            toggleClock={this.toggleClock}
          />
          )}
        <SettingsButton toggleSettings={this.toggleSettings} />
        <Clock showClock={showClock} />
        <MainTimerHolder
          backgroundColors={backgroundColors}
        >
          <MainTimer />
        </MainTimerHolder>
      </>
    );
  }
}

export default App;
