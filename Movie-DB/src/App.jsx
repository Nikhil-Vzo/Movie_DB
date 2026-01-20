import { useState } from 'react'
import Navbar from './components/navbar'
import { getMovies } from '../src/pages/home'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-container">
        {getMovies(searchTerm)}
      </div>
    </>
  )
}

export default App

