import { useState, useEffect } from "react";
import Moviecard from "../components/moviecard";
import { searchMovies, getPopularMovies } from "../../services/api";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Home({ searchTerm }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = searchTerm
        ? await searchMovies(searchTerm)
        : await getPopularMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Moviecard
          key={movie.id}
          image={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://picsum.photos/300/200"}
          title={movie.title}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
}
