/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import MovieRow from './components/MovieRow';
import SearchBar from './components/searchbar/SearchBar';
import './App.css';

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
    <>
      <nav>
        <SearchBar />
      </nav>
      <MovieRow title="Trending Movie" id="Trend" data={data} />
    </>
  );
}

export default App;
