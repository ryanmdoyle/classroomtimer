import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SettingContainerStyled from '../styledComponents/SettingContainerStyled';

const BackgroundColor = ({ modifyBackground }) => {
  const [primaryColor, setPrimaryColor] = useState('#23ce7f');
  const [secondaryColor, setSecondaryColor] = useState('#a451c8');
  const primaryInitial = localStorage.getItem('primaryColor');
  const secondaryInitial = localStorage.getItem('secondaryColor');

  useEffect(() => {
    setPrimaryColor(primaryInitial);
    setSecondaryColor(secondaryInitial);
  }, [primaryInitial, secondaryInitial]);

  return (
    <SettingContainerStyled>
      <h3>Background Colors</h3>
      <div>
        <label htmlFor="primary">
        Primary Color:
          <input
            type="color"
            id="primary"
            name="primary"
            value={primaryColor}
            onChange={(e) => { setPrimaryColor(e.target.value); modifyBackground(e.target); }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="secondary">
        Secondary Color:
          <input
            type="color"
            id="secondary"
            name="secondary"
            value={secondaryColor}
            onChange={(e) => { setSecondaryColor(e.target.value); modifyBackground(e.target); }}
          />
        </label>
      </div>
    </SettingContainerStyled>
  );
};

BackgroundColor.propTypes = {
  modifyBackground: PropTypes.func.isRequired,
};

export default BackgroundColor;
