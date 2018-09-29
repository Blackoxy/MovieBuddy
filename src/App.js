import React, { Component } from 'react';
import './App.css';
import logo from "./assets/movie-buddy-logo.png"
import Main from './components/Main.js';
import Login from './components/Login.js';
import Secret from './components/Secret.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'
import { Route } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a1e4aa1da92fe4650fdbf74e93240a8a&language=en-US&page=1&region=US'
const movieLink = 'https://moviebuddy-server.herokuapp.com/'
// const movieLink = 'http://localhost:4000'
const deleteLink = 'https://moviebuddy-server.herokuapp.com/movie/'
// const deleteLink = 'http://localhost:4000/movie/'

class App extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            visible: false,
            data: [],
            movieData: [],
            showModal: false,
            modalData: {}
        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleModal =(props) => {
        this.setState({
            showModal: !this.state.showModal,
            modalData: props
        })
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

    loadMovie = () => {
        fetch(movieLink)
            .then(response => response.json())
            .then(dat => {
                this.setState({
                    movieData: dat.result,
                })
            })
    }

    componentDidMount = () => this.loadData()

    componentWillMount = () => this.loadMovie()

    deleteOne = (id) => {
        const options = {
            method: 'DELETE',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(deleteLink + id, options)
            .then(res => {
                return res.json()
            })
            .then(() => {
                const oldData = this.state.movieData
                const newData = oldData.filter(pose => {
                    return !(id === pose.id)
                })
                this.setState({
                    movieData: newData
                })
            })
    }

    render() {
        let mainComponent = "";
        switch(this.props.location){
            case "":
                mainComponent = <Login data={this.state.data} {...this.props}/>;
                break;
            case "callback":
                mainComponent = <Callback toggleModal={this.toggleModal}/>;
                break;
            case "movies":
                mainComponent = this.props.auth.isAuthenticated() ? <Main toggleModal={this.toggleModal} deleteOne={this.deleteOne} loadMovie={this.loadMovie} movieData={this.state.movieData} data={this.state.data} {...this.props} /> : <NotFound/>
                // mainComponent = this.props.auth.isAuthenticated() ? <Secret data={this.state.data} {...this.props} /> : <NotFound/>
                    break;
            default:
                mainComponent = <NotFound />;

        }

        return (
            <div className="App">
                {mainComponent}
                    {this.state.showModal ?
                    <Modal toggle={this.toggleModal} isOpen={this.state.showModal} fade={false} centered={true} >
                        <ModalHeader className="bg-caramel">
                            {this.state.modalData.title}
                        </ModalHeader>
                        <ModalBody className="modal-body bg-caramel">
                            {this.state.modalData.overview}
                        </ModalBody>
                    </Modal> : null }
            </div>

            );
    }
}

export default App;
