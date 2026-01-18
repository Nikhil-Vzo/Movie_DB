import './moviecard.css'

function Moviecard({image,title,release_date})
{
    
    return(
        <>
        <div className="poster">
            <div className="img">
                    <img src={image} ></img>
                    <span>❤️</span>
            </div>
            <div className="overlay">
                <p>{title}</p>
                <p>{release_date}</p>
            </div>
        </div>
        </>
    )
}

export default Moviecard