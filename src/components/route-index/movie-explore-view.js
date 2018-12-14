import React, { Component } from 'react';
import {
  fetchMovieDataWithQuery,
  fetchMovieExploreFeeds,
} from '../../actions';
import { endpoints } from '../../actions/endpoints';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from '../search-bar';
import MovieSearchDisplay from '../movie-search-display';
import MovieExploreDisplay from '../movie-explore-display';

class MovieExploreView extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    // Load popular movies
    this.props.dispatch(fetchMovieExploreFeeds(endpoints.popularMoviesList()));
  }
  handleChange(input) {
    this.props.dispatch(fetchMovieDataWithQuery(input));
  }
  renderDisplay() {
    if (this.props.querySearched) {
      return <MovieSearchDisplay movieList={this.props.searchedMovieList} />;
    }
    return <MovieExploreDisplay movieList={this.props.popularMovieList} />;
  }
  render() {
    return (
      <div className="container">
        <SearchBar onChange={this.handleChange} />
        {this.renderDisplay()}
      </div>
    );
  }
}

MovieExploreView.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  searchedMovieList: PropTypes.array.isRequired,
  popularMovieList: PropTypes.array.isRequired,
  querySearched: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { searchedMovieList, popularMovieList, isFetching, querySearched } = state.moviesProvider;
  return {
    searchedMovieList,
    popularMovieList,
    isFetching,
    querySearched,
  };
}

export default connect(mapStateToProps)(MovieExploreView);
