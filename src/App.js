import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SearchView from './views/SearchView';
import FavoritesView from './views/FavoritesView';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App padding-vert-xlarge padding-horiz-xlarge" style={ {display: 'flex', flexDirection: 'column'} }>
        <div className="row">
          <div className="columns small-12 medium-8">
            <h1>React Movies</h1>
          </div>
          <div className="columns small-12 medium-4"><Nav /></div>
        </div>
          <div className="padding-bottom-large padding-horiz-large" style={ {flex: '2'} }>
            <Switch>
              <Route exact path="/" component={SearchView} />
              <Route exact path="/favorites" component={FavoritesView} />
              {/* <Route exact path="/:movie" component={MovieDetailView} /> */}
              <Route render={ () => ( <Redirect to="/" />) } />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
