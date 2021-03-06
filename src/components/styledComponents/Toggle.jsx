import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Toggle = ({ toggle, isActive, toggleId }) => (
  <ToggleStyles>
    <label className="switch" htmlFor={toggleId}>
      <input id={toggleId} type="checkbox" checked={isActive} onChange={() => { toggle(); }} />
      <span className="slider round" />
    </label>
  </ToggleStyles>
);

const ToggleStyles = styled.div`
    /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleId: PropTypes.string.isRequired,
};

export default Toggle;
