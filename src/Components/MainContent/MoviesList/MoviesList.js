import React, { useEffect, useState } from 'react';
import './MoviesList.css';
import moviesData from '../../../services/moviesData';
import Movie from './Movie/Movie';

const MoviesList = (props) => {
  const [movies, setMovies] = useState(moviesData[props.currentLevel]);

  useEffect(() => {
    setMovies(moviesData[props.currentLevel].sort(() => 0.5 - Math.random()));
  }, [props.currentLevel]);

  return (
  <ul className="movies-list">
          {
          movies.map((elem) => (
            <Movie
              name={elem.movie} key={elem.id} guessMovieId={elem.id}
              currentLevel={props.currentLevel} movie={props.setClickedMovie}
              movieId={props.guessMovieId} setCheckGuessMovie={props.setCheckGuessMovie}
              checkGuessMovie={props.checkGuessMovie} setAttempts={props.setAttempts}
              attempts={props.attempts}>
            </Movie>
          ))
          }
        </ul>
  );
};

export default MoviesList;
