import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F50057',
    },
    secondary: {
      main: '#0f0',
    },
    error: {
      main: '#b00020',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
