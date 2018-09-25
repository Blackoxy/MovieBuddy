import React from 'react';
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"

const Main = (props) => {

    const movies = props.data.map(movie => {
        return <Movie    poster_path={movie.poster_path}
                        title={movie.title}
                        overview={movie.overview}
                        popularity={movie.popularity}
                        />
        })

    return (
        <div>
            <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
            <p className="text-danger">
            To see your wishlist and buddy matches <a href="/secret">Click Here</a>
            </p>

            {!props.auth.isAuthenticated() && <button className="btn btn-info" onClick={props.auth.login}>Login</button>}

            <ul className="listings listing">
                {movies}
            </ul>
            {/*<p>Login to start adding movies and matching with Movie Buddies</p>*/}
        </div>
    )
}

export default Main;
