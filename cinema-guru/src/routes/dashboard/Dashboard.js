// src/routes/dashboard/Dashboard.js

import { React } from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
// import Input from '../../components/general/Input';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  // const [value, setValue]=useState(0)

  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      {/* Main dash content */}
      {/* <Input label="Min Date" type="number" className="Input" value={value} setValue={setValue} /> */}

    </div>
  );
};

export default Dashboard;
