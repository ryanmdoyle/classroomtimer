import React from 'react';
import SettingContainerStyled from '../styledComponents/SettingContainerStyled';

const BackgroundColor = () => (
  <SettingContainerStyled>
    <h3>Background Colors</h3>
    <div>
      <label htmlFor="primary">
        Primary Color:
        <input type="color" id="primary" name="primary" value="#e66465" />
      </label>
    </div>
    <div>
      <label htmlFor="secondary">
        Secondary Color:
        <input type="color" id="secondary" name="secondary" value="#f6b73c" />
      </label>
    </div>
  </SettingContainerStyled>
);

export default BackgroundColor;
