// src/components/navigation/Header.js

import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <div className="header-left">
        <p className="cinema-guru">Cinema Guru</p>
      </div>
      <div className="header-right">
        <img src="https://picsum.photos/100/100" alt="Avatar" />
        <p>Welcome, {userUsername}!</p>
        <span className="logout" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </span>
      </div>
    </nav>
  );
};

export default Header;
