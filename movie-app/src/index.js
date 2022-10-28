import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './page/NotFound';
import TvShows from './routes/tvShows';
import { CssBaseline, ThemeProvider } from '@mui/material';
import defaultTheme from './theme/defaultTheme';
import MovieDetails from './page/MovieDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movie">
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
        <Route path="tvShows" element={<TvShows />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
