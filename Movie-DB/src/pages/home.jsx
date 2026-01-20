import Moviecard from "../components/moviecard";


const movies_poster = "https://picsum.photos/300/200";

const movies = [
    {id:1, img: movies_poster, title:"inception", release_date:"2028"},
    {id:2, img: movies_poster, title:"lucky the racer", release_date:"2090"}

];

export default function Home({ searchTerm }) {
  const getMovies = (search) => {
    return movies
      .filter(movie =>
        movie.title.toLowerCase().startsWith(search.toLowerCase())
      )
      .map(movie => (
        <Moviecard
          key={movie.id}
          image={movie.img}
          title={movie.title}
          release_date={movie.release_date}
        />
      ));
  }

  return (
    <div className="movie-container">
      {getMovies(searchTerm)}
    </div>
  )
}
