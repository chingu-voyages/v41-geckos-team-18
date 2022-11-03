import MovieRow from '../components/MovieRow';
import MovieBanner from '../components/MovieBanner';
import { Container } from '@mui/material';
import GenreGallery from '../components/GenreGallery';

export default function Main() {
  return (
    <Container>
      <MovieBanner />
      <MovieRow title="Trending Movie" id="Trend" url="/api/fetch-trending-movies" />
      <GenreGallery />
    </Container>
  );
}
