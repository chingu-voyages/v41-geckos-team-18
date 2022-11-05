import { Button, Grid } from '@mui/material';
import StarRating from '../StarRating';
import { getRuntime, getReleaseYear } from '../../data';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/system';

export default function StatusBar({ data }) {
  // prettier-ignore
  const {
    details: {
      release_date: releaseDate, vote_average: voteAverage, runtime,
    } = {},
  } = data || {};

  return (
    <Grid container item gap={2} alignItems="center" justifyContent="space-between" width="100%">
      <Grid item sx={{ display: 'flex', gap: 2 }}>
        <StarRating voteAverage={voteAverage} />
        <Box>{getRuntime(runtime)}</Box>
        <Box>{getReleaseYear(releaseDate)}</Box>
      </Grid>
      <Grid item component={Button}>
        <FavoriteBorderIcon />
      </Grid>
    </Grid>
  );
}
