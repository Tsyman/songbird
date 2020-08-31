import React from 'react';
import Player from '../AudioPlayer/AudioPlayer';
import './GuessMovie.css';
import placeholder from '../../../assets/images/placeholder.png';

const CurrentMovie = (props) => (
    <div className="movie__inner">
      <div
        className="movie-image"
        style={{ backgroundImage: `url(${props.checkGuessMovie ? props.guessMovieImage : placeholder})` }}>
      </div>
      <div className='guess-movie'>
        <h2 className='title'>{props.checkGuessMovie ? props.guessMovie : '*******'}</h2>
        <Player audio={props.guessMovieAudio} checkGuessMovie={props.checkGuessMovie}/>
      </div>
    </div>
);

export default CurrentMovie;
