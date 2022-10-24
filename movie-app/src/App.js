/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
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
    <div className="App">
      <nav>
        <SearchBar />
      </nav>
      <Outlet />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
