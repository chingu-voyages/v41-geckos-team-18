import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#0037B9',
      main: '#2B52D4',
      dark: '#0037B9',
    },
    secondary: {
      light: '#BFC5E8',
      main: '#575D7B',
      dark: '#292F4A',
    },
    tertiary: {
      light: '#EFB4E2',
      main: '#7E4E76',
      dark: '#4B2146',
    },
    error: {
      light: '#FFB4AB',
      main: '#BA1A1A',
      dark: '#690005',
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
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
  },
});

// Apply MUI's font responsiveness
const defaultTheme = responsiveFontSizes(theme);
export default defaultTheme;
