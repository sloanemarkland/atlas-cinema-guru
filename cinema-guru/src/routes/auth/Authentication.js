// src/routes/auth/Authentication.js

import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchRoutes, setSwitchRoutes] = useState(true);
  const [selectedButton, setSelectedButton] = useState('signin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const route = switchRoutes ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
      const response = await axios.post(
        route, { username, password }
      );
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
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
      <button onClick={() => { setSwitchRoutes(true); setSelectedButton('signin'); }} className={`auth-button ${selectedButton === 'signin' ? 'selected' : ''}`}>
          Sign In
        </button>
        <button onClick={() => { setSwitchRoutes(false); setSelectedButton('signup'); }} className={`auth-button ${selectedButton === 'signup' ? 'selected' : ''}`}>
          Sign Up
        </button>
      </div>
      <div className="auth-header">
        <p>Sign in with your account</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {switchRoutes ? (
          <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        ) : (
          <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        )}
      </form>
    </div>
  );
};

export default Authentication;
