import { actionType } from '../actions/action-type';

const INITIAL_STATE = { movieList: [], isFetching: false, querySearched: null, movieInfo: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.START_REQUEST_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case actionType.SAVE_INPUT_QUERY:
      return Object.assign({}, state, {
        querySearched: action.querySearched,
      });
    case actionType.RECEIVE_MOVIE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        movieList: action.movieList,
        lastUpdated: action.receiveAt,
        querySearched: action.querySearched,
      });
    case actionType.RECEIVE_MOVIE_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        movieInfo: action.movieInfo,
      });
    default:
      return state;
  }
}
