import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import ShowClock from './settings/ShowClock';
import BackgroundColor from './settings/BackgroundColor';
import Sounds from './settings/Sounds';

const SettingsPanel = ({
  toggleClock, modifyBackground, showClock, isSoundOn, toggleSound,
}) => (
  <SettingsPanelStyled>
    <SettingsFadeInContainer>
      <ShowClock toggleClock={toggleClock} isShown={showClock} />
      <BackgroundColor modifyBackground={modifyBackground} />
      <Sounds toggleSound={toggleSound} isSoundOn={isSoundOn} />
    </SettingsFadeInContainer>
  </SettingsPanelStyled>
);

const SettingsPanelKeyframes = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 400px;
  }
`;

const SettingsPanelStyled = styled.div`
  position: fixed;
  z-index:1;
  width: 400px;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  padding: 4rem 1rem 1rem 1rem;
  box-shadow: 0 0 3rem 0 black;
  font-size: 1rem;

  animation-name: ${SettingsPanelKeyframes};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
`;

const SettingsFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SettingsFadeInContainer = styled.div`
  animation-name: ${SettingsFadeIn};
  animation-fill-mode: backwards;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
`;

SettingsPanel.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  modifyBackground: PropTypes.func.isRequired,
  showClock: PropTypes.bool.isRequired,
  isSoundOn: PropTypes.bool.isRequired,
  toggleSound: PropTypes.func.isRequired,
};

export default SettingsPanel;
