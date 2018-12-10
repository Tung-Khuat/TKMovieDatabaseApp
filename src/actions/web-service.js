import { actionType } from './action-type';
import axios from 'axios';

function startRequestFetching() {
  return {
    type: actionType.START_REQUEST_FETCHING,
  };
}

export function sendBasicGetRequest(url, receiveRequestFunction) {
  return (dispatch) => {
    dispatch(startRequestFetching());
    return axios.get(url)
      .then(response => dispatch(receiveRequestFunction(response)));
  };
}

export function checkFetchingState(state) {
  if (state.isFetching) {
    return false;
  }
  return true;
}
