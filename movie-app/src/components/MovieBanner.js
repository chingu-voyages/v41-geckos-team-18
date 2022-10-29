import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
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

  const item = movie && movie.slice(0, 5);
  console.log('isLoading', item);
  return (
    <Container fixed sx={{}}>
      {isLoading ? (
        'Loading...'
      ) : (
        <Box>
          {movie ? (
            <Carousel navButtonsAlwaysVisible={true} duration={1000}>
              {item.map((movie) => (
                <Box key={movie.id} sx={{ width: '100%', maxHeight: '500px' }}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '500px',
                      cursor: 'pointer',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          ) : (
            error
          )}
        </Box>
      )}
    </Container>
  );
};

export default MovieBanner;
