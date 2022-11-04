import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './MovieRow.css';
import { isValid } from '../data';
import useFetch from '../hooks/useFetch';
import MovieModal from './MovieModal';

function MovieRow({ title, url }) {
  const { data, error, isLoading } = useFetch(url);
  const { results: movies } = data || {};

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>

      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Box sx={{ display: 'flex', overflowX: 'scroll' }} className="poster-box">
            {isValid(movies)
              ? movies.map((movies) => (
                  <Box key={movies.id} sx={{ width: '100%', mr: 2, mt: 2, minWidth: '300px' }}>
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
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
    </>
  );
}

export default React.memo(MovieRow);
