import React from 'react';
import './Header.css';

const AppHeader = () => (

      <header>
        <div className="header-top">
          <h1>Guess The Movie!</h1>
          <p>Score: 11</p>
        </div>
        <ul className="header-bottom">
          <li>Ру(1960-2000)</li>
          <li>1950-1980</li>
          <li>1980-1990</li>
          <li>1990-2000</li>
          <li>2000-2010</li>
          <li>2010-2020</li>
        </ul>
      </header>

);

export default AppHeader;
