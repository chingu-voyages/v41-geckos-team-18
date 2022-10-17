import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Movies from './routes/movies';
import TvShows from './routes/tvShows';
import FetchMovie from './routes/api/fetch-movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="movies" element={<Movies />} />
        <Route path="tvShows" element={<TvShows />} />
      </Route>
      <Route path="/results/fetch-movie" element={<FetchMovie />} />
    </Routes>
  </BrowserRouter>,
);
