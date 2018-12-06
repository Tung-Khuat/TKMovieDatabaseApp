import React, { Component } from 'react';
import {
  fetchMovieDataWithQuery,
} from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from '../search-bar';
import MovieListDisplay from '../movie-list-display';

class MovieSearchView extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(input) {
    this.props.dispatch(fetchMovieDataWithQuery(input));
  }
  render() {
    return (
      <div>
        <SearchBar onChange={this.handleChange} />
        <MovieListDisplay movieList={this.props.movieList} />
      </div>
    );
  }
}

MovieSearchView.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { movieList, isFetching } = state.moviesProvider;
  return {
    movieList,
    isFetching,
  };
}

export default connect(mapStateToProps)(MovieSearchView);
