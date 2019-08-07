import React from 'react';
import styled from 'styled-components';

const SettingsPanelStyled = styled.div`
  position: absolute;
  width: 300px;
  background-color: grey;
  color: white;
`;

const SettingsPanel = () => {
  return (
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
};

export default SettingsPanel;