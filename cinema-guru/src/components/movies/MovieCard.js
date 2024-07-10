// src/components/movies/MovieCard.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchMovieStatus = async () => {
      try {
        const favoriteResponse = await axios.get('/api/titles/favorite/');
        const watchLaterResponse = await axios.get('/api/titles/watchlater/');

        const isFav = favoriteResponse.data.some(favMovie => favMovie.imdbId === movie.imdbId);
        const isWatchLater = watchLaterResponse.data.some(watchMovie => watchMovie.imdbId === movie.imdbId);

        setIsFavorite(isFav);
        setIsWatchLater(isWatchLater);
      } catch (error) {
        console.error('Error fetching movie status:', error);
      }
    };

    fetchMovieStatus();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(false);
        } else {
          await axios.post(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(true);
        }
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(false);
        } else {
          await axios.post(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(true);
        }
      }
    } catch (error) {
      console.error(`Error updating ${type} status:`, error);
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-actions">
        <FontAwesomeIcon 
          icon={faHeart} 
          className={`action-icon ${isFavorite ? 'favorite' : ''}`} 
          onClick={() => handleClick('favorite')} 
        />
        <FontAwesomeIcon 
          icon={faClock} 
          className={`action-icon ${isWatchLater ? 'watchlater' : ''}`} 
          onClick={() => handleClick('watchlater')} 
        />
      </div>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-synopsis">{movie.synopsis}</p>
      <div className="movie-genres">
        {movie.genres.map((genre, index) => (
          <span key={index} className="movie-genre">{genre}</span>
        ))}
      </div>
    </li>
  );
};

export default MovieCard;
