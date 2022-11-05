import MovieRow from '../components/MovieRow';
import MovieBanner from '../components/MovieBanner';
import { Container } from '@mui/material';
import MoodGallery from '../components/MoodGallery/MoodGallery';

export default function Main() {
  return (
    <Container component="main">
      <MovieBanner />
      <MovieRow title="Trending Movie" id="Trend" url="/api/fetch-trending-movies" />
      <MoodGallery />
    </Container>
  );
}
