import React from 'react';
import './MovieDescription.css';
import Player from '../AudioPlayer/AudioPlayer';

const MovieDescription = (props) => (
  <div style={{ width: '700px' }}>
    <div className="movie-description__inner">
      <div className="movie-description-image" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div>
        <h2>{props.movie}</h2>
        <h2>{props.year}</h2>
        <div className="inner">
          <h2>{props.rating}</h2>
          <Player audio={props.audio}/>
        </div>
      </div>
    </div>
    <p>{props.description}</p>
  </div>

);

export default MovieDescription;
