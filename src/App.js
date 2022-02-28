import './App.css';
import SearchResults from './pages/SearchResults';
import Header from './components/Header';
import SearchBar from './components/SeachBar';
import { useState } from 'react';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const search = (term) => {
      setSearchWord(term);
  };

  return (
    <div>
        <Header />
        <SearchBar searchTerm={search}/>
        <SearchResults keyword={searchWord}/>
        {/* <MovieDetails /> */}
    </div>
  );
}

export default App;
