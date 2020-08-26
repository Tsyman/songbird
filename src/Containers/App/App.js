import React, { useState } from 'react';
import AppHeader from '../../Components/Header/Header';
import './App.css';
import MainContent from '../Main/Main';

const App = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5);

  return (
    <React.Fragment>
        <AppHeader score={score}/>
        <MainContent setScore={setScore} attempts={attempts} setAttempts={setAttempts}
        score={score}/>
    </React.Fragment>
  );
};

export default App;
