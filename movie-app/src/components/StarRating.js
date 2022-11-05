import { Box, Rating, Typography } from '@mui/material';

export default function StarRating({ voteAverage }) {
  const roundedVote = Number((voteAverage / 2).toFixed(2));
  return (
    <Box sx={{ display: 'flex' }}>
      <Rating name="half-rating-read" defaultValue={roundedVote} precision={0.5} readOnly />
      <Typography>{roundedVote}</Typography>
    </Box>
  );
}
