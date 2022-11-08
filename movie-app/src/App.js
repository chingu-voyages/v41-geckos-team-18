import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import MovieDetails from './page/MovieDetails';
import NotFound from './page/NotFound';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="movie">
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
