import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { BASE_IMG_URL, isValid } from '../../data';
import useFetch from '../../hooks/useFetch';
import MovieModal from '../MovieModal';
import LoadingSpinner from '../LoadingSpinner';

export default function MoodContent({ genre, setTotalPages, currentPage }) {
  const { data, isLoading, error } = useFetch(
    `/api/fetch-movie-mood?moodId=${genre}&pageId=${currentPage}`,
  );
  const { total_pages: totalPages } = data;
  const { results: movies } = data || {};

  useEffect(() => {
    totalPages && setTotalPages(totalPages);
  }, [setTotalPages, totalPages]);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = (movieData) => {
    setOpen(true);
    setSelectedMovie(movieData);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '375px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingSpinner isLoading={isLoading} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', overflowX: 'scroll' }} mb={3} className="poster-box">
          {!isValid(movies)
            ? error
            : movies.map((movie) => {
                const { title, poster_path: posterUrl } = movie;
                return (
                  <Box key={title} sx={{ width: '100%', mr: 2, mt: 2, minWidth: '250px' }}>
                    <img
                      src={`${BASE_IMG_URL}/w300/${posterUrl}`}
                      loading="lazy"
                      alt={title}
                      onClick={() => handleOpen(movie)}
                      style={{
                        width: '100%',
                        maxWidth: '250px',
                        cursor: 'pointer',
                      }}
                    />
                  </Box>
                );
              })}
          <MovieModal open={open} handleClose={handleClose} selectedMovie={selectedMovie} />
        </Box>
      )}
    </>
  );
}
