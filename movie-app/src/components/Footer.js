import { Box, Container, Typography, Link, useTheme, useMediaQuery } from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={3} sx={{ backgroundColor: '#45464F' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: `${isMobileDown ? '0.7em' : '1em'}` }}>
            NANUM MOVIE APP
          </Typography>

          <Link
            href="https://github.com/chingu-voyages/v41-geckos-team-18"
            underline="hover"
            sx={{ color: 'white', fontSize: `${isMobileDown ? '0.7em' : '1em'}` }}
          >
            made by Chingu Project v41, 2022
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
