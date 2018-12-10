import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';

export default class MovieInfoDisplay extends Component {
  render() {
    return (
      <div className="movie-info-container">
        {this.props.movieInfo.original_title}
      </div>
    );
  }
}

MovieInfoDisplay.PropTypes = {
  movieInfo: PropTypes.array.isRequired,
};
