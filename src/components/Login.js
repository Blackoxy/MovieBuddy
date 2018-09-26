import React from 'react';
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class Main extends React.Component {
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
                        <div className="col-sm-8 mx-auto">
                            <div>
                                <div className="header">
                                    <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
                                </div>
                                <button className="loginButton"><a href="/secret">Login/Signup</a></button>
                                {!this.props.auth.isAuthenticated() && <button className="btn btn-info" onClick={this.props.auth.login}>Login</button>}

                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-space-between m-0">
                        <div className="main-nav">
                            <div className="col-sm-6 ml-auto">
                                {this.state.visible ? <nav>
                                    <ul>
                                        <li><a>About</a></li>
                                        <li><a>Contact Us</a></li>
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

export default Main;
