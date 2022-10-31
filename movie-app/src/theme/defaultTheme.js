import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#795548',
    },
    secondary: {
      main: '#c62828',
    },
    background: {
      default: '#1B1B1F',
      paper: '#45464F',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: 'Syne',
    body1: {
      fontFamily: 'Bitter',
    },
    body2: {
      fontFamily: 'Bitter',
    },
    button: {
      fontFamily: 'Bitter',
      fontWeight: 500,
    },
    caption: {
      fontFamily: 'Bitter',
    },
    overline: {
      fontFamily: 'Bitter',
    },
    h1: {
      fontWeight: 400,
    },
    h2: {
      fontWeight: 400,
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
