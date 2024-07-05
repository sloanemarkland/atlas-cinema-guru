// src/routes/auth/Login.js

import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here - aka make API request to log in
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
        Sign In
      </button>
    </form>
  );
};

export default Login;
