/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
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
    <>
      <nav>
        <SearchBar onChange={onSearchChange} />
      </nav>
<<<<<<< HEAD
      <MovieRow title="Trending Movie" id="Trend" movies={filteredMovies} />
    </div>
=======
      <MovieRow title="Trending Movie" id="Trend" />
    </>
>>>>>>> dev
  );
}

export default App;
