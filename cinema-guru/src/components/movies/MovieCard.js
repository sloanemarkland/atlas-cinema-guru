// src/components/movies/MovieCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const checkFavoriteAndWatchLater = async () => {
      try {
        const favoriteResponse = await axios.get('http://localhost:8000/api/titles/favorite/', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const watchLaterResponse = await axios.get('http://localhost:8000/api/titles/watchlater/', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        setIsFavorite(favoriteResponse.data.some(favMovie => favMovie.imdbId === movie.imdbId));
        setIsWatchLater(watchLaterResponse.data.some(wlMovie => wlMovie.imdbId === movie.imdbId));
      } catch (error) {
        console.error('Error fetching user lists:', error);
      }
    };

    if (movie && movie.imdbId) {
      checkFavoriteAndWatchLater();
    }
  }, [movie]);

  const handleClick = async (type) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };

      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(`/api/titles/favorite/${movie.imdbId}`, config);
          setIsFavorite(false);
        } else {
          await axios.post(`/api/titles/favorite/${movie.imdbId}`, {}, config);
          setIsFavorite(true);
        }
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(`/api/titles/watchlater/${movie.imdbId}`, config);
          setIsWatchLater(false);
        } else {
          await axios.post(`/api/titles/watchlater/${movie.imdbId}`, {}, config);
          setIsWatchLater(true);
        }
      }
    } catch (error) {
      console.error(`Error updating ${type} list:`, error);
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-header">
        <h2>{movie?.title}</h2>
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
      </div>
      <p>{movie?.synopsis}</p>
      <ul className="movie-genres">
        {movie?.genres?.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </li>
  );
};

export default MovieCard;
