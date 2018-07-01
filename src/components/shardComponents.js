import React from 'react';
import 'material-icons-react';
import { Link } from 'react-router-dom';
import './shardComponents.css';

export function header(view){
  switch (view) {
    case 'info':
        return (
          <header className="App-header">
            <Link to={"/"} >
              <i className="material-icons">arrow_back_ios</i>
            </Link>
            <i className="material-icons">favorite_border</i>
          </header>
        );
        break;
    default:
      return (
        <header className="App-header">
          <i className="material-icons gold">arrow_back_ios</i>
          Hår
          <i className="material-icons rotate gold">tune</i>
        </header>
      );
  }
}

export function grade(stars) {
  var i = 0;
  var starIcon = [];
  while (i < 5) {
    if (stars > i) {
      starIcon.push(<i key={i} className="material-icons gold starSize">star</i>);
    } else {
      starIcon.push(<i key={i} className="material-icons gold starSize">star_border</i>);
    }
    i++;
  }
  starIcon.push(<span key={6} className="ratingText">{stars}/5</span>)
  return  starIcon;
}
