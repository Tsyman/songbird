import React from 'react';
import './Movie.css';
import moviesData from '../../../../services/moviesData';

const Movie = (props) => (

<li className="movie" onClick={() => props.movie(moviesData[props.level].find((elem) => elem.id === props.id))}>{props.name}</li>

);

export default Movie;
