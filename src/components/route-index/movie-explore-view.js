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

    // Load upcoming movies
    this.props.dispatch(fetchMovieExploreFeeds(endpoints.upcomingMovieList()));

    // Load top rated movies
    this.props.dispatch(fetchMovieExploreFeeds(endpoints.topRatedMovieList()));
  }
  handleChange(input) {
    this.props.dispatch(fetchMovieDataWithQuery(input));
  }
  renderDisplay() {
    if (this.props.querySearched) {
      return <MovieSearchDisplay movieList={this.props.searchedMovieList} />;
    }
    return (
      <div>
        <h1>Popular Movies</h1>
        <MovieExploreDisplay movieList={this.props.popularMovieList} />
        <h1>Top Rated Movies</h1>
        <MovieExploreDisplay movieList={this.props.topRatedMovieList} />
        <h1>Upcoming Movies</h1>
        <MovieExploreDisplay movieList={this.props.upcomingMovieList} />
      </div>
    );
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
  upcomingMovieList: PropTypes.array.isRequired,
  topRatedMovieList: PropTypes.array.isRequired,
  querySearched: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { searchedMovieList, popularMovieList, upcomingMovieList, topRatedMovieList, isFetching, querySearched } = state.moviesProvider;
  return {
    searchedMovieList,
    popularMovieList,
    upcomingMovieList,
    topRatedMovieList,
    isFetching,
    querySearched,
  };
}

export default connect(mapStateToProps)(MovieExploreView);
