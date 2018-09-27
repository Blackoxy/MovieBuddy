import React from 'react'
import AddMovie from './AddMovie'
import { Modal } from 'react-bootstrap'

const Movie = (props) => {
    const poster = 'https://image.tmdb.org/t/p/original'

    return (

        <li className="contain bg-eggplant">
            <img className="resp" src={`${poster}${props.poster_path}`} alt="Movie"/>
            <div className="body">
                <h4>{props.title}</h4>
                {/* <p>{props.overview}</p> */}
            </div>
            <AddMovie title={props.title} />
        </li>

    )
}

class MovieModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

}

export default Movie
