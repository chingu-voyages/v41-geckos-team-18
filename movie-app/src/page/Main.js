import MovieRow from '../components/MovieRow';
import useFetch from '../hooks/useFetch';

export default function Main() {
  const url = `/api/fetch-trending-all`;
  const { data, isLoading } = useFetch(url);

  return (
    <>
      <MovieRow title="Trending Movie" id="Trend" data={data} isLoading={isLoading} />
    </>
  );
}
