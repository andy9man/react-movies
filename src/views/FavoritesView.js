import React, { Component } from 'react';
import { getFavorites, removeFavorite } from '../components/helper';
import Movie from '../components/movie';

class FavoritesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
    }
  }

  getFavoriteMovies = () => {
    const results = getFavorites();

    results
      .then( ({data}) => {
        this.setState({ favorites: data });
      })
  }

  removeFavoriteMovie = id => {
    const result = removeFavorite(id);

    result
      .then( response => {
        this.getFavoriteMovies();
      })
  }

  componentDidMount() {
    this.getFavoriteMovies();
  }

  render() {
    const {favorites} = this.state;
    return (
      <div>
        {
          favorites.length > 0 ?
            favorites.map( movie => (
              <Movie key={movie.id} movie={movie.movie} id={movie.id} favorite={true} handleClick={this.removeFavoriteMovie} />
            ))
          :
            <h3><em>No favorites yet...</em></h3>
        }
      </div>
    );
  }
}

export default FavoritesView;