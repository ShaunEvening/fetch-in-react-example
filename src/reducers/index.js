import { combineReducers } from 'redux'

import { INPUT_CHANGE } from '../actions';

const textInput = (state = '', action) => {
  if(action.type === INPUT_CHANGE) {
    return action.payload
  }

  return state;
};

export default combineReducers({
  textInput
});
