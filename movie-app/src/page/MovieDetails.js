/* eslint-disable no-unused-vars */
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function MovieDetails() {
  // Example endpoint: /movie/tt0111161 - Do not Delete
  const { movieId } = useParams();

  const url = `http://localhost:8888/api/fetch-movie?movieId=${movieId}`;
  const { data, error } = useFetch(url);

  const isDataValid = Object.keys(data).length > 0;

  const { details: { original_title: title, popularity, release_date: releaseDate } = {} } =
    data || {};

  return (
    <>
      {!isDataValid ? (
        error
      ) : (
        <>
          <Typography variant="h2">
            #{popularity} {title}
          </Typography>
          <Typography variant="p">Release Date: {releaseDate}</Typography>
        </>
      )}
    </>
  );
}
