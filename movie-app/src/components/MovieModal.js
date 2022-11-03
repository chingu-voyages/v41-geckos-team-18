import { Modal, Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';

export default function MovieModal({ open, handleClose, selectedMovie }) {
  const Root = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#45464F',
    boxShadow: 24,

    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '600px',
    },
  }));

  const createOverview = (overview) => {
    let result = overview.split(' ').join(' ') + '..';
    return result;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Root>
        <img
          src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
          alt={`${selectedMovie.title}'s Banner`}
          loading="lazy"
          style={{ width: '100%' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 4, pt: 1.5 }}>
          <Typography id="modal-modal-title" variant="h4" component="h2" mb={2}>
            {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginRight: '2em' }}>
              <StarIcon /> {selectedMovie.vote_average ? selectedMovie.vote_average.toFixed(2) : ''}
            </Typography>
            <Typography>
              {selectedMovie.release_date
                ? selectedMovie.release_date
                : selectedMovie.first_air_date}
            </Typography>
          </Box>

          <Typography id="modal-modal-description">
            {selectedMovie.overview ? createOverview(selectedMovie.overview) : ''}
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to={`/movie/${selectedMovie.id}`}
            onClick={handleClose}
            sx={{ width: '150px', marginLeft: 'auto' }}
          >
            View Details
          </Button>
        </Box>
      </Root>
    </Modal>
  );
}
