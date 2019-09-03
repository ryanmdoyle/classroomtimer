import React from 'react';
import PropTypes from 'prop-types';

import SettingContainerStyled from '../styledComponents/SettingContainerStyled';
import Toggle from '../styledComponents/Toggle';

const ShowClock = ({ toggleClock, isShown }) => (
  <SettingContainerStyled>
    <h3>Show Clock</h3>
    <span>
      <Toggle
        toggle={toggleClock}
        isActive={isShown}
        toggleId='clock-toggle'
      />
    </span>
  </SettingContainerStyled>
);

ShowClock.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default ShowClock;
