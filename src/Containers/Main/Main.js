import React, { useState, useEffect } from 'react';
import CurrentMovie from '../../Components/MainContent/CurrentMovie/CurrentMovie';
import MoviesList from '../../Components/MainContent/MoviesList/MoviesList';
import MovieDescription from '../../Components/MainContent/MovieDescription/MovieDescription';
import './Main.css';
import NextCategoryBtn from '../../Components/MainContent/NextCategoryBtn/NextCategoryBtn';
import moviesData from '../../services/moviesData';
import getRandomInt from '../../services/GetRandomInt';

const MainContent = (props) => {
  const [guessMovie, setMovie] = useState({});
  const [selectedMovie, setClickedMovie] = useState({});
  const [checkGuessMovie, setCheckGuessMovie] = useState(false);
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  useEffect(() => {
    const randomMovie = () => (
      moviesData[props.currentLevel][getRandomInt(0, moviesData.length - 1)]
    );
    setMovie(randomMovie());
  }, [props.currentLevel]);

  return (
      <main className='main-content'>
        <CurrentMovie
          guessMovie={guessMovie.movie}
          guessMovieAudio={guessMovie.audio}
          guessMovieImage={guessMovie.image}
          checkGuessMovie={checkGuessMovie}
        />
        <div className="container">
          <MoviesList
            currentLevel={props.currentLevel}
            setClickedMovie={setClickedMovie}
            guessMovieId={guessMovie.id}
            checkGuessMovie={checkGuessMovie}
            setCheckGuessMovie={setCheckGuessMovie}
            setAttempts={props.setAttempts}
            attempts={props.attempts}
            setShowMovieInfo={setShowMovieInfo}
          />
          {
            showMovieInfo
              ? <MovieDescription
                  selectedMovie={selectedMovie.movie}
                  selectedMovieAudio={selectedMovie.audio}
                  selectedMovieImage={selectedMovie.image}
                  selectedMovieYear={selectedMovie.year}
                  selectedMovieRating={selectedMovie.rating}
                  selectedMovieDescription={selectedMovie.description}
                />
              : <div>
                  <p>Послушайте плеер.</p>
                  <p>Выберите фильм из списка</p>
                </div>
          }

        </div>
        <NextCategoryBtn
          setCurrentLevel={props.setCurrentLevel}
          currentLevel={props.currentLevel}
          checkGuessMovie={checkGuessMovie}
          setCheckGuessMovie={setCheckGuessMovie}
          setScore={props.setScore}
          setAttempts={props.setAttempts}
          score={props.score}
          attempts={props.attempts}
          setShowMovieInfo={setShowMovieInfo}
        />
      </main>
  );
};

export default MainContent;
