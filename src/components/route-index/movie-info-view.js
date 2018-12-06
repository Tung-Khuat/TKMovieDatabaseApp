import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../../actions/index';
import PropTypes from 'prop-types';

export default class MovieInfoView extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="flexbox-container">
        {this.props.params.id}
      </div>
    );
  }
}

MovieInfoView.PropTypes = {
  movieList: PropTypes.array.isRequired,
};
