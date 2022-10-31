import { Typography, Grid } from '@mui/material';
import { getTopFive } from '../../data';
import ActorCard from './ActorCard';

export default function Casts({ casts }) {
  const getCasts = () => {
    const topFive = getTopFive(casts);
    return topFive.map((actor, idx) => <ActorCard key={idx} data={actor} />);
  };

  return (
    <>
      <Typography variant="h5" component="h3">
        Casts:
      </Typography>
      <Grid container spacing={2}>
        {getCasts()}
      </Grid>
    </>
  );
}
