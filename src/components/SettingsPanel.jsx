import React from 'react';
import styled from 'styled-components';

import ShowClock from './settings/ShowClock';
import BackgroundColor from './settings/BackgroundColor';

const SettingsPanel = () => (
  <SettingsPanelStyled>
    <ShowClock />
    <BackgroundColor />
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

export default SettingsPanel;
