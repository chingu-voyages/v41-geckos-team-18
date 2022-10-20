import useAxiosFetch from '../hooks/useAxiosFetch';

export default function ExampleTrending() {
  const trendingURL = '/api/fetch-trending-all';
  const { data, error } = useAxiosFetch(trendingURL);

  return (
    <>
      <h1>Fetch Trending</h1>
      <pre>{JSON.stringify(error === null ? data : error, null, 2)}</pre>
    </>
  );
}
