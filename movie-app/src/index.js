import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import defaultTheme from './theme/defaultTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>,
);
