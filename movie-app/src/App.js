import SearchBar from './components/searchbar/SearchBar';
import './App.css';
import MovieBanner from './components/MovieBanner';
import MovieRow from './components/MovieRow';
import Main from './page/Main';

function App() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <MovieBanner />
      <MovieRow title="Trending Movie" id="Trend" />
      <Main />
    </>
  );
}

export default App;
