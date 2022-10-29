import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MovieBanner = () => {
  // const [url, setUrl] = useState(`/api/fetch-trending-all`);
  const [url] = useState(`/api/fetch-trending-all`);
  const {
    data: { results: movie },
    error,
    isLoading,
  } = useFetch(url);

  movie && movie.slice(0, 5);
  console.log('isLoading', movie);

  return (
    <Container fixed sx={{}}>
      <Typography>banner</Typography>

      {isLoading ? (
        'Loading...'
      ) : (
        <Box>
          {movie ? (
            <Box>
              {movie.map((movie) => (
                <Box key={movie.id}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.name}
                    loading="lazy"
                  />
                </Box>
              ))}
            </Box>
          ) : (
            error
          )}
        </Box>
      )}
    </Container>
  );
};

export default MovieBanner;
