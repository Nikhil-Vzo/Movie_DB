import './moviecard.css'

function Moviecard({ movie, image, title, release_date, isFavorite, addToFavorites, removeFromFavorites }) {

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="poster">
        <div className="img">
          <img src={image} ></img>
          <button className="heart-btn" onClick={handleFavoriteClick}>
            {isFavorite ? '❤️Added' : '🤍'}
          </button>
        </div>
        <div className="poster-details">
          <p className="title">{title}</p>
          <p className="release-date">{release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default Moviecard
