import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import OwlCarousel from 'react-owl-carousel2';

const carouselOptions = {
  items: 5,
  nav: false,
  rewind: true,
  autoplay: false,
  loop: true,
};

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
      <div className="carousel">
        <OwlCarousel ref={el => this.carousel = el} options={carouselOptions}>
          {this.renderMovieExploreDisplay()}
        </OwlCarousel>
        {
          this.props.movieList.length > 1 &&
          <div>
            <div className="carousel-nav" style={{ left: 0 }}>
              <i className="fa fa-chevron-left fa-lg pl-2" onClick={() => this.carousel.prev()} />
            </div>
            <div className="carousel-nav" style={{ right: 0 }}>
              <i className="fa fa-chevron-right fa-lg pl-2" onClick={() => this.carousel.next()} />
            </div>
          </div>
        }
      </div>
    );
  }
}

MovieExploreDisplay.PropTypes = {
  movieSearch: PropTypes.array.isRequired,
};
