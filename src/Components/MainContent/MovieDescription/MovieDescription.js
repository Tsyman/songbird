import React from 'react';
import './MovieDescription.css';
import Player from '../AudioPlayer/AudioPlayer';

const MovieDescription = (props) => (
  <React.Fragment>
    <div className="movie-description__inner">
      <div className="movie-description-image" style={{ backgroundImage: `url(${props.selectedMovieImage})` }}></div>
      <div className='movie-info'>
        <h3>{props.selectedMovie}</h3>
        <hr className='line'></hr>
        <h3>Год производства: {props.selectedMovieYear}</h3>
        <hr className='line'></hr>
        <h3>{props.selectedMovieRating}</h3>
        <hr className='line'></hr>
        <Player audio={props.selectedMovieAudio}/>
      </div>
    </div>
    <div className='describe__inner'>
      <a href='#' className='focus'>Описание(нажать)</a>
      <p className='hidden'>{props.selectedMovieDescription}</p>
    </div>
  </React.Fragment>

);

export default MovieDescription;
