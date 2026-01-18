import './nav.css'

function Navbar()
{
    return(
        <>
        <div className="nav">
            <div className="search-bar"><i class="fa-solid fa-magnifying-glass"></i></div>
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