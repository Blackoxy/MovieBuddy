import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Secret from './components/Secret.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'

const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a1e4aa1da92fe4650fdbf74e93240a8a&language=en-US&page=1&region=US'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        var userId = localStorage.getItem('User_id')
        console.log(userId)
        
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
                    <div className="row">
                        <div className="main-content col-sm-8 mx-auto">
                            {mainComponent}
                        </div>
                    </div>
                    <footer>
                        Test
                    </footer>
                </section>
            </div>

            );
    }
  }

export default App;
