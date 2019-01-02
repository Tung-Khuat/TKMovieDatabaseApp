import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LoadingIndicator from './loading-indicator';

export default class MovieSearchDisplay extends Component {
  renderMovieSearchDisplay() {
    if (this.props.movieList.length < 1) {
      return <div>No results found.</div>;
    }
    return this.props.movieList.map(
      (movie, i) => (
        <Link to={`/movie/${movie.id}`} key={i} className="title-card" >
          <div className="boxart-container" >
            <img
              className="boxart-image"
              src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className="boxart-movie-info">{movie.title || movie.name || movie.original_name || 'N/A'}</div>
          </div>
        </Link>
      ),
    );
  }
  render() {
    // Loading indicator if data is currently isFetching
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <div>
        <h3>Displaying titles related to: <em>"{this.props.querySearched}"</em></h3>
        <div className="flexbox-container">
          {this.renderMovieSearchDisplay()}
        </div>
      </div>
    );
  }
}

MovieSearchDisplay.PropTypes = {
  movieList: PropTypes.array.isRequired,
  querySearched: PropTypes.string,
};
