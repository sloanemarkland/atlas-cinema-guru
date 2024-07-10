// src/routes/home/HomePage.js
import React from 'react';
import MovieCard from '../../components/movies/MovieCard';

const HomePage = () => {
  const sampleMovie = {
    imdbId: 'tt0111161',
    title: 'The Shawshank Redemption',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genres: ['Drama']
  };

  return (
    <div className="home-page">
      <ul className="movie-list">
        <MovieCard movie={sampleMovie} />
      </ul>
    </div>
  );
};

export default HomePage;
