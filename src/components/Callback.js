import React, {Component} from "react";
import Auth from "../Auth";
import {withRouter} from 'react-router-dom'

const auth0Client = new Auth();

class Callback extends Component {
    // componentDidMount(){
    //     const auth = new Auth()
    //     auth.handleAuthentication()

    // }
    // render(){
    //     return(
    //         <div>
    //             Loading...
    //             <br/>
    //             <a href="/movies">Home</a>
    //         </div>
    //     )
    // }
    async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

// export default Callback
export default withRouter(Callback);
