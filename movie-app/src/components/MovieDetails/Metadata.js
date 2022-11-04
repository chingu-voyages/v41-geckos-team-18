import { Grid, Typography } from '@mui/material';
import { BASE_IMG_URL } from '../../data';

export default function Metadata({
  title,
  popularity,
  releaseDate,
  genres,
  overview,
  keywords,
  posterUrl,
}) {
  return (
    <Grid container gridColumn={2} justifyContent="center">
      <Grid item md={8} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">Popularity #{popularity}</Typography>
        <Typography variant="body1">Release Date: {releaseDate}</Typography>
        <Typography variant="body1">Genres: {genres}</Typography>
        <Typography variant="h5" component="h3">
          Overview:
        </Typography>
        <Typography variant="body1">{overview}</Typography>
        <Typography variant="h5" component="h3">
          Keywords:
        </Typography>
        <Typography variant="body1">{keywords}</Typography>
      </Grid>

      {/* Movie Poster */}
      <Grid item md={4}>
        <img
          src={`${BASE_IMG_URL}/w500${posterUrl}`}
          alt={`${title} Poster`}
          style={{
            width: '100%',
          }}
        />
      </Grid>
    </Grid>
  );
}
