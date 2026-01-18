import './moviecard.css'

import './moviecard.css'

function Moviecard({image,title,release_date})
{
    
    return(
        <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  
        <div className="poster">
            <div className="img">
                <img src={image} ></img>
                <span className="heart">❤️</span>
            </div>
            <div className="poster-details">
                <p className="title">{title}</p>
                <p className="release-date">{release_date}</p>
            </div>
        </div>
        </div>
    )
}

export default Moviecard

