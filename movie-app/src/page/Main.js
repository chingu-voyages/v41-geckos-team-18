import MovieRow from '../components/MovieRow';
import MovieBanner from '../components/MovieBanner';
import { Container, Grid, Typography } from '@mui/material';
import MoodGallery from '../components/MoodGallery/MoodGallery';
import useFetch from '../hooks/useFetch';

export default function Main() {
  const trendingUrl = '/api/fetch-trending-movies';
  const { data, error, isLoading } = useFetch(trendingUrl);

  return (
    <Container component="main">
      <Grid container gap={4}>
        <Grid item sm>
          <MovieBanner />
        </Grid>
        <Grid item sm>
          <Typography variant="h4" component="h2" mb={2}>
            Trending
          </Typography>
          <MovieRow id="Trend" data={data} error={error} isLoading={isLoading} />
        </Grid>
        <Grid item sm>
          <Typography variant="h4" component="h2">
            What are you in the mood for?
          </Typography>
          <MoodGallery />
        </Grid>
      </Grid>
    </Container>
  );
}
