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
    // Load trending movies
    this.props.dispatch(fetchMovieExploreFeeds(endpoints.trendingMovieList()));

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
  renderExploreCarousel(title, list) {
    if (list.length > 0) {
      return (
        <div>
          <h1>{title}</h1>
          <MovieExploreDisplay movieList={list} />
        </div>
      );
    }
  }
  renderDisplay() {
    if (this.props.querySearched) {
      return <MovieSearchDisplay movieList={this.props.searchedMovieList} querySearched={this.props.querySearched} />;
    }
    return (
      <div>
        {this.renderExploreCarousel('Trending', this.props.trendingMovieList)}
        {this.renderExploreCarousel('Popular Movies', this.props.popularMovieList)}
        {this.renderExploreCarousel('Top Rated Movies', this.props.topRatedMovieList)}
        {this.renderExploreCarousel('Upcoming Movies', this.props.upcomingMovieList)}
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <SearchBar onChange={this.handleChange} querySearched={this.props.querySearched} />
        {this.renderDisplay()}
      </div>
    );
  }
}

MovieExploreView.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  searchedMovieList: PropTypes.array.isRequired,
  trendingMovieList: PropTypes.array.isRequired,
  popularMovieList: PropTypes.array.isRequired,
  upcomingMovieList: PropTypes.array.isRequired,
  topRatedMovieList: PropTypes.array.isRequired,
  querySearched: PropTypes.string,
};

function mapStateToProps(state) {
  const { searchedMovieList, popularMovieList, trendingMovieList, upcomingMovieList, topRatedMovieList, isFetching, querySearched } = state.moviesProvider;
  return {
    searchedMovieList,
    trendingMovieList,
    popularMovieList,
    upcomingMovieList,
    topRatedMovieList,
    isFetching,
    querySearched,
  };
}

export default connect(mapStateToProps)(MovieExploreView);
