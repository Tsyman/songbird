import React from 'react';
import Player from '../AudioPlayer/AudioPlayer';
import './CurrentMovie.css';
import MoviesData from '../../../services/moviesData';
import getRandomInt from '../../../services/GetRandomInt';

const CurrentMovie = (props) => {
  const randomMovie = MoviesData[props.level][getRandomInt(0, MoviesData.length - 1)];

  return (
    <div className="movie__inner">
    <div className="movie-image"></div>
    <div className='width'>
      <h2>{randomMovie.movie}</h2>
      <Player audio={randomMovie.audio}/>
    </div>
  </div>
  );
};

export default CurrentMovie;
