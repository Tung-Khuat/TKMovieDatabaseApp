import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';

export default class MovieInfoDisplay extends Component {
  render() {
    return (
      <div className="flexbox-container">
        {Hello}
      </div>
    );
  }
}

MovieInfoDisplay.PropTypes = {
  movieList: PropTypes.array.isRequired,
};
