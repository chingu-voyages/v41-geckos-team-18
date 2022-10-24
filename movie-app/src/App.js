/* eslint-disable no-unused-vars */
import { Outlet, Link } from 'react-router-dom';
import MovieRow from './components/MovieRow';

function App() {
  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <nav>
        <Link to="/movies">Movies</Link> | <Link to="/tvShows">TV Shows</Link>
        <Outlet />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" />
    </div>
  );
}

export default App;
