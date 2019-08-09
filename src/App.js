import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import MainTimer from './components/MainTimer'
import SettingsButton from './components/SettingsButton';
import SettingsPanel from './components/SettingsPanel';
import { Spring } from 'react-spring/renderprops'

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
    }
  }

  showSettings = () => {
    const displaySettings = !this.state.settings;
    this.setState({
      settings: displaySettings
    })
  }

  render() {
    return (
      <>
        {/* ADD SPRING HERE FOR SETTINGS DISPLAY */}
        {this.state.settings && <SettingsPanel />}
        <SettingsButton showSettings={this.showSettings} />
        <MainTimerHolder>
          <MainTimer />
        </MainTimerHolder>
      </>
    );
  }
}

export default App;
