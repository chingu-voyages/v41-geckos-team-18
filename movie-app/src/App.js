/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import MovieRow from './components/MovieRow';
import SearchBar from './components/searchbar/SearchBar';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" />
    </>
  );
}

export default App;
