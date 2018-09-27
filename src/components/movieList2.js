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
            console.log('test')
            return <Movie    poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                popularity={movie.popularity}
                movieData={movie.movieData}
                loadMovie={this.props.loadMovie}
            />
            })

        return (

            <React.Fragment>

                <h3> Add Movies to your Watch List below: </h3>
                <ul className="listing listings"> {movies(this.props.data)} </ul>
            </React.Fragment>
            )
    }
}

export default MovieList;
