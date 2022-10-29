import { Grid, Link } from '@mui/material';

export default function Trailers({ trailers }) {
  return (
    <Grid container spacing={2}>
      {trailers.map((trailer, idx) => {
        const { key } = trailer;
        return (
          <Grid key={key} item>
            <Link variant="button" href={`https://www.youtube.com/watch?v=${key}`}>
              <img src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`} alt={`Trailer${idx}`} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
