import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getMovies } from './movie_data'
import Navbar from './components/navbar'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="movie-container">
      {getMovies()}
    </div>
  </StrictMode>,
)
