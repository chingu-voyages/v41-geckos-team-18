/* eslint-disable no-undef */
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import useFetch from '../hooks/useFetch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const MovieBanner = () => {
  const [url] = useState(`/api/fetch-trending-all`);
  const {
    data: { results: movie },
    error,
    isLoading,
  } = useFetch(url);

  const item = movie && movie.slice(0, 5);

  return (
    <Container>
      {isLoading ? (
        'Loading...'
      ) : (
        <Box>
          {movie ? (
            <Carousel navButtonsAlwaysVisible={true} duration={1000}>
              {item.map((movie) => (
                <Box key={movie.id} sx={{ width: '100%', maxHeight: '500px' }}>
                  {/* {setRatingValue(movie.vote_average)} */}
                  <Typography sx={{ position: 'absolute', top: '30px' }}>
                    Movie of the Day
                  </Typography>
                  <Typography
                    sx={{ position: 'absolute', top: '50px' }}
                    variant="h3"
                    component="h1"
                  >
                    {movie.title ? movie.title : movie.name}
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={(movie.vote_average / 2).toFixed(2)}
                    precision={0.5}
                    readOnly
                  />

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
