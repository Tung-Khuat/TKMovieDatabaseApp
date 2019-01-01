import { actionType } from '../actions/action-type';

const INITIAL_STATE = { searchedMovieList: [], popularMovieList: [], upcomingMovieList: [], topRatedMovieList: [], isFetching: false, querySearched: null, movieInfo: null };

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
    case actionType.RECEIVE_SEARCHED_MOVIE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        searchedMovieList: action.searchedMovieList,
        lastUpdated: action.receiveAt,
      });
    case actionType.RECEIVE_POPULAR_MOVIE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        popularMovieList: action.popularMovieList,
        lastUpdated: action.receiveAt,
      });
    case actionType.RECEIVE_UPCOMING_MOVIE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        upcomingMovieList: action.upcomingMovieList,
        lastUpdated: action.receiveAt,
      });
    case actionType.RECEIVE_TOP_RATED_MOVIE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        topRatedMovieList: action.topRatedMovieList,
        lastUpdated: action.receiveAt,
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
