import React from 'react';
import './Header.css';
import moviesCategories from '../../services/movieCategories';
import NavigationItem from './NavigationItem/NavigationItem';

const AppHeader = (props) => (

      <header>
        <div className='header__inner'>
          <h1 className='title'>Guess Movie</h1>
          <h5 className='score'>Score: {props.score}</h5>
        </div>
        <ul className="navigation">
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
