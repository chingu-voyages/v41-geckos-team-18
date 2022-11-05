import { Box, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function StarRating({ voteAverage }) {
  const roundedVote = Number((voteAverage / 2).toFixed(2));
  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex' }}>
      <Rating
        name="half-rating-read"
        defaultValue={roundedVote}
        precision={0.5}
        readOnly
        size={isMobileDown ? 'small' : 'medium'}
      />
      <Typography display={isMobileDown ? 'none' : 'block'}>{roundedVote}</Typography>
    </Box>
  );
}
