import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header'

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <h1>Welcome, {userUsername}!</h1>
    </div>
  );
};

export default Dashboard;
