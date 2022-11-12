/* eslint-disable no-undef */
import React, { useState, useMemo } from 'react';
import Carousel from 'react-material-ui-carousel';
import useFetch from '../hooks/useFetch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import defaultTheme from '../theme/defaultTheme';
import { useNavigate } from 'react-router-dom';
import './MovieBanner.css';
import LoadingSpinner from './LoadingSpinner';

const MovieBanner = () => {
  const [url] = useState(`/api/fetch-now-playing`);
  const {
    data: { results: movie },
    error,
    isLoading,
  } = useFetch(url);

  const navigate = useNavigate();

  const moveDetailPage = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  let randomNumber = Math.floor(Math.random() * 5);
  const item = movie && movie.slice(randomNumber, randomNumber + 5);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingSpinner isLoading={isLoading} />
        </Box>
      ) : (
        <Box mb={4}>
          {movie ? (
            <Carousel navButtonsAlwaysVisible={true} duration={1000}>
              {item.map((movie) => (
                <Box
                  key={movie.id}
                  sx={{ width: '100%', maxHeight: '500px' }}
                  onClick={() => {
                    moveDetailPage(movie.id);
                  }}
                  className="gradient"
                >
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '5%',
                      left: '10%',
                      bgcolor: defaultTheme.palette.secondary.main,
                      borderRadius: '20px',
                    }}
                    p={1}
                  >
                    Movie of the Day
                  </Typography>

                  <Typography
                    sx={{ position: 'absolute', top: '20%', left: '10%' }}
                    variant="h3"
                    component="h1"
                  >
                    {movie.title ? movie.title : movie.name}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: '10%',
                      display: 'flex',
                      margin: '10px 0',
                    }}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={Number((movie.vote_average / 2).toFixed(2))}
                      precision={0.5}
                      readOnly
                    />
                    <Typography ml={1}>{(movie.vote_average / 2).toFixed(2)}</Typography>
                  </Box>

                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
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
    </>
  );
};

export default MovieBanner;
