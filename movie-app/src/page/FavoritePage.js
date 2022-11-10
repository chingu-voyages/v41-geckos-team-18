import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieModal from '../components/MovieModal';

const FavoritePage = () => {
  const [movieData, setMovieData] = useState([]);

  const getData = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      data.push(JSON.parse(localStorage.getItem(`${key}`)));
    }
    setMovieData(data);
  };

  const deleteData = (id) => {
    localStorage.removeItem(`${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ height: '80vh' }}>
      <Typography component="h2" variant="h5" sx={{ textAlign: 'center' }} m={3}>
        Favorite Movie
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
          width: '100%',
          gap: '5px 10px',
        }}
      >
        {movieData.length > 0 ? (
          movieData.map((movies) => (
            <Box key={movies.id} sx={{ width: '30%', maxWidth: '200px', position: 'relative' }}>
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
              <IconButton
                component="label"
                sx={{ position: 'absolute', bottom: '0', right: '0', zIndex: '999' }}
                size="large"
                onClick={() => deleteData(movies.id)}
              >
                <DeleteIcon color="primary" />
              </IconButton>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p>There are no movies!</p>
          </Box>
        )}
      </Box>
      <MovieModal open={open} handleClose={handleClose} selectedMovie={selectedMovie} />
    </Container>
  );
};

export default FavoritePage;
