import { useEffect, useState } from "react";
import "./Movie.css";
function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=564727fa&s=batman")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <h2>Movie List</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "230px", objectFit: "cover" }}
            />
            <h4>{movie.Title}</h4>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieApp;
