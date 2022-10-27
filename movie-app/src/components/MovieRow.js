import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useFetch from '../hooks/useFetch';

function MovieRow({ title }) {
  const url = '/api/fetch-trending-all';
  const {
    data: { results: movie },
    error,
    isLoading,
  } = useFetch(url);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchFiled, setSearchField] = useState({});
  const [filteredMovie, setFileteredMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase())
    const filteredMovie = movies.filter(movie => movie.title.toLowerCase().includes(searchField.toLowerCase()))
  }

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
    <Container fixed>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          {movie ? (
            <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              {movie.map((movie) => (
                <Grid item xs={3} key={movie.id}>
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.name}
                    onClick={() => handleOpen(movie)}
                    loading="lazy"
                    style={{ maxWidth: '100%', cursor: 'pointer' }}
                  />
                </Grid>
              ))}
            </Grid>
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
    </Container>
  );
}

export default MovieRow;
