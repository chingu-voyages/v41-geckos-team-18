/* eslint-disable no-unused-vars */
import { Container, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { isValid, getGenres, getKeywords, getTrailers, getRuntime } from '../data';
import MovieRow from '../components/MovieRow';
import Casts from '../components/MovieDetails/Casts';
import Metadata from '../components/MovieDetails/Metadata';
import Banner from '../components/MovieDetails/Banner';
import Trailers from '../components/MovieDetails/Trailers';
import StatusBar from '../components/MovieDetails/StatusBar';

export default function MovieDetails() {
  const { movieId } = useParams();
  const url = `/api/fetch-movie?movieId=${movieId}`;

  const { data, error } = useFetch(url);

  // prettier-ignore
  const {
    details: { backdrop_path: bannerUrl, title } = {}, // If data === null, return empty object
    videos: { results: videoList } = {},
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
          <Container maxWidth="md">
            <Grid container rowSpacing={4}>
              <Grid item width="100%">
                <StatusBar data={data} />
              </Grid>
              <Grid item>
                <Metadata data={data} />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h3">
                  Trailers
                </Typography>
                <Trailers trailers={getTrailers(videoList)} />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h3">
                  Casts
                </Typography>
                <Casts casts={casts} />
              </Grid>
              <Grid item>
                <MovieRow title="Similar" data={similars} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
