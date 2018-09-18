import React, {Component} from 'react';
import "../App.css"

class Main extends Component {
    render(){
        return (
            <div>
                <p>
                Hello, {this.props.name} <br/>
                Enter? <a href="/secret">Click Here</a>
                </p>
                <p>"Auth0 provides authentication and authorization as a service. We are here to give developers and companies the building blocks they need in order to secure their applications, without having to become security experts."</p>
            
            {!this.props.auth.isAuthenticated() &&
            <div>
                <hr/>
                Please login first
                <hr/>
                <button onClick={this.props.auth.login}>Login</button>
            </div>}
            </div>
        )
    }
}

export default Main;