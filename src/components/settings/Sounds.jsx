import React from 'react';
import PropTypes from 'prop-types';

import SettingContainerStyled from '../styledComponents/SettingContainerStyled';
import Toggle from '../styledComponents/Toggle';

const Sounds = ({ toggleSounds, soundsOn }) => (
  <SettingContainerStyled>
    <h3>Sounds</h3>
    <span>
      <Toggle
        toggle={toggleSounds}
        isActive={soundsOn}
      />
    </span>
  </SettingContainerStyled>
);

Sounds.propTypes = {
  toggleSounds: PropTypes.func.isRequired,
  soundsOn: PropTypes.bool.isRequired,
};

export default Sounds;
