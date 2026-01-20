import Moviecard from "../components/moviecard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Fav({ favorites, addToFavorites, removeFromFavorites }) {
  return (
    <>
      {favorites.length === 0 ? (
        <div>
          <h1>Your fav movies will appear here when u add them</h1>
          <p>Start adding your fav movies</p>
        </div>
      ) : (
        <div className="movie-container">
          {favorites.map((movie) => (
            <Moviecard
              key={movie.id}
              movie={movie}
              image={`${IMAGE_BASE_URL}${movie.poster_path}`}
              title={movie.title}
              release_date={movie.release_date}
              isFavorite={true}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </>
  );
}