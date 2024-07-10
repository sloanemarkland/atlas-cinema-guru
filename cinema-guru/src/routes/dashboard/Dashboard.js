import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
// import Favorites from '../../components/favorites/Favorites';
// import WatchLater from '../../components/watchlater/WatchLater';
import Filter from '../../components/movies/Filter';
// import Input from '../../components/general/Input';
// import SearchBar from '../../components/general/SearchBar';
// import SelectInput from '../../components/general/SelectInput';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [value, setValue] = useState(0);
  // const filterOptions = [
  //   { name: 'lastest', id: '001' },
  //   { name: 'oldest', id: '002' },
  //   { name: 'highest rated', id: '003' },
  //   { name: 'lowest rated', id: '004' },
  // ];
  
  return (
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <div className="content">
          <Filter 
            minYear={1900} setMinYear={() => {}} 
            maxYear={2024} setMaxYear={() => {}} 
            sort="latest" setSort={() => {}} 
            genres={[]} setGenres={() => {}} 
            title="" setTitle={() => {}}
          />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/favorites" element={<Favorites />} /> */}
            {/* <Route path="/watchlater" element={<WatchLater />} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
  );
};

export default Dashboard;
