import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getMovies } from './movie_data'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="movie-container">
      {getMovies()}
    </div>
  </StrictMode>,
)
