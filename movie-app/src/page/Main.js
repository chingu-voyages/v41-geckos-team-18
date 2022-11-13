import MovieRow from '../components/MovieRow';
import MovieBanner from '../components/MovieBanner';
import { Container, Box, useTheme } from '@mui/material';
import MoodGallery from '../components/MoodGallery/MoodGallery';
import useFetch from '../hooks/useFetch';

export default function Main() {
  const trendingUrl = '/api/fetch-trending-movies';
  const { data, error, isLoading } = useFetch(trendingUrl);
  const theme = useTheme();

  return (
    <>
      <MovieBanner />
      <Container component="main" sx={{ pb: theme.spacing(6) }}>
        <Box gap={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <MovieRow id="Trend" title="Trending" data={data} error={error} isLoading={isLoading} />
          <MoodGallery />
        </Box>
      </Container>
    </>
  );
}
