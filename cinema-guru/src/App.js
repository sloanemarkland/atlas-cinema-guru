import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import Dashboard from './components/general/Dashboard'; // Placeholder, create this component later
import Authentication from './components/general/Authentication'; // Placeholder, create this component later

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');
  const [username, setUsername] = useState('');
  const [sortOption, setSortOption] = useState('1');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
      <Input 
        label="Username" 
        type="text" 
        value={username} 
        setValue={setUsername} 
        icon={<i className="fas fa-user" />} 
        inputAttributes={{ placeholder: 'Enter your username' }}
      />
      <SelectInput 
        label="Sort" 
        options={[{ value: '1', label: 'Default' }, { value: '2', label: 'Latest' }]} 
        value={sortOption} 
        setValue={setSortOption}
      />
      <Button 
        label="Load More..." 
        className="button-primary" 
        onClick={() => {}} 
        icon={<i className="fas fa-search" />}
      />
      <SearchBar/>
    </div>
  );
}

export default App;
