// src/routes/auth/Register.js

import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the registration logic here, e.g., make an API request to register the user
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      <button type="submit" className="auth-button">
        Sign Up
      </button>
    </form>
  );
};

export default Register;
