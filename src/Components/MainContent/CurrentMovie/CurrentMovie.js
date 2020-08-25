import React from 'react';
import Player from '../AudioPlayer/AudioPlayer';
import './CurrentMovie.css';

const CurrentMovie = (props) => (
    <div className="movie__inner">
      <div className="movie-image" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className='width'>
        <h2>{props.movie}</h2>
        <Player audio={props.audio}/>
      </div>
    </div>
);

export default CurrentMovie;
