import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredMovie: null,
    };
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  onMouseEnterHandler(hoveredMovieId) {
    this.setState({
      hoveredMovie: hoveredMovieId,
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hoveredMovie: null,
    });
  }
  render() {
    const { movie, index } = this.props;

    return (
      <Link to={`/movie/${movie.id}`} key={index} className="title-card" >
        <div className="boxart-container" onMouseEnter={() => { this.onMouseEnterHandler(movie.id); }} onMouseLeave={this.onMouseLeaveHandler}>
          <img
            className="boxart-image"
            src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          {
            this.state.hoveredMovie == movie.id &&
            <div className="boxart-movie-info">
              <h4 className="centered">{movie.title || movie.name || movie.original_name || 'N/A'}</h4>
              <div className="horizontal-line" />
              <p><i className="fas fa-star" /> {movie.vote_average > 0 ? movie.vote_average : ' - '}/10</p>
              <p>{movie.overview}</p>
            </div>
          }
          {
            this.state.hoveredMovie !== movie.id &&
            <div className="boxart-movie-title centered">{movie.title || movie.name || movie.original_name || 'N/A'}</div>
          }
        </div>
      </Link>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number,
};
