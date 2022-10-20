import useAxiosFetch from '../hooks/useAxiosFetch';

export default function ExampleMovie() {
  const movieURL = '/api/fetch-movie';
  const { data, error } = useAxiosFetch(movieURL);

  return (
    <>
      <h1>Fetch Movie</h1>
      <pre>{JSON.stringify(error === null ? data : error, null, 2)}</pre>
    </>
  );
}
