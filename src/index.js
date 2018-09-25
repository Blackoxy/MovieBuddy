import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import Auth from "./Auth";

const auth = new Auth();

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes)
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/
let initialState = {
    name: 'Anhuelita',
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

window.setState(initialState)
