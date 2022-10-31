import SearchBar from './components/searchbar/SearchBar';
import './App.css';
import Main from './page/Main';
import MovieBanner from './components/MovieBanner';

function App() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <MovieBanner />
      <Main />
    </>
  );
}

export default App;
