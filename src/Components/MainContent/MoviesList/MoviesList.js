import React, { useEffect, useState } from 'react';
import './MoviesList.css';
import moviesData from '../../../services/moviesData';
import Movie from './Movie/Movie';

const MoviesList = (props) => {
  const [movies, setMovies] = useState(moviesData[props.level]);

  useEffect(() => {
    setMovies(moviesData[props.level].sort(() => 0.5 - Math.random()));
  }, [props.level]);

  return (
  <ul className="movies-list">
          {
          movies.map((elem) => (
            <Movie
              name={elem.movie} key={elem.id} id={elem.id}
              level={props.level} movie={props.setClickedMovie}>
            </Movie>
          ))
          }
        </ul>
  );
};

export default MoviesList;
