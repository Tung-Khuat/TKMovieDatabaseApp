import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';

export default class MovieListDisplay extends Component {
  constructor() {
    super();

    // this.onInputChange = this.onInputChange.bind(this);
  }
  renderMovieListDisplay() {
    if (this.props.movieList.length < 1) {
      return <div>No results found.</div>;
    }
    return this.props.movieList.map(
      (movie, i) => (
        <div key={i} className="title-card" >
          <div className="boxart-container" >
            <img
              className="boxart-image"
              src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className="boxart-movie-info">{movie.title || movie.name || movie.original_name || 'N/A'}</div>
          </div>
        </div>
      ),
    );
  }
  render() {
    return (
      <div className="flexbox-container">
        {this.renderMovieListDisplay()}
      </div>
    );
  }
}

MovieListDisplay.PropTypes = {
  movieList: PropTypes.array.isRequired,
};
