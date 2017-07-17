import { combineReducers } from 'redux'

import { INPUT_CHANGE, SEND_POKE } from '../actions';

const textInput = (state = '', action) => {
  if(action.type === INPUT_CHANGE) {
    return action.payload
  }

  return state;
};

const pokemon = (state = null, action) => {

  // console.log(17, 'reducr', action)
  if(action.type === SEND_POKE) {
    // console.log(19, 'reducr', SEND_POKE, action.payload)
    return action.payload
  }

  return state;
};


export default combineReducers({
  textInput,
  pokemon
});
