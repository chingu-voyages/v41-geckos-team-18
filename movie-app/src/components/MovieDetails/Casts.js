import { Grid } from '@mui/material';
import { getTopFive } from '../../data';
import ActorCard from './ActorCard';

export default function Casts({ casts }) {
  const topFive = getTopFive(casts);

  return (
    <>
      <Grid container item gap={2}>
        {topFive.map((actor, idx) => (
          <ActorCard key={idx} data={actor} />
        ))}
      </Grid>
    </>
  );
}
