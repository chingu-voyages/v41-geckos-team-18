import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_IMG_URL, isValid } from '../data';
import MovieModal from '../components/MovieModal';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
    <Container>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Typography component="h2" variant="h5" sx={{ textAlign: 'center' }} m={3}>
            "{searchTerm}" search results.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%',
              gap: '5px 10px',
            }}
          >
            {isValid(movies) ? (
              movies.map((movies) => (
                <Box key={movies.id} sx={{ width: '30%', maxWidth: '250px' }}>
                  <img
                    className="poster"
                    src={`${BASE_IMG_URL}/w300/${
                      movies.poster_path ? movies.poster_path : movies.profile_path
                    }`}
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
            ) : (
              <Typography>No search results found.</Typography>
            )}
          </Box>
          <MovieModal open={open} handleClose={handleClose} selectedMovie={selectedMovie} />
        </>
      )}
    </Container>
  );
};

export default SearchPage;
