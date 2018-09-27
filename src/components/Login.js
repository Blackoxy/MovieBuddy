import React from 'react';
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    toggle =() => {
        this.setState({
            visible : !this.state.visible
        })
    }


    render(){
        return (
            <section className="container-fluid">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-10 mx-auto">
                            <div>
                                <div>
                                    <img className="heroLogo" src={logo} alt="movie buddy logo"/>
                                </div>
                                {!this.props.auth.isAuthenticated() ? <button className="loginButton bg-teal" onClick={this.props.auth.login}>Login / Signup</button> : <button className="loginButton bg-teal" ><a href="/movies">Enter</a></button>}


                            </div>
                        </div>
                        </div>
                    <div className="row d-flex justify-content-space-between m-0">
                        <div className="main-nav bg-eggplant">
                            <div className="col-sm-6 ml-auto">
                                {this.state.visible ? <nav>
                                    <ul>
                                        <li><a>About</a></li>
                                        <li><a>Contact Us</a></li>
                                        <li><a onClick={this.props.auth.logout}>Log out</a></li>
                                    </ul>
                                </nav> : null}
                            </div>


                            { this.state.visible ? <FontAwesomeIcon onClick={this.toggle} className="fa-2x nav-toggle" icon={faTimes} /> : <FontAwesomeIcon onClick={this.toggle} className="fa-2x nav-toggle" icon={faBars}  /> }
                        </div>
                    </div>
                </div>
            </section>
            )

}
}

export default Login;
