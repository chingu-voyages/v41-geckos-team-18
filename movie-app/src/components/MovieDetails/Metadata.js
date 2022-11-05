import { Grid, Typography } from '@mui/material';
import { getKeywords } from '../../data';

export default function Metadata({ data }) {
  // Destructuring nullable object. Prevent ".map() is not a function" error
  // prettier-ignore
  const {
    details: { title, overview } = {},
    keywords: { keywords } = {},
  } = data || {};

  return (
    <>
      <Grid container item gap={2}>
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Keywords: {getKeywords(keywords)}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{overview}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
