import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_IMG_URL, isValid } from '../data';
import MovieModal from '../components/MovieModal';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SearchPage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  const { data, isLoading, error } = useFetch(`/api/fetch-search-movie?searchTerm=${searchTerm}`);
  const { results: movies } = data || {};

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  console.log(movies, isLoading, error);
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Box>
            {isValid(movies)
              ? movies.map((movies) => (
                  <Box key={movies.id}>
                    <img
                      className="poster"
                      src={`${BASE_IMG_URL}/w500/${movies.poster_path}`}
                      alt={movies.name}
                      onClick={() => handleOpen(movies)}
                      loading="lazy"
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                      }}
                    />
                  </Box>
                ))
              : error}
          </Box>
          <MovieModal open={open} handleClose={handleClose} selectedMovie={selectedMovie} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
