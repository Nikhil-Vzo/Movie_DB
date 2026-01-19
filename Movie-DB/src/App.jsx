import Navbar from './components/navbar'
import { getMovies } from './movie_data'

function App() {
  return (
    <>
      <Navbar />
      <div className="movie-container">
        {getMovies()}
      </div>
    </>
  )
}

export default App
