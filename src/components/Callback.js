import React, {Component} from "react";
import Auth from "../Auth";

class Callback extends Component {
    componentDidMount(){
        const auth = new Auth()
        auth.handleAuthentication()

    }
    render(){
        return(
            <div>
                Loading...
                <br/>
                <a href="/movies">Home</a>
            </div>
        )
    }
}

export default Callback
