import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Showcard from './Showcard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Showcard" component={Showcard} />
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
