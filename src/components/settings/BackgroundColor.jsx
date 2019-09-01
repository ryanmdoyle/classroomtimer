import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SettingContainerStyled from '../styledComponents/SettingContainerStyled';

const BackgroundColor = ({ modifyBackground }) => {
  const [primaryColor, setPrimaryColor] = useState('#23ce7f');
  const [secondaryColor, setSecondaryColor] = useState('#a451c8');

  return (
    <SettingContainerStyled>
      <h3>Background Colors</h3>
      <div>
        <label htmlFor="primary">
        Primary Color:
          <input type="color" id="primary" name="primary" value={primaryColor} onChange={() => { setPrimaryColor(); modifyBackground('primary', primaryColor); }} />
        </label>
      </div>
      <div>
        <label htmlFor="secondary">
        Secondary Color:
          <input type="color" id="secondary" name="secondary" value={secondaryColor} onChange={() => { setSecondaryColor(); modifyBackground('secondary', secondaryColor); }} />
        </label>
      </div>
    </SettingContainerStyled>
  );
};

BackgroundColor.propTypes = {
  modifyBackground: PropTypes.func.isRequired,
};

export default BackgroundColor;
