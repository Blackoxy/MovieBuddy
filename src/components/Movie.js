import React from 'react'
import AddMovie from './AddMovie'

const Movie = (props) => {
    const poster = 'https://image.tmdb.org/t/p/original'

    return (

        <li className="contain">
            <img className="resp" src={`${poster}${props.poster_path}`} alt="Movie"/>
            <div className="body">
                <h4>{props.title}</h4>
                {/* <p>{props.overview}</p> */}
            </div>
            {/* <button className="movieButton btn btn-info">Add to Wishlist</button> */}
            <AddMovie loadMovie={props.loadMovie} movieData={props.movieData} title={props.title} />
        </li>

    )
}

export default Movie
