import { combineReducers } from 'redux';
import movieReducer from './reducer-movie';


const rootReducer = combineReducers({
  moviesProvider: movieReducer,
});


export default rootReducer;
