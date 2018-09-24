import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Secret from './components/Secret.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'

class App extends Component {
  render() {
      let mainComponent = "";
      switch(this.props.location){
        case "":
          mainComponent = <Main {...this.props}/>;
          break;
        case "callback":
          mainComponent = <Callback />;
          break;
        case "secret":
          mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>
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
