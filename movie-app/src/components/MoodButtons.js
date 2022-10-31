import { Grid, Button } from '@mui/material';
import { movieMoods } from '../data';

function MoodButtons({ setUrl }) {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setUrl(`/api/fetch-trending-all`);
          }}
        >
          Trending
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setUrl(`/api/fetch-movie-mood?moodId=${movieMoods.funny}`);
          }}
        >
          Funny
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setUrl(`/api/fetch-movie-mood?moodId=${movieMoods.romantic}`);
          }}
        >
          Romantic
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setUrl(`/api/fetch-movie-mood?moodId=${movieMoods.dark}`);
          }}
        >
          Dark
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setUrl(`/api/fetch-movie-mood?moodId=${movieMoods.excited}`);
          }}
        >
          Excited
        </Button>
      </Grid>
    </Grid>
  );
}

export default MoodButtons;
