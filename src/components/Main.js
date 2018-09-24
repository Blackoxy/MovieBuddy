import React, {Component} from 'react';
import "../App.css"
import logo from "../assets/movie-buddy-logo.png"

class Main extends Component {
    render(){
        return (
            <div>
                <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
                <p className="text-danger">
                To see your wishlist and buddy matches <a href="/secret">Click Here</a>
                </p>
            
            {!this.props.auth.isAuthenticated() &&
            <div>
                <button onClick={this.props.auth.login}>Login</button>
            </div>}
            </div>
        )
    }
}

export default Main;