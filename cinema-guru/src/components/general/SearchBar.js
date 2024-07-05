// src/components/general/SearchBar.js

import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleInput}
      className="search-bar"
      placeholder="Search..."
    />
  );
};

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SearchBar;
