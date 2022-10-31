import MovieRow from '../components/MovieRow';
import useFetch from '../hooks/useFetch';
import { Container } from '@mui/material';

export default function Main() {
  const url = `/api/fetch-trending-movies`;
  const { data, error, isLoading } = useFetch(url);
  const { results } = data || {};

  return (
    <Container>
      {
        <MovieRow
          title="Trending Movie"
          id="Trend"
          data={results}
          isLoading={isLoading}
          error={error}
        />
      }
    </Container>
  );
}
