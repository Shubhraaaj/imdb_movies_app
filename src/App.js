import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import SearchResults from './pages/SearchResults';

function App() {
  const movie={
      "adult":false,
      "backdrop_path":"/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
      "genre_ids":[28,12,878],
      "id":634649,
      "original_language":"en",
      "original_title":"Spider-Man: No Way Home",
      "overview":"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "popularity":15397.484,
      "poster_path":"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "release_date":"2021-12-15",
      "title":"Spider-Man: No Way Home",
      "video":false,
      "vote_average":8.5,
      "vote_count":2196};
  return (
    <div className="App">
      <header className="App-header">
          <SearchResults />
      </header>
    </div>
  );
}

export default App;
