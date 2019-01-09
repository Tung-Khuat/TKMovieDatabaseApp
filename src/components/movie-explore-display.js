import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel2';
import MovieCard from './movie-card';

const carouselOptions = {
  nav: false,
  rewind: true,
  autoplay: false,
  loop: true,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 480 up
    480: {
      items: 2,
    },
    // breakpoint from 768 up
    768: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

export default class MovieExploreDisplay extends Component {
  renderMovieExploreDisplay() {
    if (this.props.movieList.length < 1) {
      return <div>No results found.</div>;
    }
    return this.props.movieList.map(
      (movie, i) => (
        <MovieCard movie={movie} index={i} />
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
