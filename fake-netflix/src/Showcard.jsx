import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {movie} from './movie.json';


export default class Showcard extends Component {
  render() {
    const Movies = movie.map((element) => {
      return(
       <div className="wrapper-card">
         <img src={element.Poster}/>
         <h3>{element.Title}</h3>
         <p>{element.Released}</p>
         <p>{element.Plot}</p>
       </div>
      )
    })
    return (
      <div>
        <NavLink className="home-button" to="/">Home</NavLink>
        <div className= "search">
        {Movies}
        </div>
        
      </div>
    );
  }
}