/* eslint-disable no-unused-vars */
import { Outlet, Link } from 'react-router-dom';
import MovieRow from './components/MovieRow';
import SearchBar from './components/searchbar/SearchBar';
import { useState } from 'react';
import './App.css';

function App() {
  const [searchField, setSearchField] = useState('');
  const [searchFieldString, setSearchFieldString] = useState('');

useEffect(() => {
  const newFilteredMovies = movies.filter(() => {
    return movie.name.toLocaleLowerCase().includes(searchFieldString)
  })

  setFilterMovies(newFilteredMovies);
}, [movies, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString)
  }
  return (
    <div className="App">
      <nav>
        <SearchBar onSearchChange={onSearchChange} />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" />
    </div>
  );
}

export default App;
