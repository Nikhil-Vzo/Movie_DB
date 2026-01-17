import Moviecard from "./components/moviecard";

const movies = [
    {id:1, title:"inception", release_date:"2028"},
    {id:2, title:"lucky the racer", release_date:"2090"}

];

export function getMovies()
{
    return (movies.map((movie => {
        return <Moviecard key={movie.id} title={movie.title} release_date={movie.release_date} />
    })))
}