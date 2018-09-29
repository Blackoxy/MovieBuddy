import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render (){
        const movies = (data) => data.map(movie => {
            return <Movie toggleModal={this.props.toggleModal}   poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                popularity={movie.popularity}
                movieData={movie.movieData}
                loadMovie={this.props.loadMovie}
            />
            })
        return (

            <section className="movie-list bg-caramel">

                <h2> Now Playing in Theaters:</h2>
                <ul className="listing listings bg-caramel"> {movies(this.props.data)} </ul>
            </section>
            )
    }
}

export default MovieList;
