import { useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load watchlist from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("movieWatchlist");
      if (saved) {
        setWatchlist(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load watchlist:", err);
    }
  }, []);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("myWatchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Search movies from TMDB API with debounce
  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    setLoading(true);

    const timerId = setTimeout(() => {
      fetchMovies(query);
    }, 500);
  }, []);

  async function fetchMovies(searchQuery) {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function addToWatchlist(movie) {
    const newMovie = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview,
      vote_average: movie.vote_average,
      watched: false,
    };
    setWatchlist([...watchlist, newMovie]);
  }

  function removeFromWatchlist(movieId) {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  }

  function toggleWatched(movieId) {
    const updated = watchlist.map((m) =>
      m.id === movieId ? { ...m, watched: !m.watched } : m
    );
    setWatchlist(updated);
    console.log("Toggled movie. Current list:", watchlist);
  }

  const filteredWatchlist = watchlist.filter((m) => {
    if (filter === "watched") return !m.watched;
    if (filter === "unwatched") return m.watched;
    return true;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Movies Tracker</h1>
        <p>Search, save, and track your favorite movies</p>
      </header>

      <main>
        {/* Search Section */}
        <section className="search-section">
          <h2>Search Movies</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {loading && <p className="status-message">Searching...</p>}
          {error && <p className="error-message">Error: {error}</p>}

          <div className="movie-grid">
            {searchResults.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                actionLabel="+ Add to Watchlist"
                onAction={() => addToWatchlist(movie)}
              />
            ))}
          </div>
        </section>

        {/* Watchlist Section */}
        <section className="watchlist-section">
          <div className="watchlist-header">
            <h2>
              My Watchlist{" "}
              <span className="count">({filteredWatchlist.length}</span>
            </h2>
            <div className="filter-buttons">
              <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={filter === "watched" ? "active" : ""}
                onClick={() => setFilter("watched")}
              >
                Watched
              </button>
              <button
                className={filter === "unwatched" ? "active" : ""}
                onClick={() => setFilter("unwatched")}
              >
                Unwatched
              </button>
            </div>
          </div>

          {filteredWatchlist.length === 0 ? (
            <p className="empty-message">
              {watchlist.length === 0
                ? "Your watchlist is empty. Search for movies to add!"
                : "No movies match this filter."}
            </p>
          ) : (
            <div className="movie-grid">
              {filteredWatchlist.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isWatchlist={true}
                  onToggleWatched={() => toggleWatched(movie.id)}
                  onRemove={() => removeFromWatchlist(movie.id)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>Powered by TMDB API</p>
      </footer>
    </div>
  );
}

export default App;
