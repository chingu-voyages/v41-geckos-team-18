/* eslint-disable no-unused-vars */
import { Container, Grid, Typography, Button, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { isValid, getGenres, getKeywords, getTrailers } from '../data';
import MovieRow from '../components/MovieRow';
import Casts from '../components/MovieDetails/Casts';
import Metadata from '../components/MovieDetails/Metadata';
import Banner from '../components/MovieDetails/Banner';
import Trailers from '../components/MovieDetails/Trailers';

export default function MovieDetails() {
  // Example endpoint: /movie/tt0111161 - Do not Delete
  const { movieId } = useParams();
  const url = `/api/fetch-movie?movieId=${movieId}`;
  const { data, error } = useFetch(url);

  // Destructuring nullable object. Prevent ".map() is not a function" error
  const {
    details: {
      backdrop_path: bannerUrl,
      title,
      popularity,
      release_date: releaseDate,
      genres,
      overview,
      poster_path: posterUrl,
    } = {}, // If data === null, return empty object
    videos: { results: videoList } = {},
    keywords: { keywords } = {},
    credits: { cast: casts } = {},
    similar: { results: similars } = {},
  } = data || {};

  return (
    <>
      {!isValid(data) ? (
        error // If data is null, show error
      ) : (
        <>
          <Banner bannerUrl={bannerUrl} title={title} />
          <Container>
            <Metadata
              title={title}
              popularity={popularity}
              releaseDate={releaseDate}
              genres={getGenres(genres)}
              overview={overview}
              keywords={getKeywords(keywords)}
              posterUrl={posterUrl}
            />
            <Typography variant="h5" component="h3">
              Trailers:
            </Typography>
            <Trailers trailers={getTrailers(videoList)} />
            <Casts casts={casts} />
            <MovieRow title="Similar" data={similars} />
          </Container>
        </>
      )}
    </>
  );
}
