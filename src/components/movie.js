import React from 'react';
import G from '../assets/G.svg';
import PG from '../assets/PG.svg';
import PG13 from '../assets/PG13.svg';
import R from '../assets/R.svg';

const Movie = props => {

  const {movie, favorite, handleClick, id} = props;
  console.log(movie);
  return (
    <div className="card" style={ {width: '100%'} }>
      <div className="row">
        {
          favorite ?
            <span
              style={ {float: 'right', fontSize: 36, color: 'green', cursor: 'pointer'} }
              onClick={ () => {
                console.log(`Remove from Favorites...star clicked:  ${id}`);
                handleClick(id);
              }}
            >&#9733;</span>
          :
            <span
              style={ {float: 'right', fontSize: 36, color: 'green', cursor: 'pointer'} }
              onClick={ () => {
                console.log("Adding to Favorites...star clicked");
                handleClick(movie);
              }}
            >&#9734;</span>
        }
        <h2 style={ {textAlign: 'center', fontWeight: '700'} }>{movie.Title}</h2>

        <div className="columns small-12 medium-8">
          <h4>Movie Details</h4>
          <ul style={ {listStyle: 'none'} }>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Year:</span> {movie.Year}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Runtime:</span> {movie.Runtime}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Released:</span> {movie.Released}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>DVD:</span> {movie.DVD}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Actors:</span> {movie.Actors}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Genre:</span> {movie.Genre}</li>
            <li><span style={ {fontWeight: 800, marginRight: 15} }>Plot:</span><br/>{movie.Plot}</li>
          </ul>
          <p className="text-center">
            {movie.Rated === 'R' && <img src={R} alt="Rated R" />}
            {movie.Rated === 'PG-13' && <img src={PG13} alt="Rated R" />}
            {movie.Rated === 'PG' && <img src={PG} alt="Rated R" />}
            {movie.Rated === 'G' && <img src={G} alt="Rated R" />}
          </p>

        </div>
        <div className="columns small-12 medium-4">
          <img src={movie.Poster} alt={`${movie.Title}'s Poster`} title={movie.Title} />
        </div>

      </div>
    </div>
  );
}

export default Movie;