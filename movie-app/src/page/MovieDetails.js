/* eslint-disable no-unused-vars */
import { Box, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { isValid, BASE_IMG_URL, getGenres, getKeywords } from '../data';

export default function MovieDetails() {
  // Example endpoint: /movie/tt0111161 - Do not Delete
  const { movieId } = useParams();
  const url = `http://localhost:8888/api/fetch-movie?movieId=${movieId}`;
  const { data, error } = useFetch(url);

  // Destructure nested data
  const {
    details: {
      backdrop_path: bannerUrl,
      title,
      popularity,
      release_date: releaseDate,
      genres,
      overview,
      poster_path: posterUrl,
    } = {},
    keywords: { keywords } = {},
    similar: { results: similarMovies } = {},
  } = data || {};

  return (
    <>
      {!isValid(data) ? (
        // If data is null, show error
        error
      ) : (
        <>
          <img
            src={`${BASE_IMG_URL}original${bannerUrl}`}
            alt={`${title} Banner`}
            style={{
              width: '100%',
              height: '25rem',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Container>
            <Grid container gridColumn={2} justifyContent="center">
              <Grid item md={7} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="body1">Popularity #{popularity}</Typography>
                <Typography variant="body1">Release Date: {releaseDate}</Typography>
                <Typography variant="body1">Genres: {getGenres(genres)}</Typography>
                <Typography variant="h5" component="h3">
                  Overview:
                </Typography>
                <Typography variant="body1">{overview}</Typography>
                <Typography variant="h5" component="h3">
                  Keywords:
                </Typography>
                <Typography variant="body1">{getKeywords(keywords)}</Typography>
              </Grid>

              {/* Movie Poster */}
              <Grid item md={3}>
                <img
                  src={`${BASE_IMG_URL}original${posterUrl}`}
                  alt={`${title} Poster`}
                  style={{
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
