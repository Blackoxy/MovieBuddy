import React, {Component} from 'react'
import logo from "../assets/movie-buddy-logo.png"

class Secret extends Component {
    render(){
        return (
            <div>
                <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
                Secret Area<br/>
                <a href="/">Home</a>
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}

export default Secret