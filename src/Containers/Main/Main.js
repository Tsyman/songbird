import React, { useState, useEffect } from 'react';
import GuessMovie from '../../Components/MainContent/GuessMovie/GuessMovie';
import MoviesList from '../../Components/MainContent/MoviesList/MoviesList';
import MovieDescription from '../../Components/MainContent/MovieDescription/MovieDescription';
import './Main.css';
import NextCategoryBtn from '../../Components/MainContent/NextCategoryBtn/NextCategoryBtn';
import moviesData from '../../services/moviesData';
import getRandomInt from '../../services/GetRandomInt';
import perfectly from '../../assets/images/perfectly.gif';
import notBad from '../../assets/images/not_bad.gif';
import good from '../../assets/images/good.gif';
import tryAgain from '../../assets/images/try_again.gif';

const endGameGif = (score) => {
  if (score === 30) {
    return perfectly;
  } if (score > 20 && score < 30) {
    return notBad;
  } if (score > 10 && score < 20) {
    return good;
  }
  return tryAgain;
};

const MainContent = (props) => {
  const [guessMovie, setMovie] = useState({});
  const [selectedMovie, setClickedMovie] = useState({});
  const [checkGuessMovie, setCheckGuessMovie] = useState(false);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    const randomMovie = () => (
      moviesData[props.currentLevel][getRandomInt(0, moviesData.length - 1)]
    );
    setMovie(randomMovie());
  }, [props.currentLevel]);

  return (
    !gameEnd
      ? <main className='main-content'>
        <GuessMovie
          guessMovie={guessMovie.movie}
          guessMovieAudio={guessMovie.audio}
          guessMovieImage={guessMovie.image}
          checkGuessMovie={checkGuessMovie}
        />
        <div className="main-content__inner">
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
          <div className='movie-description'>
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
                : <div className='hint'>
                    <p>Послушайте плеер.</p>
                    <p>Выберите фильм из списка</p>
                  </div>
            }
          </div>
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
          setGameEnd={setGameEnd}
          gameEnd={gameEnd}
        />
      </main>
      : <main className='main-content'>
          <img className='congratulation' src={endGameGif(props.score)} alt='End game gif'></img>
          <p className='game-end'>Игра закончена. Вы набрали {props.score} баллов из 30 возможных</p>
          <NextCategoryBtn
            setCurrentLevel={props.setCurrentLevel}
            currentLevel={props.currentLevel}
            checkGuessMovie={checkGuessMovie}
            setCheckGuessMovie={setCheckGuessMovie}
            setScore={props.setScore}
            setAttempts={props.setAttempts}
            setShowMovieInfo={setShowMovieInfo}
            setGameEnd={setGameEnd}
            gameEnd={gameEnd}
          />
        </main>
  );
};

export default MainContent;
