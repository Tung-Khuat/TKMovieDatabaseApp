import { actionType } from './action-type';
import axios from 'axios';
import { endpoints } from './endpoints';

export const ROOT_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'b45ac1c17d69c3203bb70624ab561b2f';


function requestMovieList() {
  return {
    type: actionType.REQUEST_MOVIE_LIST,
  };
}
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

function fetchMovieList(url, query) {
  return (dispatch) => {
    dispatch(requestMovieList());
    return axios.get(url)
      .then(response => dispatch(receiveMovieList(response)));
  };
}

function shouldFetchMovieList(state) {
  if (state.isFetching) {
    return false;
  }
  return true;
}

export function fetchMovieDataWithQuery(query) {
  const url = endpoints.multiSearch(query);
  return (dispatch, getState) => {
    if (shouldFetchMovieList(getState())) {
      dispatch(saveInputQuery(query));
      return dispatch(fetchMovieList(url));
    }
  };
}
