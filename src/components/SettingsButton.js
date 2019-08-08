import React from 'react';
import styled from 'styled-components';

const SettingsCog = styled.button`
  position: fixed;
  margin: 1rem;
  background: none;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 3rem;
  i {
    font-size: 2rem;
    color: rgb(0, 0, 0, 0.5);
  }
`;

const SettingsButton = ({showSettings}) => {
    return (
        <SettingsCog onClick={() => {showSettings()}}>
          <i class="fa fa-cog"></i>
        </SettingsCog>
    );
};

export default SettingsButton;