import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Secret from './components/Secret.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a1e4aa1da92fe4650fdbf74e93240a8a&language=en-US&page=1&region=US'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            data: [],
        }
    }

    loadData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.results,
                })
            })
    }

    toggle =() => {
        this.setState({
            visible : !this.state.visible
        })
    }

    componentDidMount = () => this.loadData()

    render() {
        let mainComponent = "";
        switch(this.props.location){
            case "":
                mainComponent = <Main data={this.state.data} {...this.props}/>;
                break;
            case "callback":
                mainComponent = <Callback />;
                break;
            case "secret":
                mainComponent = this.props.auth.isAuthenticated() ? <Secret data={this.state.data} {...this.props} /> : <NotFound/>
                break;
            default:
                mainComponent = <NotFound />;

        }

        return (
            <div className="App">
                <section className="container-fluid">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-sm-8 mx-auto">
                                {mainComponent}
                            </div>
                        </div>
                        <div className="row m-0">
                            <nav>
                                <a>About</a>
                                <a>Movie Buddies</a>
                                <a>Movies</a>
                                <a>Profile</a>
                                <a>Contact Us</a>
                                {this.state.visible ? <FontAwesomeIcon onClick={this.toggle} className="fa-2x" icon={faTimes} /> : <FontAwesomeIcon onClick={this.toggle} className="fa-2x" icon={faBars} />
                                }
                            </nav>
                        </div>
                    </div>
                </section>
            </div>

            );
    }
}

export default App;
