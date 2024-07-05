// src/components/general/Input.js

import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

// functional component that accepts the specified props
const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  // function handles the input change event and updates the state using
  // the setValue function
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  // component returns a div containing an optional label, an optional
  // icon, and an input element with the appropriate attributes
  return (
    <div className={className}>
      {label && <label className="input-label">{label}</label>}
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={handleInput}
        className="input-element"
        {...inputAttributes}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.element,
  inputAttributes: PropTypes.object,
};

export default Input;