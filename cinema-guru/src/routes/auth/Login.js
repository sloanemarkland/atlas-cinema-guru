// src/routes/auth/Login.js

import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <>
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
      <button type="submit" className="submit-button">
        Sign In
      </button>
    </>
  );
};

export default Login;
