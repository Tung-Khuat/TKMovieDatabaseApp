import { actionType } from './action-type';
import axios from 'axios';
import { endpoints } from './endpoints';
import { sendBasicGetRequest, checkFetchingState } from './web-service';

export const ROOT_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'b45ac1c17d69c3203bb70624ab561b2f';

function saveInputQuery(query) {
  return {
    type: actionType.SAVE_INPUT_QUERY,
    querySearched: query,
  };
}

function receiveMovieList(json) {
  return {
    type: actionType.RECEIVE_MOVIE_LIST,
    movieList: json.data.results,
    receiveAt: Date.now(),
  };
}

function receiveMovieInfo(json) {
  return {
    type: actionType.RECEIVE_MOVIE_INFO,
    movieInfo: json.data,
  };
}

export function fetchMovieDataWithQuery(query) {
  const url = endpoints.movieSearch(query);
  return (dispatch, getState) => {
    if (checkFetchingState(getState())) {
      dispatch(saveInputQuery(query));
      return dispatch(sendBasicGetRequest(url, receiveMovieList));
    }
  };
}

export function fetchMovieInfoById(id) {
  const url = endpoints.movieInfoById(id);
  return (dispatch, getState) => {
    if (checkFetchingState(getState())) {
      return dispatch(sendBasicGetRequest(url, receiveMovieInfo));
    }
  };
}
