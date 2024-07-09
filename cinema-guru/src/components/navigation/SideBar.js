import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8000/api/activity', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <nav className={`sidebar ${small ? 'small' : ''}`}>
      <ul className="navigation">
        <li onClick={() => setPage('home')} className={selected === 'home' ? 'active' : ''}>
          <i className="fas fa-home"></i> Home
        </li>
        <li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'active' : ''}>
          <i className="fas fa-heart"></i> Favorites
        </li>
        <li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'active' : ''}>
          <i className="fas fa-clock"></i> Watch Later
        </li>
      </ul>
      <ul className="activities">
        {showActivities && activities.slice(0, 10).map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
