import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import MainTimer from './components/MainTimer';
import SettingsButton from './components/SettingsButton';
import SettingsPanel from './components/SettingsPanel';

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

  showSettings = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const displaySettings = !this.state.settings;
    this.setState({
      settings: displaySettings,
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { settings } = this.state.settings;
    return (
      <>
        {/* ADD SPRING HERE FOR SETTINGS DISPLAY */}
        {settings && <SettingsPanel />}
        <SettingsButton showSettings={this.showSettings} />
        <MainTimerHolder>
          <MainTimer />
        </MainTimerHolder>
      </>
    );
  }
}

export default App;
