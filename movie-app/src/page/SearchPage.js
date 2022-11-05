import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get('q');
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {};
  return <div>SearchPage</div>;
};

export default SearchPage;
