import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

const OMDb_API_KEY = "22533f72";
const OMDb_API_URL = `http://www.omdbapi.com/?apikey=${OMDb_API_KEY}`;
const FAVORITE_MOVIE_API = "http://5a85f5e3085fdd0012704315.mockapi.io/api/vi/movies";

export const CustomNav = ( {label, to, activeOnlyWhenExact, generalClassName} ) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={ ({match}) => {
        return (
        <li className={`${generalClassName}${match ? ' active' : ''}`}>
          <Link to={to} style={ {fontWeight: 'normal'} }>{label}</Link>
        </li>
        )}
      } />
    );
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getMovies = (movie, year = "") => {
  const url = `${OMDb_API_URL}&t=${movie}&y=${year}`;
  console.log(`Requesting movie information for: ${movie} from ${url}`);
  return axios.get(url);
}

export const addFavorite = movie => {
  return axios.post( FAVORITE_MOVIE_API, movie )
}

export const getFavorites = () => axios.get(FAVORITE_MOVIE_API);

export const removeFavorite = id => axios.delete(`${FAVORITE_MOVIE_API}/${id}`);