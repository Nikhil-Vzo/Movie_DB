import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Fav from './pages/fav.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  };

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />} />
        <Route path="/favourites" element={<Fav favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />} />
      </Routes>
    </>
  )
}

export default App