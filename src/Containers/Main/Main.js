import React, { useState, useEffect } from 'react';
import CurrentMovie from '../../Components/MainContent/CurrentMovie/CurrentMovie';
import MoviesList from '../../Components/MainContent/MoviesList/MoviesList';
import MovieDescription from '../../Components/MainContent/MovieDescription/MovieDescription';
import './Main.css';
import NextCategoryBtn from '../../Components/MainContent/NextCategoryBtn/NextCategoryBtn';
import moviesData from '../../services/moviesData';
import getRandomInt from '../../services/GetRandomInt';

const MainContent = () => {
  const [currentLevel, setLevel] = useState(0);
  const randomMovie = () => moviesData[currentLevel][getRandomInt(0, moviesData.length - 1)];
  const [movie, setMovie] = useState(randomMovie());
  const [clickedMovie, setClickedMovie] = useState({});

  useEffect(() => {
    setMovie(randomMovie());
  }, [currentLevel]);

  return (
      <main className='main-content'>
        <CurrentMovie
          level={currentLevel}
          movie={movie.movie}
          audio={movie.audio}
          image={movie.image}
        />
        <div className="container">
          <MoviesList level={currentLevel} setClickedMovie={setClickedMovie}/>
          <MovieDescription
            movie={clickedMovie.movie}
            audio={clickedMovie.audio}
            image={clickedMovie.image}
            year={clickedMovie.year}
            rating={clickedMovie.rating}
            description={clickedMovie.description}
          />
        </div>
        <NextCategoryBtn
          setLevel={setLevel}
          currentLevel={currentLevel}
        />
      </main>
  );
};

export default MainContent;
