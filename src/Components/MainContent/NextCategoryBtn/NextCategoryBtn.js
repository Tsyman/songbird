import React from 'react';
import './NextCategoryBtn.css';

const NextCategoryBtn = (props) => {
  const btn = props.checkGuessMovie ? 'Следующий уровень' : 'Выберите фильм';
  const button = props.currentLevel === 5 ? 'Закончить игру' : btn;
  const buttonName = props.gameEnd ? 'Начать заного' : button;

  return (
    <button
      className= {props.checkGuessMovie ? 'next-button_active' : 'next-button'}
      onClick={() => {
        if (props.gameEnd) {
          props.setCurrentLevel(0);
          props.setCheckGuessMovie(!props.checkGuessMovie);
          props.setScore(0);
          props.setAttempts(5);
          props.setShowMovieInfo(false);
          props.setGameEnd(!props.gameEnd);
          return;
        }
        if (props.currentLevel === 5) {
          props.setScore(props.score + props.attempts);
          props.setGameEnd(!props.gameEnd);
          return;
        }
        if (props.checkGuessMovie) {
          props.setCurrentLevel(props.currentLevel + 1);
          props.setCheckGuessMovie(!props.checkGuessMovie);
          props.setScore(props.score + props.attempts);
          props.setAttempts(5);
          props.setShowMovieInfo(false);
        }

        document.querySelectorAll('.movie').forEach((elem) => {
          elem.classList.remove('success', 'error');
        });
      }}
      >{buttonName}
    </button>
  );
};

export default NextCategoryBtn;
