import MovieRow from '../components/MovieRow';
import MovieBanner from '../components/MovieBanner';
import { Container } from '@mui/material';
import MoodGallery from '../components/MoodGallery/MoodGallery';
import useFetch from '../hooks/useFetch';

export default function Main() {
  const trendingUrl = '/api/fetch-trending-movies';
  const { data, error, isLoading } = useFetch(trendingUrl);

  return (
    <Container component="main">
      <MovieBanner />
      <MovieRow title="Trending Movie" id="Trend" data={data} error={error} isLoading={isLoading} />
      <MoodGallery />
    </Container>
  );
}
