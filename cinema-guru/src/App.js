import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  // State variables manage auth status and username of logged-in user
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  // Hook to fetch and validate the authentication status using the
  // token stored in local storage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.post('http://localhost:8000/api/auth', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(error => {
        console.error('Authentication failed', error);
      });
    }
  }, []);

  // Conditional rendering to display either Auth component or Dashboard
  // component based on isLoggedIn state.
  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;
