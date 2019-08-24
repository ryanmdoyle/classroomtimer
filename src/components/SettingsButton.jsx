import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SettingsCog = styled.button`
  position: fixed;
  z-index: 2;
  margin: 1rem;
  background: none;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 3rem;
  i {
    font-size: 2rem;
    color: rgb(255, 255, 255, 0.3);
  }
`;

const SettingsButton = ({ toggleSettings }) => (
  <SettingsCog onClick={() => { toggleSettings(); }}>
    <i className="fa fa-cog" />
  </SettingsCog>
);

SettingsButton.propTypes = {
  toggleSettings: PropTypes.bool.isRequired,
};

export default SettingsButton;
