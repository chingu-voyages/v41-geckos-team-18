import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6555d2',
    },
    secondary: {
      main: '#54646f',
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
    fontFamily: 'Oswald',
    body1: {
      fontFamily: 'Nunito Sans',
    },
    h6: {
      lineHeight: 1.8,
    },
    caption: {
      fontFamily: 'Nunito Sans',
    },
    overline: {
      fontFamily: 'Nunito Sans',
    },
    h5: {
      lineHeight: 1.45,
    },
    button: {
      fontFamily: 'Nunito Sans',
    },
    body2: {
      fontFamily: 'Nunito Sans',
    },
    subtitle2: {
      fontFamily: 'Nunito Sans',
    },
    subtitle1: {
      fontFamily: 'Nunito Sans',
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
