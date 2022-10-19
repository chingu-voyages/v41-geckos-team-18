/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MovieRow from './MovieRow';

function App() {
  const URL = '/.netlify/functions/fetch-movie';

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(URL);

        // Convert to JSON
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <nav>
        <Link to="/movies">Movies</Link> | <Link to="/tvShows">TV Shows</Link>
        <Outlet />
      </nav>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MovieRow title="Trending Movie" id="Trend" data={data} />
    </div>
  );
}

export default App;
