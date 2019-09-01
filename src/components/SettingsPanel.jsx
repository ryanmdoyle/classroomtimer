import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ShowClock from './settings/ShowClock';
import BackgroundColor from './settings/BackgroundColor';

const SettingsPanel = ({ toggleClock, modifyBackground }) => (
  <SettingsPanelStyled>
    <ShowClock toggleClock={toggleClock} />
    {/* <BackgroundColor modifyBackground={modifyBackground} /> */}
  </SettingsPanelStyled>
);

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

SettingsPanel.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  modifyBackground: PropTypes.func.isRequired,
};

export default SettingsPanel;
