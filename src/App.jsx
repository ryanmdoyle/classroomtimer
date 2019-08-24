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
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false,
    };
  }

  toggleSettings = () => {
    this.setState((prevState) => ({ settings: !prevState.settings }));
  }

  render() {
    const { settings } = this.state;

    return (
      <>
        {/* ADD SPRING HERE FOR SETTINGS DISPLAY */}
        {settings
          && (
          <SettingsPanel />
          )}
        <SettingsButton toggleSettings={this.toggleSettings} />
        <Clock />
        <MainTimerHolder>
          <MainTimer />
        </MainTimerHolder>
      </>
    );
  }
}

export default App;
