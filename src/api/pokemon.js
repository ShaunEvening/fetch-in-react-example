export const fetchPokemon = id =>
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
