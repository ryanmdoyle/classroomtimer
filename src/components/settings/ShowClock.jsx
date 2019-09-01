import React from 'react';
import PropTypes from 'prop-types';

import SettingContainerStyled from '../styledComponents/SettingContainerStyled';
import Toggle from '../styledComponents/Toggle';

const ShowClock = ({ toggleClock }) => (
  <SettingContainerStyled>
    <h3>Show Clock</h3>
    <span>
      <Toggle
        toggle={toggleClock}
      />
    </span>
  </SettingContainerStyled>
);

ShowClock.propTypes = {
  toggleClock: PropTypes.func.isRequired,
};

export default ShowClock;
