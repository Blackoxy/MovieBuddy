import React from 'react'
import AddMovie from './AddMovie';

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upForm: false
        }
    }

    showForm = () => {
        const tog = !this.state.upForm
        this.setState({
            upForm: tog
        })
    }

    render(){
        const poster = 'https://image.tmdb.org/t/p/original'
        const upForm = this.state.upForm
        return (

            <li className="contain">
                <img className="resp" src={`${poster}${this.props.poster_path}`} alt="Movie"/>
                <div className="body">
                    <h4>{this.props.title}</h4>
                    {/* <p>{this.props.overview}</p> */}
                </div>
                <div>
                    <button onClick={this.showForm} className="movieButton btn btn-info">Add to Wishlist</button>
                </div>
                {upForm ? <AddMovie title={this.props.title} /> : null}
            </li>

        )
    }
}

export default Movie
