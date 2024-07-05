// src/routes/auth/Authentication.js

import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button onClick={handleSignInClick} className="auth-button">Sign In</button>
        <button onClick={handleSignUpClick} className="auth-button">Sign Up</button>
      </div>
      {isSignIn ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default Authentication;
