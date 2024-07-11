// src/routes/dashboard/HomePage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = useCallback(async (page) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setMovies(prevMovies => [...prevMovies, response.data]);
      setMovies(response.data.titles);
    } catch (error) {
      console.error('Homepage - Error loading movies:', error);
    }
  }, [minYear, maxYear, genres, sort, title]);

  useEffect(() => {
    setMovies([]); // Reset movies when filters change
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title, loadMovies]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <div className="home-page">
      <Filter 
        minYear={minYear} 
        setMinYear={setMinYear} 
        maxYear={maxYear} 
        setMaxYear={setMaxYear} 
        sort={sort} 
        setSort={setSort} 
        genres={genres} 
        setGenres={setGenres} 
        title={title} 
        setTitle={setTitle} 
      />
      <ul className="movie-list">
        {movies.slice(0, 10).map((movie, index) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button label="Load More..." onClick={handleLoadMore} />
    </div>
  );
};

export default HomePage;
