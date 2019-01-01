import React, { Component } from 'react';
import { fetchMovieInfoById } from '../../actions/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieInfoDisplay from '../movie-info-display';

class MovieInfoView extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMovieInfoById(this.props.params.id));
  }
  render() {
    return (
      <div>
        {
          this.props.movieInfo &&
          <MovieInfoDisplay movieInfo={this.props.movieInfo} isFetching={this.props.isFetching} />
        }
      </div>
    );
  }
}

MovieInfoView.PropTypes = {
  movieInfo: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { movieInfo, isFetching } = state.moviesProvider;
  return {
    movieInfo,
    isFetching,
  };
}

export default connect(mapStateToProps)(MovieInfoView);
