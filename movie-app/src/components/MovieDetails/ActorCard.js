import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { BASE_IMG_URL } from '../../data';

export default function ActorCard({ data }) {
  const { name, profile_path: profilePath } = data || {};

  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid
        key={name}
        item
        sm
        width={isMobileDown ? 163.5 : 'auto'}
        sx={{
          position: 'relative',
        }}
      >
        <img src={`${BASE_IMG_URL}/w185${profilePath}`} alt={`${name}`} style={{ width: '100%' }} />
        <Typography
          variant="body1"
          textAlign="center"
          p={1}
          sx={{ position: 'absolute', bottom: 0, width: '100%', background: 'rgba(0, 0, 0, 0.5)' }}
        >
          {name}
        </Typography>
      </Grid>
    </>
  );
}
