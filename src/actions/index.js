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

function receiveSearchedMovieList(json) {
  return {
    type: actionType.RECEIVE_SEARCHED_MOVIE_LIST,
    searchedMovieList: json.data.results,
    receiveAt: Date.now(),
  };
}

function receivePopularMovieList(json) {
  return {
    type: actionType.RECEIVE_POPULAR_MOVIE_LIST,
    popularMovieList: json.data.results,
    receiveAt: Date.now(),
  };
}
function receiveUpcomingMovieList(json) {
  return {
    type: actionType.RECEIVE_UPCOMING_MOVIE_LIST,
    upcomingMovieList: json.data.results,
    receiveAt: Date.now(),
  };
}
function receiveTopRatedMovieList(json) {
  return {
    type: actionType.RECEIVE_TOP_RATED_MOVIE_LIST,
    topRatedMovieList: json.data.results,
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
      return dispatch(sendBasicGetRequest(url, receiveSearchedMovieList));
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

export function fetchMovieExploreFeeds(url) {
  let recieveFeedFunction = null;
  switch (url) {
    case endpoints.popularMoviesList():
      recieveFeedFunction = receivePopularMovieList;
      break;
    case endpoints.upcomingMovieList():
      recieveFeedFunction = receiveUpcomingMovieList;
      break;
    case endpoints.topRatedMovieList():
      recieveFeedFunction = receiveTopRatedMovieList;
      break;
    default:
  }
  return (dispatch, getState) => {
    if (checkFetchingState(getState())) {
      return dispatch(sendBasicGetRequest(url, recieveFeedFunction));
    }
  };
}
