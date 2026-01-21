import './nav.css'
import { Link } from 'react-router-dom';

function Navbar({ searchTerm, setSearchTerm })
{
    return(
        <>
        <div className="nav">
            <div className="search-bar">
                <form 
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
                >
                <input 
                    className="sb" 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="sb-btn" type='submit'> Search  </button>
                </form>
            </div>
         
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favorite</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar