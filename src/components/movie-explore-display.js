import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class MovieExploreDisplay extends Component {
  renderMovieExploreDisplay() {
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
    return (
      <div className="flexbox-container">
        {this.renderMovieExploreDisplay()}
      </div>
    );
  }
}

MovieExploreDisplay.PropTypes = {
  movieSearch: PropTypes.array.isRequired,
};
