import React, { useState } from 'react';
import AppHeader from '../../Components/Header/Header';
import './App.css';
import MainContent from '../Main/Main';

const App = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5);

  return (
    <React.Fragment>
        <AppHeader score={score} currentLevel={currentLevel}/>
        <MainContent setScore={setScore} attempts={attempts} setAttempts={setAttempts}
        score={score} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}/>
    </React.Fragment>
  );
};

export default App;
