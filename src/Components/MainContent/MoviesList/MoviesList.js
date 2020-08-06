import React from 'react';
import './MoviesList.css';
import moviesData from '../../../services/moviesData';
import Movie from './Movie/Movie';

const MoviesList = () => (

        <ul className="movies-list">
          {
          moviesData[0].map((elem) => (
            <Movie name={elem.movie} key={elem.id}></Movie>
          ))
          }
        </ul>

);

export default MoviesList;
