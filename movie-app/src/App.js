/* eslint-disable no-unused-vars */
import { Outlet, Link } from 'react-router-dom';
import MovieRow from './components/MovieRow';
import SearchBar from './components/searchbar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <SearchBar />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" />
    </div>
  );
}

export default App;
