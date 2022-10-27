/* eslint-disable no-unused-vars */
import { Outlet, Link } from 'react-router-dom';
import MovieRow from './components/MovieRow';
import SearchBar from './components/searchbar/SearchBar';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchField, setSearchField] = useState('');
  const [searchFieldString, setSearchFieldString] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');

  useEffect(() => {
    const filteredMovies = movies.filter(() => {
    return movie.name.toLocaleLowerCase().includes(searchFieldString);
    });

    setFilteredMovies(filteredMovies);
  }, [movies, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log(searchFieldString);
  };
  return (
    <div className="App">
      <nav>
        <SearchBar onChange={onSearchChange} />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" movies={filteredMovies} />
    </div>
  );
}

export default App;
