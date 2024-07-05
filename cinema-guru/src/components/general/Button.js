// src/components/general/Button.js

import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

Button.defaultProps = {
  className: '',
  icon: null,
};

export default Button;
