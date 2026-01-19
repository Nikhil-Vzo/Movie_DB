import './nav.css'

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