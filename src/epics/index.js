import { combineEpics } from 'redux-observable';
import { GET_POKE, sendPoke } from '../actions';
import { fetchPokemon } from '../api/pokemon';

//grab ... handle async... when get result from async disaptch action.

const pokemonEpic = action$ => action$.ofType(GET_POKE)
.mergeMap(action => fetchPokemon(action.payload))
.map(res=> sendPoke(res));

export default combineEpics(
  pokemonEpic
)
