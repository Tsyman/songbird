import React from 'react';
import './NextCategoryBtn.css';

const NextCategoryBtn = (props) => (
  <button
    className="next-button"
    onClick={() => {
      props.setLevel(props.currentLevel + 1);
    }}
    >Next
  </button>
);

export default NextCategoryBtn;
