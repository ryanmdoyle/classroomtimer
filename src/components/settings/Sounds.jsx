import React from 'react';
import PropTypes from 'prop-types';

import SettingContainerStyled from '../styledComponents/SettingContainerStyled';
import Toggle from '../styledComponents/Toggle';

const Sounds = ({ toggleSound, isSoundOn }) => (
  <SettingContainerStyled>
    <h3>Sounds</h3>
    <span>
      <Toggle
        toggle={toggleSound}
        isActive={isSoundOn}
        toggleId='sounds-toggle'
      />
    </span>
  </SettingContainerStyled>
);

Sounds.propTypes = {
  toggleSound: PropTypes.func.isRequired,
  isSoundOn: PropTypes.bool.isRequired,
};

export default Sounds;
