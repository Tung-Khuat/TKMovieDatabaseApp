import { ROOT_URL, API_KEY } from './index';

export const endpoints = {
  /*
  ---------Search---------
  */

  // Multi Search. Includes movies, tvshows and people in one request
  multiSearch(query) {
    return `${ROOT_URL}/search/multi?api_key=${API_KEY}&query=${query}`;
  },

  // Movie Search with query
  movieSearch(query) {
    return `${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  },

  /*
  ---------Movies---------
  */
  // Get movies information with an ID
  movieInfoById(movie_id) {
    return `${ROOT_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  },

  // List of popular movies
  popularMoviesList() {
    return `${ROOT_URL}/movie/popular?api_key=${API_KEY}`;
  },

  // List of popular movies
  topRatedMovieList() {
    return `${ROOT_URL}/movie/top_rated?api_key=${API_KEY}`;
  },

  // List of upcoming movies
  upcomingMovieList() {
    return `${ROOT_URL}/movie/upcoming?api_key=${API_KEY}`;
  },

  // List of trending movies this week ( /trending/{media_type}/{time_window} )
  trendingMovieList() {
    return `${ROOT_URL}/trending/movie/week?api_key=${API_KEY}`;
  },
};
