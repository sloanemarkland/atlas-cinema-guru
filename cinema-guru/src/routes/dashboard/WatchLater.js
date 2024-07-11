// src/routes/dashboard/WatchLater.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/watchlater/')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching watch later movies:', error);
      });
  }, []);

  return (
    <div className="watch-later-page">
      <h1>Movies to watch later</h1>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
