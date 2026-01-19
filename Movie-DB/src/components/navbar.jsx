import './nav.css'

function Navbar()
{
    return(
        <>
        <div className="nav">
            <div className="search-bar">
                <input className="sb" type="text" placeholder="Search" />
                <button className="sb-btn" type='submit'> Search  </button>
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