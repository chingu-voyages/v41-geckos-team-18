import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './MovieRow.css';
import { isValid } from '../data';
import MovieModal from './MovieModal';
import LoadingSpinner from './LoadingSpinner';

function MovieRow({ title, url, data, error, isLoading }) {
  const { results: movies } = data || {};

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Typography variant="h4" component="h2" mb={2}>
        {title}
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingSpinner isLoading={isLoading} />
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', overflowX: 'scroll' }} className="poster-box">
            {isValid(movies)
              ? movies.map((movies) => (
                  <Box key={movies.id} sx={{ width: '100%', mr: 2, minWidth: '250px' }}>
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                      alt={movies.name}
                      onClick={() => handleOpen(movies)}
                      loading="lazy"
                      style={{
                        width: '100%',
                        maxWidth: '250px',
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
    </Box>
  );
}

export default React.memo(MovieRow);
