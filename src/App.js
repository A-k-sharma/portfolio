import React, { Component } from 'react';
import '../style.css';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/navbar'
import Routes from './components/routes'



/* eslint-disable */

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Router>
            {/* <NavBar/> */}
            <Routes/>
          </Router>
          
        </div>
      </div>
    );
  }
}

export default App;
