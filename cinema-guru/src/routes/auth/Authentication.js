// src/routes/auth/Authentication.js

import React, { useState } from 'react';
import './auth.css';
import axios from 'axios'; // Import axios
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        isSignIn ? '/api/auth/login' : '/api/auth/register',
        { username, password }
      );
      const { token } = response.data;
      localStorage.setItem('accessToken', token);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during authentication:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button onClick={handleSignInClick} className="auth-button">
          Sign In
        </button>
        <button onClick={handleSignUpClick} className="auth-button">
          Sign Up
        </button>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Authentication;
