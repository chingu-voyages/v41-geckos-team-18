import useAxiosFetch from '../../hooks/useAxiosFetch';

function FetchMovie() {
  const movieURL = '/api/fetch-movie';
  const { data } = useAxiosFetch(movieURL);

  return (
    <>
      <h1>Fetch Movie</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default FetchMovie;
