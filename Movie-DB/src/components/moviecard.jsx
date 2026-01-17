function Moviecard({title,release_date})
{
    return(
        <>
        <div className="poster">
            <div className="img">
                    <img src={""} ></img>
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