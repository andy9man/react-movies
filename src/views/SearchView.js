import React, { Component } from 'react';
import { getMovies, addFavorite, getFavorites } from '../components/helper';
import Movie from '../components/movie';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
      favoriteMovies: [],
      error: false,
      searchText: "Are you feeling lucky... well are you?",
      favorite: false,
    }
  }

  searchForMovie = movieTitle => {
    const results = getMovies(movieTitle);
    results
      .then( ({data}) => {
        const favorite = this.state.favoriteMovies.filter( movie => data.imdbID === movie.movie.imdbID).length > 0;
        console.log(`FAVORITE MOVIE .... ${favorite}`)
        this.setState({ input: '', movie: data, error: false, favorite: favorite, searchText: "Nice choice, how about another?"})
      })
      .catch( response => {
        this.setState( {error: true} );
        console.log(response);
      })
  }

  getFavoriteMovies = () => {
    const results = getFavorites();

    results
      .then( ({data}) => {
        this.setState({ favoriteMovies: data });
      })
  }

  addFavoriteMovie = movie => {
    const result = addFavorite( {movie} );
    console.log(`Adding ${movie.Title} to Favorits...`);
    result
      .then( ({data}) => {
        console.log(`...adding ${movie.Title} to Favorites Successful`);
        this.getFavoriteMovies();
        this.setState({favorite: true});
      })
      .catch( response => {
        console.log(response);
      })
  }

  componentDidMount() {
    //this.movieInput.focus();
    this.getFavoriteMovies();
  }

  render() {
    const {movie, input, searchText, error, favoriteMovies, favorite} = this.state;
    const pageAlign = (movie === undefined) ? 'center' : 'top';
    console.log("Current Movie...");
    console.log(movie);
    console.log("Current Favorite Movies...");
    console.log(favoriteMovies);
    return (
      <div style={ {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center'
      } }>
        <div className="row">
          <div className="columns small-12 medium-10 large-10 xlarge-8 medium-centered">

            <form onSubmit={ (e) => {
              e.preventDefault();
              this.searchForMovie(input);
            }}>
              <div className="row">
                <div className="columns small-12 medium-9 large-8 text-right">
                  <div className="md-text-field with-floating-label">
                    <input
                      id="movie"
                      name="input"
                      type="text"
                      value={input}
                      className={error ? 'has-error' : ''}
                      onChange={(e) => this.setState({[e.target.name]: e.target.value}) }
                      required
                    />
                    <label htmlFor="movie">{searchText}</label>
                  </div>
                </div>

                <div className="columns small-12 medium-2 large-1 medium-uncentered margin-horiz-small">
                  <button>Search</button>
                </div>
              </div>
            </form>

          </div>
        </div>

        {/* MOVIE RESULTS!! */}
        {
          movie !== undefined &&

          <Movie movie={movie} favorite={favorite} handleClick={this.addFavoriteMovie} />

        }

      </div>
    );
  }
}

export default SearchView;