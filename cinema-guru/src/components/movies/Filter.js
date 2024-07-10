// src/components/movies/Filter.js
import React from 'react';
import './movies.css';
import Tag from './Tag';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
  const genreList = ["action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];

  return (
    <div className="filter">
      <SearchBar value={title} setValue={setTitle} />
      <Input 
        label="Min Year" 
        type="number" 
        value={minYear} 
        setValue={setMinYear} 
        inputAttributes={{ placeholder: 'Min Year' }}
      />
      <Input 
        label="Max Year" 
        type="number" 
        value={maxYear} 
        setValue={setMaxYear} 
        inputAttributes={{ placeholder: 'Max Year' }}
      />
      <SelectInput 
        label="Sort By" 
        options={[
          { value: 'latest', label: 'Latest' }, 
          { value: 'oldest', label: 'Oldest' }, 
          { value: 'highestrated', label: 'Highest Rated' }, 
          { value: 'lowestrated', label: 'Lowest Rated' }
        ]} 
        value={sort} 
        setValue={setSort}
      />
      <div className="tags">
        {genreList.map(genre => (
          <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
