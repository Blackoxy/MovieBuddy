import React, {Component} from 'react';
import "../App.css"

class Main extends Component {
    render(){
        return (
            <div>
                <p>
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