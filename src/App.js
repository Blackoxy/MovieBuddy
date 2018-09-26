import React, { Component } from 'react';
import './App.css';
import logo from "./assets/movie-buddy-logo.png"
import Main from './components/Main.js';
import Login from './components/Login.js';
import Secret from './components/Secret.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'

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

    componentDidMount = () => this.loadData()

    render() {
        let mainComponent = "";
        switch(this.props.location){
            case "":
                mainComponent = <Login data={this.state.data} {...this.props}/>;
                break;
            case "callback":
                mainComponent = <Callback />;
                break;
            case "secret":
                mainComponent = this.props.auth.isAuthenticated() ? <Main data={this.state.data} {...this.props} /> : <NotFound/>
                // mainComponent = this.props.auth.isAuthenticated() ? <Secret data={this.state.data} {...this.props} /> : <NotFound/>
                break;
            default:
                mainComponent = <NotFound />;

        }

        return (
            <div className="App">
                                {mainComponent}
            </div>

            );
}
}

export default App;
