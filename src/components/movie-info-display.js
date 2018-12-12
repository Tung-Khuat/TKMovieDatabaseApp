import React, { Component } from 'react';
import { fetchMovieDataWithQuery } from '../actions/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import LoadingIndicator from './loading-indicator';

export default class MovieInfoDisplay extends Component {
  render() {
    const movie = this.props.movieInfo;

    // Loading indicator if data is currently isFetching
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    // render movie info display
    return (
      <div className="movie-info-container">
        <div className="movie-info-page-background" style={movie.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` } : null} />
        <div className="return-link">
          <Link to={'/'} >
            <h2> Return to browse </h2>
          </Link>
        </div>
        <div className="movie-info-card row">
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            <img
              className="movie-info-poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </div>
          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h1>{movie.title || movie.name || movie.original_name} {movie.release_date && `(${movie.release_date.slice(0, 4)})` }</h1>
            <h4><em>{movie.tagline}</em></h4>
            <div className="movie-overview">{movie.overview}</div>
            <div className="row nomargin">
              <div className="highlight-text-size highlight-text-color">
                {
                  movie.genres &&
                movie.genres.map((genre, index) => <span key={index}>{(index ? ', ' : '') + genre.name}</span>)
                }
              </div>
              {
                movie.production_companies &&
                movie.production_companies.map((company, index) => <span key={index}>{(index ? ', ' : '') + company.name}</span>)
              }
            </div>
            <div className="row nomargin">
              <div className="nopadding col-xs-12 col-sm-6">
                <h4>Release date</h4>
                <div className="highlight-text-size highlight-text-color">{movie.release_date}</div>
              </div>
              <div className="nopadding col-xs-12 col-sm-6">
                <h4>Run Time</h4>
                <div className="highlight-text-size highlight-text-color">{movie.runtime} min</div>
              </div>
            </div>
            <div className="row nomargin">
              <div className="nopadding col-xs-12 col-sm-6">
                <h4>Revenue</h4>
                <div className="highlight-text-size highlight-text-color">{movie.revenue > 0 ? `$${movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}` : '-'}</div>
              </div>
              <div className="nopadding col-xs-12 col-sm-6">
                <h4>Score</h4>
                <div className="highlight-text-size highlight-text-color">{movie.vote_average > 0 ? movie.vote_average : '-'}/10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieInfoDisplay.PropTypes = {
  movieInfo: PropTypes.array.isRequired,
};
