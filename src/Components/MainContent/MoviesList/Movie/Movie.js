import React from 'react';
import moviesData from '../../../../services/moviesData';
import errorSound from '../../../../assets/audio/error.mp3';
import winSound from '../../../../assets/audio/win.mp3';

const Movie = (props) => (

<li className="movie"
onClick={(event) => {
  props.movie(moviesData[props.currentLevel].find((elem) => elem.id === props.guessMovieId));
  props.setShowMovieInfo(true);
  if (props.movieId === props.guessMovieId && !props.checkGuessMovie) {
    props.setCheckGuessMovie(!props.checkGuessMovie);
    const sound = new Audio(winSound);
    sound.play();
    sound.addEventListener('ended', () => sound.remove());
    return;
  }
  const { target } = event;
  if (!target.classList.contains('clicked') && !props.checkGuessMovie) {
    props.setAttempts(props.attempts - 1);
    const sound = new Audio(errorSound);
    sound.play();
    sound.addEventListener('ended', () => sound.remove());
  } else {
    return;
  }
  target.className += ' clicked';
}
}>{props.name}</li>

);

export default Movie;
