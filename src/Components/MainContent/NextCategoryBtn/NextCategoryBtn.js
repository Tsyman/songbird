import React from 'react';
import './NextCategoryBtn.css';

const NextCategoryBtn = (props) => (
  <button
    className="next-button"
    onClick={() => {
      if (props.checkGuessMovie) {
        props.setCurrentLevel(props.currentLevel + 1);
        props.setCheckGuessMovie(!props.checkGuessMovie);
        props.setScore(props.score + props.attempts);
        props.setAttempts(5);
      }
    }}
    >Next
  </button>
);

export default NextCategoryBtn;
