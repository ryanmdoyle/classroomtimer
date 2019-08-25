import React from 'react';

import SettingContainerStyled from '../styledComponents/SettingContainerStyled';
import Toggle from '../styledComponents/Toggle';

const ShowClock = () => (
  <SettingContainerStyled>
    <h3>Show Clock</h3>
    <span>

      <Toggle />
    </span>
  </SettingContainerStyled>
);

export default ShowClock;
