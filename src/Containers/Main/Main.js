import React, { Component } from 'react';
import CurrentMovie from '../../Components/MainContent/CurrentMovie/CurrentMovie';
import MoviesList from '../../Components/MainContent/MoviesList/MoviesList';
import MovieDescription from '../../Components/MainContent/MovieDescription/MovieDescription';
import './Main.css';
import NextCategoryBtn from '../../Components/MainContent/NextCategoryBtn/NextCategoryBtn';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentLevel: 0,
    };
  }

  render() {
    return (
      <main className='main-content'>
        <CurrentMovie level={this.state.CurrentLevel} />
        <div className="container">
          <MoviesList/>
          <MovieDescription/>
        </div>
        <NextCategoryBtn/>
      </main>
    );
  }
}

export default MainContent;
