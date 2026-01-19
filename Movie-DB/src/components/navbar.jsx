import './nav.css'
import { useState } from "react"  


function Navbar()
{
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        
    };

    return(
        <>
        <div className="nav">
            <div className="search-bar">
                <form 
                onSubmit={handleSearch} 
                className="search-form"
                >
                <input 
                    className="sb" 
                    type="text" 
                    placeholder="Search" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="sb-btn" type='submit'> Search  </button>
                </form>
            </div>
         
            <div className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">Watchlist</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar