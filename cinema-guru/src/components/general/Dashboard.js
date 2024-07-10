import { useState } from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header'
import Input from '../../components/general/Input'

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [value, setValue]=useState(0)
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <h1>Welcome, {userUsername}!</h1>
      <Input label="Min Date" type="number" className="Input" value={value} setValue={setValue} />
    </div>
  );
};

export default Dashboard;
