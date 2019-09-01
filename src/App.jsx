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
  background: linear-gradient(${(props) => props.backgroundColors});
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

  componentDidMount() {
    let primaryInitial = localStorage.getItem('primaryColor');
    let secondaryInitial = localStorage.getItem('secondaryColor');
    if (!primaryInitial) {
      localStorage.setItem('primaryColor', '#23ce7f');
      primaryInitial = localStorage.getItem('primaryColor');
    }
    if (!secondaryInitial) {
      localStorage.setItem('secondaryColor', '#a451c8');
      secondaryInitial = localStorage.getItem('secondaryColor');
    }
    this.setState({
      primaryColor: primaryInitial,
      secondaryColor: secondaryInitial,
    });
  }

  toggleSettings = () => {
    this.setState((prevState) => ({ showSettings: !prevState.showSettings }));
  }

  toggleClock = () => {
    this.setState(((prevState) => ({ showClock: !prevState.showClock })));
  }

  modifyBackground = (e) => {
    const { id, value } = e;
    const key = `${id}Color`;
    this.setState({ [key]: `${value}` });
    localStorage.setItem(key, value);
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
            showClock={showClock}
            modifyBackground={this.modifyBackground}
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
