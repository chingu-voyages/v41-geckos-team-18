import { useState } from 'react';
import { Grid } from '@mui/material';
import { BASE_IMG_URL } from '../../data';
import useFetch from '../../hooks/useFetch';
import MovieModal from '../MovieModal';

export default function MoodContent({ genre }) {
  const { data } = useFetch(`/api/fetch-movie-mood?moodId=${genre}`);
  const { results: movies } = data || {};
  console.log('movies:', movies && movies[0]);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container wrap="nowrap" spacing={2} sx={{ width: '100%', overflowX: 'hidden' }}>
        {movies &&
          movies.slice(0, 5).map((movie, idx) => {
            const { title, poster_path: posterUrl } = movie;
            return (
              <Grid item sm={12} key={title}>
                <img
                  src={`${BASE_IMG_URL}/w300/${posterUrl}`}
                  loading="lazy"
                  alt={title}
                  onClick={() => handleOpen(movie)}
                  style={{
                    width: '100%',
                    cursor: 'pointer',
                  }}
                />
              </Grid>
            );
          })}
        <MovieModal open={open} handleClose={handleClose} selectedMovie={selectedMovie} />
      </Grid>
    </>
  );
}
