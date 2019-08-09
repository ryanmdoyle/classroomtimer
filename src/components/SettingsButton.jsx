import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const SettingsButton = ({ showSettings }) => (
  <SettingsCog onClick={() => { showSettings(); }}>
    <i className="fa fa-cog" />
  </SettingsCog>
);

SettingsButton.propTypes = {
  showSettings: PropTypes.bool.isRequired,
};

export default SettingsButton;
