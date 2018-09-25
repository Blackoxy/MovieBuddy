import React, {Component} from 'react'
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"

class Secret extends Component {
    
    render(){
        const movies = this.props.data.map(movie => {
            return <Movie    poster_path={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            popularity={movie.popularity}
                            />
            })

        return (
            <div>
                <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
                <button className="btn btn-info" onClick={this.props.auth.logout}>Logout</button>
                <div className="card listing">
                    {movies}
                </div>
            </div>
        )
    }
}

export default Secret