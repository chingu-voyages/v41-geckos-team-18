import { Container, Grid, Typography } from '@mui/material';
import { BASE_IMG_URL, getReleaseYear, getRuntime } from '../../data';
import { getGenres, getKeywords } from '../../data';
import StarRating from '../StarRating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Metadata({ data }) {
  // Destructuring nullable object. Prevent ".map() is not a function" error
  // prettier-ignore
  const {
    details: {
      title, popularity, release_date: releaseDate, genres, overview, poster_path: posterUrl, vote_average: voteAverage, runtime,
    } = {},
    keywords: { keywords } = {},
  } = data || {};

  return (
    <>
      {/* <Grid container item gap={2}>
        <Grid item>
          <StarRating voteAverage={voteAverage} />
        </Grid>
        <Grid item>{getRuntime(runtime)}</Grid>
        <Grid item>{getReleaseYear(releaseDate)}</Grid>
        <Grid item>
          <FavoriteBorderIcon />
        </Grid>
      </Grid> */}
      <Grid container item gap={2}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Keywords: {getKeywords(keywords)}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{overview}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
