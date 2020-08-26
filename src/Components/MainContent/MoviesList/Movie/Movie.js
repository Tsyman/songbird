import React from 'react';
import './Movie.css';
import moviesData from '../../../../services/moviesData';

const Movie = (props) => (

<li className="movie"
onClick={(event) => {
  props.movie(moviesData[props.currentLevel].find((elem) => elem.id === props.guessMovieId));
  if (props.movieId === props.guessMovieId) {
    props.setCheckGuessMovie(!props.checkGuessMovie);
    return;
  }
  const { target } = event;
  if (!target.classList.contains('clicked') && !props.checkGuessMovie) {
    props.setAttempts(props.attempts - 1);
  } else {
    return;
  }
  target.className += ' clicked';
}
}>{props.name}</li>

);

export default Movie;
