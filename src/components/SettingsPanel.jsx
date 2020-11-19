import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShowClock from './settings/ShowClock';
import BackgroundColor from './settings/BackgroundColor';
import Sounds from './settings/Sounds';

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
`;

const SettingsPanel = ({
  toggleClock, modifyBackground, showClock, isSoundOn, toggleSound,
}) => (
    <SettingsPanelStyled>
      <ShowClock toggleClock={toggleClock} isShown={showClock} />
      <BackgroundColor modifyBackground={modifyBackground} />
      <Sounds toggleSound={toggleSound} isSoundOn={isSoundOn} />
    </SettingsPanelStyled>
  );


SettingsPanel.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  modifyBackground: PropTypes.func.isRequired,
  showClock: PropTypes.bool.isRequired,
  isSoundOn: PropTypes.bool.isRequired,
  toggleSound: PropTypes.func.isRequired,
};

export default SettingsPanel;
