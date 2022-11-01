import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#537aff',
    },
    secondary: {
      main: '#c73473',
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
    fontFamily: 'Nanum Myeongjo, serif',
    fontSize: 14,
    h1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 700,
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
