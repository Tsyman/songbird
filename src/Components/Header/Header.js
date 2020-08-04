import React from 'react';
import './Header.css';

const AppHeader = () => (

      <header>
        <div className="header-top">
          <h1>Guess The Movie!</h1>
          <p>Score: 11</p>
        </div>
        <ul className="header-bottom">
          <li>70-80</li>
          <li>80-90</li>
          <li>90-00</li>
          <li>00-10</li>
          <li>10-20</li>
          <li>рус</li>
        </ul>
      </header>

);

export default AppHeader;
