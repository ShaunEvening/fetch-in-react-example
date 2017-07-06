const action = (type, payload = {}) => ({
  type,
  payload
})

export const SET_POKEMON = 'SET_POKEMON';

export const setPokemon = pokemon => action(SET_POKEMON, pokemon)
