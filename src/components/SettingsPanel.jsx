import React from 'react';
import styled from 'styled-components';

const SettingsPanel = () => (
  <SettingsPanelStyled>
    <p>Choose background colors:</p>
    <div>
      <label htmlFor="primary">
        Primary Color
        <input type="color" id="primary" name="primary" value="#e66465" />
      </label>
    </div>
    <div>
      <label htmlFor="secondary">
        Secondary Color
        <input type="color" id="secondary" name="secondary" value="#f6b73c" />
      </label>
    </div>
  </SettingsPanelStyled>
);

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

export default SettingsPanel;
