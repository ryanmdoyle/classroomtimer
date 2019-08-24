import React from 'react';
import styled from 'styled-components';

const SettingsPanelStyled = styled.div`
  position: fixed;
  z-index:1;
  width: 400px;
  height: 100vh;
  background-color: grey;
  color: white;
  padding-top: 4rem;
  box-shadow: 0 0 3rem 0 black;
`;

const SettingsPanel = () => (
  <SettingsPanelStyled>
    <ul>
      <li>A Setting</li>
      <li>A Setting</li>
      <li>A Setting</li>
      <li>A Setting</li>
      <li>A Setting</li>
      <li>A Setting</li>
    </ul>
  </SettingsPanelStyled>
);

export default SettingsPanel;
