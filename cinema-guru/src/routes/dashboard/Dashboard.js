import { useState } from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar'; // Make sure to import the SideBar component
import Input from '../../components/general/Input';
import SearchBar from '../../components/general/SearchBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [value, setValue] = useState(0);
  
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-content">
        <SideBar />
        <div className="main-content">
          <SearchBar title="Search Movies" />
          <Input label="Min Date" type="number" className="input" value={value} setValue={setValue} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
