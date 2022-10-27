import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useFetch from '../hooks/useFetch';
import MoodButtons from './MoodButtons';
import './MovieRow.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function MovieRow({ title }) {
  const [url, setUrl] = useState(`/api/fetch-trending-all`);
  const {
    data: { results: movie },
    error,
    isLoading,
  } = useFetch(url);

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
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container sx={{ position: 'relative' }}>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <MoodButtons setUrl={setUrl} />
      <ArrowLeftIcon
        fontSize="large"
        sx={{ position: 'absolute', top: '50%', transform: 'translate(10px)' }}
      />
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {movie ? (
            <Box sx={{ display: 'flex', overflowX: 'scroll' }} className="poster-box">
              {movie.map((movie) => (
                <Box key={movie.id} sx={{ width: '100%', mr: 2, mt: 2, minWidth: '400px' }}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.name}
                    onClick={() => handleOpen(movie)}
                    loading="lazy"
                    style={{
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            error
          )}
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <img
                src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
                alt="modal-img"
                style={{ width: '100%' }}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
              </Typography>
              <Typography id="modal-modal-description">{selectedMovie.overview}</Typography>
              <Typography>
                {selectedMovie.release_date
                  ? selectedMovie.release_date
                  : selectedMovie.first_air_date}
              </Typography>
              <Typography>vote_average : {selectedMovie.vote_average}</Typography>
            </Box>
          </Modal>
        </>
      )}
      <ArrowRightIcon
        fontSize="large"
        sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translate(10px)' }}
      />
    </Container>
  );
}

export default MovieRow;
