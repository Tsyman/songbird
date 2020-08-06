import React from 'react';
import './MovieDescription.css';
import Player from '../AudioPlayer/AudioPlayer';

const MovieDescription = () => (
  <div>
    <div className="movie-description__inner">
      <div className="movie-description-image"></div>
      <div>
        <h2>Movie(year)</h2>
        <div className="inner">
          <h2>Rating</h2>
          <Player/>
        </div>
      </div>
    </div>
    <p>Description</p>
  </div>

);

export default MovieDescription;
