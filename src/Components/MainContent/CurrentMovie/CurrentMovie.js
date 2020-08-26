import React from 'react';
import Player from '../AudioPlayer/AudioPlayer';
import './CurrentMovie.css';
import placeholder from '../../../assets/images/placeholder.jpg';

const CurrentMovie = (props) => (
    <div className="movie__inner">
      <div
        className="movie-image"
        style={{ backgroundImage: `url(${props.checkGuessMovie ? props.guessMovieImage : placeholder})` }}>
      </div>
      <div className='width'>
        <h2>{props.checkGuessMovie ? props.guessMovie : '*******'}</h2>
        <Player audio={props.guessMovieAudio}/>
      </div>
    </div>
);

export default CurrentMovie;
