import { combineReducers } from 'redux'

const pokemon = (state = null, action) => state;

const error = (state = false, action) => state;

const textInput = (state = '', action) => state;

export default combineReducers({
  pokemon,
  error,
  textInput
});
