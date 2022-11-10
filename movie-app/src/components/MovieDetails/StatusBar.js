import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import StarRating from '../StarRating';
import { getRuntime, getReleaseYear } from '../../data';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/system';

export default function StatusBar({ data }) {
  // prettier-ignore
  const { details: { release_date: releaseDate, vote_average: voteAverage, runtime,} = {} } = data || {};
  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  const favoriteMovie = (data) => {
    alert('movie');
    let movieData = data.details;
    console.log(movieData);
    localStorage.setItem(`${movieData.id}`, JSON.stringify(movieData));
  };

  return (
    <Grid container item gap={2} alignItems="center" justifyContent="space-between" width="100%">
      <Grid item sx={{ display: 'flex', gap: isMobileDown ? 2 : 4, alignItems: 'center' }}>
        <StarRating voteAverage={voteAverage} />
        <Box>{getRuntime(runtime)}</Box>
        <Box>{getReleaseYear(releaseDate)}</Box>
      </Grid>
      <Grid item component={Button}>
        <FavoriteBorderIcon onClick={() => favoriteMovie(data)} />
      </Grid>
    </Grid>
  );
}
