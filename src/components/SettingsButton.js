import React from 'react';
import styled from 'styled-components';

const SettingsCog = styled.button`
  background: none;
  width: 3rem;
  height: 3rem;
`;

const SettingsButton = ({showSettings}) => {
    return (
        <SettingsCog onClick={() => {showSettings()}}>
          *
        </SettingsCog>
    );
};

export default SettingsButton;