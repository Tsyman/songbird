import React from 'react';
import './Header.css';
import moviesCategories from '../../services/movieCategories';
import NavigationItem from './NavigationItem/NavigationItem';

const AppHeader = (props) => (

      <header>
        <div className="header-top">
          <h1>Guess The Movie!</h1>
          <p>Score: {props.score}</p>
        </div>
        <ul className="header-bottom">
          {
            moviesCategories.map((elem) => {
              if (elem === moviesCategories[props.currentLevel]) {
                return <NavigationItem categoryName={elem} key={elem} className={'nav-item active'}/>;
              }
              return <NavigationItem categoryName={elem} key={elem} className={'nav-item'}/>;
            })
          }
        </ul>
      </header>

);

export default AppHeader;
