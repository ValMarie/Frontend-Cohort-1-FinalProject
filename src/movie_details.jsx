import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import "./movie_details.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMG_BASE = "https://image.tmdb.org/t/p/w300";
const BASE_URL = "https://api.themoviedb.org/3";

const MoviePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie || null);

  useEffect(() => {
    if (!movie) {
      fetch(`${BASE_URL}/movie_details/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setMovie(data));
    }
  }, [id, movie]);

  if (!movie) return <div>Loading...</div>;

  const posterUrl = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : null;

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div className="movie-detail">
      <header >
        <nav className="nav-header">
            <h1>My Movie Tracker</h1>
        </nav>
      </header>
      <main>
        <section>
            <p>Showing details for movie ID: {id}</p>
          <div className="poster-detail">
            {posterUrl ? (
              <div className="">
                <img src={posterUrl} alt={`${movie.title} poster`} />
              </div>
            ) : (
              <div className="no-poster">No Poster</div>
            )}
          </div>
          <div className="poster-info">
            <h2 className="poster-title">{movie.title}</h2>
            <div className="poster-meta">
              <span className="year">{year}</span>
              {movie.vote_average > 0 && (
                <span className="rating">
                  {movie.vote_average.toFixed(1)} / 10
                </span>
              )}
            </div>
           <div>
             {movie.overview && <p className="detail-overview">{movie.overview}</p>}
           </div>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>Powered by TMDB API</p>
      </footer>
    </div>
  );
};

export default MoviePage;
