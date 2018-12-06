import { ROOT_URL, API_KEY } from './index';

export const endpoints = {
  /*
  ---------Search---------
  */
  // Multi Search. Includes movies, tvshows and people in one request
  multiSearch(query) {
    return `${ROOT_URL}/search/multi?api_key=${API_KEY}&query=${query}`;
  },

};
