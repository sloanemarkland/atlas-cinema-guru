import React, { useState } from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

function App() {
  const [username, setUsername] = useState('');
  const [sortOption, setSortOption] = useState('1');

  return (
    <div className="App">
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
