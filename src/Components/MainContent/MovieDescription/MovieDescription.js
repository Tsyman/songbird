import React from 'react';
import './MovieDescription.css';
import Player from '../AudioPlayer/AudioPlayer';

const MovieDescription = (props) => (
  <div style={{ width: '700px' }}>
    <div className="movie-description__inner">
      <div className="movie-description-image" style={{ backgroundImage: `url(${props.selectedMovieImage})` }}></div>
      <div>
        <h2>{props.selectedMovie}</h2>
        <h2>{props.selectedMovieYear}</h2>
        <div className="inner">
          <h2>{props.selectedMovieRating}</h2>
          <Player audio={props.selectedMovieAudio}/>
        </div>
      </div>
    </div>
    <p>{props.selectedMovieDescription}</p>
  </div>

);

export default MovieDescription;
