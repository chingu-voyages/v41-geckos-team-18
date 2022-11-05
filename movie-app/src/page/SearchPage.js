// import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// import { BASE_IMG_URL, isValid } from '../data';

const SearchPage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  const { data, isLoading, error } = useFetch(`/api/fetch-search-movie?searchTerm=${searchTerm}`);
  const { results: movies } = data || {};

  console.log(movies, isLoading, error);
  return <div></div>;
};

export default SearchPage;
