import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'

const SettingsPanelStyled = styled.div`
  position: fixed;
  width: 400px;
  height: 100vh;
  background-color: grey;
  color: white;
  padding-top: 4rem;
  box-shadow: 0 0 3rem 0 black;
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