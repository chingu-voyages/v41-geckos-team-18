import { Grid, Typography } from '@mui/material';
import { getKeywords } from '../../data';

export default function Metadata({ data }) {
  // prettier-ignore
  const { details: { overview } = {}, keywords: { keywords } = {} } = data || {};

  return (
    <>
      <Grid container item gap={2}>
        <Grid item>
          <Typography variant="body1">
            <i>{getKeywords(keywords)}</i>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{overview}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
