import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LoadingIndicator from './loading-indicator';
import MovieCard from './movie-card';

export default class MovieSearchDisplay extends Component {
  renderMovieSearchDisplay() {
    if (this.props.movieList.length < 1) {
      return <div>No results found.</div>;
    }
    return this.props.movieList.map(
      (movie, i) => (
        <MovieCard movie={movie} index={i} />
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
