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
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: 'Nanum Myeongjo, serif',
      fontWeight: 400,
      lineHeight: 2,
    },
    h2: {
      fontFamily: 'Nanum Myeongjo, serif',
      fontWeight: 400,
      lineHeight: 2,
    },
    h3: {
      fontFamily: 'Nanum Myeongjo, serif',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Nanum Myeongjo, serif',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Nanum Myeongjo, serif',
      fontWeight: 400,
      lineHeight: 1,
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitle2: {
      fontWeight: 700,
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
