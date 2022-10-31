import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './MovieRow.css';
import { isValid } from '../data';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function MovieRow({ title, data: movies, isLoading, error }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

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
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${selectedMovie.backdrop_path}`}
                alt={`${selectedMovie.title}'s Banner`}
                loading="lazy"
                style={{ width: '100%' }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 4, pt: 1.5 }}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
                </Typography>
                <Typography id="modal-modal-description">{selectedMovie.overview}</Typography>
                <Typography>
                  {selectedMovie.release_date
                    ? selectedMovie.release_date
                    : selectedMovie.first_air_date}
                </Typography>
                <Typography>vote_average : {selectedMovie.vote_average}</Typography>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to={`/movie/${selectedMovie.id}`}
                  onClick={handleClose}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}

export default React.memo(MovieRow);
