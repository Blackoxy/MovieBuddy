import React from 'react';
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"
import { Router, Route, Switch, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import UserForm from "./UserForm"
import MovieList from "./MovieList"
import About from './About'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    toggle = () => {
        this.setState({
            visible : !this.state.visible
        })
    }
    verify = (movies) => {
        let unique = localStorage.getItem('User_id')
        let arr = []
        for (let i in movies) {
            arr.push(movies[i].userId)

        }
        for (let j in arr) {
            if (unique === arr[j]) {
                return (
                    <Switch>
                        <Route path='/movies' render={(props)=> <MovieList { ...props } data={this.props.data}/> } />
                        <Route path='/about' component={About} />
                    </Switch>
                    )
            }

        }
        for (let k in arr) {
            if (unique !== arr[k]){
                return <UserForm movieData={this.props.movieData} />

                }

        }

    }

    render(){
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <div>
                            <img className="buddyLogo" src={logo} alt="movie buddy logo"/>

                            <div className="main-content">
                                {/*!this.props.auth.isAuthenticated() && <button className="btn btn-info" onClick={this.props.auth.login}>Login</button>*/}
                                {this.verify(this.props.movieData)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-space-between m-0">
                    <div className="main-nav">
                        <div className="col-sm-6 ml-auto">
                            {this.state.visible ? <nav>
                                <ul>
                                    <Link to="/about" ><a>About</a></Link>
                                    <li><a>Movie Buddies</a></li>
                                    <Link to="/movies"><a>Movies</a></Link>
                                    <li><a>Profile</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a onClick={this.props.auth.logout} >Log Out</a></li>
                                </ul>
                            </nav> : null}
                        </div>


                        { this.state.visible ? <FontAwesomeIcon onClick={this.toggle} className="fa-2x nav-toggle" icon={faTimes} /> : <FontAwesomeIcon onClick={this.toggle} className="fa-2x nav-toggle" icon={faBars}  /> }
                    </div>
                </div>
            </section>
            )

}
}

export default Main;
