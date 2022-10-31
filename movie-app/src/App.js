import SearchBar from './components/searchbar/SearchBar';
import './App.css';
import Main from './page/Main';

function App() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <Main />
    </>
  );
}

export default App;
