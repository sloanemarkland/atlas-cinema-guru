// src/routes/dashboard/Dashboard.js

import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Other dashboard content can go here */}
    </div>
  );
};

export default Dashboard;
