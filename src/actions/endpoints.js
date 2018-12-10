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
  movieInfoById(movie_id) {
    return `${ROOT_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  },
};
