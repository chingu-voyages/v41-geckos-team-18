import { Grid, Link, Typography } from '@mui/material';
import { BASE_IMG_URL } from '../../data';

export default function ActorCard({ data }) {
  const { name, profile_path: profilePath } = data || {};
  return (
    <>
      <Grid key={name} item>
        <Link to="/" component="button" underline="none">
          <img
            src={`${BASE_IMG_URL}w500${profilePath}`}
            alt={`${name}`}
            style={{ width: '12rem' }}
          />
          <Typography variant="body1">{name}</Typography>
        </Link>
      </Grid>
    </>
  );
}
