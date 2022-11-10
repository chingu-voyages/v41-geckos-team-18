import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box p={3} sx={{ backgroundColor: '#45464F' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>NANUM MOVIE APP</Typography>

          <Link
            href="https://github.com/chingu-voyages/v41-geckos-team-18"
            underline="hover"
            sx={{ color: 'white' }}
          >
            made by Chingu Project v41, 2022
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
