import { useEffect, useState } from "react";

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
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <h2>Movie List</h2>
      <div style={{ display: "flex", flexWrip: "wrap", gap: "16px" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdID}
            style={{
              border: "1px solid #ccc",
              width: "200px",
              padding: "10px",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
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
