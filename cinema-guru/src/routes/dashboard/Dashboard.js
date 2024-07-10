import { useState } from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar'; // Make sure to import the SideBar component
import Input from '../../components/general/Input';
import SearchBar from '../../components/general/SearchBar';
import SelectInput from '../../components/general/SelectInput';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [value, setValue] = useState(0);
  const filterOptions = [
    { name: 'lastest', id: '001' },
    { name: 'oldest', id: '002' },
    { name: 'highest rated', id: '003' },
    { name: 'lowest rated', id: '004' },
  ];
  
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-content">
        <SideBar />
        <div className="main-content">
          <SearchBar title="Search Movies" />
          <div className="input-container">
            <Input label="Min Date" type="number" className="input" value={value} setValue={setValue} />
            <Input label="Max Date" type="number" className="input" value={value} setValue={setValue} />
            <SelectInput label="Sort" options={filterOptions} className="input" value={value} setValue={setValue} />          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
