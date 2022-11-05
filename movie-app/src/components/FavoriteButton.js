import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavoriteButton({ id, title }) {
  return (
    <Button variant="text">
      <FavoriteBorderIcon />
    </Button>
  );
}
