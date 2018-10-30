import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class Homepage extends Component {
  render() {
    return (
      // <div className="App">
      // <h1 className = "main-title">Netflix</h1>
        <NavLink className="home-button" to="/Showcard">Movie</NavLink>
      // </div>
    );
  }
}